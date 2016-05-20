#Whourks

Sencilla utilidad que convierte horas y minutos trabajados en moneda (pesos). Se utiliza Electron para hacer la app multiplataforma.

![](https://raw.githubusercontent.com/anotherdagou/whourks/master/app/whourks-u.png)
![](https://raw.githubusercontent.com/anotherdagou/whourks/master/app/whourks-u-settings.png)

##Motivación 
Todo el tiempo estoy tratando de mejorar mis habilidades básicas que tengo en Javascript. Es por eso que decidí crear algo sencillo y de utilidad para mi día a día. **Whourks** es una utilidad que permite ingresar: precio por hora, tiempo trabajado (expresado en horas y minutos) los cuales convierte a una moneda (pesos). Mi objetivo era muy básico:

* Aprender algún patrón para modularizar mi código JS
* Crear una utilidad que me sirviera en mi día a día
* Aprender lo básico sobre como funciona Electron para crear una aplicación multiplataforma


##¿Comó correr el proyecto?
###Instalar dependencias

```
npm install
```
###Correr la aplicación en modo desarrollo de Electron

```
npm run start
```

###Correr la aplicación en modo desarrollo en el navegador

```
gulp
```

###Generar aplicación
Para generar la aplicación se utiliza **electron-packager** la configuración por defecto que tengo en este momento es para generar una aplicación para Mac OSX:

```
 "package": "electron-packager ./ Whourks --platform=darwin --arch=all --icon=./app/icon.icns --out=build --overwrite=true"
 ```
 Esta configuración se encuentra en el archivo ``package.json`` para ver las diferentes opciones que ofrece **electron-packager** visitar la [Documentación oficial](https://github.com/electron-userland/electron-packager#readme).

####Comando para genera la app

```
npm run package
``` 

Esto generara una carpeta llamada ``build`` que contiene la app.

###Changelog

##0.1.3
- Reescrito el código fuente: ahora la utilidad esta escrita con React

##0.1.2
- Se añadió la posibilidad de añadir el Iva a los cálculos
- Ahora se pueden guardar los settings básicos gracias a localStorage
- Nuevo menú de settings
- Se muestran el total trabajado con el Iva definido por el usuario

## 0.1 
- Calculo de precio en base a horas trabajadas
- Tema claro y oscuro 



