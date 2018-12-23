import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TabPanel } from '@wordpress/components';

const TabPanelStyles = {
    width: '280px',
    margin: 'auto',
    marginTop: '10%'
};
  
const TabPanelDecorator = (storyFn) => (
    <div style={TabPanelStyles}>
        { storyFn() }
    </div>
);
  
storiesOf('TabPanel', module)
    .addDecorator( TabPanelDecorator )
    .add('Basic', () => (
        <TabPanel className="my-tab-panel"
            activeClass="active-tab"
            onSelect={ action( 'Selected' ) }
            tabs={ [
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
            ] }>
            {
                ( tab ) => <p>{ tab.title }</p>
            }
        </TabPanel>
        ))
        .add('Orientation', () => (
            <TabPanel className="my-tab-panel"
            activeClass="active-tab"
            onSelect={ action( 'Selected' ) }
            orientation="vertical"
            tabs={ [
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
            ] }>
            {
                ( tab ) => <p>{ tab.title }</p>
            }
        </TabPanel>
    ));

