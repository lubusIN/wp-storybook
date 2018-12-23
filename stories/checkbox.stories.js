import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { CheckboxControl } from "@wordpress/components";
import CheckboxControlReadme from '@wordpress/components/src/checkbox-control/README.md'

const CheckboxControlStyles = {
  width: '200px',
  margin: 'auto',
  marginTop: '10%',
};

const CheckboxControlDecorator = (storyFn) => (
  <div style={CheckboxControlStyles}>
    { storyFn() }
  </div>
);

storiesOf('CheckboxControl', module)
  .addDecorator(CheckboxControlDecorator)
  .addDecorator(withReadme(CheckboxControlReadme))
  .add('Basic', () => (
    <React.Fragment>
       <CheckboxControl
        heading="User"
        label="Is author"
        help="Is the user a author or not?"
        checked={ true }
        onChange={ action( 'Changed' ) }
      / >
     <br/>
     <br/>
     <CheckboxControl
        heading="User"
        label="Is author"
        help="Is the user a author or not?"
        checked={ false }
        onChange={ action( 'Changed' ) }

      />
    </React.Fragment>
  ));

