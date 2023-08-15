import React from 'react'
import {styled} from 'styled-components'
import {RiDashboardLine} from 'react-icons/ri'
import notepad from '../images/note_alt.svg' 
import quiz from '../images/quiz.svg'
import admin from '../images/admin_meds.svg'
const Sidebar = () => {
  return (
    <Wrapper>
      <div className='side-bar'>
      <div>
        <div className='side-icon'>
        <RiDashboardLine color='#1C4980' size={21}></RiDashboardLine>
         <div className='icon-text'>
            DashBoard
         </div>
      </div>
      <div className='ass-box'>
      <img src={notepad} alt='note'></img>
        
         <div className='ass-text'>
            Assessment
         </div>
      </div>
      <div className='side-icon'>
        <img src={quiz} alt='quiz-icon'></img>
         <div className='icon-text'>
            My Library
         </div>
      </div> 
      <div className='line'></div>
      <div className='admin-btn-div'>
        <button>Admin</button>
      </div>
      <div className='side-icon'>
      <img src={admin} alt='note'></img>
        
         <div className='icon-text'>
            <div>Round </div>
            <div> Status</div>
          
         </div>
      </div>
      </div>

      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
@media (max-width:700px){
  display:none;
}
.ass-text{
  margin-top:6px;
    font-size:12px;
    color:#0173E6;
}
.ass-box{
  border:1px solid black;
  display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:70px;
    width:90px;
    border-radius:15px;
  margin:10px auto;
  background:#E5F1FC;
  border:1px solid #0173E6;
  color:#0173E6;
  
  
}
.admin-btn-div{ 
  height:20px;
    width:100px;
    margin:10px;

button{
  border:none;
  background:#FBEAEA;
  border:1px solid #D53600;
  color:#D53600;
  font-size:11px;
  font-weight:500;
  border-radius:20px;
}
}
.line{
  width:80px;
  height:5px;
  margin-top:40px;
  border-top:1px dashed #BACBD5;
  margin:10px auto;
  
  margin-top:40px;
}
.side-icon{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:70px;
    width:100px;
    border-radius:15px;
    margin:10px
  
}
.icon-text{
    margin-top:6px;
    font-size:12px;
    color:#1C4981;
}
.side-bar{
    ${'' /* height:100; */}
    width:140px;
    background:white;
}`
export default Sidebar
