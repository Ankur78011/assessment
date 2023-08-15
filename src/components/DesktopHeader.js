import React from 'react'
import { styled } from 'styled-components'
import segment from '../images/segment.svg'
import laptop  from "../images/laptop_mac.svg"
import mobile from "../images/mobile.svg"
import Details from './Details'
import { useDispatch } from 'react-redux'
import { toggleMobileNav } from './Reducers/ToggleFrom'
const DesktopHeader = () => {
  const dispatch=useDispatch()
  const openNav=()=>{
    dispatch(toggleMobileNav())
   
  }
  const convertMobileView=()=>{
    window.open('', '_blank', 'width=340,height=600');
  }
  return (<>
   <Wrapper> 
     <div className='header-main'>
      <div className='top-left-text'>
      <div className='assigment-heading'>
        Assessment
        </div>
        <div className='line'></div>
        <div className='myassigment'>
        <div className='myassessment-line'>
          My Assessments
        </div>
        </div>

      </div>
   
       
       
 
    <div className='mobile-convert' onClick={()=>convertMobileView()}>
  {/* <img src={mobile} alt='mobile'></img> */}
    </div>
        
      
       
     </div>
      
    </Wrapper>
    <Wrapper2>
     <div className='top-header'>
      <div className='header-upper'>
       <div className='upper-left'>
        <div className='seg-icon'  onClick={()=>openNav()}>
         <img src={segment} alt='segment-icon'></img>
        </div>
        <div className='ass-text'>
        Assessment
        </div>
       </div>
       <div className='upper-right'>
        {/* <img src={laptop} alt='laptop'></img> */}
       </div>
      </div>
      <div className='header-lower'>
      <div className='my-ass'>
       My Assessments
      </div>
      <div className='unstop-ass'>
     Unstop Assessment
      </div>
      </div>
     </div>
      {/* <div className='my-assessment-heading'>
      
        <div className='my-ass-left'>  
         My Assessment
        </div>
        <div className='my-ass-right'>
          <div><img src={search} alt='search icon'></img></div>
          <div><img src={filter} alt='filter icon'></img></div>
          <div><img src={bar} alt='bar-icon'></img></div>
      
        </div>
      </div> */}
    </Wrapper2>
  </>
 
  )
}
const Wrapper2=styled.div`
@media (min-width:700px){
  display:none;

}


.my-ass-left{
  color: #1c4980;
font-family: "Inter-SemiBold", Helvetica;
font-size: 16px;
font-weight: 600;
left: 0;
letter-spacing: 0;
line-height: normal;
display:flex;
justify-content:center;
  align-items:center;


}

.my-assessment-heading{
  ${'' /* width:100vw; */}
  display:flex;
  justify-content:space-between;

 padding:15px;
}
.my-ass-right{
  display:flex;
  justify-content:space-between;
  gap:20px;
  justify-content:center;
  align-items:center;

}

.unstop-ass{
  width:50%;
  ${'' /* border:1px solid black; */}
  color:#3F6493;
font-family: "Inter-Medium", Helvetica;
font-size: 15px;
font-weight: 500;
letter-spacing: 0;
line-height: 16.94px;
border-bottom:2px solid #F6F8FB;
}
.my-ass{
  width:50%;
  ${'' /* border:1px solid black; */}
  color: #0073e6;
font-family: "Inter-Medium", Helvetica;
font-size: 15px;
font-weight: 500;
letter-spacing: 0;
line-height: 16.94px;
border-bottom:2px solid #0073e6;

}
.unstop-ass{
  width:50%;
  ${'' /* border:1px solid green; */}
}
.header-lower{
  ${'' /* border:1px solid blue; */}

  height:30px;
  width:100%;
  display:flex;
}
.upper-right{
  padding:25px;
  
}
.header-upper{
  display:flex;
  justify-content:space-between;
}
.ass-text{
  color: #1c4980;
font-family: "Inter-SemiBold", Helvetica;
font-size: 16px;
font-weight: 600;
left: 0;
letter-spacing: 0;
line-height: 22.4px;

}
.seg-icon{
  display:flex;
  justify-content:center;
  align-items:center;
  background:#F2F8FE;
  height:40px;
  width:40px;
  border-radius:50%;
  cursor: pointer;

}
.upper-left{
  display:flex;
  justify-center:center;
  align-items:center;
  padding:15px;
  gap:10px;
}
.top-header{
  width:100%;
  background:white;


}
`

const Wrapper=styled.div`
    width:100%;
    height:70px;
    border-bottom:3px solid #DADCE0;
    @media (max-width:700px){
      display:none;
    }
    .header-main{
        display: flex;
        justify-content:space-between;
  
    }
  .top-left-text{
    display:flex;
  }
    .assigment-heading{
        height:70px;
        width:160px;
  
        display:flex;
        justify-content: center; 
        align-items: center; 
        color:#1C4980;
        font-weight: 550;
        font-size:20px;
        font-family: "Inter-SemiBold", Helvetica;
    }
    .myassigment{
        height:70px;
        width:160px;
        color:#0173E6;
    
        font-family: "Inter-SemiBold", Helvetica;
        font-size: 14px;
        font-weight: 600;

    
        
        display:flex;
        justify-content: center; 
        align-items: center; 

    }
    .myassessment-line{
        height:100%;
        border-bottom:3px solid #0173E6;
        display:flex;
        justify-content: center; 
        align-items: center; 
       
    }
    .line{
        height:50px;
        width:1.5px;
        background:blue;
        margin: auto 0px;
        background:#DADCE0;
        
    }
   .mobile-convert{
    padding:15px;
   }
   
`

export default DesktopHeader
