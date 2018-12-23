import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, ButtonGroup } from "@wordpress/components";

const ButtonGroupStyles = {
  marginTop: '10%',
  textAlign: 'center',
};
  
const ButtonGroupDecorator = (storyFn) => (
  <div style={ButtonGroupStyles}>
    { storyFn() }
  </div>
);

storiesOf('Button Group', module)
  .addDecorator(ButtonGroupDecorator)
  .add('Basic', () => (
    <React.Fragment>
      <ButtonGroup>
          <Button isDefault>Left</Button>
          <Button isPrimary>Right</Button>
      </ButtonGroup>
      <br/>
      <br/>
      <ButtonGroup>
          <Button isDefault>S</Button>
          <Button isDefault>M</Button>
          <Button isDefault>L</Button>
          <Button isDefault>XL</Button>
          <Button isPrimary>XXL</Button>
      </ButtonGroup>
    </React.Fragment>

  ));

