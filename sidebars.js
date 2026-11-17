/**
 * Sidebar for the AStA website guide.
 *
 * Order follows the way an editor works: sign in, write a post, edit a page,
 * translate, then the adjacent topics (menu, media, events, database,
 * accessibility) and finally the checks to run before publishing.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'home',
      label: 'Start',
    },
    {
      type: 'doc',
      id: 'warum-website',
      label: 'Warum Website?',
    },
    {
      type: 'doc',
      id: 'anmelden',
      label: 'Accounts und Passwörter',
    },
    'beitraege-erstellen',
    {
      type: 'category',
      label: 'Seiten bearbeiten',
      items: [
        {
          type: 'doc',
          id: 'Seiten bearbeiten/seiten-aufbau',
          label: 'Seitenaufbau und Layout',
        },
        'Seiten bearbeiten/seiten-erstellen',
        'Seiten bearbeiten/seiten-bearbeiten',
        {
          type: 'doc',
          id: 'Seiten bearbeiten/bausteine',
          label: 'Bausteine (Vorlagen)',
        },
        {
          type: 'doc',
          id: 'Seiten bearbeiten/weitere-bloecke',
          label: 'Einfügen weiterer Blöcke',
        },
      ],
    },
    {
      type: 'doc',
      id: 'uebersetzungen-bearbeiten',
      label: 'Übersetzungen bearbeiten',
    },
    {
      type: 'doc',
      id: 'menue-und-megamenue',
      label: 'Menü und Mega-Menü',
    },
    {
      type: 'doc',
      id: 'galerie',
      label: 'Galerie',
    },
    {
      type: 'doc',
      id: 'kalender',
      label: 'Veranstaltungen',
    },
    {
      type: 'doc',
      id: 'beschlussdatenbank',
      label: 'StuPa Beschlussdatenbank',
    },
    {
      type: 'category',
      label: 'Bettenbörse',
      items: [
        {
          type: 'doc',
          id: 'bettenboerse/verwaltung',
          label: 'Betrieb und Vermittlung',
        },
      ],
    },
    {
      type: 'category',
      label: 'Barrierefreiheit',
      items: [
        {
          type: 'doc',
          id: 'barrierefreiheit/bilder-alt-texte',
          label: 'Bildbeschreibungen (Alternativtexte)',
        },
        {
          type: 'doc',
          id: 'barrierefreiheit/linktexte-und-kontrast',
          label: 'Linktexte und Kontrast',
        },
      ],
    },
    {
      type: 'doc',
      id: 'semesterticket-rueckerstattung',
      label: 'Semesterticket-Erstattung',
    },
    {
      type: 'doc',
      id: 'checkliste',
      label: 'Checkliste vor dem Veröffentlichen',
    },
    {
      type: 'doc',
      id: 'hintergrund',
      label: 'Was die Redaktion nicht sieht',
    },
  ],
};

module.exports = sidebars;
