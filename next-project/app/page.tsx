'use client'

import { useEffect, useState } from 'react'
import SongList from '../components/SongList'
import SongForm from '../components/SongForm'

export default function Page() {
  const [songs, setSongs] = useState([])
  const [editing, setEditing] = useState(null)

  const fetchSongs = async () => {
    const res = await fetch('/api/songs')
    const data = await res.json()
    setSongs(data)
  }

  useEffect(() => { fetchSongs() }, [])

  return (
    <div className="space-y-6">
      <SongForm onSaved={() => { setEditing(null); fetchSongs() }} editing={editing} />
      <SongList songs={songs} onEdit={(s:any) => setEditing(s)} onDelete={() => fetchSongs()} />
    </div>
  )
}
