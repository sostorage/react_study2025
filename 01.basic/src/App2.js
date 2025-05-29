import React from 'react'

const App2 = () => {

  //let name = prompt("나의 이름은?");

  // 날짜, 시간 관련 정보를 가진 객체
  let today = new Date();

  console.log(today);
  console.log(today.toLocaleDateString()); // 현지 시간 기준 날짜(년/월/일)
  console.log(today.getMonth()+1);

  let name = prompt("이름을 말해주세요.");
  let season ="";
  
  
  switch (today.getMonth()+1) {
    case 3, 4, 5:
        season="봄"
        break;
  
    case 6, 7, 8: 
        season="여름"
        break;

    case 9, 10, 11:
        season = "가을";
        break;
        
    case 12, 1, 2:
        season = "겨울";
        break;
  }
  

  return (
    <div>
        <h1>{today.toLocaleDateString()}</h1>
        <hr/>
        <div>
            {name}님 지금은 {season}입니다. 좋은 하루 보내세요 :)
        </div>
    </div>
  )
}

export default App2