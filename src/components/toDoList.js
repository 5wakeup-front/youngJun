import React from 'react';
// import { NextPage } from 'next'



const ToDoList = ({ title, number,setDelList }) => {


  const delList = (e) => {
    setDelList(number)
  }

  return <div className='toDoContentWrap'>
    <span>제목 : </span>
    <span className='toDoContent'> {title}</span>
    <i onClick={delList}>삭제</i>
  </div>
}


export default ToDoList;