import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import type { MDXComponents } from 'mdx/types';

import { ComponentPreview } from '@/components/component-preview';
import { ComponentSource } from '@/components/component-source';
import { ColorPalette } from '@/components/color-showcase';
import { DocsFigure, DocsPre } from '@/components/docs-code-frame';
import { DocsH2, DocsH3 } from '@/components/docs-heading';
import { DocsLink, DocsOl, DocsP, DocsUl } from '@/components/docs-prose';
import { Tab, Tabs } from '@/components/docs-tabs';
import {
  TypographySample,
  TypographySection,
} from '@/components/typography-showcase';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    pre: DocsPre,
    figure: DocsFigure,
    h2: DocsH2,
    h3: DocsH3,
    p: DocsP,
    ul: DocsUl,
    ol: DocsOl,
    a: DocsLink,
    Tabs,
    Tab,
    Step,
    Steps,
    ComponentPreview,
    ComponentSource,
    ColorPalette,
    TypographySample,
    TypographySection,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
