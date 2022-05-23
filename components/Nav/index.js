import Link from "next/link"
import Logo from "../StyledComponents/Logo"
import NavLink from "../StyledComponents/NavLink"
import { StyledContainer } from "../StyledComponents/WrappingComponents"
import LinkStyle from "./Link"
function index() {
  return (
      <StyledContainer id='nav'>

        <LinkStyle>
          <header>
            <div className='flex flex-row justify-around items-center'>
                <Link href='/' passHref><Logo/></Link>  
                  
                {/* <NavLink href='/'>
                  <div className="flex flex-row justify-around items-center">
                  {/* <p>Repair</p> */}
                  {/* </div>
                  </NavLink> */} 
                <NavLink href='/about'>About</NavLink>
                <NavLink href='/services'>Services</NavLink>
                <NavLink href='/contact'>Contact</NavLink>
                <NavLink href='/privacypolicy'>Privacy Policy</NavLink>
            </div>
          </header>
        </LinkStyle>
      </StyledContainer>
  )
}

export default index
// import Link from "next/link";
// import LinkStyle from "./Link";
// import styles from "../../styles/Home.module.css"
// function Navbar() {
//   return (
//       <LinkStyle>
//         <div className="flex flex-row justify-around h-10">
//             <Link href='/'>home</Link>
//             <div className={styles.divider}/>
//             <Link href='/about'>About</Link>
//             <div className={styles.divider}/>
//             <Link href='/services'>Services</Link>
//             <div className={styles.divider}/>
//             <Link href='/privacypolicy'>Privacy</Link>
//         </div>
//       </LinkStyle>
//   )
// }

// export default Navbar

// import Image from "next/image";

// export default function Post ( data ) {
//     console.log({data});
//     // const page = data.page
//     return (
//         <div>
//             {/* <h1>{page.title}</h1>
//             { page.featuredImage?.node.sourceUrl && 
//                 <Image width="640" height="426" src={page.featuredImage.node.sourceUrl} alt={`${page.title}`}/>
//             }
//             <article dangerouslySetInnerHTML={{__html: page.content}}></article> */}
//         </div>
//     )
// }

// export async function getStaticProps(context) {
//   console.log(context.params);
//     const res = await fetch('http://ar-auto-repair-services.local/graphql', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         query:`
//             query MenuQuery {
//                  pages {
//                         nodes {
//                             slug
//                         }
//                 }
//             }
//         `
//     })
// })

// const json = await res.json()
// console.log('json: ',json);
// return{
//     props: {
//         pages: json.data
//     }
// }
// }

// export async function getStaticPaths() {
//     const res = await fetch('http://ar-auto-repair-services.local/graphql', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             query:`
//             query AllPagesQuery {
//                 pages {
//                     nodes {
//                         content
//                         id
//                         slug
//                         title
//                     }
//                 }
//             }
//             `
//         })
//     })
    
//     const json = await res.json()
//     const pages = json.data.pages.nodes
//     const paths = pages.map((page) => ({
//         params: {slug: page.slug},
//     }))
//     return {paths, fallback: false}
// }
//     query SinglePageQuery($id: ID!) {
//       page(id: $id) {
//         content
//         featuredImage {
//           node {
//             sourceUrl
//           }
//         }
//         isFrontPage
//         isContentNode
//         isPostsPage
//         slug
//         title
//       }  
//     }
// `,
// variables: { 
//     id: context.params.slug,
// }