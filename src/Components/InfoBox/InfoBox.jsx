import React from 'react'
import * as S from './style'
const index = ({ weather }) => {

    function dateBuilder(date) {
      let o = new Intl.DateTimeFormat(navigator.locales, {day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
      return o.format(Date.now());
    }
  return (
    <S.Wrapper>
      <S.Location>
        {weather.name} {weather.sys.country}
      </S.Location>
      <S.Date>{dateBuilder()}</S.Date>

      <S.WeatherBox>
        <S.Temp>{Math.round(weather.main.temp)}°C</S.Temp>
        <S.CurrentWeather>{weather.weather[0].main}</S.CurrentWeather>
      </S.WeatherBox>
    </S.Wrapper>
  )
}

export default index
