import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { MenuGroup, MenuItem } from '@wordpress/components';
import MenuGroupReadme from '@wordpress/components/src/menu-group/README.md';

storiesOf('Components|MenuGroup', module)
  .addDecorator(withReadme(MenuGroupReadme))
  .add('Basic', () => (
    <React.Fragment>
      <MenuGroup label="Settings MenuGroup">
        <MenuItem onClick={ action( 'Clicked' ) } >Setting 1</MenuItem>
        <MenuItem onClick={ action( 'Clicked' ) } >Setting 2</MenuItem>
      </MenuGroup>
      <MenuGroup label="Options MenuGroup">
        <MenuItem onClick={ action( 'Clicked' ) } >Option 1</MenuItem>
        <MenuItem onClick={ action( 'Clicked' ) } >Option 2</MenuItem>
      </MenuGroup>
    </React.Fragment>
  ));