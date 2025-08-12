// vite.config.js
export default {
  server: {
    host: true, // Esto permite que el servidor sea accesible desde la red.
    port: 5173, // Asegura que el puerto sea el 5173, el predeterminado de Vite.
    allowedHosts: [
      'devserver-preview--thebarberdomi.netlify.app'
    ]
  }
}