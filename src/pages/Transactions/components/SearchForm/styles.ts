import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1; // para ocupar o maior comprimento possível
    border-radius: 8px;
    border: 0;
    padding: 1rem;
    gap: 0.75rem;
    background: ${({ theme }) => theme['gray-300']};
    color: ${({ theme }) => theme['gray-900']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-400']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${({ theme }) => theme['blue-900']};
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['blue-900']};
      border-color: ${(props) => props.theme['blue-700']};
      color: ${(props) => props.theme.white};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`
