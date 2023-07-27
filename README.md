## Prueba Técnica FULL STACK

Requerimientos Funcionales:

-   Login
-   Vista de dashboard con gráficas
-   Listado de transacciones
-   Listado de kioskos

## Tecnologías Utilizadas

-   [Next.js](https://nextjs.org/): Framework Full Stack de React.js
-   [Chakra UI](https://chakra-ui.com/): Framework UI
-   [React Chart.js 2](https://react-chartjs-2.js.org/): Libreria para gráficas

## Como funciona esta aplicación:

![image](https://github.com/javiier507/xplor-test/assets/8405694/12724d6c-f2cc-4c97-8d05-a360040a9768)

## Instrucciones

Configurar variables de entorno

```bash
cp .env.example .env.local
```

```bash
# .env.local

# Xplor API
API_ENDPOINT=http://127.0.0.1:8080

# Llave de autenticación
NEXTAUTH_SECRET=my_ultra_secure_nextauth_secret
```

Ejecutar como desarrollo:

```bash
npm run dev
```

Ejecutar como Producción:

```bash
npm run build
npm run start
```

Compilar imagenes y ejecutar contenedor:

```bash
make docker-build
make docker-run
make docker-down
```

## Autor

Carlos Peñalba
