import './globals.css'

export const metadata = {
  title: 'Favorite Songs',
  description: 'Manage your favorite songs'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">Favorite Songs</h1>
            <p className="text-sm text-gray-600">Create, read, update and delete your favorite songs.</p>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
