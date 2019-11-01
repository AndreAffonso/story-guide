import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';
import { color, typography } from './shared/styles';
import { easing } from './shared/animation';


const APPEARANCES = {
  CTA: 'cta',
  PRIMARY: 'primary',
  FACEBOOK: 'facebook'
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  width: 326px;
  height: 56px;
  text-transform: uppercase;
  background: #5B5ADB;
  border-radius: 4px;
  color: white;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  /* identical to box height, or 185% */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 1px;

  &:hover{
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1);
  }


  &:active{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #5B5ADB;
  }

  &:disabled{
    background: #E8E8E8;  
    color: #737387;
    cursor: not-allowed;
  }

  ${props =>
    props.type === 'cta' &&
    css`
      background: linear-gradient(90deg, #FE7577 0%, #FA6DB3 100%);

      &:active{
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, #FE7577 0%, #FA6DB3 100%);
      }
    `};


    ${props =>
    props.type === 'facebook' &&
    css`
      background: #4267B2;
      &:active{
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, #FE7577 0%, #FA6DB3 100%);
      }
    `};
`;

const ButtonLink = StyledButton.withComponent('a');


export function Button({
  isDisabled,
  isLoading,
  loadingText,
  isLink,
  children,
  ButtonWrapper,
  type,
  ...props
}) {


  return (
    <StyledButton type={type} isLoading={isLoading} disabled={isDisabled} {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: "primary",
  isLoading: PropTypes.bool,
  /**
   When a button is in the loading state you can supply custom text
  */
  loadingText: PropTypes.node,
  /**
   Buttons that have hrefs should use <a> instead of <button>
  */
  isLink: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(APPEARANCES)),
  isDisabled: PropTypes.bool,
  /**
   Prevents users from clicking on a button multiple times (for things like payment forms)
  */
  isUnclickable: PropTypes.bool,
  /**
   Buttons with icons by themselves have a circular shape
  */
  containsIcon: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
};

Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  isLink: false,
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
};
