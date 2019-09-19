/**
 * Storybook dependencies, addons and configurations
 */
import { configure, addParameters } from '@storybook/react';
import { options } from './options';


/**
 * WordPress Components Style
 */
import "@wordpress/components/build-style/style.css";

/**
 * Configuration
 */
addParameters({ options });

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
