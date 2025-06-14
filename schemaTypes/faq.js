export default {
  name: 'faq',
  title: 'FAQ Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: () => 'FAQ'
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Answer',
              type: 'text',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }
  ]
}
