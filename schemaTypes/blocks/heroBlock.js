export default {
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'media',
      title: 'Cover Image/Video',
      type: 'file',
      options: {
        accept: 'image/*,video/mp4',
      },
    },
  ],
}
