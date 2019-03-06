import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import centered from '@storybook/addon-centered/react';
import { withViewport } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import GithubCorner from 'react-github-corner';

import "./style.css";
import "@wordpress/components/build-style/style.css";

addDecorator((storyFn, context) => withConsole()(storyFn)(context)); // Send console log to action logger
addDecorator(centered); // Center align stories
addParameters(withViewport()); // Device viewport
addDecorator(withA11y); // Accessibility

// Add Github repo link corner 
addDecorator((storyFn) =>
  <div>
    {storyFn()}
    <GithubCorner href="https://github.com/lubusIN/wp-storybook" />
  </div>
);

// Options
// Option defaults:
addParameters({
    options: {
      /**
       * name to display in the top left corner
       * @type {String}
       */
      name: 'WordPress',
      /**
       * URL for name in top left corner to link to
       * @type {String}
       */
      url: 'https://github.com/WordPress/gutenberg/',
      /**
       * show story component as full screen
       * @type {Boolean}
       */
      goFullScreen: false,
      /**
       * display panel that shows a list of stories
       * @type {Boolean}
       */
      showStoriesPanel: true,
      /**
       * display panel that shows addon configurations
       * @type {Boolean}
       */
      showAddonPanel: true,
      /**
       * display floating search box to search through stories
       * @type {Boolean}
       */
      showSearchBox: false,
      /**
       * show addon panel as a vertical panel on the right
       * @type {Boolean}
       */
      addonPanelInRight: true,
      /**
       * sorts stories
       * @type {Boolean}
       */
      sortStoriesByKind: false,
      /**
       * regex for finding the hierarchy separator
       * @example:
       *   null - turn off hierarchy
       *   /\// - split by `/`
       *   /\./ - split by `.`
       *   /\/|\./ - split by `/` or `.`
       * @type {Regex}
       */
      hierarchySeparator: /\/|\./,
      /**
       * regex for finding the hierarchy root separator
       * @example:
       *   null - turn off multiple hierarchy roots
       *   /\|/ - split by `|`
       * @type {Regex}
       */
      hierarchyRootSeparator: /\|/,
      /**
       * sidebar tree animations
       * @type {Boolean}
       */
      sidebarAnimations: true,
      /**
       * id to select an addon panel
       * @type {String}
       */
      selectedPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
      /**
       * enable/disable shortcuts
       * @type {Boolean}
       */
      enableShortcuts: true, // true by default
    },
  });

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
