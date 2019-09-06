/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { MenuGroup, MenuItemsChoice } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import MenuItemsChoiceReadme from '@wordpress/components/src/menu-items-choice/README.md';

/**
 * Stories
 */
const MenuItemsChoiceBasic = withState({
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
})(({ mode, choices, setState }) => (
    <MenuGroup label="Editor">
        <MenuItemsChoice
            choices={choices}
            value={mode}
            onSelect={mode => setState({ mode })}
        />
    </MenuGroup>
));

storiesOf('Components|MenuItemsChoice', module)
    .addDecorator(withReadme(MenuItemsChoiceReadme))
    .add('Basic', () => <MenuItemsChoiceBasic />);