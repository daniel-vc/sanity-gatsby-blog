export default function resolveProductionUrl (document) {
  // return `http://emf-gatsby-sanity.s3-website.eu-west-2.amazonaws.com/blog/${document.slug.current}`
  return `http://localhost:8000/blog/${document.slug.current}`
}
