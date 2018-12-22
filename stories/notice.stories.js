import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Notice } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
  textAlign: 'center',
  margin: 'auto',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

storiesOf('Notice', module)
  .add('Basic', () => (
    <React.Fragment>
        <Notice status="error">
          An unknown error occurred.
       </Notice>

        <br />

        <Notice status="warning">
          Results might not be as expected.
        </Notice>

        <br />

        <Notice status="success">
         Process completed successfully.
       </Notice>
    </React.Fragment>
  ));

