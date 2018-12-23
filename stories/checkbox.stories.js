import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { CheckboxControl } from "@wordpress/components";
import "@wordpress/components/build-style/style.css";

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
  .add('Basic', () => (
    <React.Fragment>
       <CheckboxControl
        heading="User"
        label="Is author"
        help="Is the user a author or not?"
        checked={ true }
      />
     <br/>
     <br/>
     <CheckboxControl
        heading="User"
        label="Is author"
        help="Is the user a author or not?"
        checked={ false }
      />
    </React.Fragment>
  ));

