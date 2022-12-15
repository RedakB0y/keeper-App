import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Card(props) {
    return (
        <div id="card">
            <h1 className="cardcss">{props.title}</h1>
            <p className="cardcss">{props.content}</p>
            <a href="/#" id="card_anc" onClick={() => {
                props.deleteitem(props.id);
            }}><DeleteIcon /></a>
        </div>
    );

}
export default Card;