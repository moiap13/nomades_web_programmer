import { ProductCategoryRow, ProductRow } from "./ProductRows"

function ProductTable({ products }){
  // const getProducts = category => products
  //                                   .filter(p => p.category === category)
  //                                   .map((p, i) => <ProductRow key={i} name={p.name} price={p.price} stocked={p.stocked} />)

  let curr_category = ''
  const table_contents = []

  products.forEach((p, i) => {
    if(p.category.toLowerCase() !== curr_category){
      curr_category = p.category
      table_contents.push(<ProductCategoryRow key={curr_category} category={curr_category} />)
    }

    table_contents.push(<ProductRow key={i} name={p.name} price={p.price} stocked={p.stocked} />)
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

export default ProductTable