/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { RadioControl } from '@wordpress/components';
import RadioControlReadme from '@wordpress/components/src/radio-control/README.md';

/**
 * Stories
 */
export default {
  title: 'Components|RadioControl',
  decorators: [withReadme(RadioControlReadme)],
};

export const basic = () => {

  const options = [
    { label: 'Author', value: 'a' },
    { label: 'Editor', value: 'e' },
  ];

  const [option, setOption] = useState('a');

  return (
    <RadioControl
      label="User type"
      help="The type of the current user"
      selected={option}
      options={ options }
      onChange={option => {
        setOption( option );
      }}
    />
  )
};