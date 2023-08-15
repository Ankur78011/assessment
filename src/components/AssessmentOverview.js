import React from 'react'
import {styled} from 'styled-components'
import Assessment from './Assessment/Assessment'
import AssessmentAdd from './AssessmentAdd'
import Assessmentmutliple from './Assessment/Assessmentmutliple'
const AssessmentOverview = () => {
  return (<>
  <Wrapper>
       <div className='header'>
         My Assessment
       </div>
       <div className='ass-main-div'>
       <div className='add-new-assessment'><AssessmentAdd></AssessmentAdd></div>
       <Assessment></Assessment>
       <Assessmentmutliple></Assessmentmutliple>
       <div className='mobile-view'>
       <Assessmentmutliple></Assessmentmutliple>
       <Assessmentmutliple></Assessmentmutliple>
       <Assessmentmutliple></Assessmentmutliple>
       </div>
      
       </div>
       
      
    </Wrapper>
   
  </>
  
  )
}

const Wrapper=styled.div`
.mobile-view{
  @media (min-width:700px){
    display:none;
  }
}
${'' /* @media (max-width:700px){
width:100vw;
} */}
.header{
    display:flex;
    width:100%;
    margin:40px 40px 20px 20px;
    color: #1c4980;
    font-weight:600;
    font-size:18px;
    @media (max-width:700px){
      width:auto;
      display:none;
}
} 
.ass-main-div{
    display:flex;
    flex-wrap: wrap;
    gap:25px;
    @media (max-width:700px){
      display:flex;
      flex-direction:column;  gap:5px;
    }
}
`
export default AssessmentOverview
