export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f4963dbca6f2b008e81298e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j31f4zmg',
                  apiId: 'cc5046d3-3117-459c-b248-fd429a9a65e6'
                },
                {
                  buildHookId: '5f4963dbe31d7600feb17519',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-96ieyw27',
                  apiId: '51d0024e-ed60-44ef-9aab-b76e01f43b76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajbarbati/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-96ieyw27.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
