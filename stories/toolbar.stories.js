import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Toolbar } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

function createThumbsControl( thumbs ) {
    return {
        icon: `thumbs-${ thumbs }`,
        title: `Thumbs ${ thumbs }`,
        isActive: 'up' === thumbs,
        onClick: () => action( 'Clicked' ),
    };
}

storiesOf('Toolbar', module)
  .add('Basic', () => (
    <Toolbar controls={ [ 'up', 'down' ].map( createThumbsControl ) } />
  ));
