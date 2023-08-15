import React from 'react'
import { styled } from 'styled-components'
import DesktopHeader from './DesktopHeader'
import Details from './Details'
import Sidebar from './Sidebar'
import AssessmentOverview from './AssessmentOverview'
import FilterBar from './FilterBar'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'

const Home = () => {
  return (<>
 <Wrapper >
      <div className='side-bar'>
     <Sidebar></Sidebar>
      </div>

      <div className='main-page' >
      <div className='back'>
      <DesktopHeader></DesktopHeader>
       <Details count="11,000" othernumbercs='145'> </Details>
       <AssessmentOverview></AssessmentOverview>
      </div>
      
      </div>

    </Wrapper>
    <Wrapper2>

    <div className='side-bar'>
     <Sidebar></Sidebar>
      </div>
     {useSelector((state)=>state.form.showMobileNav)&&<Navbar></Navbar>}
      <div className='main-page' id="main">
      <div className='back'>
      <DesktopHeader></DesktopHeader>
      
       {useSelector((state)=>state.form.showDetials)&&<Details></Details>} 
       <FilterBar></FilterBar>
       <AssessmentOverview></AssessmentOverview>
      </div>
      
      </div>
    </Wrapper2>
  </>
   
  )
}


const Wrapper2=styled.div`
@media (min-width:700px){
  display:none;
}
`

const Wrapper=styled.div`
@media (max-width:700px){
  display:none;
}
height:1700px;
width:100vw;
gap:20px;
background:#F6F8FA;
display:flex;

.back{
  background:white;
  padding-bottom:50px;

}
.side-bar{

    
    background:white;
    position:fixed;
    justify-content:center;
    display:flex;
    height:100vh;
    
}
.main-page{
border: 1px none;
background:#F6F8FA;
margin:0 auto;
margin-top:0;
border-radius:10px;

@media (min-width:700px){
  flex: 1 1 auto; 
  overflow-y: auto; 
  margin-left:150px;
  padding: 20px;
}

  max-height: 100vh; 
  height:3000px;
  
  padding-top:0;

}

`

export default Home
