import styled from "styled-components";

export const TextFooter = styled.footer`
  font-size: 1.2rem;
  background: transparent;
  padding: 1rem 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 800px) {
    right: 35%;
  }

  @media (max-width: 415px) {
    right: 25%;
  }
`;

export const Text = styled.span`
  a {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    color: #6c63ff;
  }
`