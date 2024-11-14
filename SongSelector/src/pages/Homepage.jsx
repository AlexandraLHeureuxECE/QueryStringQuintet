'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Homepage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchType, setSearchType] = useState('song')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    // TODO: Implement actual API call to backend
    console.log(`Searching for ${searchType}: ${searchTerm}`)
    // Placeholder for API call
    // const response = await fetch(`/api/search?type=${searchType}&term=${searchTerm}`)
    // const data = await response.json()
    // setSearchResults(data)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">SongSelector Database</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search the Database</CardTitle>
          <CardDescription>Find songs, artists, albums, and more</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex space-x-2">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="song">Song</option>
              <option value="artist">Artist</option>
              <option value="album">Album</option>
              <option value="label">Label</option>
            </select>
            <Input
              type="text"
              placeholder={`Search for ${searchType}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">Search</Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Songs</CardTitle>
            <CardDescription>Browse our extensive song collection</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Total Songs: Loading...</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Artists</CardTitle>
            <CardDescription>Explore talented artists in our database</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Total Artists: Loading...</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Albums</CardTitle>
            <CardDescription>Discover albums from various genres</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Total Albums: Loading...</p>
          </CardContent>
        </Card>
      </div>

      {searchResults.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Search Results</CardTitle>
          </CardHeader>
          <CardContent>
            {/* TODO: Implement search results display */}
            <p>Search results will be displayed here</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}