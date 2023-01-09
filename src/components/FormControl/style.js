import styled from 'styled-components'
import s from '@/styles/global.style'

export const FormControlWrap = styled.div`
  &.form-control {
    display: flex;
    flex-direction: column;
    width: 100%;

    .form-label {
      flex: 0 0 auto;
      ${s.flex('flex-start', 'center')};
      width: 100%;
      height: 40px;
      font-size: var(--sim-text-sm);
      color: var(--sim-title);
    }

    .form-input,
    .form-textarea,
    .form-select {
      box-sizing: border-box;
      flex: 0 0 auto;
      ${s.flex('flex-start', 'center')};
      padding: 0 var(--sim-space-sm);
      width: 100%;
      height: 40px;
      border: 1px solid var(--sim-border);
      background-color: var(--sim-bg-secondary);
      border-radius: var(--sim-radius-xs);
      font-size: var(--sim-text-sm);
      color: var(--sim-text);

      &:hover {
        border-color: var(--sim-gray-300);
      }
    }

    .form-textarea {
      padding: var(--sim-space-xs);
      height: auto;
    }

    .form-btn {
      flex: 0 0 auto;
      ${s.flex('center', 'center')};
      padding: 0 var(--sim-space-sm);
      border: 0;
      border-radius: var(--sim-radius-xs);
      background-color: var(--sim-button);
      width: 100%;
      height: 40px;
      font-size: var(--sim-text-sm);
      color: var(--sim-light);
      cursor: pointer;

      &:disabled {
        background-color: var(--sim-button-secondary);
        color: var(--sim-text-secondary);
      }

      &:hover {
        background-color: var(--sim-gray-700);
      }
    }

    .form-editor {
      min-height: 400px;
    }

    .form-options {
      flex: 0 0 auto;
      ${s.flex('flex-start', 'center')};
      gap: var(--sim-space-md);
      height: 40px;

      .form-option-item {
        flex: 0 0 auto;
        ${s.flex('flex-start', 'center')};
        gap: var(--sim-space-xs);
        height: 100%;

        &.checked {
          .form-option-item-icon,
          .form-option-item-label {
            color: var(--sim-title);
          }
        }

        .form-radio-item-icon {
          flex: 0 0 auto;
          ${s.flex('flex-start', 'center')};
          width: 24px;
          height: 100%;
          font-size: var(--sim-text-2xl);
          color: var(--sim-text);
          cursor: pointer;

          svg {
            width: 18px;
          }
        }

        .form-option-item-label {
          flex: 0 0 auto;
          ${s.flex('flex-start', 'center')};
          height: 100%;
          font-size: var(--sim-text-sm);
          color: var(--sim-text);
          cursor: pointer;
        }
      }
    }
  }
`

export const ErrorText = styled.div`
  ${s.flex('flex-start', 'center')};
  width: auto;
  height: 24px;
  font-size: var(--sim-text-sm);
  color: var(--sim-red-500);
`
