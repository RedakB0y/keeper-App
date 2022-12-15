import React, { useState } from "react";
import Input from "./input";
import Header from "./header";
import Card from "./card";

function App() {
    let [inputtext, setInputtext] = useState([]);

    function GetInputText(data) {
        if (data.title !== "") {
            setInputtext((prev) => {
                return [...prev, data]
            });
        }
    }
    function deleteItem(id) {
        setInputtext((prev) => {
            return (
                prev.filter((elm, index) => {
                    return index !== id;
                })
            )
        })
    }
    return (
        <div>
            <Header />
            <Input getinputtext={GetInputText} />
            <div id="card_flex">
                {inputtext.map((elem, index) => {
                    return (
                        <Card title={elem.title} content={elem.content} key={index} id={index} deleteitem={deleteItem} />
                    );

                })}
            </div>
        </div>
    );
}

export default App;
