export default {
  name: 'statsBlock',
  title: 'Stats / Numbers Block',
  type: 'object',
  fields: [
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'number', title: 'Number', type: 'number'},
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'string'},
          ],
        },
      ],
    },
  ],
}
