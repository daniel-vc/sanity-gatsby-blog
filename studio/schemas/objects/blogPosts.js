export default {
  name: 'BlogPosts',
  title: 'Blog posts',
  type: 'object',
  fields: [
    {
      title: 'Post',
      name: 'blogpost',
      type: 'reference',
      to: [
        {
          type: 'post'
        }
      ]
    }
  ]
}
