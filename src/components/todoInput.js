import React from 'react';
import { useState, useEffect } from 'react'

// import { NextPage } from 'next'



// const TodoInput = ({ title, stateName, number,setDelList }) => {
const TodoInput = ({toDoList,searchList,searchFlag,setSearchFn}) => {

  const [tempValue, setTempValue] = useState();
  const [listNum, setListNum] = useState(0);
  const [type, setType] = useState('title');
  const changeFn = (e) => {
    const {value}=e.target
    setTempValue(value)
  }
  const selectFn = (e) =>{
    const {value}=e.target
    setType(value)
  }
  const sendListFn=()=>{
    const arr = JSON.parse(JSON.stringify(toDoList));
    const tempList=[]
    console.log(type,tempValue,toDoList)
    
    arr.forEach((obj,i)=>{
      if(type==='title'){
        if(obj.title===tempValue){
          tempList.push({key:obj.key,title:obj.title})
        }
      }else{
        if(obj.key.toString()===tempValue){
          
          tempList.push({key:obj.key,title:obj.title})
        }
      }
    })

    setSearchFn({searchList:tempList,searchFlag:true})
  }

  useEffect(()=>
    setListNum(searchFlag ? searchList.length : toDoList.length)
  ,[searchFlag,searchList,toDoList])

  const resetFn=()=>{
    setType('title')
    setListNum(0)
    setTempValue('')
    setSearchFn({searchList:toDoList,searchFlag:false})
  }

  return <div className='toDoContentWrap'>
    <select value={type} onChange={selectFn}>
      <option value='title'>title</option>
      <option value='key'>key</option>
    </select>
    <input value={tempValue} onChange={changeFn} />
    <button onClick={sendListFn}>검색</button>
    <span>Search Data {listNum}</span>
    <button onClick={resetFn}>리셋</button>
  </div>
}


export default TodoInput;