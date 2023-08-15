import React from 'react'
import {styled} from 'styled-components'
import {BiBriefcase} from 'react-icons/bi'
import { ReactSVG } from 'react-svg';
import cal from "../../images/calendar_today.svg"
import threedot from "../../images/Group 6.svg"
import linkbtn from "../../images/link.svg"

const Assessmentmutliple = () => {
  return (
    <Wrapper>
       
    <div className='card-main'>
   <div className='card-top'>
   <div className='info'>
            <div className='breif-icon'><BiBriefcase color='#6548EE' size={25}></BiBriefcase></div>
            <div className='job-date-info'>
            <div className='ass-name-k'>Math Assessment</div>
            <div className='ass-desc'>Job <div className='line'></div>
            <div className='cal-icon'><img  src={cal} alt='Svg'></img><span className='date'>20 Apr 2023 </span></div>
            </div>
            
            </div>
            <div className='dotted-line'></div>
        </div>
     {/* <div className='three-dot'>
     <img src={threedot} alt="three-dot"></img>
     </div> */}
   </div>
   <div className='card-bottom'>
    <div className='lower-main'>
    <div className='left-side'>
    <div className='lower-left-info'>00 <div className='lower-left-text'>Duration</div></div>
    <div className='lower-left-info'>00 <div className='lower-left-text'>Questions</div></div>
     </div>

    <div className='right-side'>
    <div><button className='share-button'><img src={linkbtn} alt="linkbtn"></img>Share</button></div> 
    <div className='lp-div'>
    <div className='lp'>LP</div>
     <div className='lp'>LP</div>
     <div className='lp'>LP</div>
    </div>
 
    <div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>

    </div>
    </div>
   </div>
    </div>
 </Wrapper>
  )
}
const Wrapper=styled.div`
..info{
    @media (max-width:700px){
    display:flex;

    }
}
.lp-div{
    display:flex;
    position:relative;
    width:70px;
    justify-content:center;
    align-items:center;
}
.lp{
    height:27px;
    width:27px;
    border-radius:50%;
    background:#6548EE;
    border:1px solid white;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    position:absolute;
    font-weight:bold;
    font-size:15px:
     
}
.lp:nth-child(1){
left:15px;
background:#6548EE;
}
.lp:nth-child(2){
  left:30px;
  background:#3079E1;
}
.lp:nth-child(3){
  left:45px;
  background:#E9407B;
}



.share-button{
    background:white;
    color:#295488;
    border:1px solid #1c4980;
    font-weight:550;
    color: #1c4980;
    font-family: "Inter-Medium", Helvetica;
    font-size: 14px;
    font-weight: 500;
    border-radius:20px;
    padding:5px 10px;
    display:flex;
    align-items:center;
    
    margin-right:0px;


}
.lower-main{
    display:flex;
    justify-content:space-between;
}
.lower-left-info{
    color:#1C4981;
    font-weight:600;
    font-size:15px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-right:15px
    
}
.lower-left-text{
    font-weight:500;
    font-size:12px
}
.right-side{
    display:flex;
    flex-direction:row;
    align-items:center
}
.left-side{
    display:flex;
    flex-direction:row;
}
.card-main{

    border:1px solid #DBDCE0;
    padding:16px;
    border-radius:15px;
}

.dotted-line{
    border-top:1px dashed #DBDCDF;
    margin-top:10px;
    margin-bottom:10px;
}
.cal-icon{
   display:flex;
   align-items:center;
   gap:10px
}
.date{
    font-size:12px;
    font-weight:450;
    color:#8DA4BE;
}
.line{
    height:18px;
    width:1px;
    background:#DADCE0;
    margin:0px 10px 0px 10px;
}
.ass-name{
    display:flex;
    font-weight:500;
    color:#1C4980;
    font-size: 18px;
    margin-top:15px;
  
}
.ass-desc{
    display:flex;
    color: #1c4980;
font-family: "Inter-SemiBold", Helvetica;
font-size: 14px;
font-weight: 600;
padding:10px 10px 10px 0px;
}
.breif-icon{
    height:50px;
    width:50px;
    background:#EAE8FD;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
}
.card-top{
position:relative;
width:360px;
@media (max-width:700px){
  width:200px;
}

}

.card-bottom{
    ${'' /* height:100px;
    width:100px;
    border:1px solid blue; */}
}
.three-dot{
position:absolute;
right:0px;
top:0px;
}
`

export default Assessmentmutliple
