import mongoose from 'mongoose'
import Song from '../models/Song'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:27017/favorite-songs'

let isConnected = false

export async function connect() {
  if (isConnected) return
  await mongoose.connect(MONGODB_URI)
  isConnected = true

  // seed if empty
  const count = await Song.countDocuments()
  if (count === 0) {
    await Song.create([
      { title: 'Imagine', album: 'Imagine', artist: 'John Lennon', year: 1971, genre: 'Rock' },
      { title: 'Billie Jean', album: 'Thriller', artist: 'Michael Jackson', year: 1982, genre: 'Pop' },
      { title: 'Hotel California', album: 'Hotel California', artist: 'Eagles', year: 1976, genre: 'Rock' },
      { title: 'Like a Rolling Stone', album: 'Highway 61 Revisited', artist: 'Bob Dylan', year: 1965, genre: 'Folk' },
      { title: 'Smells Like Teen Spirit', album: 'Nevermind', artist: 'Nirvana', year: 1991, genre: 'Grunge' }
    ])
  }
}
