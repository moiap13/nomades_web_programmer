/**
 * Row that represents a product, two cols, name and price
 * @param {{name: string, stocked: boolean, price: string}} product
 */
export function ProductRow ({product}) {
  const style = product.stocked ? {} : {color: "red"};

  return <tr>
    <td style={style}>{product.name}</td>
    <td>{product.price}</td>
  </tr>
}