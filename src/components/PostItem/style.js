import styled from 'styled-components'
import s from '@/styles/global.style'

export const PostItemWrap = styled.section`
  ${s.flex('space-between', 'center')};
  gap: var(--sim-space-md);
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: var(--sim-space-md);
    padding-bottom: var(--sim-space-md);
    border-bottom: 1px dotted var(--sim-divider);
  }

  .post-item-cover {
    flex: 0 0 auto;
    ${s.flex('flex-start', 'flex-start')};
    width: 16vw;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: var(--sim-radius-sm);
    }
  }

  .post-item-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;

    .post-item-title {
      ${s.flex('flex-start', 'center')};
      width: auto;
      line-height: 1.5;
      font-size: var(--sim-text-lg);
      color: var(--sim-title);
      cursor: pointer;

      &:hover {
        color: var(--sim-text);
      }
    }

    .post-item-info {
      ${s.flex('flex-start', 'center')};
      gap: var(--sim-space-sm);
      margin-bottom: var(--sim-space-xs);
      height: 32px;
      font-size: var(--sim-text-sm);
      color: var(--sim-text-secondary);

      .info-item {
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-xs);
        height: 100%;
      }
    }

    .post-item-description {
      ${s.ellipsis(2)};
      line-height: 1.8;
      font-size: var(--sim-text-sm);
      color: var(--sim-text);
    }
  }
`
