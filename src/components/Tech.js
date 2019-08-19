import styled from 'styled-components';

export const Tech = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  span {
    border-radius: 1em;
    padding: 0 0.8rem;
  }
  @media all and (max-width: 500px) {
    span {
      margin-bottom: 0.5rem;
      width: 40%;
    }
  }
  /* default tech-tag styles: */
  .tech-tag {
    background-color: #a4d9d6;
    color: #fd835d;
    font-size: 1.2rem;
    font-weight: 500;
  }

  /* colorized tags: */
  .node-tag {
    background-color: rgba(141, 197, 122, 0.8);
    color: black;
  }
  .scss-tag {
    background-color: rgba(216, 95, 137, 0.8);
    color: black;
  }
  .Adobe.XD-tag {
    background-color: #2e001f;
    color: #ffd9f2;
  }
  .react-tag {
    background-color: #222222;
    color: #58c0df;
  }
  .gatsby-tag {
    background-color: #633295;
    color: #ffffff;
  }
  .graphql-tag {
    background-color: #e535ab;
    color: #fff;
  }
`;
