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
 * WordPres Dependencies
 */
import { ExternalLink } from '@wordpress/components';
import ExternalLinkReadme from '@wordpress/components/src/external-link/README.md';

/**
 * Stories
 */
storiesOf('Components|ExternalLink', module)
  .addDecorator(withReadme(ExternalLinkReadme))
  .add('Basic', () => (
    <ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>
  ));