import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { ExternalLink } from '@wordpress/components';
import ExternalLinkReadme from '@wordpress/components/src/external-link/README.md';

storiesOf('Components|ExternalLink', module)
  .addDecorator(withReadme(ExternalLinkReadme))
  .add('Basic', () => (
    <ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>
));

