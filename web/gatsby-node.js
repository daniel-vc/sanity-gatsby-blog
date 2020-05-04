const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')
const extraLanguages = ["es"]

const createLocalePage = (page, createPage) => {
  const { context, ...rest} = page

  createPage({
    ...rest,
    context: {
      ...context,
      locale: process.env.LOCALE,
    }
  })

  if (extraLanguages.length) {
    extraLanguages.forEach(code => {
      const { path, context, ...rest } = page

      createPage({
        ...rest,
        path: `/${code}${path}`,
        context: {
          ...context,
          locale: code
        }
      })
    })
  }
}

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  // postEdges
  //   .filter(edge => !isFuture(edge.node.publishedAt))
  //   .forEach((edge, index) => {
  //     const {id, slug = {}, publishedAt} = edge.node
  //     const dateSegment = format(publishedAt, 'YYYY/MM')
  //     const path = `/blog/${dateSegment}/${slug.current}/`

  //     createPage({
  //       path,
  //       component: require.resolve('./src/templates/blog-post.js'),
  //       context: {id}
  //     })
  //   })
  
  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/blog/${dateSegment}/${slug.current}/`

      const page = {
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id}
      }

      // createPage({
      //   path,
      //   component: require.resolve('./src/templates/blog-post.js'),
      //   context: {id}
      // })

      createLocalePage(page, createPage)
    })

  
  
  
}

exports.createPages = async ({graphql, actions}) => {
  await createBlogPostPages(graphql, actions)
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)

  createLocalePage(page, createPage)
}
