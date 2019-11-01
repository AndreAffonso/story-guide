import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';
import { withA11y } from '@storybook/addon-a11y';


addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', false, /Intro\.stories\.mdx/),
    require.context('../src', false, /Button\.stories\.js/),
 
    // require.context('../src', true, /\.stories\.(js|mdx)$/),
  ],
  module
);