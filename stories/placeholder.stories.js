import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { Placeholder } from '@wordpress/components';
import PlaceholderReadme from '@wordpress/components/src/placeholder/README.md'

const PlaceholderStyles = {
  width: '90%',
  margin: 'auto',
  marginTop: '10%'
};

const PlaceholderDecorator = (storyFn) => (
  <div style={PlaceholderStyles}>
    { storyFn() }
  </div>
);

storiesOf('PlaceHolder', module)
  .addDecorator(PlaceholderDecorator)
  .addDecorator(withReadme(PlaceholderReadme))
  .add('Basic', () => (
    <React.Fragment>
       <Placeholder
        icon="wordpress-alt"
        label="Placeholder"
    />
    </React.Fragment>
  ));