/**
 * Storybook dependencies
 */
import { create } from '@storybook/theming';

/**
 * Theme Settings
 */
const fontBase = [
  '"Nunito Sans"',
  '-apple-system',
  '".SFNSText-Regular"',
  '"San Francisco"',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  '"Helvetica Neue"',
  'Helvetica',
  'Arial',
  'sans-serif',
];

const fontCode =  [
  '"Operator Mono"',
  '"Fira Code Retina"',
  '"Fira Code"',
  '"FiraCode-Retina"',
  '"Andale Mono"',
  '"Lucida Console"',
  'Consolas',
  'Monaco',
  'monospace',
];

export default create({
  base: 'light',

  // Storybook-specific color palette
  colorPrimary: '#FF4785',
  colorSecondary: '#1EA7FD',

  // UI
  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,

  // Fonts
  fontBase: fontBase.join(', '),
  fontCode: fontCode.join(', '),

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#1EA7FD',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.1)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  // Brand
  brandTitle: 'WordPress',
  brandUrl: 'https://github.com/wordpress/gutenberg/',
  brandImage: '',
});