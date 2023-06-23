export default {
  name: 'stack',
  title: 'Stack',
  type: 'document',
  fields: [
    {
      name: 'skillType',
      title: 'SkillType',
      type: 'string',
    },
    {
      name: 'skillTypeUkr',
      title: 'SkillTypeUkr',
      type: 'string',
    },
    {
      name: 'skillsArray',
      title: 'SkillsArray',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'imgUrl',
              title: 'ImageUrl',
              mode: 'light',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'imgUrlDark',
              mode: 'dark',
              type: 'image',
              require: false,
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
