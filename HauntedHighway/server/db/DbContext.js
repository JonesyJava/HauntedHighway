import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import BadgesSchema from '../models/Badges'
import SelectionSchema from '../models/Selection'
import PinSchema from '../models/Pin'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Selections = mongoose.model('Selection', SelectionSchema)
  Pins = mongoose.model('Pin', PinSchema)
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Badges = mongoose.model('Bagde', BadgesSchema)
}

export const dbContext = new DbContext()
