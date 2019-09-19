/**
 * External Dependencies
 */
import React from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { Panel } from '@wordpress/components';
import PanelReadme from '@wordpress/components/src/panel/README.md';

export default {
  title: 'Components|Panel',
  decorators: [withReadme(PanelReadme)],
};

export const basic = () => (
  <Panel header="My Panel">My Panel Content (use custom markup or components)</Panel>
);