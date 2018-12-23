import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { RangeControl } from '@wordpress/components';

const RangeControlStyles = {
  width: '280px',
  margin: 'auto',
  marginTop: '10%'
};

const RangeControlDecorator = (storyFn) => (
  <div style={RangeControlStyles}>
    { storyFn() }
  </div>
);

storiesOf('RangeControl', module)
  .addDecorator(RangeControlDecorator)
  .add('Basic', () => (
    <React.Fragment>
      <RangeControl
          label="Columns"
          value={ 6 }
          onChange={ action( 'changed' ) }
          min={ 2 }
          max={ 10 }
      />
    </React.Fragment>
  ))
  .add('With Help', () => (
    <React.Fragment>
      <RangeControl
          label="Columns"
          help="Number of columns"
          value={ 6 }
          onChange={ action( 'changed' ) }
          min={ 2 }
          max={ 10 }
      />
    </React.Fragment>
  ))
  .add('With Before Icon', () => (
    <React.Fragment>
      <RangeControl
          label="Columns"
          help="Number of columns"
          beforeIcon="layout"
          value={ 6 }
          onChange={ action( 'changed' ) }
          min={ 2 }
          max={ 10 }
      />
    </React.Fragment>
  ))
  .add('With After Icon', () => (
    <React.Fragment>
      <RangeControl
          label="Columns"
          help="Number of columns"
          afterIcon="layout"
          value={ 6 }
          onChange={ action( 'changed' ) }
          min={ 2 }
          max={ 10 }
      />
    </React.Fragment>
  ))
  .add('With Reset', () => (
    <React.Fragment>
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
    </React.Fragment>
  ));