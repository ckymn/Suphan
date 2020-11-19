import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: [true, 'Lutfen bir e-mail adresi giriniz !']
  },
  password: String,
  dateCreated: {
    type: Date,
    default: new Date() // burda kendimiz set etmez isek bile default olarak kaydediyor.
  },
  dateModified: {
    type: Date,
    default: new Date()
  },
  lastLogin: {
    type: Date,
    default: new Date()
  }
})

export default mongoose.model('User', userSchema) //burdaki user mongo veri tabaninda olusacak collection adidir.
