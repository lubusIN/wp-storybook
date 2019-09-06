/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Notice } from '@wordpress/components';
import NoticeReadme from '@wordpress/components/src/notice/README.md';

/**
 * Stories
 */
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