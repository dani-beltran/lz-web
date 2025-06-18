import { ref, createApp, h } from 'vue'

export function useModal() {
  const isVisible = ref(false)
  let modalApp = null
  let modalContainer = null

  const createModalContainer = () => {
    if (!modalContainer) {
      modalContainer = document.createElement('div')
      modalContainer.id = 'modal-container-' + Date.now()
      document.body.appendChild(modalContainer)
    }
    return modalContainer
  }

  const handleSubmit = (data, onSubmit) => {
    if (onSubmit) onSubmit(data)
    closeModal()
  }

  const createComponentProps = (props) => ({
    ...props,
    onCancel: closeModal,
    onSubmit: (data) => handleSubmit(data, props.onSubmit)
  })

  const createModalRender = (Modal, component, props) => {
    const componentSlot = () => h(component, createComponentProps(props))
    
    return () => h(Modal.default, {
      isVisible: isVisible.value,
      onClose: closeModal
    }, {
      default: componentSlot
    })
  }

  const mountModal = async (component, props) => {
    const container = createModalContainer()
    const Modal = await import('@/components/Modal.vue')
    
    const modalComponent = {
      render: createModalRender(Modal, component, props)
    }

    modalApp = createApp(modalComponent)
    modalApp.mount(container)
  }

  const openModal = (component, props = {}) => {
    if (modalApp) {
      closeModal() // Close existing modal first
    }

    isVisible.value = true
    mountModal(component, props)
  }

  const closeModal = () => {
    isVisible.value = false
    
    if (modalApp) {
      modalApp.unmount()
      modalApp = null
    }
    
    if (modalContainer) {
      document.body.removeChild(modalContainer)
      modalContainer = null
    }
  }

  const toggleModal = (component, props = {}) => {
    if (isVisible.value) {
      closeModal()
    } else {
      openModal(component, props)
    }
  }

  // Cleanup function to be called when component unmounts
  const cleanup = () => {
    closeModal()
  }

  return {
    isVisible,
    openModal,
    closeModal,
    toggleModal,
    cleanup
  }
}
