// .storybook/PokemonList.stories.js

import React from 'react';
import { Story, Meta } from '@storybook/react';
import PokemonList from '../PokemonList'; 

export default {
  title: 'Components/PokemonList',
  component: PokemonList,
} 

const Template = (args) => <PokemonList {...args} />;

export const Default = Template.bind({});

