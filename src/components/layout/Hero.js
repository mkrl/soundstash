import styled, { keyframes } from 'styled-components'

const pop = keyframes`
  from {
    margin-top: 2rem;
    opacity: 0;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
`

const Hero = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 16px;
  & img {
    animation: ${pop} 0.3s ease-in-out;
  }
  & p {
    animation: ${pop} 0.3s ease-in-out;
    text-align: center;
    line-height: 1.5;
    color: #414143;
  }
  & svg {
    color: #dcdee1;
    margin-bottom: 1rem;
  }
  
`
export default Hero
