import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNotes = () => {
  const [title, setTitle] = useState("");
  const [datetime, setDatetime] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getNotesById();
  }, []);

  const updateNotes = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/notes/${id}`, {
        title,
        datetime,
        note,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getNotesById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/notes/${id}` );
      setTitle(response.data.title);
      setDatetime(response.data.datetime);
      setNote(response.data.note);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateNotes}>
          {/* Input untuk Title */}
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            </div>
          </div>

          {/* Input untuk Datetime */}
          <div className="field">
            <label className="label">Datetime</label>
            <div className="control">
              <input type="datetime-local" className="input" value={datetime} onChange={(e) => setDatetime(e.target.value)} placeholder="Datetime" />
            </div>
          </div>

          {/* Input untuk Note */}
          <div className="field">
            <label className="label">Note</label>
            <div className="control">
              <textarea className="textarea" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Note"></textarea>
            </div>
          </div>

          {/* Tombol Update */}
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNotes;