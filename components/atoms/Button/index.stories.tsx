import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
	title: 'atoms/Button',
	component: Button,
	argTypes: {
		children: { control: 'text' },
	},
	args: {
		children: 'Button',
	},
} as Meta

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Normal = Template.bind({})
