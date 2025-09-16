export default {
  name: 'fullMediaBlock',
  title: 'Full-width Media Block',
  type: 'object',
  fields: [
    {
      name: 'media',
      title: 'Image/Video',
      type: 'file',
      options: {
        accept: 'image/*,video/mp4',
      },
    },
    { name: 'caption', title: 'Caption', type: 'string' },
  ],
}
