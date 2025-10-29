/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════
      // TIPOGRAFÍA - Cambia la fuente aquí
      // ═══════════════════════════════════════════════════════════
      fontFamily: {
        // Tipografía elegante y sofisticada
        serif: ['Abril Fatface', 'Georgia', 'serif'],  // Para títulos
        sans: ['Montserrat', 'Georgia', 'serif'],  // Para cuerpo de texto
      },

      // ═══════════════════════════════════════════════════════════
      // COLORES CAFÉ DÚE - Tu paleta personalizada
      // ═══════════════════════════════════════════════════════════
      colors: {
        // ★ COLOR PRINCIPAL - CAFÉ (marrón oscuro) ★
        // Usado en: botones principales, títulos importantes, navegación activa
        brand: {
          50: '#f5f3f1',
          100: '#e8e4df',
          200: '#d4cbc2',
          300: '#bba89c',
          400: '#a68d7d',
          500: '#8C7764',  // regency-cafe-3 - TU COLOR PRINCIPAL
          600: '#7a6555',
          700: '#665347',
          800: '#59321C',  // regency-cafe-4 - Café oscuro
          900: '#4a2917',
          950: '#2d190e',
        },

        // GRIS - Neutral y elegante
        // Usado en: fondos, texto secundario, bordes
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#D0D3D9',  // regency-cafe-1 - Gris claro
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        // VERDE ECOLÓGICO - Sostenibilidad y naturaleza
        // Usado en: página de sostenibilidad, iconos ecológicos, badges
        eco: {
          50: '#f4f8f0',
          100: '#e7f1dc',
          200: '#d0e4bc',
          300: '#b3d395',
          400: '#95c06f',
          500: '#81A64B',  // regency-cafe-2 - Verde ecológico
          600: '#6a8a3e',
          700: '#546d33',
          800: '#44572b',
          900: '#394926',
        },

        // TERRACOTA/SALMÓN - Acento cálido
        // Usado en: detalles, hover states, elementos destacados
        accent: {
          50: '#fef6f4',
          100: '#fde9e5',
          200: '#fbd7cf',
          300: '#f8baad',
          400: '#f4907d',
          500: '#D98B79',  // regency-cafe-5 - Terracota/salmón
          600: '#c76a56',
          700: '#a85441',
          800: '#8b4738',
          900: '#723d32',
        },
      },

      // ═══════════════════════════════════════════════════════════
      // TAMAÑOS DE TEXTO - Ajusta los tamaños de letra
      // ═══════════════════════════════════════════════════════════
      fontSize: {
        // Puedes personalizar los tamaños aquí
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px - tamaño base
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
        '6xl': '3.75rem',    // 60px
        '7xl': '4.5rem',     // 72px
      },
    },
  },
  plugins: [],
};
