# Mi tienda de Helados

### Helados Tucán es una empresa familiar de larga trayectoria en Lugano, capital federal dedicada a la fabricación y venta de helados artesanales, elaboración de postres helados, tortas artesanales.Su nombre es desde hace años sinónimo del mejor helado de la zona, es un clásico en toda reunión, tanto familiar, social o empresarial. Los mismos son realizados cuidando todas las normas de higiene.

![](https://res.cloudinary.com/dv6nijgvd/image/upload/v1685584987/ecomerce/Cremas_pwicxc.png)

[LinkecomerceHelados](https://comision-432401.vercel.app/)

#### para clonar el proyecto ejecutar el siguiente codigoi

```
git clone [project url]
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
