import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { CheckboxControl } from "@wordpress/components";
import CheckboxControlReadme from '@wordpress/components/src/checkbox-control/README.md'

storiesOf('Components|CheckboxControl', module)
  .addDecorator(withReadme(CheckboxControlReadme))
  .add('Basic', () => 
      <CheckboxControl
        label="Is author"
        onChange={ action( 'Changed' ) }
      />
  )
  .add('Checked', () => 
      <CheckboxControl
        label="Is author"
        checked={ true }
        onChange={ action( 'Changed' ) }
      />
  )
  .add('With Heading', () => 
      <CheckboxControl
        heading="User"
        label="Is author"
        checked={ true }
        onChange={ action( 'Changed' ) }
      />
  )
  .add('With Help', () => 
      <CheckboxControl
        label="Is author"
        help="Is the user a author or not?"
        checked={ true }
        onChange={ action( 'Changed' ) }
      />
  );

