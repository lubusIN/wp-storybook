import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { Dashicon } from '@wordpress/components';
import DashiconReadme from '@wordpress/components/src/dashicon/README.md'

const DashiconStyles = {
  textAlign: 'center',
  marginTop: '10%'
};

const DashiconDecorator = (storyFn) => (
  <div style={DashiconStyles}>
    { storyFn() }
  </div>
);

storiesOf('Dashicon', module)
  .addDecorator(DashiconDecorator)
  .addDecorator(withReadme(DashiconReadme))
  .add('Basic', () => (
    <React.Fragment>
      <Dashicon icon="admin-home" />
      <br/>
      <br/>
      <Dashicon icon="products" />
      <br/>
      <br/>
      <Dashicon icon="wordpress" />
    </React.Fragment>
  ));

