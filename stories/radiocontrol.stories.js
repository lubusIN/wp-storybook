/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { RadioControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import RadioControlReadme from '@wordpress/components/src/radio-control/README.md';

/**
 * Stories
 */
const RadioControlBasic = withState({
    option: 'a',
})(({ option, setState }) => (
    <RadioControl
        label="User type"
        help="The type of the current user"
        selected={option}
        options={[
            { label: 'Author', value: 'a' },
            { label: 'Editor', value: 'e' },
        ]}
        onChange={(option) => { setState({ option }) }}
    />
));

storiesOf('Components|RadioControl', module)
    .addDecorator(withReadme(RadioControlReadme))
    .add('Basic', () => <RadioControlBasic />);