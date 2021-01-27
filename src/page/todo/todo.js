import React from 'react';
import './todo.css'
import TempList from'../../components/tempList'
import ToDoList from'../../components/toDoList'
import TodoInput from'../../components/todoInput'
import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListAtom } from '../../recoilStates/recoiltemp';

// import { NextPage } from 'next'



const Todo = () => {

  const [tempList, setTempList] = useState([{ key: 0, title: '' }]);
  const [keyNum, setKeyNum] = useState(0);
  const [toDoList, setToDoList] = useState([]);
  const [searchFlag, searchFlagFn] = useState(false);
  const [searchList, searchListFn] = useState([]);
  const [list, setList] = useRecoilState(todoListAtom);
console.log(list)
  const addTempFn = () => {
    // let add = tempList.slice()
    let add = JSON.parse(JSON.stringify(tempList));
    const tempKey=keyNum+1
    add.push({key:tempKey,title:'' })
    setTempList(add)
    setKeyNum(tempKey)
  }

  const changeTitle = ({value,number}) => {
    // let changeList= tempList.map(({key, title}) => ({key, title}))
    // changeList[number].title=value
    const findIndex = tempList.findIndex((obj) => obj.key === number);
    if(findIndex > -1){
      const tempList_ = JSON.parse(JSON.stringify(tempList));
      tempList_[findIndex].title = value;
      setTempList(tempList_);
    }
  }

  const listMap = tempList.map((obj, i) => {
    return <TempList
      title={obj.title}
      stateName={`${i}tempListTitle`}
      key={i}
      number={obj.key}
      changeTitle={changeTitle}
    />
  })

  const sendData=()=>{
    if(toDoList.length<=0){
      setToDoList(tempList)
    }else{
      // setToDoList(toDoList.push(tempList))
      tempList.map((obj,i)=>{
        return toDoList.push({key:obj.key,title:obj.title})
      })
    }
    setTempList([{ key: 0, title: '' }])
    setKeyNum(0)
  }
  let toDoListMap=[]

  const setDelList = (e) => {
    let arr = JSON.parse(JSON.stringify(toDoList));
    arr.splice(e, 1);
    setToDoList(arr)
  }

  const setSearchFn=({searchList,searchFlag})=>{
    if(searchFlag===true){
      searchListFn(searchList)
    }else{
      searchListFn([])
    }
    searchFlagFn(searchFlag)
  }

const LastList=searchFlag?searchList:toDoList
  toDoListMap=LastList.map((obj,i)=>{
    return <ToDoList
    title={obj.title}
    stateName={`${i}tempListTitle`}
    key={i}
    number={i}
    setDelList={setDelList}
  />
  })
  

  return <div className='BackBlack'>
    <div className='contentBox'>
      <h2>ToDo 리스트</h2>
      <p className='addTempBtn'>
        <button onClick={() => addTempFn()}>추가</button>
      </p>
      {listMap}
      <p onClick={sendData} className='saveBtn'>등록</p>
      <TodoInput
        toDoList={toDoList}
        searchList={searchList}
        searchFlag={searchFlag}
        setSearchFn={setSearchFn}
      />
      <div>
        {toDoListMap}
      </div>
    </div>
  </div>
}


export default Todo;