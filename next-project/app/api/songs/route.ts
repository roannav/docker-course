import { NextResponse } from 'next/server'
import Song from '../../../models/Song'
import { connect } from '../../../lib/mongo'

export async function GET() {
  await connect()
  const songs = await Song.find().sort({ createdAt: -1 }).lean()
  return NextResponse.json(songs)
}

export async function POST(req: Request) {
  await connect()
  const body = await req.json()
  const created = await Song.create(body)
  return NextResponse.json(created)
}
