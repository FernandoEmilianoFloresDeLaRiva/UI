# UI
## Repositorio donde se encuentra el UI (Rama Administrador)

### Las dependencias utilizadas en el proyecto fueron:
#### @reduxjs/toolkit : "^1.9.7"
Se implemento para consumir la api, en redux se hizo uso de la store, reducers, actions y thunks (para peticiones asincronas).
#### react-redux: "^8.1.3"
Se implemento para usar las peticiones creadas en redux y conseguir los "states" implementados en la store de redux.
#### socket.io-client: "^4.7.2",
Se implemento para emitir eventos, recibir eventos y claro inicializar el socket con el path del servidor.
Además que se instalo esta dependencia porque no se uso "Pusher", se creo el propio servidor desde  0.
#### wouter: "^2.12.1"
Se implemento esta dependencia para crear y usar rutas.

### Para inicializar el proyecto:
#### npm run dev

### Información extra:
#### Se creo un "test" para el socket, lo que hace este test es emitir un mensaje y que el administrador lo reciba, al conseguir los datos se muestra una notificación.

### Colaboradores:
#### Fernando Emiliano Flores De La Riva
#### Rodrigo Flores Morales
