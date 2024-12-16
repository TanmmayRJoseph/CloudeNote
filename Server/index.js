import express from "express"; // Import express
import dotenv from "dotenv"; // Import dotenv
import morgan from "morgan"; // Import morgan
import connectDB from "./config/db.js"; // Import connectDB
import Note from "./models/noteModel.js"; // Import Note model
import { body, validationResult } from "express-validator"; // Import express-validator
import cors from "cors"; // Import cors

dotenv.config(); // Load environment variables
connectDB(); // Connect to the database

const app = express(); // creating an express app
const corsOptions = {
  origin: "http://localhost:5173", // ? Allow requests from this origin
  methods: "GET,POST,PUT,DELETE", // Allowed methods
  credentials: true, // Enable credentials for cross-origin requests
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// Base Route
app.get("/", (req, res) => {
  res.json({
    message: "Server is running....",
    timestamp: new Date(),
  });
});

// Global Error Handling Middleware if any error occurs in any route it will be handled here
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// !👇 Note Routes for CRUD operations starts here....👇

// ! GET /notes for getting all notes in json format
app.get("/api/getallnotes", async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      data: notes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching notes",
      error: error.message,
    });
  }
});

// ! POST /notes for creating a new note
app.post(
  "/api/Createnote",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { title, description } = req.body;
      const newNote = new Note({ title, description });
      await newNote.save();
      res.status(201).json({
        success: true,
        message: "Note created successfully",
        data: newNote,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Error creating note",
        error: error.message,
      });
    }
  }
);

// ! PUT /notes/:id for updating a note by id
app.put("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    console.log(`Updating note with ID: ${id}`, req.body);
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error updating note",
      error: error.message,
    });
  }
});

// ! DELETE /notes/:id for deleting a note by id
app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    console.log(`Deleting note with ID: ${id}`);
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
      data: deletedNote,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error deleting note",
      error: error.message,
    });
  }
});

app.get("/api/Getnotes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json({ data: note });
  } catch (error) {
    console.error("Error fetching note:", error);
    res.status(500).json({ message: "Error fetching note" });
  }
});

const PORT = process.env.PORT || 3000; // setting the port
app.listen(PORT, () => {
  // starting the server
  console.log(`Server is running on port ${PORT}`); // logging the port in the console
});
