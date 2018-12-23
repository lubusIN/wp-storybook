import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { IconButton } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const IconButtonStyles = {
  width: '24px',
  margin: 'auto',
  marginTop: '10%'
};

const IconButtonDecorator = (storyFn) => (
  <div style={IconButtonStyles}>
    { storyFn() }
  </div>
);

storiesOf('IconButton', module)
  .addDecorator(IconButtonDecorator)
  .add('Basic', () => (
    <React.Fragment>
      <IconButton
          icon="ellipsis"
          label="More"
      />

      <br />

      <IconButton
          icon="admin-appearance"
          label="Styles"
      />
    </React.Fragment>
  ));

