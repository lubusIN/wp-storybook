/**
 * External Dependencies
 */
import React from 'react';

import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

/**
 * WordPress Dependencies
 */
import { TabPanel } from '@wordpress/components';
import TabPanelReadme from '@wordpress/components/src/tab-panel/README.md';

/**
 * Stories
 */
export default {
  title: 'Components|TabPanel',
  decorators: [withReadme(TabPanelReadme)],
};

export const basic = () => {
 const tabs = [
    {
      name: 'tab1',
      title: 'Tab 1',
      className: 'tab-one',
    },
    {
      name: 'tab2',
      title: 'Tab 2',
      className: 'tab-two',
    },
  ];

  return (
    <TabPanel
      className="my-tab-panel"
      activeClass="active-tab"
      onSelect={action('Selected')}
      tabs={tabs}
    >
      {tab => <p>{tab.title} content</p>}
    </TabPanel>
  )
};

export const orientation = () => {
 const tabs = [
    {
      name: 'tab1',
      title: 'Tab 1',
      className: 'tab-one',
    },
    {
      name: 'tab2',
      title: 'Tab 2',
      className: 'tab-two',
    },
  ];

  return (
    <TabPanel
      className="my-tab-panel"
      activeClass="active-tab"
      onSelect={action('Selected')}
      tabs={tabs}
      orientation="vertical"
    >
      {tab => <p>{tab.title} content</p>}
    </TabPanel>
  )
};