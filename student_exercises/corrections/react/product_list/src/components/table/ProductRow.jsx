export function ProductRow({name, price, stocked}) {
  const style = {color: "red"}

  return <tr>
    <td style={!stocked ? style : null}>
      {name}
    </td>
    <td>{price}</td>
  </tr>
}