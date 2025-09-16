export default {
  name: 'imageGridBlock',
  title: 'Image Grid Block',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images (2–4)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Caption (Optional)',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(2).max(4),
    },
  ],
};
