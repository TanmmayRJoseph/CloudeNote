import mongoose, { Schema } from "mongoose";//importing mongoose and Schema

const noteSchema = new Schema(
  //defining the schema
  {
    title: {
      type: String, //defining the data type in this case its string
      required: true, //defining that this field is required
    },
    description: {
      type: String, //defining the data type in this case its string
      required: true, //defining that this field is required
    },
  },
  {
    timestamps: true, //defining that this field is required
  }
);

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema); // Check if the model already exists

export default Note; //exporting the model
