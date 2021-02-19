import styled from 'styled-components'

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
`

export const Text = styled.span`
  a {
    font-size: 1.3rem;
    text-decoration: none;
    color: #fff;
    transition: 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`
