import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const ImgChangeExam = () => {

    const imgName = useRef();
    const imgSrc = useRef();

    const imgChng = (e) => {
        e.preventDefault();

        if(imgName.current.value === '강아지'){
            imgSrc.current.src = 'https://img.animalplanet.co.kr/thumbnail/2022/11/14/2000/1l7k2lk52abq0t45b0x7.jpg'
        } else if(imgName.current.value === '고양이'){
             imgSrc.current.src = 'https://mblogthumb-phinf.pstatic.net/MjAyMzA4MDRfMjI5/MDAxNjkxMTMxNDU3MDc0.PP3HocRLVBtEgiCS2I1zvjYKx7HbgK0AJXC56JX_yZsg.UysNGMsO7AmA2IohOE-qQd5lpXFB6spF6mT2AXKh4zwg.JPEG.vipah/SE-b58be53b-5392-45d7-a6b5-3eb467376a36.jpg?type=w800'
        } else {
            alert('소정이 바보!')
        }

        // 입력창의 내용을 초기화하고 해당 요소를 선택(focus)하는 기능
        imgName.current.value ='';
        imgName.current.focus(); 
    }

  return (
    <div>
        <form>
            <p>희망하는 사진이 있으신가요?</p>
            <input type="text" ref={imgName}/>
            <input type="submit" value="변경" onClick={imgChng}/>
        </form>
        <img ref={imgSrc} style={{width: 300}}/>

    </div>
  )
}

export default ImgChangeExam