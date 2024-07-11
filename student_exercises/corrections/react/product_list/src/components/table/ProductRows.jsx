/**
 * Create a Product category row for product table
 * @param {string} category 
 */
function ProductCategoryRow({ category }) {
  return <tr>
    <th colSpan={2}><strong>{ category }</strong></th>
  </tr>
}

/**
 * Create a table row for a product
 * if the product is not in stock the name will be displayed in red
 * @param {string} name 
 * @param {string} price 
 * @param {boolean} stocked 
 */
function ProductRow({ name, price, stocked }) {
  return <tr>
    <td style={ !stocked ? {color: "red"} : null } >{ name }</td>
    <td>{ price }</td>
  </tr>
}

export {
  ProductCategoryRow,
  ProductRow
}