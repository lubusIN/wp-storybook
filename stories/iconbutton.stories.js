import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { IconButton } from '@wordpress/components';
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

storiesOf('IconButton', module)
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

