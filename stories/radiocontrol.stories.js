import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { RadioControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import RadioControlReadme from '@wordpress/components/src/radio-control/README.md';

const RadioControlBasic = withState( {
    option: 'a',
} )( ( { option, setState } ) => ( 
    <RadioControl
        label="User type"
        help="The type of the current user"
        selected={ option }
        options={ [
            { label: 'Author', value: 'a' },
            { label: 'Editor', value: 'e' },
        ] }
        onChange={ ( option ) => { setState( { option } ) } }
    />
) );

storiesOf('Components|RadioControl', module)
  .addDecorator(withReadme(RadioControlReadme))
  .add('Basic', () => <RadioControlBasic />);