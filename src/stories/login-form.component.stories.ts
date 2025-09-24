import { LoginForm } from '@/app/components/login-form/login-form.component';
import type { Meta, StoryObj } from '@storybook/angular';

import { expect } from 'storybook/test';


const meta: Meta<LoginForm> = {
  title: 'Components/Login',
  tags: ['autodocs'],
  component: LoginForm,
};
export default meta;

type Story = StoryObj<LoginForm>;

export const EmptyForm: Story = {};

export const FilledForm: Story = {
  play: async ({ canvas, userEvent }) => {
    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

    await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));

    // 👇 Assert DOM structure
    await expect(
      canvas.getByText(
        'Everything is perfect. Your account is ready and we should probably get you started!'
      )
    ).toBeInTheDocument();
  },
};