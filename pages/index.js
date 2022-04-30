import Link from "next/link";

export default function Home({posts}) {
  console.log(posts);
  function removeTags(post) {
    console.log(post);
  }
  return (
    <div>
      <h1>Posts</h1>
      {posts.nodes.map(post => {
        return( 
          <div key={post.slug}>
            <li>
              <Link href={`posts/${post.slug}`}>{post.title}</Link>
            </li>
          </div>
        )
      })}

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://ar-auto-repair-services.local/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`
        query HomePageQuery {
          posts {
            nodes {
              content
              id
              slug
              title
            }
          }
        }
      `
    })
  })

  const json = await res.json()

  return {
    props: {
      posts: json.data.posts
    }
  }
}