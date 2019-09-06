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
import { PanelBody } from '@wordpress/components';
import PanelBodyReadme from '@wordpress/components/src/panel/README.md';

/**
 * Stories
 */
storiesOf('Components|PanelBody', module)
  .addDecorator(withReadme(PanelBodyReadme))
  .add('Basic', () => (
    <React.Fragment>
      <PanelBody
        title="My Block s Settings"
        initialOpen={true}
      >
        My Panel Inputs and Labels
        </PanelBody>
    </React.Fragment>
  ))
  .add('With Header Icon', () => (
    <React.Fragment>
      <PanelBody
        title="My Block Settings"
        icon="welcome-widgets-menus"
      >
        My Panel Inputs and Labels
        </PanelBody>
    </React.Fragment>
  ))
  .add('Collasped', () => (
    <React.Fragment>
      <PanelBody
        title="My Block Settings"
        initialOpen={false}
      >
        My Panel Inputs and Labels
        </PanelBody>
    </React.Fragment>
  ));