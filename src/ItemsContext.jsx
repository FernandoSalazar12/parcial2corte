import { createContext, useState, useContext } from "react"

const ItemsContext = createContext()

export function useItems() {
  return useContext(ItemsContext)
}

export function ItemsProvider({ children }) {
  const [items, setItems] = useState([])

  const agregarItem = (nuevoItem) => {
    setItems([...items, nuevoItem])
  }

  return <ItemsContext.Provider value={{ items, agregarItem }}>{children}</ItemsContext.Provider>
}
