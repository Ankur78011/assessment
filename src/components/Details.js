import React from 'react'
import { styled } from 'styled-components'
import Total from  './Details/Total'
import Candidates from './Details/Candidates'
import CandidatesSor from './Details/CandidatesSor'
import TotalPurpose from './Details/TotalPurpose'
import icon from '../images/Frame 1000005832.png'

import 'animate.css';

const Details = ({count,othernumbercs}) => {
 
  return (<>
  <Wrapper >
  <div>
    
  </div>
    <div className='ass-heading'> Assessment Overview </div>
    <div className='details'>
     <Total></Total>
     <Candidates></Candidates>
     <CandidatesSor iconName={icon} text={"E-mail"} count={count} othernumber="145"></CandidatesSor>
     <TotalPurpose></TotalPurpose>
     </div>
       
    </Wrapper>
    <Wrapper2>
    <div className='mobile-details opening-det-mob'>
       <div className='total-info-mobile'>
        <div className='mobile-total'><Total></Total></div>
        <div className='mobile-total-purchase'><TotalPurpose></TotalPurpose></div>
       </div>
       <div className='mobile-candi'><Candidates></Candidates></div>
       <div className='mobile-candisor'><CandidatesSor text="E-mail" count={count} othernumber="11,000"></CandidatesSor></div>
    </div>
    </Wrapper2>
  </>
  
  )
}

const Wrapper2=styled.div`
  
 
.opening-det-mob{
  animation: flow 0.5s forwards;
}
@keyframes flow {
  from{
    height: 0;
  }
  to{
    height:300px;
  }
}
@media (min-width:700px){
  display:none;
}
.mobile-total{
  border-right:1px solid #DADCE0;
  width:50%;
}
.mobile-total-purchase{
  width:50%;
}
.total-info-mobile{
  display:flex;
  border-bottom:1px solid #DADCE0;

}
.mobile-candi{
  border-bottom:1px solid #DADCE0;
}
.mobile-candisor{

}
.mobile-details{

  border:1.5px solid #DBDCE0;
  margin:20px;
  border-radius:15px;
  width:95%;

 
}

`
const  Wrapper=styled.div`
@media (max-width:700px){
  display:none;
}
.ass-heading{
    width:100%;
    height:60px;
 
    display:flex;
    align-items:center;
    color: #1c4980;
    font-family: "Inter-Medium", Helvetica;
    font-size: 18px;
    font-weight: 500;
    padding-left:15px;

}
.details{
    border:1.5px solid #DADCE0;
    height:auto;
    margin:0px 20px;
    border-radius:10px;
    display:flex;
    flex-direction:rows;
   
}
`
export default Details
