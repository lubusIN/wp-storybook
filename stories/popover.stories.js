import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { Button, Popover } from '@wordpress/components';
import PopoverReadme from '@wordpress/components/src/popover/README.md'

storiesOf('Components|Popover', module)
    .addDecorator(withReadme(PopoverReadme))
    .add('Basic', () => (
        <Button isDefault onClick={ action('clicked') }>
            Toggle Popover!
            { true && (
                <Popover>
                    Popover is toggled!
                </Popover>
            ) }
        </Button>
    ))
    .add('No Arrow', () => (
        <Button isDefault onClick={ action('clicked') }>
            Toggle Popover!
            { true && (
                <Popover noArrow>
                    Popover is toggled!
                </Popover>
            ) }
        </Button>
    ));

storiesOf('Components|Popover/Position', module)
    .addDecorator(withReadme(PopoverReadme))
    .add('Middle Right', () => (
        <Button isDefault onClick={ action('clicked') }>
            Toggle Popover!
            { true && (
                <Popover position="middle right">
                    middle right
                </Popover>
            ) }
        </Button>
    ))
    .add('Middle Left', () => (
        <Button isDefault onClick={ action('clicked') }>
            Toggle Popover!
            { true && (
                <Popover position="middle left">
                    middle left
                </Popover>
            ) }
        </Button>
    ))
    .add('Middle Center', () => (
        <Button isDefault onClick={ action('clicked') }>
            Toggle Popover!
            { true && (
                <Popover position="middle center">
                    middle center ( Overlaps Button/Trigger)
                </Popover>
            ) }
        </Button>
    ))
    .add('Top Left', () => (
        <Button isDefault onClick={ action('clicked') }>
            Toggle Popover!
            { true && (
                <Popover position="top left">
                    top left
                </Popover>
            ) }
        </Button>
    ))
    .add('Top Right', () => (
        <Button isDefault onClick={ action('clicked') }>
            Toggle Popover!
            { true && (
                <Popover position="top right">
                    top right
                </Popover>
            ) }
        </Button>
    ))
    .add('Top Center', () => (
        <Button isDefault onClick={ action('clicked') }>
            Toggle Popover!
            { true && (
                <Popover position="top center">
                    top center
                </Popover>
            ) }
        </Button>
    ))
    .add('Bottom Left', () => (
        <Button isDefault onClick={ action('clicked') }>
            Toggle Popover!
            { true && (
                <Popover position="bottom left">
                    bottom left
                </Popover>
            ) }
        </Button>
    ))
    .add('Bottom Right', () => (
        <Button isDefault onClick={ action('clicked') }>
            Toggle Popover!
            { true && (
                <Popover position="bottom right">
                    bottom right
                </Popover>
            ) }
        </Button>
    ))
    .add('Bottom Center', () => (
        <Button isDefault onClick={ action('clicked') }>
            Toggle Popover!
            { true && (
                <Popover position="bottom center">
                    bottom center
                </Popover>
            ) }
        </Button>
    ));