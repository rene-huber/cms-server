
const Posts = {
    slug: 'posts',
    admin: {
      useAsTitle: 'Title',
    },
    access:{
read: () => true,
    },

    fields: [
        {
			name: 'Title',
			type: 'text', 
		},
		{
			name: 'Description',
            type: 'richText',
		},
        {
			name: 'Image',
            type: 'upload', // required
            relationTo: 'media', // required
		},

        {
            name: 'Categories', // required
            type: 'select', // required
            hasMany: true,
            admin: {
              isClearable: true,
              isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
            },
            options: [
              {
                label: 'All',
                value: 'all',
              },
              {
                label: 'Wordpress',
                value: 'Wordpress',
              }
            ],
          },
    ],
  }
  
  export default Posts;