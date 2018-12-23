import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { IconButton } from '@wordpress/components';
import IconButtonReadme from '@wordpress/components/src/icon-button/README.md'

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
  .addDecorator(withReadme(IconButtonReadme))
  .add('Basic', () => (
    <React.Fragment>
      <IconButton
          icon="ellipsis"
          label="More"
          onClick={ action( 'Clicked' ) }
      />

      <br />

      <IconButton
          icon="admin-appearance"
          label="Styles"
          onClick={ action( 'Clicked' ) }
      />
    </React.Fragment>
  ));

