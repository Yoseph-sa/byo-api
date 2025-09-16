export default {
  name: 'embedBlock',
  title: 'Embed Block',
  type: 'object',
  fields: [
    {
      name: 'embedUrl',
      title: 'Embed URL (YouTube, Figma, Lottie, etc.)',
      type: 'url',
    },
    {
      name: 'type',
      title: 'Embed Type',
      type: 'string',
      options: {
        list: [
          { title: 'Video', value: 'video' },
          { title: 'Figma/Prototype', value: 'prototype' },
          { title: 'Lottie', value: 'lottie' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption for the embed',
    },
  ],
}
