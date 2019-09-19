/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { CheckboxControl } from '@wordpress/components';
import CheckboxControlReadme from '@wordpress/components/src/checkbox-control/README.md';

/**
 * Stories
 */
export default {
  title: 'Components|CheckboxControl',
  decorators: [withReadme(CheckboxControlReadme)],
};

export const basic = () => {
  const [isChecked, setIsChecked] = useState();

  return (
    <CheckboxControl
      label="Is author"
      checked={isChecked}
      onChange={isChecked => {
        setIsChecked( isChecked );
      }}
    />)
};

export const checked = () => {
  const [isChecked, setIsChecked] = useState();

  return (
    <CheckboxControl
      label="Is author"
      checked={isChecked}
      onChange={isChecked => {
        setIsChecked( isChecked );
      }}
  />
  )
};

export const withHeading = () => {
  const [isChecked, setIsChecked] = useState();

  return (
    <CheckboxControl
      heading="User"
      label="Is author"
      checked={isChecked}
      onChange={isChecked => {
        setIsChecked( isChecked );
      }}
    />
  );
};

export const withHelp = () => {
  const [isChecked, setIsChecked] = useState();

  return (
    <CheckboxControl
      heading="User"
      label="Is author"
      help="Is the user a author or not?"
      checked={isChecked}
      onChange={isChecked => {
        setIsChecked( isChecked );
      }}
    />
  );
};