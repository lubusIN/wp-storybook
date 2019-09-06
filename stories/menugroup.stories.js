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
import { MenuGroup, MenuItem } from '@wordpress/components';
import MenuGroupReadme from '@wordpress/components/src/menu-group/README.md';

/**
 * Stories
 */
storiesOf('Components|MenuGroup', module)
  .addDecorator(withReadme(MenuGroupReadme))
  .add('Basic', () => (
    <React.Fragment>
      <MenuGroup label="Settings MenuGroup">
        <MenuItem onClick={action('Clicked')} >Setting 1</MenuItem>
        <MenuItem onClick={action('Clicked')} >Setting 2</MenuItem>
      </MenuGroup>
      <MenuGroup label="Options MenuGroup">
        <MenuItem onClick={action('Clicked')} >Option 1</MenuItem>
        <MenuItem onClick={action('Clicked')} >Option 2</MenuItem>
      </MenuGroup>
    </React.Fragment>
  ));