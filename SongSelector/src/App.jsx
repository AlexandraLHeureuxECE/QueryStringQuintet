import React from 'react'
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { Button } from "@/components/ui/button"

// Placeholder components for other pages
const SongsPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Songs</h1>
    <p>This is the Songs page. Content to be implemented.</p>
  </div>
)

const ArtistsPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Artists</h1>
    <p>This is the Artists page. Content to be implemented.</p>
  </div>
)

const AlbumsPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Albums</h1>
    <p>This is the Albums page. Content to be implemented.</p>
  </div>
)

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">SongSelector</Link>
            <div className="space-x-2">
              <Link to="/songs"><Button variant="secondary">Songs</Button></Link>
              <Link to="/artists"><Button variant="secondary">Artists</Button></Link>
              <Link to="/albums"><Button variant="secondary">Albums</Button></Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/songs" element={<SongsPage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/albums" element={<AlbumsPage />} />
          </Routes>
        </main>

        <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 SongSelector. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}