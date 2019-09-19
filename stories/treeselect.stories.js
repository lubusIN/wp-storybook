/**
 * External Dependencies
 */
import React, { useState } from 'react';

import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { TreeSelect } from '@wordpress/components';
import TreeSelectReadme from '@wordpress/components/src/button/README.md';

/**
 * Stories
 */
export default {
  title: 'Components|TreeSelect',
  decorators: [withReadme(TreeSelectReadme)],
};

export const basic = () => {
  const [page, setPage] = useState( 'p21' );

  const pages = [
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
  ];

 return (
    <TreeSelect
      label="Parent page"
      noOptionLabel="No parent page"
      onChange={page => setPage( page )}
      selectedId={page}
      tree={pages}
    />
  )
};