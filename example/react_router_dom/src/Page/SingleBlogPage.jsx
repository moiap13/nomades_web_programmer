import { useParams } from "react-router-dom";

export function SingleBlogPage() {
  const { id } = useParams()

  return <div>
    <h1>Article {id}</h1>
  </div>
}