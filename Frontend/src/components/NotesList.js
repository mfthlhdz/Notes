import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Fungsi untuk memformat tanggal dan waktu ke format lokal (mengonversi dari UTC)
const formatDateTime = (datetime) => {
  if (!datetime) return "-";
  try {
    // Hapus 'Z' untuk menghindari masalah waktu UTC
    const date = new Date(datetime.replace('Z', ''));
    // Format waktu menjadi lokal
    return date.toLocaleString("id-ID", {
      dateStyle: "short",
      timeStyle: "short",
    });
  } catch (error) {
    console.error("Error formatting date:", datetime, error);
    return "Invalid date";
  }
};

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const deleteNotes = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      getNotes(); // Refresh the notes list after deletion
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Datetime</th>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, index) => (
              <tr key={note.id}>
                <td>{index + 1}</td>
                <td>{note.title}</td>
                <td>{formatDateTime(note.datetime)}</td>
                <td>
                  <div
                    style={{
                      maxWidth: "200px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      display: "block",
                    }}
                  >
                    {note.note}
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Link
                      to={`/notes/${note.id}`}
                      className="button is-small is-primary"
                    >
                      View
                    </Link>
                    <Link
                      to={`edit/${note.id}`}
                      className="button is-small is-info"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteNotes(note.id)}
                      className="button is-small is-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotesList;
