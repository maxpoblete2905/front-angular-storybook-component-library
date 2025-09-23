import { CommonModule } from '@angular/common';
import { Component, input, output, booleanAttribute, numberAttribute, signal, computed } from '@angular/core';

export type CardVariant = 'default' | 'highlighted' | 'elevated' | 'bordered';
export type CardSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'storybook-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // Estados y variantes con valores por defecto
  variant = input<CardVariant>('default');
  size = input<CardSize>('medium');
  disabled = input(false, { transform: booleanAttribute });
  loading = input(false, { transform: booleanAttribute });

  // Contenido principal
  title = input<string | undefined>();
  subtitle = input<string | undefined>();
  content = input<string | undefined>();
  maxWidth = input(400, { transform: numberAttribute });

  // Imagen - usamos una señal separada para manejar el error
  imageUrl = input<string | undefined>();
  imageAlt = input('Card image');
  imageBadge = input<string | undefined>();
  fallbackImage = input('/assets/fallback-image.jpg');

  // Computed property para obtener la URL a mostrar
  displayImageUrl = computed(() => {
    
    const url = this.imageUrl();
    if (url && !this.hasImageError()) {
      return url;
    }
    return this.fallbackImage();
  });

  // Señal para rastrear errores de imagen
  private hasImageError = signal(false);

  // Avatar y header
  avatar = input<string | undefined>();
  avatarSize = input<'small' | 'medium' | 'large'>('medium');
  showHeader = input(true, { transform: booleanAttribute });
  header = input<string | undefined>();

  // Acciones
  showActions = input(true, { transform: booleanAttribute });
  primaryButtonText = input<string | undefined>();
  secondaryButtonText = input<string | undefined>();
  isFavorited = input(false, { transform: booleanAttribute });

  // Footer
  footerText = input<string | undefined>();
  showFooter = input(false, { transform: booleanAttribute });
  timestamp = input<Date | undefined>();
  timestampFormat = input('mediumDate');

  // Estilos
  backgroundColor = input<string | undefined>();

  // Eventos con output (nueva sintaxis)
  onPrimaryAction = output<Event>();
  onSecondaryAction = output<Event>();
  onFavorite = output<boolean>();
  onMenu = output<Event>();

  // Manejar error de imagen
  handleImageError() {
    this.hasImageError.set(true);
  }

  // Métodos computados
  cardClasses = computed(() => {
    const classes = ['storybook-card'];

    // Variante
    classes.push(`card--${this.variant()}`);

    // Tamaño
    classes.push(`card--${this.size()}`);

    // Estados
    if (this.disabled()) classes.push('card--disabled');
    if (this.loading()) classes.push('card--loading');
    if (this.imageUrl()) classes.push('card--with-image');

    return classes;
  });

  avatarSizeClass = computed(() => `avatar--${this.avatarSize()}`);
}
