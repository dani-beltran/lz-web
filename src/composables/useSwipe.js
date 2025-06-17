import { ref } from 'vue'

export function useSwipe(callbacks = {}) {
  const {
    threshold = 50
  } = callbacks

  // Reactive state
  const touchStartX = ref(0)
  const touchEndX = ref(0)
  const isDragging = ref(false)
  const isMouseDown = ref(false)

  // Store callbacks
  let onSwipeLeft = callbacks.onSwipeLeft || (() => {})
  let onSwipeRight = callbacks.onSwipeRight || (() => {})
  let onSwipeStart = callbacks.onSwipeStart || (() => {})
  let onSwipeEnd = callbacks.onSwipeEnd || (() => {})

  // Method to update callbacks
  const updateCallbacks = (newCallbacks) => {
    if (newCallbacks.onSwipeLeft) onSwipeLeft = newCallbacks.onSwipeLeft
    if (newCallbacks.onSwipeRight) onSwipeRight = newCallbacks.onSwipeRight
    if (newCallbacks.onSwipeStart) onSwipeStart = newCallbacks.onSwipeStart
    if (newCallbacks.onSwipeEnd) onSwipeEnd = newCallbacks.onSwipeEnd
  }

  // Touch event handlers
  const handleTouchStart = (event) => {
    touchStartX.value = event.touches[0].clientX
    isDragging.value = true
    onSwipeStart()
  }

  const handleTouchMove = (event) => {
    if (!isDragging.value) return
    // Prevent default scrolling behavior
    event.preventDefault()
  }

  const handleTouchEnd = (event) => {
    if (!isDragging.value) return
    
    touchEndX.value = event.changedTouches[0].clientX
    handleSwipe()
    isDragging.value = false
    onSwipeEnd()
  }

  // Mouse event handlers (for desktop)
  const handleMouseDown = (event) => {
    touchStartX.value = event.clientX
    isMouseDown.value = true
    isDragging.value = true
    // Prevent text selection during drag
    event.preventDefault()
    onSwipeStart()
  }

  const handleMouseMove = (event) => {
    if (!isDragging.value || !isMouseDown.value) return
    event.preventDefault()
  }

  const handleMouseUp = (event) => {
    if (!isDragging.value || !isMouseDown.value) return
    
    touchEndX.value = event.clientX
    handleSwipe()
    isDragging.value = false
    isMouseDown.value = false
    onSwipeEnd()
  }

  // Handle swipe logic
  const handleSwipe = () => {
    const swipeDistance = touchStartX.value - touchEndX.value
    
    if (Math.abs(swipeDistance) > threshold) {
      if (swipeDistance > 0) {
        // Swipe left
        onSwipeLeft()
      } else {
        // Swipe right
        onSwipeRight()
      }
    }
  }

  // Return reactive state and event handlers
  return {
    // State
    isDragging,
    isMouseDown,
    
    // Event handlers
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    
    // Utility
    handleSwipe,
    updateCallbacks
  }
}
