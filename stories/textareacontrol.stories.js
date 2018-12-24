import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { TextareaControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import TextareaControlReadme from '@wordpress/components/src/textarea-control/README.md';

const TextareaControlBasic = withState( {
  text: '',
} )( ( { text, setState } ) => ( 
  <TextareaControl
      label="Text"
      value={ text }
      onChange={ ( text ) => setState( { text } ) }
  />
) );

const TextareaControlHelp = withState( {
  text: '',
} )( ( { text, setState } ) => ( 
  <TextareaControl
      label="Text"
      help="Enter some text"
      value={ text }
      onChange={ ( text ) => setState( { text } ) }
  />
) );

storiesOf('Components|TextareaControl', module)
  .addDecorator(withReadme(TextareaControlReadme))
  .add('Basic', () => <TextareaControlBasic />)
  .add('With Help', () => <TextareaControlHelp />);

