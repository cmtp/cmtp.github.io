---
title: Iniciando con Angular CLI
date: 2018-09-21
description:
    Angular CLI es una herramienta muy funcional, permite generar un nuevo proyecto y optimizar nuestro flujo de trabajo con angular, una herramienta muy necesaria para el desarrollo web usando angular.
---

# Iniciando con Angular CLI

Bienvenidos, en este post veremos las ventajas de utilizar Angular CLI dentro de nuestro flujo de trabajo

![Angular CLI comandos](./images/iniciando-con-angular-cli/cli-logo.svg)

## Que es Angular CLI?

Angular CLI es una herramienta que nos permite crear la estructura de una aplicación Angular, generar servicios, componentes, módulos, rutas, etc de manera rápida y sencilla.

Al mismo tiempo, Angular CLI nos permite reflejar los cambios que realizamos en tiempo real gracias a que cuenta con un servidor integrado.

## Instalación

Que necesitamos? tener nodejs instalado y npm actualizado. Para la instalación de nodejs nos dirigimos a [https://nodejs.org](https://nodejs.org).

Una vez tengamos node instalado, actualizamos nuestro gestor de paquetes de node con el siguiente comando :

```javascript
npm install -g npm // actualización de npm, puede tardar unos minutos
node --version // verificamos nuestra version de node
npm --version // verificamos la version de npm
```

Verificamos 
La instalación es muy sencilla, dentro de la linea de comandos ingresamos el siguiente comando y presionamos Enter.

```javascript
npm install -g @angular/cli
```

Una vez finalizado comprobaremos que la instalación se efectuó correctamente con el siguiente comando.

```javascript
ng --version
```

## Comandos principales.

```javascript
ng help
```