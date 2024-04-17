/**
 * @param {string} category 
 */
export function ProductRowCategory({category}) {
  return <tr>
    <th colSpan={2}><strong>{category}</strong></th>
  </tr>
}