import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SingleNote = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/getallnotes");
      if (!response.ok) {
        throw new Error(`Failed to fetch notes: ${response.status}`);
      }
      const data = await response.json();
      setNotes(data.data || []);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/notes/${_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== _id));
      } else {
        console.error(
          `Failed to delete note with id: ${_id}. Status: ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      {notes.length > 0 ? (
        notes.map((note) => (
          <div
            key={note._id}
            className="h-auto bg-slate-950 rounded-2xl shadow-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Note Title */}
            <h2 className="text-white text-2xl font-extrabold mb-4 border-b-2 border-slate-700 pb-2">
              {note.title}
            </h2>

            {/* Note Content */}
            <p className="text-slate-300 text-sm leading-relaxed overflow-hidden text-ellipsis">
              {note.description}
            </p>

            <div className="flex gap-4 mt-4">
              <Link to={`/UpdateNote/${note._id}`}>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => handleDelete(note._id)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center font-semibold items-center text-gray-500 mt-6 text-lg">
          No Notes available
        </p>
      )}
    </>
  );
};

export default SingleNote;
