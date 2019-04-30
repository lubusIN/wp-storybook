/**
 * External
 */
import React from 'react';
import GithubCorner from 'react-github-corner';

/**
 * Storybook Core and Addons
 */
import { addDecorator, addParameters, configure } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withViewport } from '@storybook/addon-viewport';
import { withConsole } from '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';

/**
 * Community Addons
 */


/**
 * WordPress Component Styles
 */
import "@wordpress/components/build-style/style.css";

/**
 * Global Addon Config
 */
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

/**
 * Storybook Config
 */
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
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'right',
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
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
    /**
     * theme storybook, see link below
     */
    theme: undefined,
  },
});

/**
 * Automatically import all files ending in *.stories.js
 */
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
