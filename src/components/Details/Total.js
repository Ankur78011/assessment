import React from 'react'
import { styled } from 'styled-components'
import icon from '../../images/view_agenda.png';
import agenda from '../../images/view_agenda (2).svg'
const Total = () => {
  return (
    <Wrapper>
       <div className='total-header'>Total Assessment</div>
       <div className='total-info'>
    <div className='icon-div'><img src={agenda} alt='img'></img></div>
    <div className='number'>34</div>
    </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
height:auto;
border-right:1.5px solid #DADCE0;
padding:15px 15px 10px 15px;

@media (max-width:700px){
  padding:10px ;
  border-right:none;
 

}
.total-header{
color: #1c4980;
font-family: "Inter-SemiBold", Helvetica;
font-size: 14.5px;
font-weight: 600;
left: 0;
display:flex;
width:125px;
@media (max-width:700px){
  font-weight:500;
  margin-left:0px;
margin-bottom:0px;
}
}
.total-info{
    display:flex;
    gap:7px;
    margin-top:10px;
    display:flex;
    align-items: center; 

    
}
.icon-div{
    height:43px;
    width:43px;
    background:#EAE8FD;
    display:flex;
    align-items: center; 
  justify-content: center;
  border-radius:10px;
}
.number{
    color:#1C4980;
    font-weight:700;
    font-size:20px;
    @media (max-width:700px){
      font-size:16px;
    }
}
`
export default Total
