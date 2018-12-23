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
          <Button isDefault onClick={ action( 'Clicked' ) }>Left</Button>
          <Button isPrimary onClick={ action( 'Clicked' ) }>Right</Button>
      </ButtonGroup>
      <br/>
      <br/>
      <ButtonGroup>
          <Button isDefault onClick={ action( 'Clicked' ) }>S</Button>
          <Button isDefault onClick={ action( 'Clicked' ) }>M</Button>
          <Button isDefault onClick={ action( 'Clicked' ) }>L</Button>
          <Button isDefault onClick={ action( 'Clicked' ) }>XL</Button>
          <Button isPrimary onClick={ action( 'Clicked' ) }>XXL</Button>
      </ButtonGroup>
    </React.Fragment>

  ));

