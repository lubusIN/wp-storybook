import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';


import { Dropdown, Button } from '@wordpress/components';
import DropdownReadme from '@wordpress/components/src/dropdown/README.md'

const DropdownStyles = {
    textAlign: 'center',
    margin: 'auto',
    marginTop: '10%'
};

const DropdownDecorator = (storyFn) => (
  <div style={DropdownStyles}>
    { storyFn() }
  </div>
);

storiesOf('Dropdown', module)  
    .addDecorator(DropdownDecorator)
    .addDecorator(withReadme(DropdownReadme))
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

