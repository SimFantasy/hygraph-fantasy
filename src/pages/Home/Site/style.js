import styled from 'styled-components'
import s from '@/styles/global.style'

export const SiteWrap = styled.section`
  .site-container {
    display: flex;
    flex-direction: column;
    gap: var(--sim-space-xl);
    padding-top: var(--sim-space-2xl);
    padding-bottom: var(--sim-space-4xl);

    .site-cover {
      flex: 0 0 auto;
      width: 100%;
      max-height: 240px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .site-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--sim-space-xs);

      .site-titlebar {
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-sm);
        height: 40px;

        .site-icon {
          width: 40px;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .site-title {
          font-size: var(--sim-text-2xl);
          color: var(--sim-title);
        }
      }

      .site-info {
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-md);
        height: 40px;

        .info-item {
          ${s.flex('flex-start', 'center')};
          gap: var(--sim-space-xs);
          height: 40px;
          font-size: var(--sim-text-sm);
          color: var(--sim-text-secondary);

          svg {
            font-size: var(--sim-text-md);
          }
        }
      }

      .site-description {
        font-size: var(--sim-text-lg);
        color: var(--sim-text);
        line-height: 2;
      }

      .site-link {
        ${s.flex('flex-start', 'center')};
        height: 40px;
        .link-btn {
          ${s.flex('center', 'center')};
          gap: var(--sim-space-xs);
          padding: 4px 6px;
          width: 90px;
          border-radius: var(--sim-radius-xs);
          background-color: var(--sim-red-500);
          font-size: var(--sim-text-xs);
          color: var(--sim-light);

          &:hover {
            background-color: var(--sim-red-600);
          }
        }
      }

      .site-tags {
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-xs);
        height: 40px;

        .tag-item {
          flex: 0 0 auto;
          ${s.flex('center', 'center')};
          padding: 2px 6px;
          border-radius: var(--sim-radius-xs);
          background-color: var(--sim-gray-100);
          font-size: var(--sim-text-sm);
          color: var(--sim-text);
        }
      }
    }
  }
`
