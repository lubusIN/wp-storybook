import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { MenuGroup, MenuItemsChoice } from '@wordpress/components';
import MenuItemsChoiceReadme from '@wordpress/components/src/menu-items-choice/README.md'

const MenuItemsChoiceStyles = {
  width: '240px',
  margin: 'auto',
  marginTop: '10%'
};

const MenuItemsChoiceDecorator = (storyFn) => (
  <div style={MenuItemsChoiceStyles}>
    { storyFn() }
  </div>
);

storiesOf('MenuItemsChoice', module)
  .addDecorator(MenuItemsChoiceDecorator)
  .addDecorator(withReadme(MenuItemsChoiceReadme))
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
              onSelect={ action( 'Selected' ) }
          />
      </MenuGroup>
    </React.Fragment>
  ));