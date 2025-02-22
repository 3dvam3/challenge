# challenge

Esto es la solucion del probela planteado.

---

## Mejoras Implementadas

### 1. **Modularidad y Mantenibilidad**
   - El código se ha dividido en varios archivos para separar responsabilidades:
     - `src/models/`: Contiene definiciones de tipos (`CartItem`) y clases de descuentos (`Discount`, `BlckFridayDiscount`, `WeekendDiscount`).
     - `src/services/`: Contiene la lógica principal del carrito de compras (`ShoppingCart`).
     - `tests/`: Contiene pruebas unitarias para garantizar la funcionalidad del código.

### 2. **Principios SOLID**
   - **Responsabilidad Única**: La clase `ShoppingCart` se encarga únicamente de gestionar los ítems del carrito, mientras que los descuentos se manejan en clases separadas.
   - **Abierto/Cerrado**: La clase `ShoppingCart` está abierta para extensión (por ejemplo, agregar nuevos tipos de descuentos) pero cerrada para modificación.

### 3. **Patrones de Diseño**
   - Se aplicó el **Principio de Inversión de Dependencias (DIP)** mediante la interfaz `Discount`, lo que permite que `ShoppingCart` dependa de una abstracción en lugar de implementaciones concretas.

### 4. **Manejo de Errores**
   - Se agregaron validaciones para evitar ítems inválidos (nombre vacío o precio no positivo).
   - Se lanzan excepciones claras cuando se intenta eliminar un ítem que no existe o aplicar un descuento inválido.

### 5. **Buenas Prácticas de TypeScript**
   - Se evitó el uso de `any` y se definieron tipos explícitos (`CartItem`).
   - Se utilizaron métodos privados para encapsular la lógica interna de la clase.

### 6. **Pruebas Unitarias**
   - Se escribieron pruebas unitarias usando Jest para garantizar la funcionalidad del código.
   - Las pruebas cubren casos como agregar/eliminar ítems, calcular el total y aplicar descuentos.



---

## Cómo Usar el Proyecto

### Requisitos Previos
- Node.js (v16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:

2. npm install

3. npm run start

Para las pruebas:
npm test