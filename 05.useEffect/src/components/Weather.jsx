import React from 'react'

// .env(환경변수파일)
// - 외부에 노출되면 안되는 중요한 데이터를 보관하는 파일
// ex) api key, url 등을 정의
// .gitignore 파일에 .env 설정까지 하면 깃허브에 올릴 때 업로드 되지 않음

const Weather = () => {
  let city = "Gwangju";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  console.log(WEATHER_URL);
  

  return (
    <div>
      <h1>2025.06.11</h1>
      <img src="" alt="날씨 아이콘" />
      <p>현재 OOO은 00.0℃입니다</p>
    </div>
  )
}

export default Weather