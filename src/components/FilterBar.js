import React from 'react'
import search from "../images/search.svg"
import filter from "../images/filter_list_alt.svg"
import bar from "../images/bar_chart.svg"
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDetails } from './Reducers/ToggleFrom'
import bulebar from '../images/bluebar.svg'
const FilterBar = () => {
  const dispatch=useDispatch()
  const handleToggleDetails=()=>{
    const myitem=document.querySelector('.mobile-details')
    
    

    console.log(myitem)
 dispatch(toggleDetails())
    
  }
  return (<Wrapper>
  <div className='my-assessment-heading'>
      
      <div className='my-ass-left'>  
       My Assessment
      </div>
      <div className='my-ass-right'>
        <div><img src={search} alt='search icon'></img></div>
        <div><img src={filter} alt='filter icon'></img></div>
        <div onClick={()=>handleToggleDetails()} className={useSelector((state)=>state.form.showDetials)?'bar-icon shine-icon':'bar-icon'}>
        {useSelector((state)=>state.form.showDetials)?<img src={bulebar} alt='bar'></img>:  <img src={bar} alt='bar-icon'></img>}
      </div>
    
      </div>
    </div>
  </Wrapper>
    
  )
}
const Wrapper=styled.div`
.closeMobileDetails{
  animation: outflow 0.5s forwards;
}
@keyframes outflow {
  from{
    height: 300px;
  }
  to{
    height:0px;
  }
}
.loaded {
  opacity: 1; 
}
.bar-icon{
  cursor:pointer;
  height:40px;
  width:40px;
  border-radius:50%;

  display:flex;
  align-items:center;
  justify-content:center;
  background:none
}
.my-assessment-heading{
  ${'' /* width:100vw; */}
  display:flex;
  justify-content:space-between;
  width: 100%;
 padding:15px;
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
.my-ass-right{
  display:flex;
  justify-content:space-between;
  gap:20px;
  justify-content:center;
  align-items:center;

}
.shine-icon{
  height:40px;
  width:40px;
  border-radius:50%;
  background:#F2F8FE;
  border:1px solid #0073E6;
}
`
export default FilterBar
