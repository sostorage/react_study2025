import React, { useEffect } from 'react'

const Timer = () => {

  useEffect(()=> {
    // setInterval(): 일정 시간마다 작업을 수행하는 메소드
    const interval = setInterval(()=> {
        console.log("1초마다 실행");
        
    }, 1000);
    // 밀리초 단위로 수를 넣어줘야함 -> 1초 단위로 실행을 하겠다..!

    // Unmounting(앱 종료)에 대한 처리
    return () => {
        console.log("타이머 종료");
        clearInterval(interval);
    }
  }, [])

  return (
    <div>Timer</div>
  )
}

export default Timer