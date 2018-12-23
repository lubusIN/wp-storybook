import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Panel } from '@wordpress/components';

const PanelStyles = {
  width: '80%',
  margin: 'auto',
  marginTop: '10%',
};

const PanelDecorator = (storyFn) => (
  <div style={PanelStyles}>
    { storyFn() }
  </div>
);

storiesOf('Panel', module)
  .addDecorator(PanelDecorator)
  .add('Basic', () => (
    <React.Fragment>
      <Panel header="My Panel">
         My Panel Content (use custom markup or components)
      </Panel>
    </React.Fragment>
  ));

