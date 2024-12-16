import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [addnotes, setAddNotes] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddNotes((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/Createnote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addnotes),
      });
      if (response.ok) {
        navigate("/"); // Redirect to the home page after successful note addition
      } else {
        console.error("Failed to add note. Status:", response.status);
      }
    } catch (error) {
      console.error("Error adding note:", error.message);
    }
  };

  return (
    <div className="h-[89vh] flex items-center justify-center bg-slate-800">
      <form
        className="bg-slate-900 text-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
          Add New Note
        </h2>

        {/* Note Title */}
        <div className="mb-3 sm:mb-4">
          <label
            htmlFor="noteTitle"
            className="block text-sm font-medium mb-1 sm:mb-2 text-slate-300"
          >
            Note Title
          </label>
          <input
            type="text"
            name="title"
            id="noteTitle"
            placeholder="Enter note title"
            value={addnotes.title}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Note Description */}
        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-1 sm:mb-2 text-slate-300"
          >
            Note Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter note description"
            rows="4"
            value={addnotes.description}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 sm:py-2 sm:px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};


export default AddNote;
