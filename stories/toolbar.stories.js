import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { Toolbar } from '@wordpress/components';
import ToolbarReadme from '@wordpress/components/src/toolbar/README.md'

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
    .addDecorator(withReadme(ToolbarReadme))
    .add('Basic', () => (
        <Toolbar controls={ [ 'up', 'down' ].map( createThumbsControl ) } />
    ));
