import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";
function App(){
    const [notes,setnotes] = React.useState([]);
    const [id,setid] = React.useState(0);

    function add(note){
        setnotes(prev => {
            return [
                ...prev,
                note
            ]
        })
    }
    function deleteItem(id){
        setnotes(prev => {
            return prev.filter((noteItem,index) => {
                return index !== id;
            })
        })
    }

    return <div>
        <Header />
        <CreateArea key={id}  addnote = {add}/>

        {notes.map((noteItem,index) => <Note
            // key={noteItem.key}
            // id={noteItem.key}
            key = {index}
            id = {index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteItem}
        />)}

        <Footer />
    </div>
}

export default App;
