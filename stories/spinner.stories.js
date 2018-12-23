import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { Spinner } from '@wordpress/components';
import SpinnerReadme from '@wordpress/components/src/spinner/README.md'

const SpinnerStyles = {
  width: '24px',
  margin: 'auto',
  marginTop: '10%'
};

const SpinnerDecorator = (storyFn) => (
  <div style={SpinnerStyles}>
    { storyFn() }
  </div>
);

storiesOf('Spinner', module)
  .addDecorator( SpinnerDecorator )
  .addDecorator(withReadme(SpinnerReadme))
  .add('Basic', () => (
    <Spinner />
));