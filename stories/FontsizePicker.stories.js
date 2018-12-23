import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FontSizePicker } from '@wordpress/components';

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
    />
  ));

