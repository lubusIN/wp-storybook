import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { Toolbar } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import ToolbarReadme from '@wordpress/components/src/toolbar/README.md';
  
const ToolbarBasic = withState( {
    activeControl: 'up',
} )( ( { activeControl, setState } ) => { 
    function createThumbsControl( thumbs ) {
        return {
            icon: `thumbs-${ thumbs }`,
            title: `Thumbs ${ thumbs }`,
            isActive: activeControl === thumbs,
            onClick: () => setState( { activeControl: thumbs } ),
        };
    }

    return (
        <Toolbar controls={ [ 'up', 'down' ].map( createThumbsControl ) } />
    );
} );

storiesOf('Components|Toolbar', module)
    .addDecorator(withReadme(ToolbarReadme))
    .add('Basic', () => <ToolbarBasic />);
