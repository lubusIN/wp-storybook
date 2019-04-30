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
import { DropdownMenu } from '@wordpress/components';
import DropdownMenuReadme from '@wordpress/components/src/dropdown-menu/README.md';

/**
 * Stories
 */
storiesOf('Components|DropdownMenu', module)
    .addDecorator(withReadme(DropdownMenuReadme))
    .add('Basic', () => (
        <DropdownMenu
            icon="move"
            label="Select a direction"
            controls={ [
                {
                    title: 'Up',
                    icon: 'arrow-up-alt',
                    onClick: () => console.log( 'up' )
                },
                {
                    title: 'Right',
                    icon: 'arrow-right-alt',
                    onClick: () => console.log( 'right' )
                },
                {
                    title: 'Down',
                    icon: 'arrow-down-alt',
                    onClick: () => console.log( 'down' )
                },
                {
                    title: 'Left',
                    icon: 'arrow-left-alt',
                    onClick: () => console.log( 'left' )
                },
            ] }
        />
    ));