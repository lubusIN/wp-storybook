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
import { BaseControl } from '@wordpress/components';
import BaseControlReadme from '@wordpress/components/src/base-control/README.md';

/**
 * Stories
 */
const BaseControlBasic = () => (
    <BaseControl
        id="textarea-1"
        label="Field Label"
        help="Help text for field"
    >
        <textarea
            id="textarea-1"
        />
    </BaseControl>
);

storiesOf('Components|BaseControl', module)
    .addDecorator(withReadme(BaseControlReadme))
    .add('Basic', () => <BaseControlBasic />);