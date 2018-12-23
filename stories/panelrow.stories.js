import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { PanelRow, Button} from '@wordpress/components';
import PanelRowReadme from '@wordpress/components/src/panel/README.md'

const PanelRowStyles = {
  width: 'auto',
  margin: 'auto',
  marginTop: '10%'
};

const PanelRowDecorator = (storyFn) => (
  <div style={PanelRowStyles}>
    { storyFn() }
  </div>
);

storiesOf('PanelRow', module)
  .addDecorator(PanelRowDecorator)
  .addDecorator(withReadme(PanelRowReadme))
  .add('Basic', () => (
    <React.Fragment>
      <PanelRow>
        <Button isDefault onClick={action('clicked')}>Default</Button>
        <Button isLarge onClick={action('clicked')}>Large</Button>
        <Button isLarge isBusy onClick={action('clicked')}>Large & Busy</Button>
        <Button isSmall onClick={action('clicked')}>Small</Button>
        <Button isPrimary onClick={action('clicked')}>Primary</Button>
        <Button isPrimary isBusy onClick={action('clicked')}>Primary & Busy</Button>
      </PanelRow>
    </React.Fragment>
  ));

