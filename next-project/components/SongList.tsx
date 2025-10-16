"use client"
import React from 'react'

export default function SongList({ songs, onEdit, onDelete }: any) {
  const handleDelete = async (id: string) => {
    if (!confirm('Delete this song?')) return
    await fetch(`/api/songs/${id}`, { method: 'DELETE' })
    onDelete()
  }

  return (
    <div className="bg-white shadow rounded p-4">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Album</th>
            <th className="p-2">Artist</th>
            <th className="p-2">Year</th>
            <th className="p-2">Genre</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((s:any) => (
            <tr key={s._id} className="border-t">
              <td className="p-2">{s.title}</td>
              <td className="p-2">{s.album}</td>
              <td className="p-2">{s.artist}</td>
              <td className="p-2">{s.year}</td>
              <td className="p-2">{s.genre}</td>
              <td className="p-2 space-x-2">
                <button className="text-blue-600" onClick={() => onEdit(s)}>Edit</button>
                <button className="text-red-600" onClick={() => handleDelete(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
