import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'de-DE',
  title: 'JavaScript Docs',
  description: 'Learn JavaScript a Lean Way',

  themeConfig: {
    logo: '/images/logo.png',

    navbar: [
      {
        text: 'Advanced',
        children: [
          {
            text: 'OOP',
            children: [
              {
                text: 'Einführung',
                link: '/advanced/oop/',
                activeMatch: '^/$',
              },
              '/advanced/oop/literal-objects.md',
              '/advanced/oop/the-prototype.md',
              '/advanced/oop/the-constructor.md',
              '/advanced/oop/inheritance.md',
              '/advanced/oop/es-next.md',
            ],
          },
        ],
      },
    ],
    sidebar: {
      '/advanced/oop/': [
        {
          text: 'OOP',
          link: '/advanced/oop/',
          children: [
            '/advanced/oop/literal-objects.md',
            '/advanced/oop/the-prototype.md',
            '/advanced/oop/the-constructor.md',
            '/advanced/oop/inheritance.md',
            '/advanced/oop/es-next.md',
          ],
        },
      ],
    },
  },
});
