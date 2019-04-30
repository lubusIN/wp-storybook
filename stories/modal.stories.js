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
import { Button, Modal } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import ModalReadme from '@wordpress/components/src/modal/README.md';

/**
 * Stories
 */
const ModalBasic = withState({
    isOpen: false,
})(({ isOpen, setState }) => (
    <div>
        <Button isDefault onClick={() => setState({ isOpen: true })}>Open Modal</Button>
        {isOpen ?
            <Modal
                onRequestClose={() => setState({ isOpen: false })}>
                <h1>I am modal 😀</h1>
            </Modal>
            : null}
    </div>
));

const ModalWithTitle = withState({
    isOpen: false,
})(({ isOpen, setState }) => (
    <div>
        <Button isDefault onClick={() => setState({ isOpen: true })}>Open Modal</Button>
        {isOpen ?
            <Modal
                title="This is my modal"
                onRequestClose={() => setState({ isOpen: false })}>
                <h1>I am modal 😀</h1>
            </Modal>
            : null}
    </div>
));

const ModalWithCustomClose = withState({
    isOpen: false,
})(({ isOpen, setState }) => (
    <div>
        <Button isDefault onClick={() => setState({ isOpen: true })}>Open Modal</Button>
        {isOpen ?
            <Modal
                onRequestClose={() => setState({ isOpen: false })}>
                <h1>I am modal 😀</h1>
                <Button isDefault onClick={() => setState({ isOpen: false })}>
                    My custom close button
                </Button>
            </Modal>
            : null}
    </div>
));

storiesOf('Components|Modal', module)
    .addDecorator(withReadme(ModalReadme))
    .add('Basic', () => <ModalBasic />)
    .add('withTitle', () => <ModalWithTitle />)
    .add('withCustomClose', () => <ModalWithCustomClose />);