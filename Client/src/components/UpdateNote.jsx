import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateNote = () => {
  const { id } = useParams(); // Extract `id` from route parameters
  const navigate = useNavigate(); // For navigation after update
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    // Fetch the note data by ID using the fetch API
    fetch(`http://localhost:4000/api/Getnotes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Prefill the form with the fetched data
        setNote({
          title: data.data.title,
          description: data.data.description,
        });
      })
      .catch((error) => {
        console.error("Error fetching note:", error);
      });
  }, [id]); // Re-fetch the note when `id` changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
      if (response.ok) {
        navigate("/"); // Redirect to the home page after a successful update
      } else {
        console.error("Failed to update note. Status:", response.status);
      }
    } catch (error) {
      console.error("Error updating note:", error.message);
    }
  };

  return (
    <div className="h-[89vh] flex items-center justify-center bg-slate-800">
      <form
        onSubmit={handleUpdate}
        className="bg-slate-900 text-white p-8 rounded-xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Update Note</h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium mb-2 text-slate-300"
          >
            Note Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Enter note title"
            className="w-full p-3 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2 text-slate-300"
          >
            Note Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter note description"
            value={note.description}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600"
        >
          Update Note
        </button>
      </form>
    </div>
  );
};

export default UpdateNote;
