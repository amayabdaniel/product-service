# REST Product-Service
```
Construye la imagen Docker:

```
docker build -t product-service .
```
Ejecuta el contenedor Docker:
```
docker run -d --name product-service -p 3000:3000 --env-file .env product-service
```

## Uso de la API

1. Test Health

URL: http://localhost:3000/api/health
Método: get
Body: JSON (raw)
