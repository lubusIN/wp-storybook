import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { RadioControl } from '@wordpress/components';

const RadioControlstyles = {
  width: '240px',
  margin: 'auto',
  marginTop: '10%'
};

const RadioControlDecorator = (storyFn) => (
  <div style={RadioControlstyles}>
    { storyFn() }
  </div>
);

storiesOf('RadioControl', module)
  .addDecorator(RadioControlDecorator)
  .add('Basic', () => (
    <React.Fragment>
     <RadioControl
        label="User type"
        help="The type of the current user"
        selected={ 'a' }
        options={ [
            { label: 'Author', value: 'a' },
            { label: 'Editor', value: 'e' },
            { label: 'User', value: 'u' },
            { label: 'Content Manager', value: 'c' },
        ] }
        onChange={ action( 'changed' ) }
    />
    </React.Fragment>
  ));