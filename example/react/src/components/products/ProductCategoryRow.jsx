/**
 * Table row for product category
 * @param {string} category name
 */
export function ProductCategoryRow ({category}) {
  return <tr>
    <th colSpan="2"><strong>{category}</strong></th>
  </tr>
}