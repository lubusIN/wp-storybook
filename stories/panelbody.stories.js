import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { PanelBody, PanelRow } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
  margin: 'auto',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

//addDecorator(CenterDecorator);

storiesOf('PanelBody', module)
  .add('Basic', () => (
    <React.Fragment>
       <PanelBody
            title="My Block Settings"
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

