import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { MenuItem } from '@wordpress/components';
import MenuItemReadme from '@wordpress/components/src/menu-item/README.md'

storiesOf('Components|MenuItem', module)
  .addDecorator(withReadme(MenuItemReadme))
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
      <MenuItem icon="image-crop" onClick={ action( 'Clicked' ) }> Item 1 </MenuItem>
      <MenuItem icon="image-rotate" onClick={ action( 'Clicked' ) }> Item 2 </MenuItem>
      <MenuItem icon="image-rotate-right" onClick={ action( 'Clicked' ) }> Item 3 </MenuItem>
      <MenuItem icon="image-rotate-right" onClick={ action( 'Clicked' ) }> Item 4 </MenuItem>
      <MenuItem icon="image-flip-vertical" onClick={ action( 'Clicked' ) }> Item 5 </MenuItem>
    </React.Fragment>
  ))
  .add('with Selected', () => (
    <React.Fragment>
      <MenuItem  onClick={ action( 'Clicked' ) }> Item 1 </MenuItem>
      <MenuItem  onClick={ action( 'Clicked' ) }> Item 2 </MenuItem>
      <MenuItem  onClick={ action( 'Clicked' ) }> Item 3 </MenuItem>
      <MenuItem  onClick={ action( 'Clicked' ) } isSelected={ true }> Item 4 </MenuItem>
      <MenuItem  onClick={ action( 'Clicked' ) }> Item 5 </MenuItem>
    </React.Fragment>
  ));