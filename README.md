# API REST de Catálogo de Productos  

API creada para la implementación del catálogo de productos del poryecto final de la asignatura de Desarrollo Web en Entorno Cliente, del segundo curso del grado en Desarrollo de Aplicaciones Web en el centro de formación ISEN. 

## Descripción  

Esta API permite obtener un catálogo de productos para ser consumido por aplicaciones frontend, como una tienda online. El objetivo es proporcionar una solución educativa para simular peticiones HTTP y mostrar cómo integrar APIs externas en proyectos web. La API se encuentra alojada en la dirección https://serverdaw.onrender.com.

## Estructura del JSON

La API devuelve una lista de objetos Producto con la siguiente estructura:
```json
[
  {
    "nombre": "Smartphone Galaxy S23",
    "descripcion": "Pantalla AMOLED de 6.1 pulgadas, cámara de 50 MP",
    "precio": 899.99,
    "categoria": "Electrónica",
    "imagen": "https://media2.allzone.es/1777659-large_default/smartphones-samsung-galaxy-s23-s911-5g-dual-sim-8gb-ram-256gb-violeta-sams23s911256lpieu.jpg"
  },
  {
    "nombre": "Zapatillas Running Pro",
    "descripcion": "Zapatillas ligeras y resistentes para largas distancias",
    "precio": 119.95,
    "categoria": "Deportes",
    "imagen": "https://raw.githubusercontent.com/jbarceloperez/serverDAW/79deef249596a9bce73dbee9cf4fbb2e28a8a8ef/data/imgs/zapatillas.jpg"
  }
]
```
### Campos del Objeto Producto

| **Campo**   | **Tipo** | **Descripción**                            |
|-------------|----------|--------------------------------------------|
| nombre      | String   | Nombre del producto                        |
| descripcion | String   | Descripción o características del producto |
| precio      | Número   | Precio del producto (en euros)             |
| categoria   | String   | Categoría a la que pertenece el producto   |
| imagen      | Url      | Url a la imagen del producto               |

## Endpoints

```bash
GET /api/productos
```
Devuelve una lista de productos en formato JSON.

Para hacer una petición en JavaScript se debe usar la siguiente función:

```javascript
fetch("https://serverdaw.onrender.com/api/productos")
```

Ejemplo de respuesta:
```json
[
  {
    "nombre": "Auriculares Inalámbricos",
    "descripcion": "Bluetooth 5.0, cancelación de ruido",
    "precio": 59.99,
    "categoria": "Electrónica",
    "imagen": "https://raw.githubusercontent.com/jbarceloperez/serverDAW/79deef249596a9bce73dbee9cf4fbb2e28a8a8ef/data/imgs/auriculares-bt.jpg"
  }
]
```

## Instalación y uso local

En caso de querer descargar el repositorio para ejecutar el servidor o depurar de manera local, estos son los pasos: 

1. Clona este repositorio:  
```bash
git clone https://github.com/jbarceloperez/serverDAW
cd serverDAW
```

2. Instala las dependencias del proyecto:

```bash
npm install
```

3. Ejecuta el servidor:

```bash
node server.js
```
4. Accede a la API en http://localhost:3000/api/productos.

## Información Adicional

La API incluye soporte para CORS, lo que permite el acceso desde aplicaciones frontend.
Las respuestas son en formato JSON y simulan datos reales.


