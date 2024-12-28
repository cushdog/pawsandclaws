import { useState } from 'react'

interface Toast {
  title: string
  description: string
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (newToast: Toast) => {
    setToasts([...toasts, newToast])
    // Display the toast notification (this is a placeholder, implement as needed)
    console.log(newToast.title, newToast.description)
  }

  return { toast }
}