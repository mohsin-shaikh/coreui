import { getPageImageUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsPage,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound, redirect } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { DocsBreadcrumb } from '@/components/docs-breadcrumb';
import {
  DocsDashedSeparator,
  DocsPageLinks,
} from '@/components/docs-page-header';
import { DocsLink } from '@/components/docs-prose';
import { docsPageLinks } from '@/lib/docs-page-links';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';

const defaultDocsPath = '/docs/v0.1/introduction';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  if (!params.slug?.length) redirect(defaultDocsPath);

  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const links = docsPageLinks[page.url] ?? [];

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      // Fumadocs defaults to gap-4 between every child.
      className="text-ln-docs-sm gap-0"
      slots={{ breadcrumb: DocsBreadcrumb }}
      footer={{ className: 'mt-10 md:mt-12' }}
    >
      <h1 className="text-ln-title-h4 mb-2 text-ln-gray-900">
        {page.data.title}
      </h1>
      {page.data.description ? (
        <p className="text-ln-paragraph-md md:text-ln-paragraph-lg mb-0 text-ln-gray-600">
          {page.data.description}
        </p>
      ) : null}
      <DocsPageLinks links={links} />
      <DocsDashedSeparator />
      <DocsBody className="pt-0 md:pt-5">
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page, DocsLink),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return [{ slug: [] }, ...source.generateParams()];
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  if (!params.slug?.length) return {};

  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImageUrl(page).url,
    },
  };
}
