import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { TextControl } from '@wordpress/components';
import TextControlReadme from '@wordpress/components/src/text-control/README.md'

storiesOf('Components|TextControl', module)
  .addDecorator(withReadme(TextControlReadme))
  .add('Basic', () => (
    <TextControl
      label="Additional CSS Class"
      value={ "is-style-fancy" }
      onChange={ action( 'Changed' ) }
    />
  ))
  .add('With Help', () => (
    <TextControl
      label="Additional CSS Class"
      value={ "is-style-fancy" }
      onChange={ action( 'Changed' ) }
      help="Custom classes for block"
    />
  ));

