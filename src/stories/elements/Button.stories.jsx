import React from 'react';

// import { Button } from '../components';

import { Button } from 'components';


export default {
  argTypes: {
    children: {
      control: false,
    },
    className: {
      defaultValue: 'button-classic',
      options: [
        'button-classic',
        'button-secondary',
        'button-link',
      ],
      control: {
        type: 'radio',
      }
    },
    label: {
      defaultValue: 'Button',
    }
  },
  component: Button,
  title: 'Elements/Button',
};


const Template = (args) => <Button {...args} />;

export const Classic = Template.bind({});
Classic.args = {
  className: 'button-classic',
};

export const Secondary = Template.bind({});
Secondary.args = {
  className: 'button-secondary',
};

export const Link = Template.bind({});
Link.args = {
  className: 'button-link',
};
