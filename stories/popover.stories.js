/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Button, Popover } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import PopoverReadme from '@wordpress/components/src/popover/README.md';

/**
 * Stories
 */
const PopoverBasic = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isDefault onClick={toggleVisible}>
            Toggle Popover!
            {isVisible && (
                <Popover>
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

const PopoverNoArrow = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isDefault onClick={toggleVisible}>
            Toggle Popover!
            {isVisible && (
                <Popover noArrow>
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

const PopoverMiddleLeft = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isDefault onClick={toggleVisible}>
            Toggle Popover!
            {isVisible && (
                <Popover position="middle left">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

const PopoverMiddleRight = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isDefault onClick={toggleVisible}>
            Toggle Popover!
            {isVisible && (
                <Popover position="middle right">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

const PopoverMiddleCenter = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isDefault onClick={toggleVisible}>
            Toggle Popover!
            {isVisible && (
                <Popover position="middle center">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

const PopoverTopLeft = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isDefault onClick={toggleVisible}>
            Toggle Popover!
            {isVisible && (
                <Popover position="top left">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

const PopoverTopRight = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isDefault onClick={toggleVisible}>
            Toggle Popover!
            {isVisible && (
                <Popover position="top right">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

const PopoverTopCenter = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isDefault onClick={toggleVisible}>
            Toggle Popover!
            {isVisible && (
                <Popover position="top center">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

const PopoverBottomLeft = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isDefault onClick={toggleVisible}>
            Toggle Popover!
            {isVisible && (
                <Popover position="bottom left">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

const PopoverBottomRight = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isDefault onClick={toggleVisible}>
            Toggle Popover!
            {isVisible && (
                <Popover position="bottom right">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

const PopoverBottomCenter = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isDefault onClick={toggleVisible}>
            Toggle Popover!
            {isVisible && (
                <Popover position="bottom center">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

storiesOf('Components|Popover', module)
    .addDecorator(withReadme(PopoverReadme))
    .add('Basic', () => <PopoverBasic />)
    .add('No Arrow', () => <PopoverNoArrow />);

storiesOf('Components|Popover/Position', module)
    .addDecorator(withReadme(PopoverReadme))
    .add('Middle Right', () => <PopoverMiddleRight />)
    .add('Middle Left', () => <PopoverMiddleLeft />)
    .add('Middle Center', () => <PopoverMiddleCenter />)
    .add('Top Left', () => <PopoverTopLeft />)
    .add('Top Right', () => <PopoverTopRight />)
    .add('Top Center', () => <PopoverTopCenter />)
    .add('Bottom Left', () => <PopoverBottomLeft />)
    .add('Bottom Right', () => <PopoverBottomRight />)
    .add('Bottom Center', () => <PopoverBottomCenter />);