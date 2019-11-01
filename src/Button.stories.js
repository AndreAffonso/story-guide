import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import { Icon } from './Icon';
import { StoryLinkWrapper } from './StoryLinkWrapper';

function ButtonWrapper(props) {
  return <Button onClick={action('button action click')} {...props} >Conheça a Pier </Button>;
}

export default {
  title: 'Design System|Button',
  component: Button,
};

export const allButtons = () => (
  <div>
    <Button >Conheça a Pier</Button>
  </div>
);

allButtons.story = {
  name: 'Primary Button',
};

export const ctaButton = () => (
  <div>
    <Button type="cta">Pedir Convite</Button>
  </div>
);

ctaButton.story = {
  name: 'Cta Button',
};


const StyledIcon= styled(Icon)`
  margin-right: 10px;
`

export const leftIcon = () => (
  <div>
    <Button > <StyledIcon icon="lock" aria-label="Happy face"/> Pagar</Button>
  </div>
);

leftIcon.story = {
  name: 'Left Icon',
};

export const facebookButton = () => (
  <div>
    <Button > <StyledIcon icon="facebook" aria-label="Happy face"/> Continuar com facebook</Button>
  </div>
);

facebookButton.story = {
  name: 'Facebook',
};


export const disabledButton = () => (
  <div>
    <Button disabled> Botão desabilitado</Button>
  </div>
);

disabledButton.story = {
  name: 'Disabled',
};



// export const buttonWrapper = () => (
//   <div>
//     <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
//     <br />
//   </div>
// );\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// buttonWrapper.story = {
//   name: 'button wrapper',
// };

// export const anchorWrapper = () => (
//   <div>
//     <StoryLinkWrapper to="http://storybook.js.org">Original Link Wrapper</StoryLinkWrapper>
//     <br />
//     <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" href="http://storybook.js.org">
//       Primary
//     </Button>
//     <Button ButtonWrapper={StoryLinkWrapper} appearance="secondary" href="http://storybook.js.org">
//       Secondary
//     </Button>
//     <Button ButtonWrapper={StoryLinkWrapper} appearance="tertiary" href="http://storybook.js.org">
//       Tertiary
//     </Button>
//     <Button ButtonWrapper={StoryLinkWrapper} appearance="outline" href="http://storybook.js.org">
//       Outline
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="primaryOutline"
//       href="http://storybook.js.org"
//     >
//       Outline primary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="secondaryOutline"
//       href="http://storybook.js.org"
//     >
//       Outline secondary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="primary"
//       isDisabled
//       href="http://storybook.js.org"
//     >
//       Disabled
//     </Button>
//     <br />
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="primary"
//       isLoading
//       href="http://storybook.js.org"
//     >
//       Primary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="secondary"
//       isLoading
//       href="http://storybook.js.org"
//     >
//       Secondary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="tertiary"
//       isLoading
//       href="http://storybook.js.org"
//     >
//       Tertiary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="outline"
//       isLoading
//       href="http://storybook.js.org"
//     >
//       Outline
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="outline"
//       isLoading
//       loadingText="Custom..."
//       href="http://storybook.js.org"
//     >
//       Outline
//     </Button>
//     <br />
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="primary"
//       size="small"
//       href="http://storybook.js.org"
//     >
//       Primary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="secondary"
//       size="small"
//       href="http://storybook.js.org"
//     >
//       Secondary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="tertiary"
//       size="small"
//       href="http://storybook.js.org"
//     >
//       Tertiary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="outline"
//       size="small"
//       href="http://storybook.js.org"
//     >
//       Outline
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="primary"
//       isDisabled
//       size="small"
//       href="http://storybook.js.org"
//     >
//       Disabled
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="outline"
//       size="small"
//       containsIcon
//       href="http://storybook.js.org"
//     >
//       <Icon icon="link" aria-label="Link" />
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="outline"
//       size="small"
//       href="http://storybook.js.org"
//     >
//       <Icon icon="link" />
//       Link
//     </Button>
//   </div>
// );

// anchorWrapper.story = {
//   name: 'anchor wrapper',
// };
