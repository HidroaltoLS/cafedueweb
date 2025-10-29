# Guía de Edición - Café Dúe

Esta guía te ayudará a personalizar tu sitio web sin necesidad de conocimientos técnicos avanzados.

---

## 📝 EDITAR TEXTOS

### ¿Dónde están los textos?

Todos los textos de tu sitio están en la carpeta `src/pages/`. Cada página tiene su propio archivo:

- **Página de Inicio** → `src/pages/Home.tsx`
- **Acerca de nosotros** → `src/pages/About.tsx`
- **Proceso del café** → `src/pages/Proceso.tsx`
- **Nuestros socios** → `src/pages/Socios.tsx`
- **Sostenibilidad** → `src/pages/Sostenibilidad.tsx`
- **Compra** → `src/pages/Compra.tsx`
- **Certificaciones** → `src/pages/Certificaciones.tsx`
- **Contacto** → `src/pages/Contacto.tsx`

### ¿Cómo editar?

1. Abre el archivo de la página que quieres modificar
2. Busca el texto que quieres cambiar (está entre comillas `" "`)
3. Reemplázalo con tu texto
4. Guarda el archivo

**Ejemplo:**

```tsx
// Busca esto:
<h1>Café Dúe</h1>
<p>Del río a tu taza</p>

// Cámbialo por:
<h1>Mi Asociación de Café</h1>
<p>Café premium de origen</p>
```

---

## 🎨 CAMBIAR COLORES

### Archivo principal: `tailwind.config.js`

Abre el archivo `tailwind.config.js` en la raíz del proyecto. Ahí encontrarás 3 paletas de colores:

### 1. Color BRAND (Naranja/Ámbar) - Tu color principal

```javascript
brand: {
  500: '#ef8a1a',  // ← Cambia este valor
}
```

Este es el color principal de tu marca. Se usa en:
- Botones principales
- Enlaces importantes
- Detalles destacados

### 2. Color CAFE (Marrón) - Elementos de café

```javascript
cafe: {
  500: '#a8795c',  // ← Cambia este valor
}
```

Usado para elementos relacionados con café.

### 3. Color NATURE (Verde) - Sostenibilidad

```javascript
nature: {
  500: '#22c55e',  // ← Cambia este valor
}
```

Usado para elementos de naturaleza y sostenibilidad.

### Herramienta para elegir colores

Usa esta página para elegir tus colores: **https://tailwindcss.com/docs/customizing-colors**

O genera paletas completas en: **https://uicolors.app/create**

---

## ✏️ CAMBIAR TIPOGRAFÍA (FUENTES)

### Archivo: `tailwind.config.js`

Busca la sección `fontFamily`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  // Cambia 'Inter' por la fuente que quieras
}
```

### Pasos para usar una fuente de Google Fonts:

1. Ve a **https://fonts.google.com/**
2. Elige una fuente (ejemplo: "Montserrat")
3. Copia el link que te da Google
4. Pégalo en `index.html` dentro de la sección `<head>`

**Ejemplo:**

En `index.html`:
```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
</head>
```

En `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Montserrat', 'sans-serif'],
}
```

---

## 📏 CAMBIAR TAMAÑOS DE TEXTO

### Archivo: `tailwind.config.js`

En la sección `fontSize` puedes ajustar los tamaños:

```javascript
fontSize: {
  'base': '1rem',      // 16px - texto normal
  'lg': '1.125rem',    // 18px - texto grande
  '2xl': '1.5rem',     // 24px - subtítulos
  '4xl': '2.25rem',    // 36px - títulos
  '6xl': '3.75rem',    // 60px - títulos hero
}
```

### ¿Cómo se usan en las páginas?

En los archivos `.tsx` verás clases como:
- `text-base` = tamaño normal
- `text-lg` = tamaño grande
- `text-2xl` = subtítulos
- `text-4xl` = títulos grandes
- `text-6xl` = títulos principales

---

## 📞 CAMBIAR INFORMACIÓN DE CONTACTO

### Archivo: `src/pages/Contacto.tsx` y `src/pages/Compra.tsx`

Busca y reemplaza:

```tsx
// Teléfonos
+593 99 999 9999  →  TU NÚMERO REAL

// Emails
info@cafedue.com  →  TU EMAIL REAL
ventas@cafedue.com  →  TU EMAIL DE VENTAS

// Datos bancarios (en Compra.tsx)
Cuenta Corriente: 1234567890  →  TU CUENTA REAL
RUC: 1234567890001  →  TU RUC REAL
```

---

## 🖼️ CAMBIAR IMÁGENES

### Imagen principal (Hero en Home)

En `src/pages/Home.tsx`, busca:

```tsx
backgroundImage: "url('https://images.unsplash.com/photo-...')"
```

Reemplaza la URL con:
- Una URL de tu imagen en internet
- O una ruta local como: `/images/mi-cafe.jpg`

### Agregar tus propias imágenes

1. Crea una carpeta `public/images/` en la raíz del proyecto
2. Coloca tus imágenes ahí
3. Úsalas así: `<img src="/images/tu-imagen.jpg" />`

---

## 🎬 AGREGAR VIDEOS

### En la página de Proceso

Busca en `src/pages/Proceso.tsx`:

```tsx
<div className="aspect-video bg-gray-200 rounded-lg">
  {/* Aquí va tu video */}
</div>
```

Reemplaza con un video de YouTube:

```tsx
<iframe
  className="w-full aspect-video rounded-lg"
  src="https://www.youtube.com/embed/TU_VIDEO_ID"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
  allowFullScreen
></iframe>
```

---

## 💡 TIPS IMPORTANTES

### 1. Después de hacer cambios:
```bash
npm run build
```

### 2. Para ver cambios en tiempo real:
```bash
npm run dev
```

### 3. Colores principales del sitio actual:
- **Ámbar/Café**: `amber-700`, `amber-900`
- **Gris**: `gray-50`, `gray-900`
- **Verde**: `green-700`, `emerald-700`
- **Azul**: `blue-700`, `teal-700`

### 4. Para cambiar el color de un botón:

Busca clases como:
```tsx
className="bg-amber-700"  // Fondo ámbar
className="text-white"     // Texto blanco
```

Cámbialas por:
```tsx
className="bg-brand-500"  // Tu color personalizado
className="text-white"
```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

**❌ El sitio no se ve diferente después de cambiar colores**
- Ejecuta: `npm run build` de nuevo
- Limpia el caché del navegador (Ctrl + Shift + R)

**❌ Rompí algo y no funciona**
- Verifica que no hayas borrado comillas `"` o llaves `{}`
- Los textos siempre deben estar entre comillas
- Los números de color deben llevar `#` al inicio

**❌ No encuentro dónde cambiar un texto**
- Usa Ctrl + F (búsqueda) para encontrar el texto en los archivos
- El texto podría estar en más de una página

---

## 📚 RECURSOS ÚTILES

- **Colores Tailwind**: https://tailwindcss.com/docs/customizing-colors
- **Generador de paletas**: https://uicolors.app/create
- **Google Fonts**: https://fonts.google.com/
- **Iconos Lucide**: https://lucide.dev/icons/
- **Fotos gratuitas de café**: https://www.pexels.com/search/coffee/

---

¿Necesitas más ayuda? Cada archivo tiene comentarios que explican qué hace cada sección.
