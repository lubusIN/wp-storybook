import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { MenuGroup, MenuItemsChoice } from '@wordpress/components';
import MenuItemsChoiceReadme from '@wordpress/components/src/menu-items-choice/README.md'

storiesOf('Components|MenuItemsChoice', module)
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