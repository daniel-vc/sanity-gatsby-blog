export default {
  name: 'matrixReference',
  type: 'object',
  title: 'Matrix reference',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Moduler',
      of: [{type: 'titleTextReference'}, {type: 'author'}]
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
