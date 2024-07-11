import { 
  ControlledCheckboxLabel, 
  ControlledInputLabel, 
  ControlledInputRangeLabel 
} from "./inputs"

function SearchBar({ 
  searchText, 
  searchTextSetter, 
  price, 
  priceSetter, 
  stocked, 
  stockedSetter 
}){
  return <div className="mb-3">
    <ControlledInputLabel 
      value={searchText}
      valueSetter={searchTextSetter}
      placeholder="search..."
    />
    <ControlledInputRangeLabel 
      value={price}
      valueSetter={priceSetter}
      label={price}

      min="0"
      max="4"
    />
    <ControlledCheckboxLabel
      checked={stocked}
      checkedSetter={stockedSetter}
      label="Only show products in stock"
    />
  </div>
}

export default SearchBar