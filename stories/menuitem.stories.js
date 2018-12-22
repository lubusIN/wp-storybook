import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { MenuItem } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
  textAlign: 'center',
  width: '20%',
  margin: 'auto',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

storiesOf('MenuItem', module)
  .add('Basic', () => (
    <React.Fragment>
      <MenuItem> Item 1 </MenuItem>
      <MenuItem> Item 2 </MenuItem>
      <MenuItem> Item 3 </MenuItem>
      <MenuItem> Item 4 </MenuItem>
      <MenuItem> Item 5 </MenuItem>
    </React.Fragment>
  ))
  .add('with Icon', () => (
    <React.Fragment>
      <MenuItem icon="yes" > Item 1 </MenuItem>
      <MenuItem icon="yes"> Item 2 </MenuItem>
      <MenuItem icon="yes"> Item 3 </MenuItem>
      <MenuItem icon="no"> Item 4 </MenuItem>
      <MenuItem icon="yes"> Item 5 </MenuItem>
    </React.Fragment>
  ))
  .add('with Selected', () => (
    <React.Fragment>
      <MenuItem icon="yes" > Item 1 </MenuItem>
      <MenuItem icon="yes"> Item 2 </MenuItem>
      <MenuItem icon="yes"> Item 3 </MenuItem>
      <MenuItem icon="no" isSelected={ true }> Item 4 </MenuItem>
      <MenuItem icon="yes"> Item 5 </MenuItem>
    </React.Fragment>
  ));

