import React, { useEffect, useState } from 'react'
import Timer from './Timer';

const Count = () => {

  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [showTimer, setShowTimer] = useState(true);

  const handleClick = () => {
    console.log("클릭");
    
    // state를 바로 접근해서 사용하는 방식
    // -> 이전 값을 참조하지 않기 때문에 마지막 setState()의 연산값만 반영
    setValue(value+1);
    // setValue(value+2);
    // setValue(value+3);
    // setValue(value+4);
    // 이렇게 4줄 다 써도 10이 더해지는게 아니고 4만 더하게됨
    // state는 마지막에 업데이트 되기때문에 제일 마지막 코드만 실행되게 되는거밍!
    
    // 10을 더하는 방식으로 하고싶다면 이 방식으로.. 포인터..?마냥 갖고오는 듯

    // setState 호출할 때 이전의 값을 가져 참조해서 더하는 방식
    // setValue((value)=>value+1);
    // setValue((value)=>value+2);
    // setValue((value)=>value+3);
    // setValue((value)=>value+4);
    
  }

  const handleClick2 = () => {
    setValue2(value2+2);
  }

  // useEffect() 구조
  // 최초 1회 실행되는 로직
  useEffect(()=>{
    console.log("앱 시작");
  }, []);

  // 앱 실행 중 state가 변경되었을때
  // [] 안에 state 변수 추가
  useEffect(()=> {
    console.log("업데이트");
  }, [value]);

useEffect(()=> {
    console.log("업데이트2");
  },[value2]);

useEffect(()=>{
    console.log("업데이트3");
  },[value, value2])

  return (
    <div>
        <h1>useEffect() 실습</h1>
        <p>{value}</p>
        <p>{value2}</p>
        <button onClick={handleClick}>증가</button>
        <button onClick={handleClick2}>증가2</button>
        <hr />

        <button onClick={()=>setShowTimer(!showTimer)}>타이머 보이기</button>
        { showTimer && <Timer/> }
    </div>
  )
}

export default Count