export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'emails',
      title: 'Emails',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'email', title: 'Email', type: 'string'},
          ],
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Platform Name',
              type: 'string',
              description:
                'Enter Bootstrap icon name, e.g., instagram, linkedin, behance. See: https://icons.getbootstrap.com/',
            },
            {name: 'link', title: 'Link', type: 'url'},
          ],
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      description: 'Enter address or location details (e.g., Riyadh, Saudi Arabia)',
      rows: 2, // Optional: controls height of input box in the Studio UI
    },
  ],
}
