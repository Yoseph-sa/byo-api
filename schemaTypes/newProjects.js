export default {
  name: 'newProjects',
  title: 'New Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'This slug must be unique. It will be automatically generated from the title with a random number to ensure uniqueness.',
      options: {
        source: (doc) => `${doc.title}-${Math.floor(Math.random() * 100)}`, // title + random number
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      description: 'Select a category for this project',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'blocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        {type: 'heroBlock'},
        {type: 'richTextBlock'},
        {type: 'fullMediaBlock'},
        {type: 'imageGridBlock'},
        {type: 'textMediaBlock'},
        {type: 'sliderBlock'},
        {type: 'quoteBlock'},
        {type: 'statsBlock'},
        {type: 'scrollImageBlock'},
        {type: 'multiImageSliderBlock'},
        {type: 'embedBlock'},
        {type: 'spacerBlock'},
      ],
    },
    {
      name: 'isFeatured',
      title: 'Featured on Homepage?',
      type: 'boolean',
      initialValue: false,
    },
  ],
}
