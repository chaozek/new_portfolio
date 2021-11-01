import { css } from "styled-components";
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 375px) {
      ${props}
    } ;
  `;
};
export const midMobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    } ;
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 800px) {
      ${props}
    } ;
  `;
};
export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 1000px) {
      ${props}
    } ;
  `;
};
