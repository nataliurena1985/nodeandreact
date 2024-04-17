# Getting Started with Create React App

### react y node.

![](https://res.cloudinary.com/dv6nijgvd/image/upload/v1713318611/nodeANDreact/qk1jz4e8zwp6vi1wy11a.png)

[LinkecomerceHelados](https://comision-432401.vercel.app/)
[LinkeSweetAlert](https://sweetalert2.github.io/#examples)
[LinkGIT](https://github.com/nataliurena1985/nodeandreact.git)
[LinkeYOUTUBE](https://www.youtube.com/watch?v=U1u2jNYXmBw)

#### para el back y el front

```
PARA CREAR LAS CARPETAS
mkdir client
mkdir server


server  npm install cors
        npm install


client
         npm install react bootstrap
         npm install


 PARA CORRER
CLIENT
npm start


SERVER

node index.js


para volver
control c
```

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```
