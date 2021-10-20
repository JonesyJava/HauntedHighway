import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BadgesSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    obtained: { type: Boolean, required: true }
    // locationId: { type: String, ref: 'Location', required: true }
  }
)
BadgesSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default BadgesSchema
