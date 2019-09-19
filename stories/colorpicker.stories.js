/**
 * External Dependencies
 */
import React, {useState} from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { ColorPicker } from '@wordpress/components';
import ColorPickerReadme from '@wordpress/components/src/color-picker/README.md';

/**
 * Stories
 */
export default {
  title: 'Components|ColorPicker',
  decorators: [withReadme(ColorPickerReadme)],
};

export const basic = () => {
  const [color, setColor] = useState( '#f00' );

  return <ColorPicker color={color} onChangeComplete={value => setColor(value.hex)} />;
};

export const disableAlpha = () => {
  const [color, setColor] = useState( '#f00' );

  return <ColorPicker color={color} onChangeComplete={value => setColor(value.hex)} disableAlpha />;
};