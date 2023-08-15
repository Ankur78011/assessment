import React from 'react'
import {styled} from 'styled-components'
import  icon from '../../images/Frame 1000009353.png'
import NumberBox from './NumberBox'
import frame from '../../images/Frame 1000009353.svg'

const Candidates = () => {
  return (
    <Wrapper>
    <div className='candi-header'> Candidates</div>

    <div className='content'>
    <div className='total-candidates'>
    <div className='icon-div'><img src={frame} alt='frame'></img></div>
    <div className='number'>
        <div className="sum">
        11,145 <span className='green-number'>+89</span>
        </div>
        <div className='total-candi-text'>
            Total Candidate
        </div>
    </div>
   
    </div>
  <div className='last-node'>   <NumberBox num='1,14' text="Who Attempted"></NumberBox></div>
 

    </div> 
    </Wrapper>
  )
}

const Wrapper=styled.div`
height:auto;
border-right:1.5px solid #DADCE0;
@media (max-width:700px){
    border-right:none;  
    padding:10px
}
padding:15px 15px 10px 15px;

.last-node{
    margin-right:50px;
}
.candi-header{
color: #1c4980;
font-family: "Inter-SemiBold", Helvetica;
font-size: 14.5px;
font-weight: 600;
left: 0;
display:flex;

@media (max-width:700px){
    font-weight: 500;
    margin-left:0px;
margin-bottom:0px;
}
}
.content{
    display:flex; 
}
.line{
    height:40px;
    width:1.5px;
    background:#EAE8FD;
}
.total-candidates{
    display:flex;
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
.content{
    margin-top:10px;
    
}
.number{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    color:#1C4980;
    margin-left:14px;
    margin-right:15px;
    @media (max-width:700px){
        width:80px;
    }
  
    
}
.sum{
    font-weight:700;
    font-size:20px;
    display:flex;
    align-items:center;
    @media (max-width:700px){
     font-size:16px;
    }

}
.total-candi-text{
    font-size:12px;
    margin-top:4px;
    @media (max-width:700px){
     font-size:10px;
     display:flex;
    }
  
}
.green-number{
    color:#03C166;
    font-size:12px;
    margin-left:5px;
    font-weight:bold;
    @media (max-width:700px){
     font-size:10px;
    }
}
.who-attempted{
    margin-left:15px;
  
    height:50px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
}
.attempt-number{
    font-weight:bold;
    color:#1C4980;
    font-size:20px;
}
.attempt-text{
     margin-top:4px;
    color:#1C4980;
    font-size:12px;
    @media (max-width:700px){
     font-size:10px;
    }
}
`
export default Candidates
