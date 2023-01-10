import styled from 'styled-components'
import s from '@/styles/global.style'

export const DataCountListWrap = styled.div`
  ${s.gridCols(5)};

  .data-count-item {
    display: flex;
    flex-direction: column;
    padding: var();

    .item-topbar {
      box-sizing: border-box;
      flex: 0 0 auto;
      ${s.flex('space-between', 'center')};
      padding: 0 var(--sim-space-sm);
      height: 64px;

      .item-title {
        flex: 1;
        ${s.flex('flex-start', 'center')};
        height: 100%;
        font-size: var(--sim-text-lg);
        color: var(--sim-title);
      }

      .item-icon {
        flex: 0 0 auto;
        ${s.flex('center', 'center')};
        width: 40px;
        height: 40px;
        background-color: var(--sim-blue-100);
        border-radius: var(--sim-rounded);

        svg {
          font-size: var(--sim-text-lg);
          color: var(--sim-blue-500);
        }
      }
    }
    .item-count {
      box-sizing: border-box;
      flex: 0 0 auto;
      ${s.flex('flex-start', 'flex-start')};
      padding: 0 var(--sim-space-sm);
      height: 40px;
      font-size: var(--sim-text-2xl);
      color: var(--sim-title);
      font-weight: 700;
    }

    .item-sub-title {
      box-sizing: border-box;
      flex: 0 0 auto;
      ${s.flex('flex-start', 'center')};
      padding: 0 var(--sim-space-sm) var(--sim-space-sm);
      height: 32px;
      font-size: var(--sim-text-xs);
      color: var(--sim-text-secondary);
    }
  }
`
