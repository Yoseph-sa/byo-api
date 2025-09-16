export default {
  name: 'spacerBlock',
  title: 'Spacer / Divider Block',
  type: 'object',
  fields: [
    {
      name: 'size',
      title: 'Space Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
        ],
      },
      initialValue: 'md',
    },
  ],
}
