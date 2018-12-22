import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { RadioControl } from '@wordpress/components';
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

storiesOf('RadioControl', module)
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