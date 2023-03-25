import './App.css';
import React from 'react';
import myImage from './assets/image.avif'
import solitaImg from './assets/solita.png'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { MdOutlineRuleFolder, MdOutlineSchedule, MdOutlineContactPhone } from 'react-icons/md'
import { RiGuideLine } from 'react-icons/ri'
import { BsTelephoneForward, BsFillPencilFill } from 'react-icons/bs'
import { TbReport } from 'react-icons/tb'
import { IoChevronBackOutline, IoLanguageOutline, IoLogOut } from 'react-icons/io5'
import PicturePopUp from './components/EditPicture/PicturePopUp';
import EditPopUp from './components/EditInfo/EditPopUp';


function App() {

  const [isPicPressed, setIsPicPressed] = React.useState(false);
  const [isPenPressed, setIsPenPressed] = React.useState(false);

  const style = { color: "grey", height: "20px", width: "20px" }

  return (
    <div className="App">
      <div className='Sidebar'>
        <header className='header'>
          <IoChevronBackOutline style={{width: "20px", height: "20px"}}/>
          <div className='img-container'>
            <img className='image' src={solitaImg}/>
          </div>
        </header>

        <div className='ProfileInfo'>
          <img className='Portrait' src={myImage} onClick={() => setIsPicPressed(true)} />
          <BsFillPencilFill className='pen-icon' style={{color: "#4FA9D2"}} onClick={() => setIsPenPressed(true)}/>
          <h2 className='name'>Anne</h2>
          <h3 className='role'>Machine Operator</h3>
          <span className='phonenumber'>+358 025203121</span>
          <span>Leidi Pipari Oy</span>
          <button className='companyBtn'>Choose another company</button>
        </div>

        <div className='option-container'>
          <section>
            <AiOutlineInfoCircle style={style}/>
            <h4 className='option-name'>Factory Information</h4>
          </section>
          <section>
            <MdOutlineRuleFolder style={style}/>
            <h4 className='option-name'>Alarm Rule</h4>
          </section>
          <section>
            <RiGuideLine style={style}/>
            <h4 className='option-name'>Operation Guide</h4>
          </section>
          <section>
            <MdOutlineSchedule style={style}/>
            <h4 className='option-name'>Shift Schedule</h4>
          </section>
          <section>
            <TbReport style={style}/>
            <h4 className='option-name'>Shift Status</h4>
          </section>
          <section>
            <BsTelephoneForward style={style}/>
            <h4 className='option-name'>Tech Support</h4>
          </section>
        </div>

        <div className='line'></div>

        <div className='option-container'>
          <section>
            <MdOutlineContactPhone style={style}/>
            <h4 className='option-name'>Contacts</h4>
          </section>
          <section>
            <IoLanguageOutline style={style}/>
            <h4 className='option-name'>Language - English</h4>
          </section>
        </div>

        <button className='logoutBtn'> 
          <IoLogOut style={{width: "30px", height: "30px"}}/> 
          <h4>Logout</h4>
        </button>

      </div>
      <PicturePopUp open={isPicPressed} onClose={() => setIsPicPressed(false)}/>
      <EditPopUp open={isPenPressed} onClose={() => setIsPenPressed(false)}/>
    </div>
  );
}

export default App;
