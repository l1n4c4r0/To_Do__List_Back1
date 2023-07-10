# Proyecto CRUD para una lista de tareas

Este proyecto contiene operaciones CRUD (Create, Read, Update and Delete) para una lista de tareas, To Do List.

## Funcionalidades:

1. Obtener todas las tareas.
2. Obtener una tarea.
3. Crear y/o agregar una nueva tarea.
4. Actualizar información de una tarea.
5. Eliminar una tarea.

## Tecnologías utilizadas:

- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose
- Nodemon
- Body Parser
- EJS
- Dotenv
- HTML
- CSS

## Uso:

1. Iniciar la aplicación: `npm start` o `npm start nodemon` o `node index.js`.
2. Puedes probar los siguientes endpoints desde Postman, los cuales devuelven y reciben datos en formato JSON.

### Endpoints para las tareas:

- Obtener todas las tareas: `GET /api/todo/`
- Crear una nueva tarea: `POST /api/todo/create` con la siguiente estructura en JSON:
  ```json
  {
    "todo": "Ir al supermercado",
  }
  ```
- Actualizar una tarea por su ID: `PATCH /api/todo/update/{id}`
- Eliminar una tarea por su ID: `DELETE /api/todo/delete/{id}`