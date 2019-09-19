/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { ColorPalette } from '@wordpress/components';
import ColorPaletteReadme from '@wordpress/components/src/color-palette/README.md';

/**
 * Stories
 */
export default {
  title: 'Components|ColorPalette',
  decorators: [withReadme(ColorPaletteReadme)],
};

export const basic = () => {

  const colors = [
    { name: 'red', color: '#f00' },
    { name: 'white', color: '#fff' },
    { name: 'blue', color: '#00f' },
  ];

  const [color, setColor] = useState( '#f00' );

  return <ColorPalette colors={colors} value={color} onChange={color => setColor( color )} />;
};