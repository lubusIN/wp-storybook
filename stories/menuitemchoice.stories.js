import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { MenuGroup, MenuItemsChoice } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
  textAlign: 'center',
  width: '20%',
  margin: 'auto',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

storiesOf('MenuItemsChoice', module)
  .add('Basic', () => (
    <React.Fragment>
       <MenuGroup label="Editor">
          <MenuItemsChoice
              choices={ [
                {
                    value: 'visual',
                    label: 'Visual Editor',
                },
                {
                    value: 'text',
                    label: 'Code Editor',
                },
            ] }
              value={ 'text' }
          />
      </MenuGroup>
    </React.Fragment>
  ));

