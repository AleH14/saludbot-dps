# 🩺 SaludBot

SaludBot es una aplicación web basada en Next.js que ofrece un chat inteligente para guiar y ofrecer ayuda médica en temas relacionados con la salud. El objetivo principal es brindar información confiable, orientación y soporte tanto en aspectos médicos como administrativos, promoviendo el bienestar integral de los usuarios.

---

## 📝 Descripción del Proyecto

SaludBot funciona como un asistente virtual capaz de resolver dudas y orientar en múltiples temas de salud. A continuación, se enumeran algunas situaciones en las que el bot puede asistirte:

1. **Síntomas generales y orientación médica:**  
   Describe tus síntomas y SaludBot te orientará con recomendaciones o te guiará sobre cómo proceder.

2. **Especialidades médicas:**  
   Información sobre distintas especialidades, tipos de consultas, y cuándo acudir a un especialista.

3. **Servicios y atención en la clínica:**  
   Detalles sobre atención presencial, servicios disponibles, horarios y ubicación.

4. **Prevención, bienestar y salud mental:**  
   Consejos sobre hábitos saludables, prevención de enfermedades, bienestar físico y salud mental.

5. **Información administrativa:**  
   Orientación sobre trámites, citas, documentación y otros procedimientos administrativos.

---

## 🚀 Instalación y Puesta en Marcha

Sigue los siguientes pasos para clonar, instalar y ejecutar el proyecto en tu entorno local.

### 1. Clona el Repositorio

```bash
git clone https://github.com/AleH14/saludbot-dps.git
cd saludbot-dps
```

### 2. Instala las Dependencias

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (v18 o superior) y [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/).

Con npm:
```bash
npm install
```

Con yarn:
```bash
yarn install
```

### 3. Configura las Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto y agrega la variable OPENAI_API_KEY y asignale tu API Key de OpenAI.

```bash
OPENAI_API_KEY = tu_API_OPENAI
```

### 4. Ejecuta la Aplicación en Desarrollo

```bash
npm run dev
```
o
```bash
yarn dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### 5. Scripts Adicionales

- Construir para producción:  
  ```bash
  npm run build
  ```
- Iniciar en modo producción:  
  ```bash
  npm start
  ```

---

## 🏗️ Estructura del Proyecto

- `/pages` — Rutas y vistas principales de la aplicación.
- `/components` — Componentes reutilizables, incluyendo el componente central `ChatBotIU`.
- `/public` — Recursos estáticos.
- `/styles` — Archivos de estilos CSS/SCSS.
- `/utils` — Funciones y utilidades auxiliares.

---

## 🤖 GitHub Copilot en el Desarrollo

Durante el desarrollo de SaludBot, **GitHub Copilot** ha sido una herramienta fundamental, especialmente en la creación y optimización del componente principal `ChatBotIU`. Copilot ofreció sugerencias inteligentes de código, ayudó a estructurar la lógica del chat, manejar estados complejos y mejorar la experiencia de usuario.  

> ✨ _Reflexión:_  
> El uso de Copilot aceleró el desarrollo, permitió enfocarse en la lógica de app y facilitó la adopción de buenas prácticas de desarrollo. Además, contribuyó a reducir errores y a mantener un flujo de trabajo ágil y eficiente.

---

## 📦 Tecnologías Utilizadas

- **Next.js** — Framework React para aplicaciones SSR/SSG modernas.
- **React** — Librería para construir interfaces de usuario.
- **Node.js** — Entorno de ejecución JavaScript en el servidor.
- **GitHub Copilot** — Asistente de codificación con IA.
- **OpenAI** — Motor de IA para el chat inteligente.
- **CSS/SCSS** — Estilización personalizada.

---

## ⚡ Powered by OpenAI

<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVRSNCZKUcvSYkmDLtSNNaRwRDh8rz5HxHA&s" alt="OpenAI Logo" width="80" height="80" />
</p>

SaludBot utiliza tecnología de inteligencia artificial desarrollada por [OpenAI](https://openai.com/) para potenciar su chat inteligente y ofrecer respuestas precisas y útiles a los usuarios.

---

## ❓ Preguntas Frecuentes

- **¿SaludBot reemplaza a un médico?**  
  No. SaludBot brinda orientación y soporte informativo, pero no sustituye una consulta médica profesional.

- **¿Cómo se protege mi información?**  
  El proyecto sigue buenas prácticas de seguridad, pero se recomienda no compartir datos personales sensibles a través del chat.

---

## 📫 Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un _issue_ o _pull request_ para sugerir mejoras, reportar errores o añadir funcionalidades.

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

---

## 👨‍💻 Autores

- Wendy Aguilar
- César Guzmán 
- Melissa Flores 
- Alejandro Hernández 
- Gabriel Tobar 

---

¡Gracias por visitar SaludBot!  
Tu salud, tu bienestar, tu espacio de consulta. 🩺💬
