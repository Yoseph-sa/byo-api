export default {
  name: 'clients',
  title: 'Clients',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Clients',
      initialValue: () => 'Clients',
    },
    {
      name: 'clientHeader',
      title: 'Client Header',
      type: 'object',
      fields: [
        {
          name: 'mainTitle',
          title: 'Main Title',
          type: 'string',
          initialValue: () => 'Clients',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
      ],
    },
    {
      name: 'startups',
      title: 'Startups',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'link', title: 'Link', type: 'url'},
            {
              name: 'is_show_aboutPage',
              title: 'Show on About Page',
              type: 'boolean',
              validation: (Rule) =>
                Rule.custom(async (value, context) => {
                  if (!value) return true

                  const docId = context.document._id
                  const result = await context.getClient({apiVersion: '2023-10-01'}).fetch(
                    `*[_type == "clients" && _id == $id][0]{
                    "total": count([
                      ...startups[is_show_aboutPage == true],
                      ...smb[is_show_aboutPage == true],
                      ...enterprise[is_show_aboutPage == true]
                    ])
                  }`,
                    {id: docId},
                  )

                  return result.total > 10
                    ? 'Only 10 clients can be selected for the About Page.'
                    : true
                }),
            },
          ],
        },
      ],
    },

    {
      name: 'smb',
      title: 'Small and Medium-sized Businesses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'link', title: 'Link', type: 'url'},
            {
              name: 'is_show_aboutPage',
              title: 'Show on About Page',
              type: 'boolean',
              validation: (Rule) =>
                Rule.custom(async (value, context) => {
                  if (!value) return true

                  const docId = context.document._id
                  const result = await context.getClient({apiVersion: '2023-10-01'}).fetch(
                    `*[_type == "clients" && _id == $id][0]{
                    "total": count([
                      ...startups[is_show_aboutPage == true],
                      ...smb[is_show_aboutPage == true],
                      ...enterprise[is_show_aboutPage == true]
                    ])
                  }`,
                    {id: docId},
                  )

                  return result.total > 10
                    ? 'Only 10 clients can be selected for the About Page.'
                    : true
                }),
            },
          ],
        },
      ],
    },

    {
      name: 'enterprise',
      title: 'Enterprise',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'link', title: 'Link', type: 'url'},
            {
              name: 'is_show_aboutPage',
              title: 'Show on About Page',
              type: 'boolean',
              validation: (Rule) =>
                Rule.custom(async (value, context) => {
                  if (!value) return true

                  const docId = context.document._id
                  const result = await context.getClient({apiVersion: '2023-10-01'}).fetch(
                    `*[_type == "clients" && _id == $id][0]{
                    "total": count([
                      ...startups[is_show_aboutPage == true],
                      ...smb[is_show_aboutPage == true],
                      ...enterprise[is_show_aboutPage == true]
                    ])
                  }`,
                    {id: docId},
                  )

                  return result.total > 10
                    ? 'Only 10 clients can be selected for the About Page.'
                    : true
                }),
            },
          ],
        },
      ],
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'comment', title: 'Comment', type: 'text'},
            {
              name: 'user',
              title: 'User',
              type: 'object',
              fields: [
                {
                  name: 'profile',
                  title: 'Profile Picture',
                  type: 'image',
                  options: {hotspot: true},
                },
                {name: 'name', title: 'Name', type: 'string'},
              ],
            },
          ],
        },
      ],
    },
  ],
}
