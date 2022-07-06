import {useState} from "react";
import {requestAPI} from "./api/request-api";

const Request = () => {
    const [inputValue, setInputValue] = useState<boolean>(false)
    const toggleHandler = () => setInputValue(!inputValue);
    const sendHandler = () => {
        requestAPI.changeSuccess(inputValue)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <label>
                <input type="checkbox"
                       checked={inputValue}
                       onChange={toggleHandler}
                />success
            </label>
            <br/>
            <button onClick={sendHandler}>send</button>
        </div>
    )
}

export default Request;

