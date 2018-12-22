import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ExternalLink } from '@wordpress/components';
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

storiesOf('ExternalLink', module)
  .add('Basic', () => (
    <ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>
));

