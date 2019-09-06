/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { MenuItem } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import MenuItemReadme from '@wordpress/components/src/menu-item/README.md';

/**
 * Stories
 */
const MenuItemActive = withState({
  isActive: true,
})(({ isActive, setState }) => (
  <MenuItem
    icon={isActive ? 'yes' : 'no'}
    isSelected={isActive}
    onClick={() => setState(state => ({ isActive: !state.isActive }))}
  >
    Click To Toggle
  </MenuItem>
));

storiesOf('Components|MenuItem', module)
  .addDecorator(withReadme(MenuItemReadme))
  .add('Basic', () => (
    <MenuItem onClick={action('Clicked')}> Menu Item </MenuItem>
  ))
  .add('with Icon', () => (
    <MenuItem icon="image-rotate-right" onClick={action('Clicked')}> Menu Item </MenuItem>
  ))
  .add('with Selected', () => <MenuItemActive />);