---
title: Crear un api rest con Nest.js
layout: PostLayout
date: 2018-01-24
author: Christian Tola
description:
    Este es el primero de los articulos relacionados a Nest.js, Nest.js es un Framework para el desarrollo backend.
tags: [Node]
type: node
---

# Crear un Api Rest con Nest.js

<Info />

Node.js es un entorno de programación que permite crear aplicaciones en el lado del servidor utilizando Javascript como lenguaje principal, esto ha generado mucha popularidad entre los desarrolladores ya que permite desarrollar una aplicación en todos sus niveles (Base de datos, Backend, Frontend) con Javascript.

[Nest.js](https://nestjs.com/) es un Framework para el desarrollo Backend que permite crear aplicaciones del lado del servidor utilizando Typescript.

![Nest.js](./images/create-api-rest-nestjs/nest_logo.svg)

Nest.js utiliza un sistema de anotaciones para abstraer muchas de las configuraciones que se necesitan para crear un servidor rest, un servidor Graphql, o un WebSocket, permitiéndonos centrarnos mas en el código directamente.

Si anteriormente ya hemos trabajado con Java para el desarrollo de aplicaciones web, Nest.js es un Framework muy parecido a [Spring Boot](https://spring.io/), ambos se basan en un sistema de anotaciones para las configuraciones, su sistema de inyección de dependencias esta inspirado en Angular y permite modularizar la aplicación de tal forma que podemos crear módulos para diferentes secciones de nuestra aplicación.

La [documentación](https://docs.nestjs.com/) oficial es muy completa e intuitiva, y contiene una gran variedad de ejemplos sobre las funcionalidades que se pueden desarrollar con Nest.js

## Instalación

La mejor forma de iniciar un proyecto con Nest.js es instalando su interfaz de linea de comandos, para instalar Nest.js utilizaremos el siguiente comando:

```bash
# Para sistemas operativos Mac o Linux agregar sudo por delante para realizar la instalación como super usuario.
npm install -g @nestjs/cli
```



**Compártelo en tus redes Sociales!**
<SocialButtons />

<Disqus />