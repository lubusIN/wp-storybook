import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { MenuGroup, MenuItem } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const MenuGroupStyles = {
  width: '20%',
  margin: 'auto',
  marginTop: '10%'
};

const MenuGroupDecorator = (storyFn) => (
  <div style={MenuGroupStyles}>
    { storyFn() }
  </div>
);

storiesOf('MenuGroup', module)
  .addDecorator(MenuGroupDecorator)
  .add('Basic', () => (
    <React.Fragment>
      <MenuGroup label="Settings MenuGroup">
        <MenuItem>Setting 1</MenuItem>
        <MenuItem>Setting 2</MenuItem>
      </MenuGroup>
      <MenuGroup label="Options MenuGroup">
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
      </MenuGroup>
    </React.Fragment>
  ));