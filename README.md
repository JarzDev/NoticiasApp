# 📰 NoticiasApp

Una aplicación moderna de noticias desarrollada con Angular que permite buscar y filtrar noticias por país y categoría con una interfaz elegante y responsiva.

![Angular](https://img.shields.io/badge/Angular-16.1.0-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-blue?style=flat-square&logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-purple?style=flat-square&logo=bootstrap)

## ✨ Características

- 🔍 **Búsqueda personalizada** de noticias
- 🌍 **Filtrado por país** y categoría
- 📱 **Diseño completamente responsivo**
- 🎨 **Interfaz moderna** con efectos glass y animaciones suaves
- ⚡ **Carga optimizada** con lazy loading de imágenes
- 🔄 **Spinner animado** durante la carga
- 📰 **Visualización en cards** con hover effects

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Angular CLI

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd NoticiasApp
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta la aplicación**
   ```bash
   npm start
   # o
   ng serve
   ```

4. **Abre tu navegador**
   
   Navega a `http://localhost:4200/`

## 🌐 Demo en Vivo

¡Puedes ver la aplicación funcionando en línea!

**🔗 URL del Proyecto:** [https://buscanews.pages.dev/](https://buscanews.pages.dev/)

La aplicación está desplegada y disponible para que puedas probarla directamente sin necesidad de instalar nada localmente.

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── form/              # Formulario de filtros
│   │   ├── navbar/            # Barra de navegación
│   │   └── news-list/         # Lista de noticias
│   ├── services/
│   │   └── news.service.ts    # Servicio de noticias
│   └── shared/
│       └── spinner/           # Componente de carga
├── assets/                    # Recursos estáticos
└── styles.css               # Estilos globales
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Primary**: `#2563eb` (Azul moderno)
- **Accent**: `#0ea5e9` (Azul claro)
- **Success**: `#10b981` (Verde)
- **Background**: Gradiente `#f8fafc` a `#e2e8f0`

### Componentes Destacados

#### 🧭 Navbar
- Diseño glass effect con backdrop blur
- Búsqueda integrada con iconos
- Completamente responsivo
- Animación de pulso en el icono

#### 📝 Formulario de Filtros
- Selectores personalizados con iconos
- Efectos hover y focus
- Botón con efecto ripple
- Layout grid responsivo

#### 📄 Lista de Noticias
- Cards con efectos hover 3D
- Overlay de imagen con botón de acción
- Metadata organizada (fuente, fecha)
- Botones de acción con animaciones

#### ⏳ Spinner
- Múltiples círculos animados
- Texto descriptivo
- Overlay con blur effect
- Completamente centrado

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm start          # Inicia el servidor de desarrollo
npm run build      # Construye la aplicación para producción
npm run watch      # Construye y observa cambios
npm test           # Ejecuta las pruebas unitarias

# Angular CLI
ng generate component <name>    # Genera un nuevo componente
ng generate service <name>      # Genera un nuevo servicio
ng build --prod                 # Build de producción
```

## 📦 Dependencias Principales

- **Angular**: Framework principal (v16.1.0)
- **RxJS**: Programación reactiva (v7.8.0)
- **Bootstrap**: Estilos base (v5.3.0)
- **Font Awesome**: Iconografía (v6.4.0)
- **Inter Font**: Tipografía moderna

## 🌐 Funcionalidades

### Búsqueda de Noticias
- Búsqueda por términos personalizados
- Filtrado por país y categoría
- Resultados en tiempo real

### Interfaz de Usuario
- Diseño mobile-first
- Animaciones CSS suaves
- Efectos de hover interactivos
- Carga lazy de imágenes

### Rendimiento
- Componentes optimizados
- TrackBy functions para listas
- Lazy loading de recursos
- Minificación automática

## 🔧 Configuración

### Variables CSS Personalizables
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #f1f5f9;
  --accent-color: #0ea5e9;
  --text-dark: #1e293b;
  --text-light: #64748b;
}
```

### Breakpoints Responsivos
- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Dispositivos móviles iOS/Android

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙋‍♂️ Soporte

Si tienes preguntas o necesitas ayuda:

- 📧 Abre un issue en GitHub
- 📝 Revisa la documentación de Angular
- 💬 Contacta al equipo de desarrollo

---

**Desarrollado con ❤️ usando Angular y las mejores prácticas de desarrollo web moderno.**
