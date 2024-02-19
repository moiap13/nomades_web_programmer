import { Suspense } from "react"
import { Await, useLoaderData } from "react-router-dom"

export function BlogPage() {
  const { posts } = useLoaderData()
  console.log(posts)

  return <>
    <h1>List of threads</h1>
    <Suspense fallback="loading..">
      <Await resolve={posts}>
        { posts => <ul>
            { posts.map(post => <li key={post.id}>{ post.title }</li>) }
          </ul>
        }
      </Await>
    </Suspense>
  </>

}