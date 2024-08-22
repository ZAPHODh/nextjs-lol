import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

const meta = {
    title: 'Component/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        portuguese: {
            control: 'text',
            description: 'Portuguese words',
        },
        english: {
            control: 'text',
            description: `English words`,
        },
    },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        portuguese: `Ela era um cigarro queimado pela metade
Deixado esfumaçando embaixo da cama
Você teve a chance de apagá-la
Mas você foi dormir, ao invés disso
Enquanto alguma coisa lentamente queimava
No fundo da alma dela
Você escapou para um sonho
Enquanto ela botava fogo no chão`,
        english: `
  She was a half-burned cigarette,
  Left smoking under the bed,
  You had a chance to put her out,
  But you went to sleep instead.
  As something slowly burned,
  Deep inside her core,
  You escaped into a dream,
  As she set fire to the floor.
`,
    },
}
