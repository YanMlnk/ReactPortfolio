import "./modal.css";
import { useState } from "react";
const ModalButton = () => {
    const [show, setShow] = useState(false)
   
    return (
    <div className="modal-flex">
      <div>
        <button className="modal-button" type="button" onClick={() => setShow(true)}>
        <h1>Book a Call</h1>
        </button>
        </div>

        {show && <div className="overlay">
            <div className="modal">
              <button
                className="modal-close"
                type="button"
                onClick={() => setShow(false)}
              >
                x
              </button>
              <div className="modal-body">Call Info</div>
            </div>
          </div>}
          
        
        </div>
    )

}

export default ModalButton;