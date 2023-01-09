import styled from 'styled-components'
import s from '@/styles/global.style'

export const PortfoliItemWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: var(--sim-radius-sm);
  border: 1px solid transparent;
  background-color: var(--sim-bg-tertiary);
  transition: 0.3s ease;

  &:hover {
    border-color: var(--sim-divider);
  }

  .portfolio-item-cover {
    width: 100%;

    .portfolio-item-image {
      width: 100%;
      height: 120px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--sim-radius-sm) var(--sim-radius-sm) 0 0;
      }
    }
  }

  .portfolio-item-title {
    padding: var(--sim-space-xs);
    ${s.flex('flex-start', 'center')};
    ${s.ellipsis(2)};
    line-height: 1.5;
    font-size: var(--sim-text-sm);
    color: var(--sim-title);
    cursor: pointer;

    &:hover {
      color: var(--sim-text);
    }
  }
`
