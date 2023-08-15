import React from 'react'
import { styled } from 'styled-components'

const NumberBox = ({num,text}) => {
  
  return (<>
     <Wrapper>
          <div className='h-line'></div>
          
      <div className='who-attempted-k'> 
    
      <div className='attempt-number-k'>{num}<span className='green-number'>+89</span></div>
       
        <div className='attempt-text-k'>{text}</div>
        
       </div>
    </Wrapper>
 
  </>
   
  )
}

const Wrapper=styled.div`
display:flex;
.who-attempted-k{
    margin-left:15px;
    margin-right:30px;

    height:50px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    @media (max-width:700px){
     width:80px;
     margin-left:5px;
    margin-right:7px;
    }
}
.attempt-number-k{
    font-weight:bold;
    color:#1C4980;
    font-size:20px;
    display:flex;
    align-items:center;
    @media (max-width:700px){
     font-size:16px;
    }
   
}
.green-number{
    color:#03C166;
    font-size:12px;
    margin-left:5px;
    font-weight:bold;
    margin-left:8px;
    @media (max-width:700px){
     font-size:10px;
    }
    
}
.attempt-text-k{
  
     margin-top:4px;
    color:#1C4980;
    font-size:12px;
    @media (max-width:700px){
     font-size:10px;
    }
    
   
}
.h-line{
    height:40px;
    width:1.5px;
    background:#DADCDF;
}
`
export default NumberBox
