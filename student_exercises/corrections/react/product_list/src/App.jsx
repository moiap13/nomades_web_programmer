import { useState } from "react";
import { CheckboxLabel } from "./components/forms/CheckBoxLabel";
import { InputLabel } from "./components/forms/InputLabel";
import { ProductRow } from "./components/table/ProductRow";
import { ProductRowCategory } from "./components/table/ProductRowCategory";

const PRODUCTS = [
  { category: "fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "vegetables", price: "$4", stocked: false, name: "Eggplant" },
  { category: "fruits", price: "$1", stocked: true, name: "Banana" },
  { category: "fruits", price: "$2", stocked: false, name: "Cherry" },
  { category: "vegetables", price: "$2", stocked: true, name: "Carrot" },
  { category: "vegetables", price: "$1", stocked: true, name: "Zucchini" },
];

function App() {
  const [showOnlyStock, setShowOnlyStock] = useState(true)
  const [searchText, setSearchText] = useState('')

  const products = PRODUCTS
                    .sort((a, b) => a.category > b.category)
                    .filter(p => showOnlyStock ? p.stocked : true)
                    .filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()))

  console.log(searchText)
  return <div className="container">
    <SearchBar 
      cbxChecked={showOnlyStock} 
      cbxChange={setShowOnlyStock}
      
      searchValue={searchText}
      searchChange={setSearchText}  
    />

    <ProducTable products={products}/>
  </div>
}

function SearchBar({cbxChecked, cbxChange, searchValue, searchChange}) {
  return <div className="mb-3">
    <InputLabel placeholder="Search..." value={searchValue} onValueChanged={searchChange}/>
    <CheckboxLabel checked={cbxChecked} onChangeChecked={b => cbxChange(b)} label="Only show products in stock" />
  </div>
}

function ProducTable({products}) {
  let curr_category = ""
  const table_contents = []

  products.forEach(product => {
    if(product.category.toLowerCase() != curr_category){
      table_contents.push(<ProductRowCategory category={product.category} />)
      curr_category = product.category.toLowerCase()
    }

    table_contents.push(<ProductRow name={product.name} price={product.price} stocked={product.stocked} />)
  })

  return <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        table_contents
      }
    </tbody>
  </table>

}
export default App;