import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import s from '@/styles/global.style'

const RootStyle = createGlobalStyle`
  ${normalize()};

  :root[data-color-mode='light'] {
    --sim-title: #212121;
    --sim-text: #767676;
    --sim-text-secondary: #999999;
    --sim-text-disabled: #d8d8d8;

    --sim-bg: #ffffff;
    --sim-bg-secondary: #f8f8f8;
    --sim-bg-tertiary: #eeeeee;
    --sim-button: #141414;
    --sim-button-secondary: #f2f2f2;

    --sim-dark: #030303;
    --sim-light: #ffffff;

    --sim-border: #e5e5e5;
    --sim-border-hover: #c6c6c6;
    --sim-divider: #dfdfdf;
    --sim-line: #e1e1e1;

    --sim-icon: #cccccc;
    --sim-shadow: 0px 5px 10px rgb(0 0 0 / 5%);

    --sim-red-50: #fefaf9;
    --sim-red-100: #fdf5f2;
    --sim-red-200: #fbe6df;
    --sim-red-300: #f9d7cb;
    --sim-red-400: #f4b9a5;
    --sim-red-500: #ef9b7e;
    --sim-red-600: #d78c71;
    --sim-red-700: #b3745f;
    --sim-red-800: #8f5d4c;
    --sim-red-900: #754c3e;

    --sim-blue-50: #f7fcfd;
    --sim-blue-100: #eef9fb;
    --sim-blue-200: #d5f1f4;
    --sim-blue-300: #bbe8ee;
    --sim-blue-400: #88d7e1;
    --sim-blue-500: #55c6d4;
    --sim-blue-600: #4db2bf;
    --sim-blue-700: #40959f;
    --sim-blue-800: #33777f;
    --sim-blue-900: #2a6168;

    --sim-gray-50: #f8f8f8;
    --sim-gray-100: #f1f1f1;
    --sim-gray-200: #dddddd;
    --sim-gray-300: #c8c8c8;
    --sim-gray-400: #9e9e9e;
    --sim-gray-500: #757575;
    --sim-gray-600: #696969;
    --sim-gray-700: #585858;
    --sim-gray-800: #464646;
    --sim-gray-900: #393939;
  }

  :root[data-color-mode='dark'] {
    --sim-title: #ffffff;
    --sim-text: #cccccc;
    --sim-text-secondary: #aaaaaa;
    --sim-text-disabled: #757575;

    --sim-bg: #1f1f1f;
    --sim-bg-secondary: #2d2d2d;
    --sim-bg-tertiary: #393939;
    --sim-button: #f4f4f4;
    --sim-button-secondary: #2d2d2d;

    --sim-dark: #ffffff;
    --sim-light: #030303;

    --sim-border: #575757;
    --sim-border-hover: #787878;
    --sim-divider: #4c4c4c;
    --sim-line: #707070;

    --sim-icon: #8e8e8e;
    --sim-shadow: none;

    --sim-red-50: #291e1c;
    --sim-red-100: #412d27;
    --sim-red-200: #563d34;
    --sim-red-300: #775144;
    --sim-red-400: #a26c59;
    --sim-red-500: #ce876e;
    --sim-red-600: #e5b29f;
    --sim-red-700: #f3dbcf;
    --sim-red-800: #f8eee9;
    --sim-red-900: #faf1ec;

    --sim-blue-50: #172325;
    --sim-blue-100: #1e363a;
    --sim-blue-200: #28494e;
    --sim-blue-300: #31646a;
    --sim-blue-400: #3e8891;
    --sim-blue-500: #4babb7;
    --sim-blue-600: #73c4cc;
    --sim-blue-700: #a3dfe2;
    --sim-blue-800: #d6f2f3;
    --sim-blue-900: #ecfafa;

    --sim-gray-50: #171717;
    --sim-gray-100: #232323;
    --sim-gray-200: #313131;
    --sim-gray-300: #404040;
    --sim-gray-400: #535353;
    --sim-gray-500: #666666;
    --sim-gray-600: #777777;
    --sim-gray-700: #898989;
    --sim-gray-800: #989898;
    --sim-gray-900: #a5a5a5;
  }

  :root {
    --sim-radius-xs: 4px;
    --sim-radius-sm: 6px;
    --sim-radius: 6px;
    --sim-radius-md: 8px;
    --sim-radius-lg: 12px;
    --sim-radius-xl: 16px;
    --sim-radius-2xl: 24px;
    --sim-radius-full: 100px;
    --sim-rounded: 50%;

    --sim-space-2xs: 4px;
    --sim-space-xs: 8px;
    --sim-space-sm: 16px;
    --sim-space-md: 24px;
    --sim-space-lg: 32px;
    --sim-space-xl: 48px;
    --sim-space-2xl: 56px;
    --sim-space-3xl: 64px;
    --sim-space-4xl: 72px;
    --sim-space-5xl: 80px;

    --sim-text-xs: 12px;
    --sim-text-sm: 14px;
    --sim-text-md: 16px;
    --sim-text-lg: 18px;
    --sim-text-xl: 20px;
    --sim-text-2xl: 24px;
    --sim-text-3xl: 28px;
    --sim-text-4xl: 32px;

    --sim-font-family: 'Montserrat, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
    --sim-header-height: 56px;
    --sim-footer-height: 56px;
  }

   * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  ${s.mediaQuery({
    fontSize: ['100%', '87.5%', '62.5%']
  })}

  body {
    font-family: ${s['font-fmaily']};
    font-weight: 400;
    line-height: 1.5;
    background-color: var(--sim-bg-secondary);
    color: var(--sim-text);
  }

  a {
    text-decoration: none;
    color: var(--sim-text);

    &:hover {
      color: var(--sim-title);
    }
  }

  button, input {
    outline:0;
  }

  img {
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  .container {
    margin: 0 auto;
    ${s.mediaQuery({
      width: s['page-width']
    })};
  }

  .page-block {
    margin-bottom: var(--sim-space-2xl);
  }

  .divider-full {
    margin: var(--sim-space-md) auto;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid var(--sim-divider);
  }

  .divider {
    margin: var(--sim-space-xl) auto;
    width: 40%;
    height: 2px;
    background-color: var(--sim-divider);
    border-radius: var(--sim-radius-full);
  }

  .spin-container {
    box-sizing: border-box;
    ${s.flex('center', 'center')};
    padding: var(--sim-space-lg);
    width: 100%;
  }

  .wmde-markdown {
    background-color: var(--sim-bg-secondary);
    color: var(--sim-text);

    & > pre {
      background-color: var(--sim-bg-tertiary);
    }
  }

  .loading-spin {
    box-sizing: border-box;
    ${s.flex('center', 'center')};
    flex-direction: initial;
    padding: var(--sim-space-5xl);
    width: 100%;
    height: 100%;
  }
`

export default RootStyle
