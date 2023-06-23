export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'jobName',
      title: 'JobName',
      type: 'string',
    },
    {
      name: 'jobNameUkr',
      title: 'JobNameUkr',
      type: 'string',
    },
    {
      name: 'companyName',
      title: 'CompanyName',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'descriptionUkr',
      title: 'DescriptionUkr',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of: [
        {
          name: 'techImgUrl',
          title: 'TechImageUrl',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
