import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { PanelBody } from '@wordpress/components';
import PanelBodyReadme from '@wordpress/components/src/panel/README.md';

storiesOf('Components|PanelBody', module)
  .addDecorator(withReadme(PanelBodyReadme))
  .add('Basic', () => (
    <React.Fragment>
       <PanelBody
            title="My Block s Settings"
            initialOpen={ true }
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
            initialOpen={ false }
        >
          My Panel Inputs and Labels
        </PanelBody>
    </React.Fragment>
  ));

