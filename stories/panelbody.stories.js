import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { PanelBody } from '@wordpress/components';

const PanelBodyStyles = {
  width: '280px',
  margin: 'auto',
  marginTop: '10%'
};

const PanelBodyDecorator = (storyFn) => (
  <div style={PanelBodyStyles}>
    { storyFn() }
  </div>
);

storiesOf('PanelBody', module)
  .addDecorator(PanelBodyDecorator)
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

