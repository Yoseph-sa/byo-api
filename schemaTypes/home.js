export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Home',
      initialValue: () => 'Home',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'introVideo',
      title: 'Intro Video',
      type: 'file', // Change to 'url' if you want external links
      options: {
        accept: 'video/*'
      }
    },
    {
      name: 'services',
      title: 'services',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'list',
          title: 'Services List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string'
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text'
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'viewOurService',
      title: 'View Our Service',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        }
      ]
    },
    {
      name: 'homeGalleryDescription',
      title: 'Home Gallery Description',
      type: 'text'
    }
  ]
};
