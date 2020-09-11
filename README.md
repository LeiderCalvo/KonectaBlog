#KonectaBlog

Este es un blog que tiene la capacidad de crear usuarios, a los cuales les permite subir distintos artículos con diferentes categorías que serán mostrados a otros usuarios de la aplicación. Para resolver esta prueba técnica de 5 horas de desarrolló una Single page application en React que hace uso de firebase como solución ágil ante la necesidad de autenticación, bases de datos y storage de contenido.

El manejo de estado dentro de la aplicación se souciona con el manejo del contexto, dado que implementar redux en un proyecto pequeño que realmente no lo requiere sería una mala decisión en la optimización del desarrollo, sin embargo, los estados del los multiples contextos creados son manejado con reducers, y acciones tal y como en Redux, de manera que se pueda obtner los beneficios de esta tecnoñogía dentro de la misma plataforma (react). Así mismo, la separación del dispatcher y del estado en contextos distintos accedidos por sus propios hooks (MakeStore) es un patrón de diseño que permite separar y definir muy bien la lógica de negocio, de las vistas, así como tambien evita renderizados innecesarios en componentes que solo consumen el dispatcher y no es estado.

# Resultados del proyecto

Debido a la falta de tiempo, muchas ideas y soluciones se quedaron en intenciones dentro del branch 
### master
Sin embargo, se creo un nuevo branch
### over--hour
donde pasadas las 5 horas, incluí un poco más de desarrollo, así mismo pretendo continuar agregando codigo a este branch y seguir desarrollando el proyecto.

_______________________________________________________________________________


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
