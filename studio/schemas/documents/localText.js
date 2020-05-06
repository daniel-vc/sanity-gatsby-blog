const supportedLanguages = [
  {id: 'en', title: 'English', isDefault: true},
  {id: 'es', title: 'Spanish'}
]
const languageFields = []

supportedLanguages.forEach(lang => {
  for (var objCount = 1; objCount < 3; objCount++) {
    switch (objCount) {
      case 1:
        languageFields.push({
          title: lang.title,
          name: `title_${lang.id}`,
          type: 'string',
          fieldset: lang.isDefault ? null : 'translations'
        })
        break
      case 2:
        languageFields.push({
          name: `slug_${lang.id}`,
          type: 'slug',
          title: `Slug for ${lang.title} version of this post`,
          description: `Add slug for ${lang.title} version of this post`,
          options: {
            source: (doc, options) => options.parent[`title_${lang.id}`],
            maxLength: 96
          },
          fieldset: lang.isDefault ? null : 'translations'
        })
        break
    }
  }
})

export default {
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {
        collapsible: true,
        columns: 1
      }
    }
  ],

  fields: languageFields
}
