import "./PicturePopUp.css"
import { AiFillCamera } from 'react-icons/ai'
import { BsImages } from 'react-icons/bs'

export default function PicturePopUp({open, onClose}) {

    const style = { color: "#3F87A8", height: "25px", width: "25px" }
    

    if (!open) return null

    return (
        <>
        <div className="overlay"  onClick={onClose}/>

        <div className="popup">
            <h3>Profile picture</h3>
            
            <div className="button-container">
                <div className="function-container">
                    <AiFillCamera className="picture" style={style}/>
                    <h4>Camera</h4>
                </div>
                <div className="function-container">
                    <BsImages className="picture" style={style}/>
                    <h4>Gallery</h4>
                </div>
            </div>
            
        </div>

        </>
    )
}
