export default {
  name: 'quoteBlock',
  title: 'Quote / Highlight Block',
  type: 'object',
  fields: [
    {
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'quote', 
              title: 'Quote', 
              type: 'text', 
              validation: (Rule) => Rule.required() 
            },
            { 
              name: 'author', 
              title: 'Author/Client', 
              type: 'string', 
              validation: (Rule) => Rule.required() 
            },
            { 
              name: 'position', 
              title: 'Position/Company', 
              type: 'string' 
            },
            { 
              name: 'image', 
              title: 'Image', 
              type: 'image', 
              options: { hotspot: true } 
            },
          ],
        },
      ],
    },
  ],
}
