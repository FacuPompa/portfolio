import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type WheelEvent,
} from 'react'
import { ChevronLeft, ChevronRight, Images, Minus, Plus, RotateCcw, X } from 'lucide-react'

const MIN_ZOOM = 1
const MAX_ZOOM = 4
const ZOOM_STEP = 0.25

export type GalleryImage = {
  src: string
  alt: string
  caption: string
}

type ProjectGalleryProps = {
  title: string
  images: readonly GalleryImage[]
  labels: {
    open: string
    close: string
    previous: string
    next: string
    zoomControls: string
    zoomIn: string
    zoomOut: string
    resetZoom: string
    zoomLevel: string
    loading: string
  }
}

export function ProjectGallery({ title, images, labels }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState(MIN_ZOOM)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [loadedSources, setLoadedSources] = useState<Set<string>>(() => new Set())
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const zoomViewportRef = useRef<HTMLDivElement>(null)
  const preloadedImagesRef = useRef<HTMLImageElement[]>([])
  const dragRef = useRef<{
    pointerId: number
    startX: number
    startY: number
    panX: number
    panY: number
  } | null>(null)
  const isOpen = activeIndex !== null

  const preloadGallery = () => {
    images.forEach(({ src }) => {
      if (preloadedImagesRef.current.some((image) => image.src === new URL(src, window.location.href).href)) return
      const image = new Image()
      image.src = src
      preloadedImagesRef.current.push(image)
    })
  }

  const markImageReady = (src: string) => {
    setLoadedSources((current) => {
      if (current.has(src)) return current
      return new Set(current).add(src)
    })
  }

  const clampPan = (x: number, y: number, scale: number) => {
    const viewport = zoomViewportRef.current
    if (!viewport || scale <= MIN_ZOOM) return { x: 0, y: 0 }

    const maxX = (viewport.clientWidth * (scale - 1)) / 2
    const maxY = (viewport.clientHeight * (scale - 1)) / 2
    return {
      x: Math.min(maxX, Math.max(-maxX, x)),
      y: Math.min(maxY, Math.max(-maxY, y)),
    }
  }

  const adjustZoom = (amount: number) => {
    setZoom((current) => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current + amount))
      setPan((currentPan) => clampPan(currentPan.x, currentPan.y, next))
      return next
    })
  }

  const resetZoom = () => {
    setZoom(MIN_ZOOM)
    setPan({ x: 0, y: 0 })
    dragRef.current = null
    setIsDragging(false)
  }

  useEffect(() => {
    if (!isOpen) return

    const returnFocus = triggerRef.current
    document.body.classList.add('gallery-open')
    window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => current === null ? 0 : (current - 1 + images.length) % images.length)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => current === null ? 0 : (current + 1) % images.length)
      }
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('gallery-open')
      document.removeEventListener('keydown', onKeyDown)
      returnFocus?.focus()
    }
  }, [images.length, isOpen])

  useEffect(() => {
    resetZoom()
  }, [activeIndex])

  const showPrevious = () => {
    setActiveIndex((current) => current === null ? 0 : (current - 1 + images.length) % images.length)
  }

  const showNext = () => {
    setActiveIndex((current) => current === null ? 0 : (current + 1) % images.length)
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setActiveIndex(null)
  }

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault()
    adjustZoom(event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP)
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (zoom <= MIN_ZOOM || event.button !== 0) return

    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      panX: pan.x,
      panY: pan.y,
    }
    setIsDragging(true)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    setPan(clampPan(
      drag.panX + event.clientX - drag.startX,
      drag.panY + event.clientY - drag.startY,
      zoom,
    ))
  }

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    dragRef.current = null
    setIsDragging(false)
  }

  const activeImage = activeIndex === null ? null : images[activeIndex]

  return (
    <>
      <figure className="gallery-preview">
        <button
          ref={triggerRef}
          className="gallery-trigger"
          type="button"
          onMouseEnter={preloadGallery}
          onFocus={preloadGallery}
          onTouchStart={preloadGallery}
          onClick={() => {
            preloadGallery()
            setActiveIndex(0)
          }}
          aria-label={`${labels.open}: ${title}`}
        >
          <img src={images[0].src} alt={images[0].alt} loading="lazy" decoding="async" />
          <span className="gallery-trigger-label">
            <Images size={17} aria-hidden="true" />
            {labels.open}
          </span>
        </button>
        <figcaption>{images[0].caption}</figcaption>
      </figure>

      {activeImage && (
        <div className="gallery-dialog-backdrop" onMouseDown={handleBackdropClick}>
          <div
            ref={dialogRef}
            className="gallery-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${title}: ${labels.open}`}
          >
            <div className="gallery-dialog-header">
              <p>{title}</p>
              <span>{(activeIndex ?? 0) + 1} / {images.length}</span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label={labels.close}
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="gallery-dialog-stage">
              <div className="gallery-zoom-controls" aria-label={labels.zoomControls}>
                <button
                  type="button"
                  onClick={() => adjustZoom(-ZOOM_STEP)}
                  disabled={zoom <= MIN_ZOOM}
                  aria-label={labels.zoomOut}
                  title={labels.zoomOut}
                >
                  <Minus size={17} aria-hidden="true" />
                </button>
                <span aria-label={`${labels.zoomLevel}: ${Math.round(zoom * 100)}%`} aria-live="polite">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => adjustZoom(ZOOM_STEP)}
                  disabled={zoom >= MAX_ZOOM}
                  aria-label={labels.zoomIn}
                  title={labels.zoomIn}
                >
                  <Plus size={17} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={resetZoom}
                  disabled={zoom === MIN_ZOOM && pan.x === 0 && pan.y === 0}
                  aria-label={labels.resetZoom}
                  title={labels.resetZoom}
                >
                  <RotateCcw size={16} aria-hidden="true" />
                </button>
              </div>

              {images.length > 1 && (
                <button className="gallery-control gallery-control--previous" type="button" onClick={showPrevious} aria-label={labels.previous}>
                  <ChevronLeft size={28} aria-hidden="true" />
                </button>
              )}

              <figure>
                <div
                  ref={zoomViewportRef}
                  className={`gallery-zoom-viewport${zoom > MIN_ZOOM ? ' is-zoomed' : ''}${isDragging ? ' is-dragging' : ''}`}
                  aria-busy={!loadedSources.has(activeImage.src)}
                  onWheel={handleWheel}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={finishDrag}
                  onPointerCancel={finishDrag}
                >
                  {!loadedSources.has(activeImage.src) && (
                    <span className="gallery-loading" role="status">{labels.loading}</span>
                  )}
                  <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    draggable="false"
                    onLoad={() => markImageReady(activeImage.src)}
                    onError={() => markImageReady(activeImage.src)}
                    style={{ transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})` }}
                  />
                </div>
                <figcaption>{activeImage.caption}</figcaption>
              </figure>

              {images.length > 1 && (
                <button className="gallery-control gallery-control--next" type="button" onClick={showNext} aria-label={labels.next}>
                  <ChevronRight size={28} aria-hidden="true" />
                </button>
              )}
            </div>

            {images.length > 1 && (
              <div className="gallery-thumbnails" aria-label={title}>
                {images.map((image, index) => (
                  <button
                    className={index === activeIndex ? 'is-active' : ''}
                    type="button"
                    key={image.src}
                    onClick={() => setActiveIndex(index)}
                    aria-label={image.caption}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  >
                    <img src={image.src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
