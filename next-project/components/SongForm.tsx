"use client"
import React, { useEffect, useState } from 'react'

export default function SongForm({ editing, onSaved }: any) {
  const [form, setForm] = useState({ title:'', album:'', artist:'', year:2020, genre:'' })

  useEffect(() => {
    if (editing) setForm(editing)
  }, [editing])

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    if (editing && editing._id) {
      await fetch(`/api/songs/${editing._id}`, { method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) })
    } else {
      await fetch('/api/songs', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) })
    }
    setForm({ title:'', album:'', artist:'', year:2020, genre:'' })
    onSaved()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input required placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} className="p-2 border rounded" />
        <input required placeholder="Album" value={form.album} onChange={e=>setForm({...form, album:e.target.value})} className="p-2 border rounded" />
        <input required placeholder="Artist" value={form.artist} onChange={e=>setForm({...form, artist:e.target.value})} className="p-2 border rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input required type="number" placeholder="Year" value={form.year} onChange={e=>setForm({...form, year: Number(e.target.value)})} className="p-2 border rounded" />
        <input required placeholder="Genre" value={form.genre} onChange={e=>setForm({...form, genre:e.target.value})} className="p-2 border rounded" />
      </div>
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">{editing ? 'Update Song' : 'Add Song'}</button>
      </div>
    </form>
  )
}
