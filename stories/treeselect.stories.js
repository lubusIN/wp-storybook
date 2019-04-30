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
import { TreeSelect } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import TreeSelectReadme from '@wordpress/components/src/button/README.md';

/**
 * Stories
 */
const TreeSelectBasic = withState({
    page: 'p21',
})(({ page, setState }) => (
    <TreeSelect
        label="Parent page"
        noOptionLabel="No parent page"
        onChange={(page) => setState({ page })}
        selectedId={page}
        tree={[
            {
                name: 'Page 1',
                id: 'p1',
                children: [
                    { name: 'Descend 1 of page 1', id: 'p11' },
                    { name: 'Descend 2 of page 1', id: 'p12' },
                ],
            },
            {
                name: 'Page 2',
                id: 'p2',
                children: [
                    {
                        name: 'Descend 1 of page 2',
                        id: 'p21',
                        children: [
                            {
                                name: 'Descend 1 of Descend 1 of page 2',
                                id: 'p211',
                            },
                        ],
                    },
                ],
            },
        ]}
    />
));

storiesOf('Components|TreeSelect', module)
    .addDecorator(withReadme(TreeSelectReadme))
    .add('Basic', () => <TreeSelectBasic />);