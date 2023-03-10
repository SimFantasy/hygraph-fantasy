import styled from 'styled-components'
import s from '@/styles/global.style'

export const ListTitlebarWrap = styled.section`
  ${s.flex('space-between', 'center')};
  margin-bottom: var(--sim-space-md);
  width: 100%;
  height: 48px;

  .title {
    flex: 0 0 auto;
    ${s.flex('flex-start', 'center')};
    height: 100%;

    font-size: var(--sim-text-2xl);
    color: var(--sim-title);
    font-weight: 700;
  }

  .title-navs {
    flex: 1;
    ${s.flex('flex-end', 'center')};
    gap: var(--sim-space-xs);
    height: 100%;

    .title-nav-item {
      padding: 2px 8px;
      border-radius: var(--sim-radius-sm);
      background-color: var(--sim-gray-3);
      font-size: var(--sim-text-md);
      color: var(--sim-text-secondary);
      cursor: pointer;

      &:hover,
      &.active {
        color: var(--sim-text);
        background-color: var(--sim-gray-5);
      }

      &.active {
        font-weight: 700;
        color: var(--sim-gray-0);
        background-color: var(--sim-gray-9);
      }
    }
  }
`
