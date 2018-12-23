import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Notice } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const NoticeStyles = {
  marginTop: '10%'
};

const NoticeDecorator = (storyFn) => (
  <div style={NoticeStyles}>
    { storyFn() }
  </div>
);

storiesOf('Notice', module)
  .addDecorator(NoticeDecorator)
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

