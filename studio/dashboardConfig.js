export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '61f9473392044c08065b7837',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-aydawn9e',
                  apiId: '4b19fbec-aebc-4277-a35d-7d8e865eb756'
                },
                {
                  buildHookId: '61f947330a7b79ebe129399a',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-dtpxzr1q',
                  apiId: '5c265d6a-6fd6-47fe-b9cd-9729ccdd11d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abubakr-1/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-dtpxzr1q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
