import styled from 'styled-components'
import s from '@/styles/global.style'

export const SiteItemWrap = styled.section`
  box-sizing: border-box;
  padding: var(--sim-space-sm);
  width: 100%;
  border-radius: var(--sim-radius-sm);
  border: 1px solid transparent;
  background-color: var(--sim-bg-tertiary);
  transition: 0.3s ease;

  &:hover {
    border-color: var(--sim-divider);
  }

  .site-item-container {
    display: flex;
    flex-direction: column;
    gap: var(--sim-space-xs);

    .site-item-titlebar {
      flex: 0 0 auto;
      ${s.flex('space-between', 'center')};
      gap: var(--sim-space-xs);
      .site-item-icon {
        flex: 0 0 auto;
        ${s.flex('center', 'center')};
        width: 24px;
        height: 24px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .site-item-title {
        flex: 1;
        font-size: var(--sim-text-sm);
        color: var(--sim-title);
        font-weight: 700;
      }
    }

    .site-item-description {
      ${s.ellipsis(2)};
      font-size: var(--sim-text-sm);
      color: var(--sim-text-secondary);
    }

    .site-item-info {
      ${s.flex('space-between', 'center')};
      gap: var(--sim-space-sm);
      height: 32px;
      font-size: var(--sim-text-sm);
      color: var(--sim-text-secondary);

      .info-item {
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-xs);
        height: 100%;

        .link-btn {
          ${s.flex('center', 'center')};
          gap: var(--sim-space-xs);
          padding: 2px 6px;
          border-radius: var(--sim-radius-xs);
          background-color: var(--sim-gray-200);
          font-size: var(--sim-text-xs);
          color: var(--sim-text);

          &:hover {
            background-color: var(--sim-gray-300);
            color: var(--sim-title);
          }
        }
      }
    }
  }
`
