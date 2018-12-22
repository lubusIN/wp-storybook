import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { CheckboxControl } from "@wordpress/components";
import "@wordpress/components/build-style/style.css";

const styles = {
    textAlign: 'center',
  };

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

storiesOf('CheckboxControl', module)
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

