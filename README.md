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
    "categoria": "Electrónica"
  },
  {
    "nombre": "Zapatillas Running Pro",
    "descripcion": "Zapatillas ligeras y resistentes para largas distancias",
    "precio": 119.95,
    "categoria": "Deportes"
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

## Endpoints

```bash
GET /api/productos
```
Devuelve una lista de productos en formato JSON.

Ejemplo de respuesta:
```json
[
  {
    "nombre": "Auriculares Inalámbricos",
    "descripcion": "Bluetooth 5.0, cancelación de ruido",
    "precio": 59.99,
    "categoria": "Electrónica"
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


