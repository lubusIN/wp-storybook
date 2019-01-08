import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { BaseControl } from '@wordpress/components';
import BaseControlReadme from '@wordpress/components/src/base-control/README.md';

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
