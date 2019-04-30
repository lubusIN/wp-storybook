/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf, addDecorator, addParameters } from '@storybook/react';
import { withReadme, withDocs } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Dropdown, Button } from '@wordpress/components';
import DropdownReadme from '@wordpress/components/src/dropdown/README.md';

/**
 * Stories
 */
storiesOf('Components|Dropdown', module)
    .addDecorator(withReadme(DropdownReadme))
    .add('Basic', () => (
        <Dropdown
            className="my-container-class-name"
            contentClassName="my-popover-content-classname"
            position="bottom right"
            renderToggle={({ isOpen, onToggle }) => (
                <Button isPrimary onClick={onToggle} aria-expanded={isOpen}>
                    Toggle Popover!
                </Button>
            )}
            renderContent={() => (
                <div>
                    This is the content of the popover.
                </div>
            )}
        />
    ));

storiesOf('Components|Dropdown', module)
    .addDecorator(withReadme(DropdownReadme))
    .addParameters({ viewport: { defaultViewport: 'iphone5' } })
    .add('ExpandOnMobile', () => (
        <Dropdown
            className="my-container-class-name"
            contentClassName="my-popover-content-classname"
            expandOnMobile={true}
            position="bottom right"
            renderToggle={({ isOpen, onToggle }) => (
                <Button isPrimary onClick={onToggle} aria-expanded={isOpen}>
                    Full Screen on mobile!
                </Button>
            )}
            renderContent={() => (
                <div>
                    This is the content of the popover.
                </div>
            )}
        />
    ))
    .add('HeaderTitle', () => (
        <Dropdown
            className="my-container-class-name"
            contentClassName="my-popover-content-classname"
            expandOnMobile={true}
            headerTitle="Header Title"
            position="bottom right"
            renderToggle={({ isOpen, onToggle }) => (
                <Button isPrimary onClick={onToggle} aria-expanded={isOpen}>
                    Full Screen on mobile!
                </Button>
            )}
            renderContent={() => (
                <div>
                    This is the content of the popover.
                </div>
            )}
        />
    ));