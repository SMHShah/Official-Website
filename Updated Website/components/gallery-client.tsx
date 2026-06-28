"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Plus, Lock, X, ImageIcon, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "rocket-squad-gallery-2026"
const GALLERY_PASSWORD = "syedmhussnainshah.racepakistan"

type GalleryItem = {
  id: string
  src: string
  caption: string
}

export function GalleryClient() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loaded, setLoaded] = useState(false)
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Load saved images
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {
      // ignore
    }
    setLoaded(true)
  }, [])

  // Persist images
  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // storage full or unavailable
    }
  }, [items, loaded])

  function handlePlusClick() {
    if (unlocked) {
      fileInputRef.current?.click()
      return
    }
    setShowPasswordPrompt(true)
    setPassword("")
    setError("")
  }

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault()
    if (password === GALLERY_PASSWORD) {
      setUnlocked(true)
      setShowPasswordPrompt(false)
      setError("")
      // open file explorer right after unlocking
      setTimeout(() => fileInputRef.current?.click(), 100)
    } else {
      setError("Incorrect password. Access denied.")
    }
  }

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files) return
    const readers = Array.from(files).map(
      (file) =>
        new Promise<GalleryItem>((resolve) => {
          const reader = new FileReader()
          reader.onload = () =>
            resolve({
              id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
              src: reader.result as string,
              caption: file.name.replace(/\.[^.]+$/, ""),
            })
          reader.readAsDataURL(file)
        }),
    )
    Promise.all(readers).then((newItems) => {
      setItems((prev) => [...newItems, ...prev])
    })
    e.target.value = ""
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFiles}
      />

      {/* Action bar */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ImageIcon className="h-4 w-4 text-primary" />
          <span>
            {items.length} {items.length === 1 ? "photo" : "photos"}
            {unlocked && " · Edit mode unlocked"}
          </span>
        </div>
        <Button onClick={handlePlusClick} className="bg-rocket-gradient font-semibold text-black hover:opacity-90">
          <Plus className="mr-1 h-4 w-4" />
          Add Photos
        </Button>
      </div>

      {/* Grid */}
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/40 px-6 py-20 text-center">
          <button
            onClick={handlePlusClick}
            aria-label="Add photos"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-rocket-gradient text-black transition-transform hover:scale-105"
          >
            <Plus className="h-8 w-8" />
          </button>
          <p className="mt-4 font-semibold text-foreground">No photos yet</p>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Tap the plus button to upload your Formula Pakistan 2026 images. Uploading is password protected.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-card"
            >
              <button
                onClick={() => setLightbox(item)}
                className="absolute inset-0 h-full w-full"
                aria-label={`View ${item.caption}`}
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.caption || "Formula Pakistan 2026 photo"}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              </button>
              {unlocked && (
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-destructive backdrop-blur transition-colors hover:bg-background"
                  aria-label="Delete photo"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Password prompt */}
      {showPasswordPrompt && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowPasswordPrompt(false)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleUnlock}
            className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rocket-gradient text-black">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold text-foreground">Password required</h2>
                <p className="text-xs text-muted-foreground">Only the admin can upload photos.</p>
              </div>
            </div>
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
            <div className="mt-4 flex gap-2">
              <Button
                type="button"
                variant="secondary"
                className="flex-1"
                onClick={() => setShowPasswordPrompt(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-rocket-gradient font-semibold text-black hover:opacity-90">
                Unlock
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src || "/placeholder.svg"}
              alt={lightbox.caption || "Formula Pakistan 2026 photo"}
              className="mx-auto max-h-[85vh] w-auto rounded-xl object-contain"
            />
            {lightbox.caption && (
              <p className="mt-3 text-center text-sm text-muted-foreground">{lightbox.caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
