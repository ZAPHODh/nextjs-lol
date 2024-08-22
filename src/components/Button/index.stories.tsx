import type { Meta, StoryObj } from '@storybook/react'
import { PlayButton } from '.'

const meta = {
    title: 'Component/PlayButton',
    component: PlayButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: String,
    },
} satisfies Meta<typeof PlayButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { name: 'preset-storty' },
}
