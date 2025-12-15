# Gestión de Productos – Angular 18

Aplicación web desarrollada con **Angular 18** como parte de la **Actividad 02 de Desarrollo Web en Entorno Cliente (DWEC)**.

La aplicación permite **listar, filtrar, crear y eliminar productos** consumiendo una API REST simulada, utilizando componentes standalone, formularios reactivos y template-driven forms, y un servicio centralizado para la gestión del estado.

---

## Funcionalidades

- **Listado de productos**
  - Visualización en tarjetas con imagen, descripción, precio, categoría y estado.
  - Diseño responsive con Bootstrap.

- **Alta de productos**
  - Formulario reactivo (Reactive Forms).
  - Los productos se añaden dinámicamente al listado (en memoria).

- **Eliminación de productos**
  - Eliminación directa desde la tarjeta del producto.

- **Filtrado de productos**
  - Filtro por nombre.
  - Filtro por categoría.
  - Filtro por productos activos.

- **Interfaz cuidada**
  - Bootstrap 5.
  - Estilo pastel con predominio de tonos naranjas.
  - Hover suave en tarjetas y navegación.

---

## Tecnologías utilizadas

- **Angular 18**
  - Componentes standalone
  - Servicios
  - Signals
- **TypeScript**
- **Bootstrap 5**
- **RxJS**
  - `BehaviorSubject` para gestión del estado
- **HttpClient**
- **API REST simulada** (npoint)

---

## API utilizada

Los datos iniciales se cargan desde una API REST simulada:
https://api.npoint.io/1dee63ad8437c82b24fe

- La API se utiliza únicamente para la carga inicial (GET).  
- Las operaciones de alta, eliminación y filtrado se realizan en **memoria**, tal y como se especifica en la guía de la actividad.

---

## Estructura del proyecto
```text
src
├── app
│   ├── components
│   │   ├── product-list
│   │   ├── products-card
│   │   ├── products-form
│   │   └── product-filter
│   │
│   ├── services
│   │   └── product.ts
│   │
│   ├── app.html
│   ├── app.css
│   ├── app.ts
│   └── app.config.ts
│
├── index.html
├── main.ts
└── styles.css
```

## Autor

***Adrián Ignacio Pérez Martos***

*Actividad 02 DWEC. UNIR*