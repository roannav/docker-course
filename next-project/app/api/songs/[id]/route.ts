import { NextResponse } from 'next/server'
import Song from '../../../../models/Song'
import { connect } from '../../../../lib/mongo'

export async function GET(req: Request, { params }: any) {
  await connect()
  const song = await Song.findById(params.id).lean()
  if (!song) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(song)
}

export async function PUT(req: Request, { params }: any) {
  await connect()
  const body = await req.json()
  const updated = await Song.findByIdAndUpdate(params.id, body, { new: true })
  return NextResponse.json(updated)
}

export async function DELETE(req: Request, { params }: any) {
  await connect()
  await Song.findByIdAndDelete(params.id)
  return NextResponse.json({ ok: true })
}
