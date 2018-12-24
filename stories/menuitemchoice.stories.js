import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { MenuGroup, MenuItemsChoice } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import MenuItemsChoiceReadme from '@wordpress/components/src/menu-items-choice/README.md';

const MenuItemsChoiceBasic = withState( {
    mode: 'visual',
    choices: [
        {
            value: 'visual',
            label: 'Visual Editor',
        },
        {
            value: 'text',
            label: 'Code Editor',
        },
    ],
} )( ( { mode, choices, setState } ) => (
    <MenuGroup label="Editor">
        <MenuItemsChoice
            choices={ choices }
            value={ mode }
            onSelect={ mode => setState( { mode } ) }
        />
    </MenuGroup>
) );

storiesOf('Components|MenuItemsChoice', module)
  .addDecorator(withReadme(MenuItemsChoiceReadme))
  .add('Basic', () => <MenuItemsChoiceBasic />);