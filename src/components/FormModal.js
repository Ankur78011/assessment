import React, { useEffect,useState } from 'react'
import { styled } from 'styled-components'
import cross from '../images/cut.svg'
import close from '../images/close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleForm } from './Reducers/ToggleFrom'
import redcut from "../images/redcut.svg"

const FormModal = () => {
    
    const dispatch=useDispatch()
    const closeFormModal=()=>{
   
        const modalContent = document.querySelector('.form-main');
        const mobileContent=document.querySelector('.mobile-form-modal')
   
      mobileContent.classList.add('closing')
      modalContent.classList.add('closing');
    
       
       setTimeout(()=>dispatch(toggleForm()),500)
        document.body.classList.remove('no-scroll');

    }
  return (
    <>
 <DesktopFrom onClick={()=>closeFormModal()}  className='form-main'>
       <div className="modal-content"  onClick={e=>e.stopPropagation()} >
        <div className='header'>
            <div className='title'>Create new assessment</div>
            <div className='cross' onClick={()=>closeFormModal()}><img src={cross} alt="cross-icon"></img></div>
        </div>
        <div className='body'>
          <form>
            <div className='form-main'>
             <div className='input-name'>Name of assessment</div>
             <div className='input-box' ><input type='text' placeholder='Type Here'></input></div>
             <div className='input-name'>Purpose of the test</div>
             <div className='input-box'>
             <select  className="select-class" >
             <option value="option2"><span className='op-select'>Select</span></option>

            </select></div>
             <div className='input-name'>Description</div>
             <div className='input-box'>
             <select  className="select-class" >
             <option value="option2">Select</option>

            </select></div>
           {/* Skills start */}
           <div className='input-name'>Skills</div>

           <div className='skills-box'>
            <div className='skills'>
                <div className='skill-name'>
                    UI/UX and Design <img src={close} alt='close'></img>
                </div>
                <div className='skill-name'>
                   No of Question<img src={close} alt='close'></img>
                </div>
                <div className='skill-name'>
                    Web Development<img src={close} alt='close'></img>
                </div>
                <div className='skill-name'>
                    UI/UX and Design <img src={close} alt='close'></img>
                </div>
                <div className='skill-name'>
                  Web Development <img src={close} alt='close'></img>
                </div>
            </div>
            <div className='skills-input'>
                <input type='text' placeholder='Type Here'></input>
            </div>
           </div>
            {/* skillsend */}
            <div className='input-name'>Duration of assessment</div>
            <div className='desc-input'><input  placeholder='HH:MM:SS'></input></div>
            <div className='footer-modal'><button className='save-btn'>Save</button></div>
            </div>
            <div>
         
            </div>
         
       
          </form>
        </div>
       </div>
    </DesktopFrom>
   <MobileFrom>
   <div className='mobile-form-modal'>
    <div className='mobile-from-content'>
        <div className='mobile-form-header'>
            <div className='sub-sec-div'>
              Sub-Section Details
            </div>
            <div className='mobile-form-cross' onClick={()=>closeFormModal()}>
             <img src={redcut} alt='cut-icon'></img>
            </div>
        </div>
        <div className='mobile-form-content'>
          <div className='mobile-form-info-div'>
             <div className='mobile-input-lable'>Name of assessment</div>
             <div className='mobile-text-input'><input type='text' placeholder='Type Here'></input></div>
          </div>
          <div className='mobile-form-info-div'>
             <div className='mobile-input-lable'>Purpose of the test is</div>
             <div className='mobile-text-select'><select ><option>Select</option></select></div>
          </div>
          <div className='mobile-form-info-div'>
             <div className='mobile-input-lable'>Description</div>
             <div className='mobile-text-select'><select ><option>Select</option></select></div>
          </div>
          <div className='mobile-form-info-div-skills'>
             <div className='mobile-input-lable'>Skills</div>
             <div className='mobile-skills-box'> 
             <div className='mobile-skill-name'>UI/UX and Design<img src={close} alt='close-icon'></img></div> 
             <div className='mobile-skill-name'>No of Question<img src={close} alt='close-icon'></img></div> 
             <div className='mobile-skill-name'>Web Development<img src={close} alt='close-icon'></img></div> 
             <div className='mobile-skill-name'>UI/UX and Design<img src={close} alt='close-icon'></img></div> 
             <div className='mobile-skill-name'>Web Development<img src={close} alt='close-icon'></img></div> 
    
           
             </div>
             <div className='mobile-text-input-skills'><input type='text' placeholder='Type Here'></input></div>
             
          </div>
          <div className='mobile-form-info-div'>
             <div className='mobile-input-lable'>Duration of assessment</div>
             <div className='mobile-text-input'><input type='text' placeholder='HH:MM:SS'></input></div>
          </div>




       
         </div>
    </div>
    <div className='mobile-from-footer'>
        <button className='mobile-next-btn'>Next</button>
    </div>
   </div>
   </MobileFrom>

   
    </>

  )
}
const MobileFrom=styled.div`
@media (min-width:700px){
    display:none;
}
.mobile-from-content{
    animation: slide-up 0.5s forwards;
}

@keyframes slide-up {
  from {
    transform: translateY(100%); 
  }
  to {
    transform: translateY(0); 
  }
} 
.mobile-skill-name{
    background:#DDEBFF;
    padding:5px 10px;
    color: #1c4980;
    font-family: "Inter-Medium", Helvetica;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;

}
.mobile-text-input-skills{
    
    width:95%;
    input{
        width:100%;
        padding:10px 10px;;
        border-radius:0px 0px 10px 10px;
        height:25px;
        border:1px solid #DADCE0;
        border-top:none;
        }
        
}
.mobile-skills-box{
     width:95%;
    gap:10px;
    border:1px solid  #DADCE0;
    display:flex;
    flex-wrap:wrap;
    padding:10px;
    margin-top: 10px;
}
.mobile-text-select{
width:100%;
select{
    width:100%;
        padding:13px 10px;;
        border-radius:10px;
      
        border:1px solid #DADCE0;
}
}
.mobile-input-lable{
    color: #1c4980;
font-family: "Inter-Medium", Helvetica;
font-size: 12px;
font-weight: 500;
letter-spacing: 0;
line-height: normal;2
text-align: center;

}
.mobile-text-input{
    
    width:95%;
    input{
        width:100%;
        padding:10px 10px;;
        border-radius:10px;
        height:25px;
        border:1px solid #DADCE0;
        
    }
}
.mobile-form-info-div-skills{
width:100%;
display:flex;
align-items:flex-start;
flex-direction:column;

margin-bottom:15px;
}
.mobile-form-info-div{
width:100%;
display:flex;
align-items:flex-start;
flex-direction:column;
gap:10px;
margin-bottom:15px;
}

.mobile-form-content{
width:90%;
height:500px;

margin:0px auto;
overflow:auto;
margin-top:10px;
padding:10px;
margin-bottom:100px;

}
.mobile-form-cross{
    height:30px;
    width:30px;
    border-radius:50%;
    background:#FBEAEA;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:5px;
}

.sub-sec-div{
color: #1c4980;
font-family: "Inter-SemiBold", Helvetica;
font-size: 15px;
font-weight: 600;

letter-spacing: 0;
line-height: normal;



}
.mobile-form-header{
    display:flex;
    justify-content:space-between;
    height:60px;
    align-items:center;
    border-bottom:1px solid #DADCE0;
    padding: 0px 15px;
}
.mobile-from-content{
    height:85%;
    width:100%;
    background:#FFFFFF;
    position:absolute;
    bottom:50px;
    border-radius:10px 10px 0px 0px;


}


.mobile-next-btn{  
font-family: "Inter-SemiBold", Helvetica;
font-size: 14px;
font-weight: 600;

letter-spacing: 0;
line-height: normal;
    color:white;
    

    width:90%;
    background:#0173E6;
    border:none;
    padding:12px;
    border-radius:10px;

}
.mobile-from-footer{
   position:fixed;
   bottom:0;
    width:100%;
    height:60px;
    background:white;
    display:flex;
    align-items:center;
    justify-content:center;
}
.mobile-form-modal{
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.5);
z-index:100;

${'' /* display:flex;
align-items:center;
justify-content:center; */}
}
`
const DesktopFrom=styled.div`
@media (max-width:700px){
    display:none;
}

.footer-modal{
   
    padding:15px 20px;
    background:#FDFDFD;
    @media (max-width:700px){
        position:absolute;
        z-index:1000;
    }
}



.save-btn{
    padding:15px;
    width:100%;
    background:#036CD6;
    border:none;
    color:white;
    font-size:14px;
    font-weight:600;
    border-radius:10px;
}
.skill-name{
 
    background:#DDECFF;
    color: #1C4980;
    font-family: "Inter-Medium", Helvetica;
    font-size: 12px;
    font-weight: 500;
    padding:6px 10px;
    border-radius:20px;
    letter-spacing: 0;
    line-height: normal;
    display:flex;
    align-items:center;
    gap:7px

}
.skills-box{
    border:1px solid #DADCDF;;
    border-radius:10px;
    padding:10px;
}

.skills{
    
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    padding:10px;
}
.skills-input{
    width:100%;
    display:flex;
    input{
        
        width:100%;
        height:20px;
        padding:15px;
        border:none;
        border-top:1px solid #DADCDF;
        border-bottom-left-radius:15px;
        border-bottom-right-radius:15px;
     
    }
    input::placeholder {
         color:#1C4980;
        font-family: "Inter-Medium", Helvetica;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: normal;

}
}
.desc-input{
    width:100%;
    display:flex;
    input{
        width:100%;
        height:20px;
        padding:15px;
        border-radius:10px;
        border:1px solid #DADCDF;

    }
    input::placeholder {
       
        font-family: "Inter-Medium", Helvetica;
        font-size: 14px;
        font-weight: 500;

        letter-spacing: 0;
        line-height: normal;

}
 
}
.select-class{
    border:1px solid #DADCDF;
    border-radius:10px;
    width:100%;
    padding:0px 15px;
    
    height:50px;
  
}

.input-box{
    width:100%;
    display:flex;
    input{
        width:100%;
        height:20px;
        padding:15px;
        border-radius:10px;
        border:1px solid #DADCDF;

    }
    input::placeholder {
        color: #1c4980;
        font-family: "Inter-Medium", Helvetica;
        font-size: 14px;
        font-weight: 500;

        letter-spacing: 0;
        line-height: normal;

}
}
.input-name{
    width:100%;
    display:flex;
    color: #1c4980;
font-family: "Inter-Medium", Helvetica;
font-size: 16px;
font-weight: 500;
margin:15px 0px 10px 0px;
letter-spacing: 0;
line-height: normal;

}
.form-main{
width:90%;

margin:5px auto;
}
.title{
  color: #1c4980;
font-family: "Inter-SemiBold", Helvetica;
font-size: 20px;
font-weight: 600;
letter-spacing: 0;
line-height: normal;
}
.header{
    display:flex;
    justify-content:space-between;
    padding:15px 15px 5px 15px ;
    border-bottom:1px solid #DADCE0;
}
.cross{
    cursor:pointer;
}

.modal-content{
    height:auto;
    position: absolute;
    animation: slide-up 0.5s forwards;
    width:40%;
    background:#F7F8FB;
    border-radius:10px;
    @media (max-width:700px){
    width:100%;
    margin-top:50px;
    height:700px;
    overflow-y:auto;
}

@keyframes slide-up {
  from {
    transform: translateY(100%); /* Start from bottom */
  }
  to {
    transform: translateY(0); /* Move to the top */
  }
} 
}




position:fixed;
height:100vh;
left:0;
top:0;
right:0;
bottom:0;
background-color:rgba(0,0,0,0.5);
display:flex;
${'' /* align-items:center; */}
justify-content:center;
z-index:10;

`
export default FormModal
