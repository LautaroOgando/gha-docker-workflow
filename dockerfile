# Usa una imagen base oficial de Node.js para un entorno de ejecución ligero
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de dependencias para instalarlos primero
# Esto aprovecha el cache de Docker y hace las compilaciones más rápidas
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código fuente al directorio de trabajo
COPY . .

# Expone el puerto en el que la aplicación escucha
EXPOSE 3001

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["node", "index.js"]