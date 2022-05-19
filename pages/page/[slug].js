import Image from "next/image";

export default function Post ( data ) {
    // console.log({data});
    // const page = data.page
    return (
        <div>
            {/* <h1>{page.title}</h1>
            { page.featuredImage?.node.sourceUrl && 
                <Image width="640" height="426" src={page.featuredImage.node.sourceUrl} alt={`${page.title}`}/>
            }
            <article dangerouslySetInnerHTML={{__html: page.content}}></article> */}
        </div>
    )
}

export async function getStaticProps(context) {
  console.log(context.params);
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        query:`
            query SinglePageQuery($id: ID!) {
              page(id: $id) {
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                isFrontPage
                isContentNode
                isPostsPage
                slug
                title
              }  
            }
        `,
        variables: { 
            id: context.params.slug,
        }
      })
    })
  
    const json = await res.json()
    console.log(json);
    return{
      props: {
        page: json
      }
    }
}

export async function getStaticPaths() {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`
        query AllPagesQuery {
          pages {
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
  const pages = json.data.pages.nodes
  const paths = pages.map((page) => ({
      params: {slug: page.slug},
  }))
  return {paths, fallback: false}
}