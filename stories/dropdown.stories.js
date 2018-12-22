import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Dropdown, Button } from '@wordpress/components';
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

storiesOf('Dropdown', module)
  .add('Basic', () => (
    <Dropdown
        className="my-container-class-name"
        contentClassName="my-popover-content-classname"
        position="bottom right"
        renderToggle={ ( { isOpen, onToggle } ) => (
            <Button isPrimary onClick={ onToggle } aria-expanded={ isOpen }>
                Toggle Popover!
            </Button>
        ) }
        renderContent={ () => (
            <div>
                This is the content of the popover.
            </div>
        ) }
    />
));

