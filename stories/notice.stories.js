import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { Notice } from '@wordpress/components';
import NoticeReadme from '@wordpress/components/src/notice/README.md';

storiesOf('Components|Notice', module)
  .addDecorator(withReadme(NoticeReadme))
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

