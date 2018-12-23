import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Toolbar } from '@wordpress/components';

const ToolbarStyles = {
    width: '280px',
    margin: 'auto',
    marginTop: '10%'
};
  
const ToolbarDecorator = (storyFn) => (
    <div style={ToolbarStyles}>
        { storyFn() }
    </div>
);
  
function createThumbsControl( thumbs ) {
    return {
        icon: `thumbs-${ thumbs }`,
        title: `Thumbs ${ thumbs }`,
        isActive: 'up' === thumbs,
        onClick: () => action( 'Clicked' ),
    };
}

storiesOf('Toolbar', module)
    .addDecorator( ToolbarDecorator )
    .add('Basic', () => (
        <Toolbar controls={ [ 'up', 'down' ].map( createThumbsControl ) } />
    ));
