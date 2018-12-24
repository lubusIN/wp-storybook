import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';
import { withViewport } from '@storybook/addon-viewport';

import { Dropdown, Button } from '@wordpress/components';
import DropdownReadme from '@wordpress/components/src/dropdown/README.md';

storiesOf('Components|Dropdown', module)  
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

storiesOf('Components|Dropdown', module)  
    .addDecorator(withReadme(DropdownReadme))
    .addDecorator(withViewport('iphone5'))
    .add('ExpandOnMobile', () => (
        <Dropdown
            className="my-container-class-name"
            contentClassName="my-popover-content-classname"
            expandOnMobile={ true }
            position="bottom right"
            renderToggle={ ( { isOpen, onToggle } ) => (
                <Button isPrimary onClick={ onToggle } aria-expanded={ isOpen }>
                    Full Screen on mobile!
                </Button>
            ) }
            renderContent={ () => (
                <div>
                    This is the content of the popover.
                </div>
            ) }
        />
    ))
    .add('HeaderTitle', () => (
        <Dropdown
            className="my-container-class-name"
            contentClassName="my-popover-content-classname"
            expandOnMobile={ true }
            headerTitle="Header Title"
            position="bottom right"
            renderToggle={ ( { isOpen, onToggle } ) => (
                <Button isPrimary onClick={ onToggle } aria-expanded={ isOpen }>
                    Full Screen on mobile!
                </Button>
            ) }
            renderContent={ () => (
                <div>
                    This is the content of the popover.
                </div>
            ) }
        />
    ));

