import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { DropdownMenu } from '@wordpress/components';

const DropdownMenuStyles = {
    width: '50px',
    margin: 'auto',
    marginTop: '10%'
};

const DropdownMenuDecorator = (storyFn) => (
  <div style={DropdownMenuStyles}>
    { storyFn() }
  </div>
);

storiesOf('DropdownMenu', module)
    .addDecorator(DropdownMenuDecorator)
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

