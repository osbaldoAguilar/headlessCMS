import Image from "next/image";
import { BlockCentered, RoundedCard } from "../components/StyledComponents/WrappingComponents";

export default function Gform ( data ) {
    const formFields = data
    // const gForm = data.gForm
    console.log('gfForm', formFields);
    return (
        <BlockCentered>
            <RoundedCard>
            {/* <article dangerouslySetInnerHTML={{__html: formFields.nodes[0]}}></article>  */}
              {/* <h1>{formFields.title}</h1> */}

              {/* { post.featuredImage?.node.sourceUrl && 
                  <Image width="640" height="426" src={post.featuredImage.node.sourceUrl} alt={`${post.title}`}/> */}

            </RoundedCard>
        </BlockCentered>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('http://ar-auto-repair-services.local/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        query:`
        query getForm {
          gFormsForm(id: 1, idType: DATABASE_ID) {
            formId
            title
            description
            formFields(first: 500) {
              nodes {
                ... on TextField {
                  id
                  type
                  label
                }
                ... on SelectField {
                  id
                  type
                  label
                  choices {
                    text
                    value
                  }
                }
              }
            }
          }
        }`
      })
    })
    
    const json = await res.json()
    
    return {
      props: {
        gFrom: json.data
      }
    }
  }
  
  // export async function getStaticPaths() {
    //     const res = await fetch('http://ar-auto-repair-services.local/graphql', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json'},
      //     body: JSON.stringify({
        //       query:`
        //         query AllPostsQuery {
          //           posts {
            //             nodes {
              //               content
              //               id
              //               slug
              //               title
              //             }
              //           }
              //         }
              //       `
              //     })
              //   })
              
              //   const json = await res.json()
              //   const posts = json.data.posts.nodes
              //   const paths = posts.map((post) => ({
                //       params: {slug: post.slug},
                //   }))
                //   return {paths, fallback: false}
                // }
                
                // gfForms {
                //   nodes {
                //     button {
                //       imageUrl
                //       layoutGridColumnSpan
                //       location
                //       text
                //       type
                //       width
                //     }
                //     cssClass
                //     description
                //   }
                // }
                //   query:`
              //       query SinglePostQuery($id: ID!, $idType: PostIdType!) {
              //           post(id: $id, idType: $idType) {
              //           content
              //           slug
              //           title
              //           featuredImage {
              //               node {
              //               sourceUrl
              //               }
              //           }
              //           }
              //       }
              //   `,
              //   variables: { 
              //       id: context.params.slug,
              //       idType: 'SLUG'
              //   }