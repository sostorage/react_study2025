import React, { use, useState } from 'react'
import BoardArea from './BoardArea'
import ButtonArea from './ButtonArea'

/*
  1. 사용자 "던지기" 버튼을 눌렀을 때, 랜덤으로 주사위 눈이 변경된다.
  2. 생성된 숫자로 주사위 눈 이미지를 화면에 출력한다.
  3. 사용자와 컴퓨터의 주사위 눈을 비교한다.
  - 사용자가 이겼을 경우: 사용자의 스코어 +1
  - 컴퓨터가 이겼을 경우: 컴퓨터의 스코어 +1
  4. "초기화" 버튼을 눌렀을 때, 스코어와 주사위의 눈이 초기 설정값으로 바뀐다.
  - 주사위 눈: 1
  - 스코어: 0
*/

const DiceGame = () => {

  const imgPath = 'src/assets/img/img/dice';

  const [userScore, setUserScore] = useState(0);
  const [userDiceImg, setUserDiceImg] = useState(`${imgPath}1.png`);

  const [comScore, setComScore] = useState(0);
  const [comDiceImg, setComDiceImg] = useState(`${imgPath}1.png`);

  // 주사위 던지기 기능
  const throwDice = () => {
    // alert('던지기 실행');

    // 주사위 눈 생성
    let userIndex = parseInt(Math.random()*6)+1;
    let comIndex = parseInt(Math.random()*6)+1;

    //주사위 눈 이미지 초기화
    setUserDiceImg(`${imgPath}${userIndex}.png`);
    setComDiceImg(`${imgPath}${comIndex}.png`);
    
    // 주사위 눈 비교

      // 삼항 연산자로 못 쓰나? 
      // userIndex > comIndex? setUserScore(+1):setComScore(+1);
      if(userIndex > comIndex){
        setUserScore(userScore+1);
      } else if(comIndex > userIndex) {
        setComScore(comScore+1);
      }
  }

  // 초기화 기능
  const initDice = () => {
    // alert('초기화 실행');
    setUserScore(0);
    setComScore(0);
    setUserDiceImg(`${imgPath}1.png`);
    setComDiceImg(`${imgPath}1.png`);
  }


  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice={initDice}/> {/* 함수 넘겨주는 방법 */}
        <BoardArea
        userDiceImg={userDiceImg} userScore={userScore}
        comDiceImg={comDiceImg} comScore={comScore}
        />
        
    </div>
  )
}

export default DiceGame