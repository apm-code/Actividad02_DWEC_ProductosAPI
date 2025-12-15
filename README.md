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

## Despliegue en **GitHub Pages**

La aplicación está desplegada como en `**GitHub Pages**`, utilizando el build de producción de Angular.

🔗 **URL del despliegue:**  
https://apm-code.github.io/Actividad02_DWEC_ProductosAPI/

```text
Consejo: clicar (desactivar y activar) en "Solo activos" de la sección de filtrado para que carguen los productos.
```

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

---

## Proceso de creación del proyecto Angular y ejecución en local
El proyecto se crea en la raíz del repositorio deseada en modo standalone:
```bash
ng new gestion-productos --standalone --skip-tests --directory .
```

Ha de ejecutarse, en la consola, el siguiente comando:
```bash
ng serve -o
```
Abriéndose la aplicación en la dirección:
```
http://localhost:4200/
```

A continuación, se instala Bootstrap 5 en el proyecto:
```bash
npm install bootstrap@5
```
Los componentes y servicios se generan con los siguientes comandos:
```bash
ng g c components/product-list --standalone --skip-tests
ng g c components/products-card --standalone --skip-tests
ng g c components/products-form --standalone --skip-tests
ng g c components/product-filter --standalone --skip-tests
ng g s services/product --skip-tests
```
---

## Ejecutar el proyecto en local
Si se desea clonar el repositorio y ejecutarlo en local, el proceso es el siguiente:

1. Clonar el repositorio:
```bash
git clone git@github.com:apm-code/Actividad02_DWEC_ProductosAPI.git

cd Actividad02_DWEC_ProductosAPI
```
2. Instalar dependencias:
```bash
npm install
```
3. Ejecutar en local:
```bash
ng serve -o
```

---

## Autor

***Adrián Ignacio Pérez Martos***

*Actividad 02 DWEC. UNIR*