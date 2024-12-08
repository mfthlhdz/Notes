import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNotes = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [datetime, setDatetime] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const saveNotes = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/notes", {
        id,
        title,
        datetime,
        note,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveNotes}>
          {" "}
          {/* Ganti saveUser dengan saveNotes */}
          <div className="field">
            <label className="label">Id</label>
            <div className="control">
              <input type="number" className="input" value={id} onChange={(e) => setId(e.target.value)} placeholder="Id" />
            </div>
          </div>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            </div>
          </div>
          <div className="field">
            <label className="label">Datetime</label>
            <div className="control">
              <input type="datetime-local" className="input" value={datetime} onChange={(e) => setDatetime(e.target.value)} placeholder="Datetime" />
            </div>
          </div>
          <div className="field">
            <label className="label">Note</label>
            <div className="control">
            <textarea className="textarea" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Note"></textarea>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;