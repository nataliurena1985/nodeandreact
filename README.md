# Mi tienda de Helados

### react y node.

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
