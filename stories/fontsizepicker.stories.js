/**
 * External Dependencies
 */
import React, {useState} from 'react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { FontSizePicker } from '@wordpress/components';
import FontSizePickerReadme from '@wordpress/components/src/font-size-picker/README.md';

/**
 * Stories
 */
export default {
  title: 'Components|FontSizePicker',
  decorators: [withReadme(FontSizePickerReadme)],
};

export const basic =() => {
  const [fontSize, setFontSize] = useState( 26 );
  const fontSizes = [
    {
      name: 'Small',
      slug: 'small',
      size: 12,
    },
    {
      name: 'Big',
      slug: 'big',
      size: 26,
    },
  ];
  const fallbackFontSize = 16;

  return (
    <FontSizePicker
      fontSizes={fontSizes}
      value={fontSize}
      fallbackFontSize={fallbackFontSize}
      onChange={fontSize => {
        setFontSize( fontSize );
      }}
    />
  );
};