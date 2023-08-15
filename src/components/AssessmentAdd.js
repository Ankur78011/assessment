import React, {useState,useEffect} from 'react'
import { styled } from 'styled-components'
import plus from '../images/add.svg'
import { useDispatch } from 'react-redux'
import { toggleForm } from './Reducers/ToggleFrom'

const AssessmentAdd = () => {
 
  const dispatch=useDispatch()
  const handleModalOpen=()=>{
    dispatch(toggleForm());
    document.body.classList.add('no-scroll');
  }
  return (
    <Wrapper >
    <div className='main-div' onClick={()=>{handleModalOpen()} }>
    <div className='content'>
    <div className="circle"  >
      <div className="plus"><img src={plus} alt='plus'></img></div>
    </div>
    <div className='add-head'>New Assessment</div>
    <div className='desc'>From here you can add questions of multiple types like MCQs, subjective(text or paragraph)!</div>
    </div>
    </div>
     
    </Wrapper>
  )
}
const Wrapper=styled.div`
.modal-open-body{
  overflow:hidden;
}
.desc{
  font-size:12px;
  margin-top:8px;
  font-weight:400;
  padding:5px 25px;
}
.circle {
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  @media (max-width:700px){
    width: 50px;
  height: 50px;
  }

}

.add-head{
  font-weight:600;
  font-size:18px;
  margin-top:12px;
}
.main-div{
    width:360px;
    padding:20px;
    height:170px;
    border:1px dashed #DBDCE0;
    border-radius:15px;
    margin-left:20px;
    position:relative;
    background:#F6F8FA;
    display:flex;
    justify-content:center;
  
    align-items:center;
    cursor:pointer;
    @media (max-width:700px){
    width:80%;
    height:130px;
    margin:10px auto;
    
    ${'' /* padding:10px; */}
    
}

}
.content{
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#1C4980;
    width:340px;
    
    
}
display:flex;
justify-content:center;
 align-items:center;

`
export default AssessmentAdd
