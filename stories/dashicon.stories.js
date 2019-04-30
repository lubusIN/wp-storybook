/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Dashicon } from '@wordpress/components';
import DashiconReadme from '@wordpress/components/src/dashicon/README.md';

/**
 * Stories
 */
storiesOf('Components|Dashicon', module)
  .addDecorator(withReadme(DashiconReadme))
  .add('Basic', () => (
    <Dashicon icon="wordpress" />
  ));