import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Spinner } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

storiesOf('Spinner', module)
  .add('Basic', () => (
    <Spinner />
));

