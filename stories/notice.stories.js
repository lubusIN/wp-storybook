/**
 * External Dependencies
 */
import React from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Notice } from '@wordpress/components';
import NoticeReadme from '@wordpress/components/src/notice/README.md';

export default {
  title: 'Components|Notice',
  decorators: [withReadme(NoticeReadme)],
};

export const basic = () => (
  <React.Fragment>
    <Notice status="error">An unknown error occurred.</Notice>

    <br />

    <Notice status="warning">Results might not be as expected.</Notice>

    <br />

    <Notice status="success">Process completed successfully.</Notice>
  </React.Fragment>
);