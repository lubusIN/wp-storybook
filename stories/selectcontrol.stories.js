import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { SelectControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import SelectControlReadme from '@wordpress/components/src/select-control/README.md';

const SelectControlBasic = withState( {
    size: '50%',
} )( ( { size, setState } ) => ( 
    <SelectControl
        label="Size"
        value={ size }
        options={ [
            { label: 'Big', value: '100%' },
            { label: 'Medium', value: '50%' },
            { label: 'Small', value: '25%' },
        ] }
        onChange={ ( size ) => { setState( { size } ) } }
    />
) );

const SelectControlHelp = withState( {
    size: '50%',
} )( ( { size, setState } ) => ( 
    <SelectControl
        label="Size"
        help="Select font size"
        value={ size }
        options={ [
            { label: 'Big', value: '100%' },
            { label: 'Medium', value: '50%' },
            { label: 'Small', value: '25%' },
        ] }
        onChange={ ( size ) => { setState( { size } ) } }
    />
) );

storiesOf('Components|SelectControl', module)
  .addDecorator(withReadme(SelectControlReadme))
  .add('Basic', () => <SelectControlBasic />)
  .add('With Help', () => <SelectControlHelp />);