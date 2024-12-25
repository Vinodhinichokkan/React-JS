import React from 'react'
import { gmAction,gnAction} from '../Redux/Msg/message.action'
import { useDispatch,useSelector } from 'react-redux'
const Message = ()=>{
  let dispatch = useDispatch()
  let message = useSelector((state)=>{
    return state;
  })
  let gmHandler = ()=>{
    dispatch(gmAction())
  }



  return (
    <div> <pre>{JSON.stringify(message)}</pre>
      <h3>Message component</h3>

      <hr/>
      <h3>value :{message.msg}</h3>
      <button onclick ={gmHandler}>GM</button>
      <button onClick={()=>{dispatch(gnAction())}}>GN</button>

    </div>
  )
}

export default Message