import styled from 'styled-components';

export const Container = styled.header`
  background: var(--header);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 5rem 1rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button { 
    font-size: 1rem;
    color: var(--header);
    background: var(--bluelight);
    border: 0;
    padding: 0 2rem;
    border: 0.25rem;
    height: 3rem;
    width: 16rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;