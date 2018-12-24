import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { ColorPicker } from '@wordpress/components';
import ColorPickerReadme from '@wordpress/components/src/color-picker/README.md'

storiesOf('Components|ColorPicker', module)
  .addDecorator(withReadme(ColorPickerReadme))
  .add('Basic', () => (
    <ColorPicker
      color={ '#f00' }
      onChangeComplete={ action( 'Changed' ) }
    />
  ))
  .add('DisableAlpha', () => (
    <ColorPicker
      color={ '#f00' }
      disableAlpha
      onChangeComplete={ action( 'Changed' ) }
    />
  ));

