import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { DropdownMenu } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
    textAlign: 'center',
    margin: 'auto',
  };

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

//addDecorator(CenterDecorator);

storiesOf('DropdownMenu', module)
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

