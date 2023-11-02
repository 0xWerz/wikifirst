import type { Manifest } from 'webextension-polyfill';
import pkg from '../package.json';

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: pkg.displayName,
  version: pkg.version,
  description: pkg.description,
  // background: {
  //   service_worker: 'src/pages/background/index.js',
  //   type: 'module',
  // },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'favicon-32x32.png',
  },
  icons: {
    '128': 'wikifirst.png',
  },
  permissions: ["activeTab", "storage"],
  content_scripts: [
    {
      matches: ['https://www.google.com/search?q=*'],
      js: ['src/pages/content/index.js'],
      css: ['contentStyle.css'],
      run_at: 'document_start',
    },
  ],
  devtools_page: 'src/pages/devtools/index.html',
  web_accessible_resources: [
    {
      resources: ['contentStyle.css', 'wikifirst.png', 'icon-34.png'],
      matches: [],
    },
  ],
};

export default manifest;
