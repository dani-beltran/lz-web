import { ref } from 'vue'

export function useSwipe(callbacks = {}) {
  const {
    threshold = 50
  } = callbacks

  // Reactive state
  const touchStartX = ref(0)
  const touchStartY = ref(0)
  const touchEndX = ref(0)
  const touchEndY = ref(0)
  const isDragging = ref(false)
  const isMouseDown = ref(false)
  const isHorizontalSwipe = ref(false)

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
    touchStartY.value = event.touches[0].clientY
    isDragging.value = true
    isHorizontalSwipe.value = false
    onSwipeStart()
  }

  const handleTouchMove = (event) => {
    if (!isDragging.value) return
    
    const currentX = event.touches[0].clientX
    const currentY = event.touches[0].clientY
    const deltaX = Math.abs(currentX - touchStartX.value)
    const deltaY = Math.abs(currentY - touchStartY.value)
    
    // Determine if this is a horizontal or vertical swipe
    if (deltaX > 10 || deltaY > 10) { // Only decide after meaningful movement
      isHorizontalSwipe.value = deltaX > deltaY
      
      // Only prevent default behavior for horizontal swipes
      if (isHorizontalSwipe.value) {
        event.preventDefault()
      }
    }
  }

  const handleTouchEnd = (event) => {
    if (!isDragging.value) return
    
    touchEndX.value = event.changedTouches[0].clientX
    touchEndY.value = event.changedTouches[0].clientY
    
    // Only process swipe if it was primarily horizontal
    if (isHorizontalSwipe.value) {
      handleSwipe()
    }
    
    isDragging.value = false
    isHorizontalSwipe.value = false
    onSwipeEnd()
  }

  // Mouse event handlers (for desktop)
  const handleMouseDown = (event) => {
    touchStartX.value = event.clientX
    touchStartY.value = event.clientY
    isMouseDown.value = true
    isDragging.value = true
    isHorizontalSwipe.value = false
    // Prevent text selection during drag
    event.preventDefault()
    onSwipeStart()
  }

  const handleMouseMove = (event) => {
    if (!isDragging.value || !isMouseDown.value) return
    
    const currentX = event.clientX
    const currentY = event.clientY
    const deltaX = Math.abs(currentX - touchStartX.value)
    const deltaY = Math.abs(currentY - touchStartY.value)
    
    // Determine if this is a horizontal or vertical movement
    if (deltaX > 10 || deltaY > 10) { // Only decide after meaningful movement
      isHorizontalSwipe.value = deltaX > deltaY
      
      // Only prevent default behavior for horizontal movements
      if (isHorizontalSwipe.value) {
        event.preventDefault()
      }
    }
  }

  const handleMouseUp = (event) => {
    if (!isDragging.value || !isMouseDown.value) return
    
    touchEndX.value = event.clientX
    touchEndY.value = event.clientY
    
    // Only process swipe if it was primarily horizontal
    if (isHorizontalSwipe.value) {
      handleSwipe()
    }
    
    isDragging.value = false
    isMouseDown.value = false
    isHorizontalSwipe.value = false
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
