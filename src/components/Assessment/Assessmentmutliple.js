import React from 'react'
import {styled} from 'styled-components'
import {BiBriefcase} from 'react-icons/bi'
import { ReactSVG } from 'react-svg';
import cal from "../../images/calendar_today.svg"
import threedot from "../../images/Group 6.svg"
import linkbtn from "../../images/link.svg"
import brief from "../../images/briefcase.svg"
import clock from "../../images/schedule.svg"

const Assessment = () => {
  return (
    <Wrapper>
       
       <div className='card-main-k'>
      <div className='card-top'>
        <div className='info'>
            <div className='breif-icon'><img src={brief} alt='icon'></img></div>
            <div className='job-date-info'>
            <div className='ass-name-k'>Math Assessment</div>
            <div className='ass-desc'>Job <div className='line'></div>
            <div className='cal-icon'><Cal><img  src={cal} alt='Svg'></img></Cal><Clock><img  src={clock} alt='Svg'></img></Clock><span className='date'>20 Apr 2023 </span></div>
            </div>
            
            </div>
            <div className='dotted-line'></div>
        </div>
        <Line></Line>
        <div className='three-dot'>
        <img src={threedot} alt="three-dot"></img>
        </div>
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
    <div className='count-324'>+324
</div>

    

       </div>
       </div>
      </div>
       </div>
    </Wrapper>
  )
}

const Cal=styled.div`
@media (max-width:700px){
    display:none
}
`
const Clock=styled.div`
display:flex;
margin-right:-5px;
@media (min-width:700px){
    display:none
}
`
const Line=styled.div`
margin:7px 0px;
border:1px dashed #DBDCDF;
width:100%;
@media (min-width:700px){
    display:none;
}
`
const Wrapper=styled.div`
.lp-div{
    display:flex;
    position:relative;


}
.count-324{
    font-size:12px;
    font-weight:600;
    margin-left:5px;
     color:#1C4980;
  
}
.job-date-info{
    padding:0px 15px;
    
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
    font-weight:bold;
    font-size:15px
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
    gap:4px;
    margin-right:10px;
    @media (max-width:700px){
        margin-right: -10px;
        padding:5px 7px;
    }


}
.info{
    @media (max-width:700px){
    display:flex;

    }
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
    margin-right:15px;
    @media (max-width:700px){
        font-size:13px;
        margin-top:10px;
    }
    
    
}
.lower-left-text{
    font-weight:500;
    font-size:12px;
    @media (max-width:700px){
        font-size:10px
    }
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
.card-main-k{
    position:relative;
    border:1px solid #DBDCE0;
    padding:16px;
    border-radius:15px;
    @media (max-width:700px){
   width:80%;
   margin:10px auto;
   

}
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
.ass-name-k{
    display:flex;
    font-weight:500;
    color:#1C4980;
    font-size: 18px;
    margin-top:15px;

    @media (max-width:700px){
     margin-top:0px;
     font-size: 14px;
    
    }
  
}
.ass-desc{
    display:flex;
    color: #1c4980;
font-family: "Inter-SemiBold", Helvetica;
font-size: 14px;
font-weight: 600;
padding:10px 10px 10px 0px;
@media (max-width:700px){
    font-size:12px;
    font-weight:500;
    padding:2px;
}
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
width:300px;
position: initial;
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
@media (max-width:700px){
right:0px;
padding:15px;
}
}
`
export default Assessment
