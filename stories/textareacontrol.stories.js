/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { TextareaControl } from '@wordpress/components';
import TextareaControlReadme from '@wordpress/components/src/textarea-control/README.md';

/**
 * Stories
 */
export default {
  title: 'Components|TextareaControl',
  decorators: [withReadme(TextareaControlReadme)],
};

export const basic = () => {
  const [text, setText] = useState();

  return (
    <TextareaControl 
      label="Text" 
      value={text} 
      onChange={text => setText( text )} 
      />
  )
};

export const withHelp = () => {
  const [text, setText] = useState();

  return (
    <TextareaControl 
    label="Text" 
    help="Enter some text"
    value={text} 
    onChange={text => setText( text )} 
    />
  )
};