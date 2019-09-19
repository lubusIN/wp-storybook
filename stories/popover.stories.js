/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Button, Popover } from '@wordpress/components';
import PopoverReadme from '@wordpress/components/src/popover/README.md';

/**
 * Stories
 */
export default {
    title: 'Components|Popover',
    decorators: [withReadme(PopoverReadme)],
  };
  
export const basic = () => {
    const [isVisible, setIsVisible] = useState( false );

    return (
        <Button isDefault onClick={ () => setIsVisible( !isVisible ) }>
            Toggle Popover!
            {isVisible && (
                <Popover>
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
};

export const noArrow = () => {
    const [isVisible, setIsVisible] = useState( false );

    return (
        <Button isDefault onClick={ () => setIsVisible( !isVisible ) }>
            Toggle Popover!
            {isVisible && (
                <Popover noArrow>
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
};

export const middleLeft = () => {
    const [isVisible, setIsVisible] = useState( false );

    return (
        <Button isDefault onClick={ () => setIsVisible( !isVisible ) }>
            Toggle Popover!
            {isVisible && (
                <Popover position="middle left">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
};

export const middleRight = () => {
    const [isVisible, setIsVisible] = useState( false );

    return (
        <Button isDefault onClick={ () => setIsVisible( !isVisible ) }>
            Toggle Popover!
            {isVisible && (
                <Popover position="middle right">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
};

export const middleCenter = () => {
    const [isVisible, setIsVisible] = useState( false );

    return (
        <Button isDefault onClick={ () => setIsVisible( !isVisible ) }>
            Toggle Popover!
            {isVisible && (
                <Popover position="middle center">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
};

export const topLeft = () => {
    const [isVisible, setIsVisible] = useState( false );

    return (
        <Button isDefault onClick={ () => setIsVisible( !isVisible ) }>
            Toggle Popover!
            {isVisible && (
                <Popover position="top left">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
};

export const topRight = () => {
    const [isVisible, setIsVisible] = useState( false );

    return (
        <Button isDefault onClick={ () => setIsVisible( !isVisible ) }>
            Toggle Popover!
            {isVisible && (
                <Popover position="top right">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
};

export const topCenter = () => {
    const [isVisible, setIsVisible] = useState( false );

    return (
        <Button isDefault onClick={ () => setIsVisible( !isVisible ) }>
            Toggle Popover!
            {isVisible && (
                <Popover position="top center">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
};

export const bottomLeft = () => {
    const [isVisible, setIsVisible] = useState( false );

    return (
        <Button isDefault onClick={ () => setIsVisible( !isVisible ) }>
            Toggle Popover!
            {isVisible && (
                <Popover position="bottom Left">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
};

export const bottomRight = () => {
    const [isVisible, setIsVisible] = useState( false );

    return (
        <Button isDefault onClick={ () => setIsVisible( !isVisible ) }>
            Toggle Popover!
            {isVisible && (
                <Popover position="bottom right">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
};

export const bottomCenter = () => {
    const [isVisible, setIsVisible] = useState( false );

    return (
        <Button isDefault onClick={ () => setIsVisible( !isVisible ) }>
            Toggle Popover!
            {isVisible && (
                <Popover position="bottom center">
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
};