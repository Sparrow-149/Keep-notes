import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {

  const [isexpanded,setexpanded] = useState(false);

  function expand(){
    setexpanded(true);
  }
    const [note,setNote] = useState({
        title: "",
        content: ""
    });

    function handleInput(event){
        const name = event.target.name;
        const value = event.target.value;

        setNote((prevval) =>{
            return {
                ...prevval,
                [name] : value,
            }
        })
    }
    function add(event) {
        setNote({
          title: "",
          content: "",
        });
        event.preventDefault();
    }
  return (
    <div>
      <form onSubmit={add} className="create-note">
        {isexpanded ? (<input
          name="title"
          placeholder="Title"
          onChange={handleInput}
          value={note.title}
        />) : null}

        <textarea
          name="content"
          onClick={expand}
          placeholder="Take a note..."
          rows={isexpanded ? 3 : 1}
          onChange={handleInput}
          value={note.content}
        />
        <Zoom in={true}>
        <Fab
          onClick={() => {
            if(note.title !== "" && note.content !== "")
              props.addnote(note);
          }}
        >
         <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
