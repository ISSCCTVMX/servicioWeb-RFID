# **Recibe notificación con ID y Comentario, luego genera un evento RFID en SecurOS**

## **v1.0**


## **Genera evento en SecurOS con los datos de la notificación**

### URL 


> /rfid?id={ID objeto RFID}&comentario={Texto comentario}

### Ejemplo

> http://issmexico.net:94/rfid?id=1234&comentario=4321

### Método	
**GET**


### Respuesta Exitosa

```
{
    "state" : "ok"
}
```

### Respuesta Error (faltan de datos en el request)

```
{
    "state" : "nok"
}
```
