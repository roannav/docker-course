import mongoose from 'mongoose'

const SongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  album: { type: String, required: true },
  artist: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true }
}, { timestamps: true })

export default mongoose.models.Song || mongoose.model('Song', SongSchema)
