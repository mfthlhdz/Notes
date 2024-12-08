import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotesList from "./components/NotesList";
import AddNotes from "./components/AddNotes";
import EditNotes from "./components/EditNotes";
import NotesDetail from "./components/NotesDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesList/>}/>
        <Route path="add" element={<AddNotes/>}/>
        <Route path="edit/:id" element={<EditNotes/>}/>
        <Route path="view/:id" element={<NotesDetail/>}/>
        <Route path="/notes/:id" element={<NotesDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
