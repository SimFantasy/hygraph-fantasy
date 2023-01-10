import styled from 'styled-components'
import s from '@/styles/global.style'

export const ManageLayoutWrap = styled.section`
  ${s.flex('space-between', 'stretch')};
  width: 100%;
  height: 100%;

  &.hide {
    .layout-sidebar {
      transform: translateX(-240px);
    }
    .layout-container {
      padding: var(--sim-navbar-height) var(--sim-space-md) var(--sim-space-md) var(--sim-space-md);

      .layout-navbar {
        left: 0;
        width: 100%;
      }
    }
  }

  .layout-sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    flex: 0 0 auto;
    height: 100%;
    box-shadow: 0px 7px 30px 0px rgb(113 122 131 / 11%);
    background-color: var(--sim-bg);
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    transform: none;
  }

  .layout-container {
    box-sizing: border-box;
    position: relative;
    box-sizing: border-box;
    margin-top: var(--sim-navbar-height);
    margin-left: var(--sim-sidebar-width);

    width: 100%;
    height: 100%;

    .layout-navbar {
      position: fixed;
      top: 0;
      right: 0;
      left: var(--sim-sidebar-width);
      width: calc(100vw - var(--sim-sidebar-width));
      height: var(--sim-navbar-height);
    }

    .layout-main {
      width: 100%;
      height: 100%;
    }
  }
`

export const SidebarWrap = styled.aside`
  box-sizing: border-box;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  /* gap: var(--sim-space-sm); */
  /* padding: var(--sim-space-sm); */
  width: var(--sim-sidebar-width);

  .logo {
    box-sizing: border-box;
    ${s.flex('flex-start', 'center')};
    gap: var(--sim-space-xs);
    padding: 0 var(--sim-space-sm);
    width: 100%;
    height: var(--sim-navbar-height);
    font-size: var(--sim-text-xl);
    color: var(--sim-title);

    svg {
      font-size: var(--sim-text-2xl);
    }
  }

  .navs {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0 var(--sim-space-xs);

    .nav-item {
      ${s.flex('flex-start', 'center')};
      height: 40px;
      color: var(--sim-text);
      cursor: pointer;
      transition: 0.3s ease;

      &.active {
        background-color: var(--sim-blue-500);
        color: var(--sim-light);
        border-radius: var(--sim-radius-xs);

        &:hover {
          background-color: var(--sim-blue-500);
        }
      }

      &:hover {
        background-color: var(--sim-blue-200);
      }

      .nav-icon {
        flex: 0 0 auto;
        ${s.flex('center', 'center')};
        width: 32px;
        height: 100%;
        font-size: var(--sim-text-md);
      }

      .nav-text {
        flex: 1;
        ${s.flex('flex-start', 'center')};
        height: 100%;
        font-size: var(--sim-text-sm);
      }
    }
  }
`

export const NavbarWrap = styled.section`
  box-sizing: border-box;
  flex: 0 0 auto;
  ${s.flex('space-between', 'center')};
  width: 100%;
  height: var(--sim-navbar-height);

  .toggle-btn {
    ${s.flex('center', 'center')};
    width: var(--sim-navbar-height);
    height: 100%;
    font-size: var(--sim-text-xl);
    color: var(--sim-text-secondary);
    cursor: pointer;
  }

  .navbar-secondary {
    ${s.flex('flex-end', 'center')};
    height: 100%;
    gap: var(--sim-space-sm);

    .homepage-btn {
      ${s.flex('center', 'center')};
      font-size: var(--sim-text-xl);
      color: var(--sim-text);

      &:hover {
        color: var(--sim-blue-500);
      }
    }
    .author-avatar {
      width: 24px;
      height: 24px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: var(--sim-rounded);
      }
    }

    .author-name {
      font-size: var(--sim-text-md);
      color: var(--sim-title);
    }

    .logout-btn {
      ${s.flex('center', 'center')};
      padding-right: 24px;
      height: 100%;
      font-size: var(--sim-text-xl);
      color: var(--sim-text-secondary);
      cursor: pointer;
    }
  }
`
