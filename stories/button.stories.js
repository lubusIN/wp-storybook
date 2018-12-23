import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';
import { withLiveEditScope } from 'storybook-addon-react-live-edit';

import { Button } from "@wordpress/components";
import ButtonReadme from '@wordpress/components/src/button/README.md'

const ButtonStyles = {
    marginTop: '10%',
    textAlign: 'center'
};

const ButtonDecorator = (storyFn) => (
  <div style={ButtonStyles}>
    { storyFn() }
  </div>
);

storiesOf('Button', module)
  .addDecorator(ButtonDecorator)
  .addDecorator(withReadme(ButtonReadme)) 
  .addDecorator(withLiveEditScope({ React, Button, action }))
  .addLiveSource('Basic', `return <Button onClick={action('clicked')}>Click Me</Button>`)
  .addLiveSource('Href', `return <Button href="https://www.wordpress.org" onClick={action('clicked')}>Click Me</Button>`)
  .addLiveSource('Default', `return <Button isDefault onClick={action('clicked')}>Click Me</Button>`)
  .addLiveSource('Primary', `return <Button isPrimary onClick={action('clicked')}>Click Me</Button>`)
  .addLiveSource('Large', `return <Button isLarge onClick={action('clicked')}>Click Me</Button>`)
  .addLiveSource('Small', `return <Button isSmall onClick={action('clicked')}>Click Me</Button>`)
  .addLiveSource('Toggled', `return <Button isToggled onClick={action('clicked')}>Click Me</Button>`)
  .addLiveSource('Busy', `return <Button isPrimary isBusy onClick={action('clicked')}>Click Me</Button>`)
  .addLiveSource('Link', `return <Button isLink onClick={action('clicked')}>Click Me</Button>`)
  .addLiveSource('Focus', `return <Button focus onClick={action('clicked')}>Click Me</Button>`);