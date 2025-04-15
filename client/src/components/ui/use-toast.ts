import { useState, useCallback } from 'react';

interface ToastProps {
  title: string;
  description?: string;
  duration?: number;
}

interface Toast extends ToastProps {
  id: string;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(({ title, description = '', duration = 5000 }: ToastProps) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { id, title, description };

    setToasts((currentToasts) => [...currentToasts, newToast]);

    setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
    }, duration);
  }, []);

  return {
    toast,
    toasts,
  };
}
