import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';

import { ComponentPreview } from '@/components/component-preview';
import { ComponentSource } from '@/components/component-source';
import { ColorPalette } from '@/components/demos/color-showcase';
import {
  TypographySample,
  TypographySection,
} from '@/components/demos/typography-showcase';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
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
