/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Button, Modal } from '@wordpress/components';
import ModalReadme from '@wordpress/components/src/modal/README.md';

/**
 * Stories
 */
export default {
  title: 'Components|Modal',
  decorators: [withReadme(ModalReadme)],
};

export const basic = () => {
  const [isOpen, setIsOpen] = useState( false );
  return (
    <div>
      <Button isDefault onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {isOpen ? (
        <Modal onRequestClose={() => setIsOpen(false)}>
          <h1>I am modal 😀</h1>
        </Modal>
      ) : null}
    </div>
  )
};

export const withTitle = () => {
  const [isOpen, setIsOpen] = useState( false );

  return (
    <div>
      <Button isDefault onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {isOpen ? (
        <Modal title="This is my modal" onRequestClose={() => setIsOpen(false)}>
          <h1>I am modal 😀</h1>
        </Modal>
      ) : null}
    </div>
  )
};

export const ModalWithCustomClose = () => {
  const [isOpen, setIsOpen] = useState( false );

  return (
    <div>
      <Button isDefault onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {isOpen ? (
        <Modal onRequestClose={() => setIsOpen(false)}>
          <h1>I am modal 😀</h1>
          <Button isDefault onClick={() => setIsOpen(false)}>
            My custom close button
          </Button>
        </Modal>
      ) : null}
    </div>
  )
};