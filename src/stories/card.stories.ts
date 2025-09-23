import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@/app/components/card/card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un componente de tarjeta flexible y reutilizable para mostrar contenido organizado.'
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'highlighted', 'elevated', 'bordered'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    avatarSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    backgroundColor: { control: 'color' },
    maxWidth: { control: { type: 'number', min: 200, max: 800, step: 10 } },
    timestamp: { control: 'date' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    showHeader: true,
    showActions: true,
    showFooter: false,
    maxWidth: 400,
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Título de la Tarjeta',
    subtitle: 'Subtítulo descriptivo',
    content: 'Contenido principal de la tarjeta con la nueva sintaxis Angular 20.',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Tarjeta con Imagen',
    subtitle: 'Perfecta para productos',
    content: 'Incluye imagen destacada y badge de promoción.',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    imageAlt: 'Producto destacado',
    imageBadge: 'Nuevo',
    primaryButtonText: 'Comprar',
  },
};

export const WithAvatar: Story = {
  args: {
    title: 'Usuario Ejemplo',
    subtitle: 'developer@example.com',
    content: 'Tarjeta de perfil con avatar y acciones.',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    primaryButtonText: 'Seguir',
    secondaryButtonText: 'Mensaje',
    isFavorited: false,
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    title: 'Tarjeta Elevada',
    content: 'Variante con sombra para destacar contenido importante.',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    primaryButtonText: 'Acción Principal',
  },
};

export const DisabledState: Story = {
  args: {
    title: 'Tarjeta Deshabilitada',
    content: 'No permite interacciones en este estado.',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    primaryButtonText: 'Acción',
    secondaryButtonText: 'Cancelar',
    disabled: true,
  },
};

export const LoadingState: Story = {
  args: {
    title: 'Cargando...',
    content: 'La tarjeta está cargando contenido.',
    loading: true,
    showActions: false,
  },
};

export const WithCustomContent: Story = {
  render: (args) => ({
    props: args,
    template: `
      <storybook-card [title]="title" [primaryButtonText]="'Personalizar'">
        <div style="display: flex; gap: 8px; margin-bottom: 12px;">
          <span style="padding: 4px 8px; background: #10b981; color: white; border-radius: 4px; font-size: 12px;">Etiqueta 1</span>
          <span style="padding: 4px 8px; background: #f59e0b; color: white; border-radius: 4px; font-size: 12px;">Etiqueta 2</span>
        </div>
        <p>Contenido personalizado usando <strong>ng-content</strong>.</p>
      </storybook-card>
    `,
  }),
  args: {
    title: 'Tarjeta Personalizada',
  },
};
