import React from 'react'
import { Meta, Story } from '@storybook/react'

import { TextInput, TextInputProps } from '.'

export default {
	title: 'atoms/Input/TextInput',
	component: TextInput,
	args: {
		placeholder: 'Text box',
	},
} as Meta

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

export const Normal = Template.bind({})
