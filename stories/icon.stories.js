/**
 * External Dependencies
 */
import React from 'react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Icon } from '@wordpress/components';
import IconReadme from '@wordpress/components/src/icon/README.md';

/**
 * Stories
 */
const MyIconComponent = () => (
  <svg>
    <path d="M5 4v3h5.5v12h3V7H19V4z" />
  </svg>
);

export default {
  title: 'Components|Icon',
  decorators: [withReadme(IconReadme)],
};

export const withDashicon = () => <Icon icon="screenoptions" />;

export const withFunction = () => (
  <Icon
    icon={() => (
      <svg>
        <path d="M5 4v3h5.5v12h3V7H19V4z" />
      </svg>
    )}
  />
);

export const withComponent = () => <Icon icon={MyIconComponent} />;

export const withSvg = () => (
  <Icon
    icon={
      <svg>
        <path d="M5 4v3h5.5v12h3V7H19V4z" />
      </svg>
    }
  />
);