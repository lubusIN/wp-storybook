import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { Panel } from '@wordpress/components';
import PanelReadme from '@wordpress/components/src/panel/README.md';

storiesOf('Components|Panel', module)
  .addDecorator(withReadme(PanelReadme))
  .add('Basic', () => (
    <Panel header="My Panel">
        My Panel Content (use custom markup or components)
    </Panel>
  ));

