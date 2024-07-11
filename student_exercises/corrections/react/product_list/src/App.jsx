import { useState } from "react";
import SearchBar from "./components/form/SearchBar";
import ProductTable from "./components/table/ProductTable";


const PRODUCTS = [
  { category: "fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "vegetables", price: "$2", stocked: true, name: "Carrot" },
  { category: "funghi", price: "$3", stocked: true, name: "Porcini" },
  { category: "fruits", price: "$2", stocked: false, name: "Cherry" },
  { category: "vegetables", price: "$4", stocked: false, name: "Eggplant" },
  { category: "fruits", price: "$1", stocked: true, name: "Banana" },
  { category: "funghi", price: "$3", stocked: true, name: "Mushroom" },
  { category: "vegetables", price: "$1", stocked: true, name: "Zucchini" },
  { category: "funghi", price: "$3", stocked: false, name: "Truffle" },
];

function App() {
  // store memory outside inner components
  const [searchText, setSearchText] = useState('')
  const [price, setPrice] = useState(4)
  const [showStockOnly, setShowStockOnly] = useState(false)

  const products = PRODUCTS
    .sort((p1, p2) => {
      if(p1.category.localeCompare(p2.category) === 0) {
        return p1.name.localeCompare(p2.name)
      } else {
        return p1.category.localeCompare(p2.category)
      }
    })
    .filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()))
    .filter(p => Number(p.price.slice(1)) <= price)
    .filter(p => showStockOnly ? p.stocked : true)

  return <div className="container my-3">
    <SearchBar 
      searchText={searchText}
      searchTextSetter={setSearchText}

      price={price}
      priceSetter={setPrice}

      stocked={showStockOnly}
      stockedSetter={setShowStockOnly}
    />
    <ProductTable products={products} />
  </div>
}

export default App;