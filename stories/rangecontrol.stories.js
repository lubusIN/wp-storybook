import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { RangeControl } from '@wordpress/components';
import RangeControlReadme from '@wordpress/components/src/range-control/README.md';

storiesOf('Components|RangeControl', module)
  .addDecorator(withReadme(RangeControlReadme))
  .add('Basic', () => (
    <RangeControl
        label="Columns"
        value={ 6 }
        onChange={ action( 'changed' ) }
        min={ 2 }
        max={ 10 }
    />
  ))
  .add('With Help', () => (
    <RangeControl
        label="Columns"
        help="Number of columns"
        value={ 6 }
        onChange={ action( 'changed' ) }
        min={ 2 }
        max={ 10 }
    />
  ))
  .add('With Before Icon', () => (
    <RangeControl
        label="Columns"
        help="Number of columns"
        beforeIcon="layout"
        value={ 6 }
        onChange={ action( 'changed' ) }
        min={ 2 }
        max={ 10 }
    />
  ))
  .add('With After Icon', () => (
    <RangeControl
        label="Columns"
        help="Number of columns"
        afterIcon="layout"
        value={ 6 }
        onChange={ action( 'changed' ) }
        min={ 2 }
        max={ 10 }
    />
  ))
  .add('With Reset', () => (
    <RangeControl
        label="Columns"
        help="Number of columns"
        afterIcon="layout"
        value={ 6 }
        onChange={ action( 'changed' ) }
        min={ 2 }
        max={ 10 }
        allowReset={ true }
    />
  ));