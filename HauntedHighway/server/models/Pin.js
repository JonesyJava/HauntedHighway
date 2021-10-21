import mongoose from 'mongoose'
const Schema = mongoose.Schema

const PinSchema = new Schema(
  {
    city: { type: String },
    country: { type: String },
    description: { type: String, required: true },
    location: { type: String, required: true },
    state: { type: String },
    state_abbrev: { type: String },
    longitude: { type: String, required: true },
    latitude: { type: String, required: true },
    city_longitude: { type: String },
    city_latitude: { type: String },
    selectionId: { type: Schema.Types.ObjectId, required: true }

  }
)

PinSchema.virtual('Selection', {
  localField: 'selectionId',
  foreignField: 'id',
  ref: 'Selection',
  justOne: true
})

export default PinSchema
