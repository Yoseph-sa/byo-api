export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Services',
      initialValue: () => 'Services',
    },
    {
      name: 'servicesHeader',
      title: 'Services Header',
      type: 'object',
      fields: [
        { name: 'mainTitle', title: 'Main Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
      ],
    },

    // Branding Section
    {
      name: 'branding',
      title: 'Branding',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string',initialValue: () => 'Branding' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'brandingImage', title: 'Branding_Image', type: 'image', options: { hotspot: true } },
        {
          name: 'capabilities',
          title: 'Capabilities',
          type: 'array',
          of: [{ type: 'object', fields: [{ name: 'name', title: 'Name', type: 'string' }] }]
        }
      ]
    },

    // Digital Products Section
    {
      name: 'digitalProducts',
      title: 'Digital Products',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', initialValue: () => 'Digital Products',},
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          
        {
          name: 'capabilities',
          title: 'Capabilities',
          type: 'array',
          of: [{ type: 'object', fields: [{ name: 'name', title: 'Name', type: 'string' }] }]
        }
      ]
    },

    // Websites Section
    {
      name: 'websites',
      title: 'Websites',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' ,initialValue: () => 'Websites',},
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'brandingImage', title: 'Branding_Image', type: 'image', options: { hotspot: true } },
        {
          name: 'capabilities',
          title: 'Capabilities',
          type: 'array',
          of: [{ type: 'object', fields: [{ name: 'name', title: 'Name', type: 'string' }] }]
        }
      ]
    },

    // Content Section
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' , initialValue: () => 'Content',},
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'brandingImage', title: 'Branding_Image', type: 'image', options: { hotspot: true } },
        {
          name: 'capabilities',
          title: 'Capabilities',
          type: 'array',
          of: [{ type: 'object', fields: [{ name: 'name', title: 'Name', type: 'string' }] }]
        }
      ]
    },

    // Development Section
    {
      name: 'development',
      title: 'Development',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' , initialValue: () => 'Development',},
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'brandingImage', title: 'Branding_Image', type: 'image', options: { hotspot: true } },
        {
          name: 'capabilities',
          title: 'Capabilities',
          type: 'array',
          of: [{ type: 'object', fields: [{ name: 'name', title: 'Name', type: 'string' }] }]
        }
      ]
    },

    // Industries Section
    {
      name: 'industries',
      title: 'Industries',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' , initialValue: () => 'Industries',},
        { name: 'description', title: 'Description', type: 'text' },
        {
          name: 'industriesList',
          title: 'Industries List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Industry Title', type: 'string' },
                { name: 'names', title: 'Names', type: 'text' },
              ],
            },
          ],
        },
      ],
    }
  ]
}
