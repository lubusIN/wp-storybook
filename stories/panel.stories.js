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
import { Panel } from '@wordpress/components';
import PanelReadme from '@wordpress/components/src/panel/README.md';

/**
 * Stories
 */
storiesOf('Components|Panel', module)
  .addDecorator(withReadme(PanelReadme))
  .add('Basic', () => (
    <Panel header="My Panel">
      My Panel Content (use custom markup or components)
    </Panel>
  ));