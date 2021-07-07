import React, {useState} from "react"

function HiddenMessage(props) {
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div>
            <label htmlFor ="toggle">Show Message</label>
            <input 
                id = "toggle"
                type = "checkbox"
                onChange = {e => setShowMessage(e.target.checked)}
                checked = {showMessage}
            />
            {showMessage ? props : null}
        </div>
    )
}

export default HiddenMessage;