export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'About',
      initialValue: () => 'About',
    },
    // About Header Image
    {
      name: 'aboutHeaderImage',
      title: 'About Header Image',
      type: 'image',
      options: { hotspot: true },
    },

    // Company Stats
    {
      name: 'company_stats',
      title: 'Company Stats',
      type: 'object',
      fields: [
        { name: 'team_members', title: 'Team Members', type: 'number' },
        { name: 'years_in_business', title: 'Years in Business', type: 'number' },
        { name: 'projects_completed', title: 'Projects Completed', type: 'string' }
      ]
    },

    // About Gallery
    {
      name: 'aboutGallery',
      title: 'About Gallery',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
      ]
    },

    // Why Byo (multiple)
    {
      name: 'whyByo',
      title: 'Why BYO',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }
          ]
        }
      ]
    },

    // Capabilities
    {
      name: 'capabilities',
      title: 'Capabilities',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', initialValue: () => 'Capabilities' },

        // Branding Section
        {
          name: 'branding',
          title: 'Branding',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' , initialValue: () => 'Branding' },
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
            { name: 'title', title: 'Title', type: 'string' , initialValue: () => 'Digital Products' },
            {
              name: 'capabilities',
              title: 'Capabilities',
              type: 'array',
              of: [{ type: 'object', fields: [{ name: 'name', title: 'Name', type: 'string' }] }]
            }
          ]
        },

        // Awards Section
        {
          name: 'awards',
          title: 'Awards',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }]
        }
      ]
    }
  ]
}
