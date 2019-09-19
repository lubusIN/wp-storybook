/**
 * External Dependencies
 */
import React, { useState } from 'react';

/**
 * Storybook Dependencies
 */
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Toolbar } from '@wordpress/components';
import ToolbarReadme from '@wordpress/components/src/toolbar/README.md';

/**
 * Stories
 */
export default {
  title: 'Components|Toolbar',
  decorators: [withReadme(ToolbarReadme)],
};

export const basic = () => {
  const [activeControl, setActiveControl] = useState( 'up' );
  const controls = ['up', 'down'];
  
  const createThumbsControl = (control) => {
    return {
      icon: `thumbs-${control}`,
      title: `Thumbs ${control}`,
      isActive: activeControl === control,
      onClick: () => setActiveControl( control ),
    };
  }
  return <Toolbar controls={controls.map(createThumbsControl)} />;
};