// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AStA Guide',
  tagline: 'Website-Guide für asta-lueneburg.de',
  url: 'https://guide.asta-lueneburg.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'asta-luneburg', // Usually your GitHub org/user name.
  projectName: 'asta-guide', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/asta-luneburg/asta-guide/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
          },
          // Please change this to your repo.
          editUrl:
            'https://github.com/asta-luneburg/asta-guide/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'robots', content: 'noindex'}],
      navbar: {
        title: '',
        logo: {
          alt: 'AStA Logo',
          src: 'img/logo-white.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: 'Anleitungen',
          },
          { to: 'blog', label: 'Dev Log', position: 'left' },
          {
            href: 'https://asta-lueneburg.de',
            label: 'AStA Homepage',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'AStA Logo',
          src: 'img/logo-white.png',
          href: 'https://asta-lueneburg.de',
        },
        links: [
          {
            title: 'AStA Services',
            items: [
              {
                label: 'Webmailer',
                href: 'https://webmail.all-inkl.com/',
              },
            ],
          },
          {
            title: 'AStA Lüneburg',
            items: [
              {
                label: 'Homepage',
                href: 'https://asta-lueneburg.de',
              },
              {
                label: 'Homepage Login',
                href: 'https://asta-lueneburg.de/login',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/asta-luneburg/asta-guide',
              },
            ],
          },
        ],
        copyright: `Betrieben durch den Allgemeinen Student*innenausschuss der Universität Lüneburg.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
