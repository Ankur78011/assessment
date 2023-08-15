import React from 'react'
import { styled } from 'styled-components'
import closeicon from '../images/close.svg'
import dash from "../images/Vector.svg"
import assicon from "../images/note_alt.svg"
import libicon from "../images/quiz.svg"
import rsicon from "../images/admin_meds.svg"
import { useDispatch } from 'react-redux'
import { toggleMobileNav } from './Reducers/ToggleFrom'
const Navbar = () => {
    const dispatch=useDispatch()
   const handleNavClose=()=>{
   
    const myitem=document.querySelector('.mobile-nav-content')

    myitem.classList.add('closemobilenav')
    setTimeout(()=> dispatch(toggleMobileNav()),500)
   }
  return (
    <Wrapper>
      <div className='mobile-modal'>
        <div className='mobile-nav-content'>
         <div>
            <div className='menu-div'>
                <div>Menu</div>
                <div className='colse-mobile-nav' onClick={()=>handleNavClose()}><img src={closeicon} alt='icon'></img></div>
            </div>
            <div className='options-div-mobile'>
                <div className='menu-mobile-option'><div className='res-icon'><img src={dash} alt='icon'></img></div><div>Dashboard</div></div>
                <div className='menu-mobile-option mobile-ass'><div className='res-icon'><img src={assicon} alt='icon'></img></div><div>Assessment</div></div>
                <div className='menu-mobile-option'><div className='res-icon'><img src={libicon} alt='icon'></img></div><div>My Library</div></div>
            </div>
           <div className='mobile-line'></div>
            <div className='round-status-div'>
            <div className='menu-mobile-option'><div className='res-icon'><img src={rsicon} alt='icon'></img></div><div>Round Status</div></div>
             <div className='mobile-admin'>Admin</div>
                
            </div>
         </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
.colse-mobile.nav{
cursor:pointer;
}
.round-status-div{
    display:flex;
    align-items:center;
    justify-content:space-between;


}
.mobile-ass{
    background:#E5F1FC;  
   margin:0px 10px;
   border:1px solid #0173E6;
   border-radius:10px;
   color:#0173E6;

    
}
.mobile-line{
    width:90%;
   margin:5px auto;
 
    border-top:1px dashed #BACBD5;
}
.mobile-admin{
    background:#FBEAEA;
    border:1px solid #D63500;
    color:#D63500;
    font-size:12px;
    padding:2px 7px;
    border-radius:15px;
    margin-right:15px;

}
.menu-div{
    width:80%;
    display:flex;
    justify-content:space-between;
    padding:25px;
    color:#1C4980;
    font-size:14px;
}
.round-status-div{

}
.menu-mobile-option{
    display:flex;
    gap:15px;
    padding:15px 20px;
    justify-content:flex-start;
    align:center;
    margin:0px 10px;

}
.options-div-mobile{
    display:flex;
    flex-direction:column;
}
.mobile-nav-content{
    height:110vh;
    width:75%;
    background:#F2F8FE;
    animation: slideRight 0.5s forwards;
}
@keyframes slideRight {
  from {
    transform: translateX(-100%); 
  }
  to {
    transform: translateX(0%); 
  }
}
.closemobilenav{
    animation: slideLeft 0.5s forwards;
}
@keyframes slideLeft {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%); 
  }
}

.mobile-modal{
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color:rgba(0,0,0,0.5);
    z-index:100;
  
}
`
export default Navbar
