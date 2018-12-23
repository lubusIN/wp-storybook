import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ExternalLink } from '@wordpress/components';

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
  .add('Basic', () => (
    <ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>
));

