import React, { useState } from 'react'


/*
    실습) 숫자 맞추기
    0. 사용자(user), 컴퓨터(com), 결과값(result)에 대한 useState() 초기화 하기

    1. 버튼을 클릭했을 때, 랜덤한 숫자 생성하기(1~3)
        - parseInt(Math.random() +3) +1

    2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기
        - 정답인 경우 -> "정답입니다!"
        - 오답인 경우 -> "땡ㅋㅋ"
        * 누른 버튼의 값 가져오는 방법 -> event.target.innerText
*/
const BattleNumber = () => {
    const [userNum, setUserNum] = useState();
    const [comNum, setComNum] = useState();
    const [result, setResult] = useState("");
    
    const selectRdNum = (event) => {
        const num = parseInt(event.target.innerText);
        const rdNum = parseInt(Math.random()*3)+1;

        setUserNum(num);
        setComNum(rdNum);

        setResult((num === rdNum) ? "정답입니다!":"땡ㅋㅋ");

        // if(num === rdNum){
        //     setResult("정답입니다!");
        // } else {
        //     setResult("땡ㅋㅋ");
        // }
    }



  return (
    <div>
        <div>
            <button onClick={selectRdNum}>1</button>
            <button onClick={selectRdNum}>2</button>
            <button onClick={selectRdNum}>3</button>
        </div>
        <p>선택한 숫자: <span>{userNum}</span> </p>
        <p>랜덤한 숫자: <span>{comNum}</span></p>
        <p>{result}</p>
    </div>
  )
}

export default BattleNumber