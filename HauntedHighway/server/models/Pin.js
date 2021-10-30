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
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    city_longitude: { type: String },
    city_latitude: { type: String },
    backgroundImage: { type: String, default: 'https://i.pinimg.com/originals/fa/c0/83/fac0839e4b1c6e67d254ef908c90f4ef.gif' },
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
