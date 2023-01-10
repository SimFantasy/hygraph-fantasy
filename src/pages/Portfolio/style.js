import styled from 'styled-components'
import s from '@/styles/global.style'

export const PortfolioWrap = styled.section`
  .portfolio-container {
    display: flex;
    flex-direction: column;
    padding-top: var(--sim-space-2xl);
    padding-bottom: var(--sim-space-4xl);

    .portfolio-cover {
      margin-bottom: var(--sim-space-lg);
      width: 100%;
      max-height: 320px;
      overflow: hidden;
      border-radius: var(--sim-radius-md);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .portfolio-title {
      font-size: var(--sim-text-2xl);
      color: var(--sim-title);
      line-height: 1.8;
    }

    .portfolio-info {
      margin-bottom: var(--sim-space-lg);
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

    .portfolio-introduction {
      margin-bottom: var(--sim-space-lg);
      width: 100%;
      font-size: var(--sim-text-lg);
      color: var(--sim-text);
      line-height: 2;
    }

    .portfolio-tags {
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

    .portfolio-gallery {
      display: flex;
      flex-direction: column;
      gap: var(--sim-space-lg);
      width: 100%;

      .gallery-item {
        display: flex;
        flex-direction: column;

        .gallery-item-image {
          flex: 1;
          width: 100%;
          max-height: 400px;
          overflow: hidden;
          border-radius: var(--sim-radius-md);

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .gallery-item-title {
          flex: 0 0 auto;
          ${s.flex('center', 'center')};
          width: 100%;
          height: 32px;
          font-size: var(--sim-text-md);
          color: var(--sim-title);
        }
      }
    }
  }
`
