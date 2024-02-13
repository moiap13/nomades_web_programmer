import { useState } from "react";
import { CheckboxLabel } from "./components/forms/CheckBoxLabel";
import { InputLabel } from "./components/forms/InputLabel";

const PRODUCTS = [
  { category: "fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "fruits", price: "$1", stocked: true, name: "Banana" },
  { category: "fruits", price: "$2", stocked: false, name: "Cherry" },
  { category: "vegetables", price: "$2", stocked: true, name: "Carrot" },
  { category: "vegetables", price: "$4", stocked: false, name: "Eggplant" },
  { category: "vegetables", price: "$1", stocked: true, name: "Zucchini" },
];
function App() {
  const [showOnlyStock, setShowOnlyStock] = useState(true)
  const [searchText, setSearchText] = useState('')

  const products = PRODUCTS.filter(p => showOnlyStock ? p.stocked : true)

  const fruit = products.filter(p => p.category === "fruits")
  const vegetables = products.filter(p => p.category === "vegetables")

  console.log(searchText)
  return <div className="container">
    <SearchBar 
      cbxChecked={showOnlyStock} 
      cbxChange={setShowOnlyStock}
      
      searchValue={searchText}
      searchChange={setSearchText}  
    />

    <ProducTable productsFruit={fruit} productsVege={vegetables}/>
  </div>
}

function SearchBar({cbxChecked, cbxChange, searchValue, searchChange}) {
  return <div className="mb-3">
    <InputLabel placeholder="Search..." value={searchValue} onValueChanged={searchChange}/>
    <CheckboxLabel checked={cbxChecked} onChangeChecked={b => cbxChange(b)} label="Only show products in stock" />
  </div>
}

function ProducTable({productsFruit, productsVege}) {
  return <ul>
    <li style={{listStyle: "none"}}>Fruits</li>
    {
      productsFruit.map(p => {
        return <li key={p.name}>{p.name}</li>
      })
    }
    <li style={{listStyle: "none"}}>Vege</li>
    {
      productsVege.map(p => {
        return <li key={p.name}>{p.name}</li>
      })
    }
  </ul>
}
export default App;