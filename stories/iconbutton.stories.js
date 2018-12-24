import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { IconButton } from '@wordpress/components';
import IconButtonReadme from '@wordpress/components/src/icon-button/README.md';

storiesOf('Components|IconButton', module)
  .addDecorator(withReadme(IconButtonReadme))
  .add('Basic', () => (
    <IconButton
        icon="admin-appearance"
        label="Styles"
        onClick={ action( 'Clicked' ) }
    />
  ));

