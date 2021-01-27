import React from 'react';
import { useState, useEffect } from 'react'
// import { NextPage } from 'next'



const TempList = ({ title, stateName, number,changeTitle }) => {

  // const [tempTitle, setTitle] = useState(stateName);
  const [tempValue, setTempValue] = useState(title);
  const setInput = (e) => {
    const {value}=e.target

    changeTitle({value,number})
    // setTitle(value)
    setTempValue(value)
  }

  
  useEffect(() => {
    setTempValue(title)
  }, [title])

  return <div className='tempOneContentWrap'>
    <span>제목 : </span>
    <input className='toDoContent' value={tempValue} onChange={setInput} ></input>
  </div>
}


export default TempList;