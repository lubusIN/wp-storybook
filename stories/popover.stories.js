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
	decorators: [ withReadme( PopoverReadme ) ],
};

export const Basic = () => {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<Button isDefault onClick={ () => setIsVisible( ! isVisible ) }>
            Toggle Popover!
			{ isVisible && (
				<Popover>
                    Popover is toggled!
				</Popover>
			) }
		</Button>
	);
};

export const NoArrow = () => {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<Button isDefault onClick={ () => setIsVisible( ! isVisible ) }>
            Toggle Popover!
			{ isVisible && (
				<Popover noArrow>
                    Popover is toggled!
				</Popover>
			) }
		</Button>
	);
};

export const MiddleLeft = () => {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<Button isDefault onClick={ () => setIsVisible( ! isVisible ) }>
            Toggle Popover!
			{ isVisible && (
				<Popover position="middle left">
                    Popover is toggled!
				</Popover>
			) }
		</Button>
	);
};

export const MiddleRight = () => {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<Button isDefault onClick={ () => setIsVisible( ! isVisible ) }>
            Toggle Popover!
			{ isVisible && (
				<Popover position="middle right">
                    Popover is toggled!
				</Popover>
			) }
		</Button>
	);
};

export const MiddleCenter = () => {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<Button isDefault onClick={ () => setIsVisible( ! isVisible ) }>
            Toggle Popover!
			{ isVisible && (
				<Popover position="middle center">
                    Popover is toggled!
				</Popover>
			) }
		</Button>
	);
};

export const TopLeft = () => {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<Button isDefault onClick={ () => setIsVisible( ! isVisible ) }>
            Toggle Popover!
			{ isVisible && (
				<Popover position="top left">
                    Popover is toggled!
				</Popover>
			) }
		</Button>
	);
};

export const TopRight = () => {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<Button isDefault onClick={ () => setIsVisible( ! isVisible ) }>
            Toggle Popover!
			{ isVisible && (
				<Popover position="top right">
                    Popover is toggled!
				</Popover>
			) }
		</Button>
	);
};

export const TopCenter = () => {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<Button isDefault onClick={ () => setIsVisible( ! isVisible ) }>
            Toggle Popover!
			{ isVisible && (
				<Popover position="top center">
                    Popover is toggled!
				</Popover>
			) }
		</Button>
	);
};

export const TottomLeft = () => {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<Button isDefault onClick={ () => setIsVisible( ! isVisible ) }>
            Toggle Popover!
			{ isVisible && (
				<Popover position="bottom Left">
                    Popover is toggled!
				</Popover>
			) }
		</Button>
	);
};

export const BottomRight = () => {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<Button isDefault onClick={ () => setIsVisible( ! isVisible ) }>
            Toggle Popover!
			{ isVisible && (
				<Popover position="bottom right">
                    Popover is toggled!
				</Popover>
			) }
		</Button>
	);
};

export const BottomCenter = () => {
	const [ isVisible, setIsVisible ] = useState( false );

	return (
		<Button isDefault onClick={ () => setIsVisible( ! isVisible ) }>
            Toggle Popover!
			{ isVisible && (
				<Popover position="bottom center">
                    Popover is toggled!
				</Popover>
			) }
		</Button>
	);
};
