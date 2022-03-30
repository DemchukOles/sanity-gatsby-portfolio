export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '624471e44c6900152887268b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9za44umx',
                  apiId: '05e72fe0-8cc0-4d1a-bbd5-95617705a08f'
                },
                {
                  buildHookId: '624471e469e930127d2d6339',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-k24bg251',
                  apiId: '635c9a3f-31bf-4f39-9b69-c65069fcdb2a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DemchukOles/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-k24bg251.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
