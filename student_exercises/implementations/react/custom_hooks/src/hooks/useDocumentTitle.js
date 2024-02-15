import { useRef, useEffect } from "react"

export function useDocumentTitle(title) {
  const ref = useRef
  
  useEffect(() => {
    ref.content = document.title
    return () => {
      document.title = ref.content
    }
  }, [])

  useEffect(() => {
    document.title = title ? title : ref.content
  }, [title])
}