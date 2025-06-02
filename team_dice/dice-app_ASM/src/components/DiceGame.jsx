import React, { useState } from 'react'
import ButtonArea from './buttonArea'
import BoardArea from './BoardArea'


/*
  1. 사용자가 "던지기" 버튼을 눌렀을 때, 랜텀으로 숫자가 생성된다. 변경된다.

  2. 생성된 숫자로 주사위 눈 이미지를 화면에 출력한다.

  3. 사용자와 컴퓨터의 주사위 눈을 비교한다.
  - 사용자가 이겼을 경우 사용자의 스코어+1
  - 컴퓨터가 이겼을 경우 사용자의 스코어+1

  4. "초기화" 버튼을 눌렀을 때 스코어와 주사위 눈이 초기설정값으로 바뀐다.
  주사위 눈 : 1
  스코어 : 0
*/

const DiceGame = () => {

const imgPath = "src/assets/img/dice";

const [userDice, setUserDice] = useState(1);
const [userScore, setUserScore] = useState(0);
const [userDiceImg, setUserDiceImg] = useState(`${imgPath}1.png`);

const [comDice, setComDice] = useState(1);
const [comScore, setComScore] = useState(0);
const [comDiceImg, setComDiceImg] = useState(`${imgPath}1.png`);
// let userDice = parseInt(Math.random() * 6) + 1;
// let comDice = parseInt(Math.random() * 6) + 1;

const initDice = () => {
  // alert('초기화 설정');
  setUserDiceImg(`${imgPath}1.png`)
  setComDiceImg(`${imgPath}1.png`)
  setUserScore(0)
  setComScore(0)
}

const throwDice =()=>{
  // alert('던지기 실행');
  let userIndex = parseInt(Math.random()*6)+1;
  let comIndex = parseInt(Math.random()*6)+1;

  // 주사위 눈 이미지 초기화
  setUserDiceImg(`${imgPath}${userIndex}.png`);
  setComDiceImg(`${imgPath}${comIndex}.png`);
  
  if(userIndex > comIndex){
    setUserScore(userScore+1);
  }else if(userIndex < comIndex){
    setComScore(comScore+1);
  }else{
    alert("무승부 입니다.")
  }
}

  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice = {initDice}/>
        <BoardArea 
        userDiceImg={userDiceImg}
        comDiceImg ={comDiceImg}
        userScore ={userScore}
        comScore = {comScore}
        />
    </div>
  )
}

export default DiceGame