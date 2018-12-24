import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { RadioControl } from '@wordpress/components';
import RadioControlReadme from '@wordpress/components/src/radio-control/README.md'

storiesOf('Components|RadioControl', module)
  .addDecorator(withReadme(RadioControlReadme))
  .add('Basic', () => (
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
  ));