import mongoose from 'mongoose'
const Schema = mongoose.Schema

const SelectionSchema = new Schema(
  {
    title: { type: String, required: true },
    backgroundImage: { type: String, required: true },
    description: { type: String, required: true }
  }
)

export default SelectionSchema
