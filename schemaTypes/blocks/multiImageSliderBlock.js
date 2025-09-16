export default {
  name: 'multiImageSliderBlock',
  title: 'Multi-Image Slider Block',
  type: 'object',
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      description: 'Enable automatic sliding',
      initialValue: true,
    },
    {
      name: 'desktopSlides',
      title: 'Desktop Slides Count',
      type: 'string',
      description: 'Number of slides to show on desktop',
      options: {
        list: [
          {title: '1', value: '1'},
          {title: '2', value: '2'},
          {title: '3', value: '3'},
        ],
        layout: 'radio', // optional: shows as radio buttons
      },
      initialValue: '3',
    },
  ],
}
