/**
 * External Dependencies
 */
import React from 'react';

/**
 * Storybook Dependencies
 */
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { RangeControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import RangeControlReadme from '@wordpress/components/src/range-control/README.md';

/**
 * Stories
 */
const RangeControlBasic = withState({
  columns: 2,
})(({ columns, setState }) => (
  <RangeControl
    label="Columns"
    value={columns}
    onChange={(columns) => setState({ columns })}
    min={2}
    max={10}
  />
));

const RangeControlWithHelp = withState({
  columns: 2,
})(({ columns, setState }) => (
  <RangeControl
    label="Columns"
    help="Number of columns"
    value={columns}
    onChange={(columns) => setState({ columns })}
    min={2}
    max={10}
  />
));

const RangeControlWithBeforeIcon = withState({
  columns: 2,
})(({ columns, setState }) => (
  <RangeControl
    label="Columns"
    help="Number of columns"
    beforeIcon="layout"
    value={columns}
    onChange={(columns) => setState({ columns })}
    min={2}
    max={10}
  />
));

const RangeControlWithAfterIcon = withState({
  columns: 2,
})(({ columns, setState }) => (
  <RangeControl
    label="Columns"
    help="Number of columns"
    afterIcon="layout"
    value={columns}
    onChange={(columns) => setState({ columns })}
    min={2}
    max={10}
  />
));

const RangeControlWithReset = withState({
  columns: 2,
})(({ columns, setState }) => (
  <RangeControl
    label="Columns"
    help="Number of columns"
    afterIcon="layout"
    value={columns}
    onChange={(columns) => setState({ columns })}
    min={2}
    max={10}
    allowReset={true}
  />
));

storiesOf('Components|RangeControl', module)
  .addDecorator(withReadme(RangeControlReadme))
  .add('Basic', () => <RangeControlBasic />)
  .add('With Help', () => <RangeControlWithHelp />)
  .add('With Before Icon', () => <RangeControlWithBeforeIcon />)
  .add('With After Icon', () => <RangeControlWithAfterIcon />)
  .add('With Reset', () => <RangeControlWithReset />);