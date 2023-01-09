import styled from 'styled-components'
import s from '@/styles/global.style'

export const LoginWrap = styled.section`
  .login-container {
    padding-top: var(--sim-space-2xl);
    padding-bottom: var(--sim-space-4xl);

    .login-form {
      display: flex;
      flex-direction: column;
      gap: var(--sim-space-sm);
      margin: 0 auto;
      width: 320px;
    }
  }
`
