const config = {
  initialNode: 0,

  nodes: {
    0: {
      type: 'guide',
      width: 300,
      height: 470,
      breadcrumbs: [
        {
          name: 'Home',
          linkNode: 1,
        },
        {
          name: 'Existing Service',
          linkNode: 1,
        },
        {
          name: 'Mobile',
          linkNode: -1,
        }
      ],
      heading: 'Which Mobile topic would you like help with?',
      content: {
        links: [
          {
            name: 'Billing and Payments',
            link: '/billing-and-payments',
            image: '',
          },
          {
            name: 'Technical Support',
            link: 'na',
            image: '',
          },
          {
            name: 'Account Login Support',
            link: 'na',
            image: '',
          },
          {
            name: 'Other',
            link: 'other',
            image: './',
          },
        ],
      },
    },

    1: {
      type: 'survey',
      width: 300,
      height: 625,
      heading: 'Which Mobile topic would you like help with?',
      content: {
        fields: [
          {
            label: 'Full Name:*',
            fieldType: 'textbox',
            placeholder: 'John Doe',
            onError: [
              {
                test(value) {
                  return !!value;
                },
                error: 'Full Name is a required field',
              }
            ],
          },
          {
            label: 'Mobile Phone Number:*',
            fieldType: 'textbox',
            placeholder: 'ex: 123-123-1234',
            onError: [
              {
                test(value) {
                  return !!value;
                },
                error: 'Mobile number is a required field',
              },
              {
                test(value) {
                  const val = value.match(/\d/g);

                  return val ? val.length === 10 : false;
                },
                error: 'A mobile number requires 10 digits',
              }
            ],
          },
          {
            label: 'State:',
            fieldType: 'dropdown',
            show: [
              {
                label: 'Was your phone purchase in CA?',
                value: 'CA',
              }
            ],
            data: [
              {
                label: 'Select One',
                value: 'default',
              },
              {
                label: 'California',
                value: 'CA',
              },
            ],
          },
          {
            label: 'Was your phone purchase in CA?',
            fieldType: 'dropdown',
            hidden: true,
            data: [
              {
                label: 'Select One',
              },
              {
                label: 'Yes',
                value: 'yes',
              },
              {
                label: 'No',
                value: 'no',
              },
            ],
          },
          {
            label: 'Describe your question..',
            fieldType: 'textarea',
            rows: 4,
          },
        ]
      },
    },

    2: {
      type: 'panel',
      width: 300,
      height: 625,
      heading: 'Congratulations!! You have reached the chat agent.',
    }
  },
};

export default config;
