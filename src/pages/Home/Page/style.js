import styled from 'styled-components'
import s from '@/styles/global.style'

export const PageWrap = styled.section`
  .page-container {
    display: flex;
    flex-direction: column;
    gap: var(--sim-space-md);
    padding-top: var(--sim-space-2xl);
    padding-bottom: var(--sim-space-4xl);

    .page-cover {
      width: 100%;
      max-height: 320px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: var(--sim-radius-sm);
      }
    }
    .page-content {
      margin-bottom: var(--sim-space-lg);
      line-height: 1.8;
      font-size: var(--sim-text-md);
      color: var(--sim-text);
    }
  }
`
