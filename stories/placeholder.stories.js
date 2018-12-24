import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { Placeholder } from '@wordpress/components';
import PlaceholderReadme from '@wordpress/components/src/placeholder/README.md';

storiesOf('Components|PlaceHolder', module)
  .addDecorator(withReadme(PlaceholderReadme))
  .add('Basic', () => (
    <Placeholder
      icon="wordpress-alt"
      label="Placeholder"
    />
  ));