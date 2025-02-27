import { useEffect } from 'react';
// табуляции
export function useTitle(title : string){
  useEffect (() => {
    const previousTitle = document.title
    document.title = title
    return () => {
      document.title = previousTitle
    }
  }, [title])
}