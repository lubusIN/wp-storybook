import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { FontSizePicker } from '@wordpress/components';
import FontSizePickerReadme from '@wordpress/components/src/font-size-picker/README.md'

const FontSizePickerStyles = {
  width: '240px',
  margin: 'auto',
  marginTop: '10%',
};

const FontSizePickerDecorator = (storyFn) => (
  <div style={FontSizePickerStyles}>
    { storyFn() }
  </div>
);

storiesOf('FontSizePicker', module)
  .addDecorator(FontSizePickerDecorator)
  .addDecorator(withReadme(FontSizePickerReadme))
  .add('Basic', () => (
    <FontSizePicker
      fontSizes={ [
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
      ] }
      value={ 12 }
      fallbackFontSize={ 16 }
      onChange={ action( 'Changed' ) }
    />
  ));

