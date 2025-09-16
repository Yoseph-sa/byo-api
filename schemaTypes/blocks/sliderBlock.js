export default {
  name: 'sliderBlock',
  title: 'Slider / Carousel Block',
  type: 'object',
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
}
