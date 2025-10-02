export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom(async (title, context) => {
          if (!title) return true

          const client = context.getClient({ apiVersion: '2023-01-01' })
          const baseId = context.document._id.replace(/^drafts\./, '')
          const existing = await client.fetch(
            `*[_type == "projects" 
              && title == $title 
              && !(_id in [$baseId, "drafts." + $baseId])
            ][0]`,
            { title, baseId },
          )

          return existing ? 'Title must be unique across all projects' : true
        }),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'project_categories',
      title: 'Project Categories (label)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Category Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      description: 'Select a category for this project',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'is_show_homeScreen',
      title: 'Show on Home Screen?',
      type: 'boolean',
      initialValue: false,
      description: 'Enable this to show the project on the home screen. Max 4 allowed.',
      validation: (Rule) =>
        Rule.custom(async (value, context) => {
          if (!value) return true

          const client = context.getClient({apiVersion: '2023-01-01'})
          const result = await client.fetch(
            `count(*[_type == "projects" && is_show_homeScreen == true && _id != $id])`,
            {
              id: context.document._id,
            },
          )

          return result <= 4 || 'Only 4 projects can be shown on the home screen at a time.'
        }),
    },
    {
      name: 'multiImages',
      title: 'Multi Images',
      type: 'object',
      fields: [
        {
          name: 'select',
          title: 'Select Type',
          type: 'string',
          options: {
            list: ['slider', 'gallery'],
          },
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image', options: {hotspot: true}}],
        },
      ],
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
    {
      name: 'services',
      title: 'Services',
      type: 'object',
      fields: [
        {name: 'description', title: 'Description', type: 'text'},
        {
          name: 'list',
          title: 'Service List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [{name: 'name', title: 'Service Name', type: 'string'}],
            },
          ],
        },
      ],
    },
    {
      name: 'problemAndChallenges',
      title: 'Problem & Challenges',
      type: 'object',
      fields: [
        {
          name: 'problem',
          title: 'Problem',
          type: 'object',
          fields: [
            {name: 'description', title: 'Description', type: 'text'},
            {
              name: 'points',
              title: 'Points',
              type: 'array',
              of: [{type: 'object', fields: [{name: 'title', title: 'Title', type: 'string'}]}],
            },
          ],
        },
        {
          name: 'challenges',
          title: 'Challenges',
          type: 'object',
          fields: [
            {name: 'description', title: 'Description', type: 'text'},
            {
              name: 'points',
              title: 'Points',
              type: 'array',
              of: [{type: 'object', fields: [{name: 'title', title: 'Title', type: 'string'}]}],
            },
          ],
        },
      ],
    },
    {
      name: 'identity',
      title: 'Identity',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: () => 'Identity',
        },
        {name: 'description', title: 'Description', type: 'text'},
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image', options: {hotspot: true}}],
        },
      ],
    },
    {
      name: 'interior',
      title: 'Interior',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string', initialValue: () => 'Interior'},
        {name: 'description', title: 'Description', type: 'text'},
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image', options: {hotspot: true}}],
        },
      ],
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string', initialValue: () => 'Colors'},
        {name: 'description', title: 'Description', type: 'text'},
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image', options: {hotspot: true}}],
        },
      ],
    },
    {
      name: 'packaging',
      title: 'Packaging',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string', initialValue: () => 'Packaging'},
        {name: 'description', title: 'Description', type: 'text'},
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image', options: {hotspot: true}}],
        },
      ],
    },
    {
      name: 'iconography',
      title: 'Iconography',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string', initialValue: () => 'Iconography'},
        {name: 'description', title: 'Description', type: 'text'},
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image', options: {hotspot: true}}],
        },
      ],
    },
    {
      name: 'planOfAction',
      title: 'Plan of Action',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string', initialValue: () => 'Plan of Action'},
        {name: 'description', title: 'Description', type: 'text'},
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
    {
      name: 'other',
      title: 'Other',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'description', title: 'Description', type: 'text'},
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image', options: {hotspot: true}}],
        },
      ],
    },
    {
      name: 'strategySession',
      title: 'Strategy Session',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string', initialValue: () => 'Strategy Session'},
        {name: 'description', title: 'Description', type: 'text'},
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image', options: {hotspot: true}}],
        },
      ],
    },
    {
      name: 'results',
      title: 'Results',
      type: 'object',
      fields: [
        {name: 'description', title: 'Description', type: 'text'},
        {
          name: 'points',
          title: 'Points',
          type: 'array',
          of: [{type: 'object', fields: [{name: 'title', title: 'Title', type: 'string'}]}],
        },
        {name: 'roi', title: 'ROI %', type: 'number'},
        {name: 'customers', title: 'Customers', type: 'string'},
        {name: 'downloads', title: 'Downloads', type: 'string'},
        {name: 'link', title: 'Link', type: 'url'},
      ],
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
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
                  name: 'profileUrl',
                  title: 'Profile Image',
                  type: 'image',
                  options: {hotspot: true},
                },
                {name: 'position', title: 'Position', type: 'string'},
                {name: 'name', title: 'Name', type: 'string'},
              ],
            },
          ],
        },
      ],
    },
  ],
}
