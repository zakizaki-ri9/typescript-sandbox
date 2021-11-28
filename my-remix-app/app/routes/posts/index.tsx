import { useLoaderData, Link } from "remix";

export type Post = {
  slug: string;
  title: string;
}

export const loader = (): Post[] => {
  return [
    {
      slug: "my-first-post",
      title: "My first post"
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I made just for you"
    }
  ]
}

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
