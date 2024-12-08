import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function NotesDetail() {
    const [note, setNote] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Fungsi untuk mengambil data note berdasarkan ID
        const fetchNote = async () => {
            try {
                const response = await fetch(`http://localhost:5000/notes/${id}`);
                const data = await response.json();
                setNote(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchNote();
    }, [id]);

    if (!note) return <div>Loading...</div>;

    return (
        <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Note Details</h2>
            <div style={{ marginBottom: "20px" }}>
                <h3 style={{ margin: "0", color: "#444" }}>{note.title}</h3>
                <p style={{ fontStyle: "italic", color: "#666", fontSize: "14px" }}>
                    Created: {new Date(note.datetime).toLocaleString()}
                </p>
            </div>
            <p style={{ lineHeight: "1.6", color: "#555" }}>{note.note}</p>
            <button 
                onClick={() => window.history.back()} 
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "4px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    cursor: "pointer"
                }}
            >
                Back
            </button>
        </div>
    );
}

export default NotesDetail;