import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { MenuItem } from '@wordpress/components';

const MenuItemStyles = {
  width: '20%',
  margin: 'auto',
  marginTop: '10%'
};

const MenuItemDecorator = (storyFn) => (
  <div style={MenuItemStyles}>
    { storyFn() }
  </div>
);

storiesOf('MenuItem', module)
  .addDecorator(MenuItemDecorator)
  .add('Basic', () => (
    <React.Fragment>
      <MenuItem onClick={ action( 'Clicked' ) }> Item 1 </MenuItem>
      <MenuItem onClick={ action( 'Clicked' ) }> Item 2 </MenuItem>
      <MenuItem onClick={ action( 'Clicked' ) }> Item 3 </MenuItem>
      <MenuItem onClick={ action( 'Clicked' ) }> Item 4 </MenuItem>
      <MenuItem onClick={ action( 'Clicked' ) }> Item 5 </MenuItem>
    </React.Fragment>
  ))
  .add('with Icon', () => (
    <React.Fragment>
      <MenuItem icon="yes" onClick={ action( 'Clicked' ) }> Item 1 </MenuItem>
      <MenuItem icon="yes" onClick={ action( 'Clicked' ) }> Item 2 </MenuItem>
      <MenuItem icon="yes" onClick={ action( 'Clicked' ) }> Item 3 </MenuItem>
      <MenuItem icon="no" onClick={ action( 'Clicked' ) }> Item 4 </MenuItem>
      <MenuItem icon="yes" onClick={ action( 'Clicked' ) }> Item 5 </MenuItem>
    </React.Fragment>
  ))
  .add('with Selected', () => (
    <React.Fragment>
      <MenuItem icon="yes" onClick={ action( 'Clicked' ) }> Item 1 </MenuItem>
      <MenuItem icon="yes" onClick={ action( 'Clicked' ) }> Item 2 </MenuItem>
      <MenuItem icon="yes" onClick={ action( 'Clicked' ) }> Item 3 </MenuItem>
      <MenuItem icon="no"  onClick={ action( 'Clicked' ) } isSelected={ true }> Item 4 </MenuItem>
      <MenuItem icon="yes" onClick={ action( 'Clicked' ) }> Item 5 </MenuItem>
    </React.Fragment>
  ));