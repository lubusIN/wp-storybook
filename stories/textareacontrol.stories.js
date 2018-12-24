import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { TextareaControl } from '@wordpress/components';
import TextareaControlReadme from '@wordpress/components/src/textarea-control/README.md'

storiesOf('Components|TextareaControl', module)
  .addDecorator(withReadme(TextareaControlReadme))
  .add('Basic', () => (
    <TextareaControl
      label="Details"
      value={ "Enter content" }
      onChange={ action( 'Changed' ) }
    />
  ))
  .add('With Help', () => (
    <TextareaControl
      label="Details"
      value={ "Enter content" }
      onChange={ action( 'Changed' ) }
      help="Information to store"
    />
  ));

