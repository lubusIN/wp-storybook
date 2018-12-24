import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { Spinner } from '@wordpress/components';
import SpinnerReadme from '@wordpress/components/src/spinner/README.md';

storiesOf('Components|Spinner', module)
  .addDecorator(withReadme(SpinnerReadme))
  .add('Basic', () => (
    <Spinner />
));