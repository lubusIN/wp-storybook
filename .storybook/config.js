import { configure } from '@storybook/react';

/**
 * WordPress Component Styles
 */
import "@wordpress/components/build-style/style.css";

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
