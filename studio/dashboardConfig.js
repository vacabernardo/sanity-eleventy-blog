export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5ed80a219fc65b017262fb3a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-3f7twn87',
                  apiId: '00b8b006-8c70-4ad3-898e-9cc7f14f993c'
                },
                {
                  buildHookId: '5ed80a216fcf4f0221536b88',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-9dsvqpou',
                  apiId: '68336c08-27f9-43ed-857a-c909b434bdce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vacabernardo/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-9dsvqpou.netlify.app', category: 'apps'}
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
