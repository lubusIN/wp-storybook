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

// Automatically import all stories
configure(
    [
        require.context('../stories', true, /\.stories\.mdx$/),
        require.context('../stories', true, /\.stories\.js$/),
    ],
    module
);
