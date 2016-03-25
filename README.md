#Whourks

Sencilla utilidad que convierte horas y minutos trabajados en moneda (pesos). Se utiliza Electron para hacer la app multiplataforma.

![](https://raw.githubusercontent.com/anotherdagou/whourks/master/app/whourks-u.png)
![](https://raw.githubusercontent.com/anotherdagou/whourks/master/app/whourks-u-settings.png) Ajustes básicos 

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
###Correr la aplicación en modo desarrollo 

```
npm run start
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


