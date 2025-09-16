export default {
  name: 'textMediaBlock',
  title: 'Text + Media Block',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'text', title: 'Text', type: 'text' },
    {
      name: 'media',
      title: 'Image/Video',
      type: 'file',
      options: {
        accept: 'image/*,video/mp4',
      },
    },
    {
      name: 'mediaPosition',
      title: 'Media Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'right',
    },
  ],
}
