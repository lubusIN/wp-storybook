import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { ExternalLink } from '@wordpress/components';
import ExternalLinkReadme from '@wordpress/components/src/external-link/README.md'

const ExternalLinkStyles = {
  textAlign: 'center',
  marginTop: '10%'
};

const ExternalLinkDecorator = (storyFn) => (
  <div style={ExternalLinkStyles}>
    { storyFn() }
  </div>
);

storiesOf('ExternalLink', module)
  .addDecorator(ExternalLinkDecorator)
  .addDecorator(withReadme(ExternalLinkReadme))
  .add('Basic', () => (
    <ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>
));

