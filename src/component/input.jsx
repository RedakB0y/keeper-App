import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Input(props) {
    let [input, setinput] = useState({
        title: "",
        content: "",
    });
    let [extend, setextend] = useState(false);


    function handleinput(e) {
        const { name, value } = e.target;
        setinput((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }
    function handleclick(e) {
        e.preventDefault();
        props.getinputtext(input);
        setinput({
            title: "",
            content: ""
        })
    }
    function show() {
        setextend(true);
    }

    return (
        <div id="input_block">
            <div id="inputfield">
                <form>
                    {extend && (<input
                        type={"text"}
                        placeholder={"Title"}
                        className="inp"
                        onChange={handleinput}
                        name="title"
                        value={input.title}/>)
                    }
                    <textarea
                        id="content"
                        className="inp"
                        placeholder={"Take a Note..."}
                        onChange={handleinput}
                        name="content"
                        value={input.content}
                        onClick={show}
                        rows={extend?"4":"2"}
                    ></textarea>
                    {extend && (<Zoom in={extend}>
                        <Fab id="btn" className="hide" onClick={handleclick} ><AddIcon /></Fab>
                    </Zoom>)}
                </form>
            </div>
        </div>
    );
}
export default Input;