import styled from 'styled-components'
import s from '@/styles/global.style'

export const PaginationWrap = styled.section`
  ${s.flex('space-between', 'center')};
  margin: var(--sim-space-2xl) 0;
  height: 32px;

  .pagination-info {
    flex: 1;
    ${s.flex('flex-start', 'center')};
    height: 100%;
    font-size: var(--sim-text-sm);
    color: var(--sim-text);
  }

  .pagination-btns {
    flex: 0 0 auto;
    ${s.flex('flex-end', 'center')};
    gap: var(--sim-space-sm);
    height: 100%;

    .pagination-btn {
      flex: 0 0 auto;
      ${s.flex('center', 'center')};
      padding: 8px 16px;
      height: 100%;
      border-radius: var(--sim-radius-xs);
      border: 0;
      background-color: var(--sim-button);
      font-size: var(--sim-text-sm);
      color: var(--sim-light);
      cursor: pointer;

      &:hover {
        background-color: var(--sim-text);
      }

      &.disabled {
        background-color: var(--sim-bg-tertiary);
        color: var(--sim-text-disabled);
        cursor: default;
      }
    }
  }
`
