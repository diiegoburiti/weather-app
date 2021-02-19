import styled, { keyframes } from 'styled-components'

const showDown = keyframes`
 from {
    opacity: 0;
    transform: translate3d(0, -10px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
export const Location = styled.div`
  color: #fff;
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  margin-bottom: 0.5rem;
`
export const Wrapper = styled.div`
  transition: 0.3s;
  margin-top: 6rem;
  animation: ${showDown} 0.3s forwards;
`
export const WeatherBox = styled.div`
  text-align: center;
`

export const Temp = styled.div`
  position: relative;
  display: inline-block;
  margin: 30px auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 25px 35px;
  color: #fff;
  font-size: 6.5rem;
  font-weight: 900;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  text-align: center;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
`

export const CurrentWeather = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`

export const Date = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.2);
`
