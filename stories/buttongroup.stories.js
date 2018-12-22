import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, ButtonGroup } from "@wordpress/components";
import "@wordpress/components/build-style/style.css";

const styles = {
    textAlign: 'center',
  };
  const CenterDecorator = (storyFn) => (
    <div style={styles}>
      { storyFn() }
    </div>
  );
addDecorator(CenterDecorator);

storiesOf('Button Group', module)
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

