import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'de-DE',
  title: 'JavaScript Docs',
  description: 'Learn JavaScript a Lean Way',

  themeConfig: {
    logo: '/images/logo.png',

    repo: 'lean-js/docs',
    docsDir: 'docs',

    navbar: [
      {
        text: 'Basics',
        children: [
          {
            text: 'Einführung',
            link: '/basics/',
            activeMatch: '^/$',
          },
          '/basics/types.md'
        ]
      },
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
      '/basics/': [
        {
          text: 'Basics',
          children: [
            '/basics/README.md',
            '/basics/types.md',
          ],
        },
      ],
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
