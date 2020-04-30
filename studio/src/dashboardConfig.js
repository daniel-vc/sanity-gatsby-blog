export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea2ed484650871f280451c6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qc2oxzwa',
                  apiId: 'b7e6d582-18fa-4f42-9212-aa6660b82dc5'
                },
                {
                  buildHookId: '5ea2ed48465087e86b045533',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cyca5z5i',
                  apiId: '4bb9f39b-2cae-4e0d-8df3-4197d7299bad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/daniel-vc/sanity-gatsby-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-cyca5z5i.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    },
    {
      name: 'gatsby',
      options: {
        sites: [
          {
            siteUrl: 'https://sanity-gatsby-blog-8427554416.gtsb.io/'
          }
        ]
      }
    }
  ]
}
