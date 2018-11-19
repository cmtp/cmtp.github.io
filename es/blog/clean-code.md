---
title: Código Limpio
date: 2018-11-18
author: Christian Tola
description:
    Que es el código limpio? por que deberíamos escribir código limpio?
    Aprenderemos mas sobre las bases del código limpio.
tags: [code, patterns]
---

# Código Limpio

¿Que es el código limpio? ¿Por que deberíamos escribir código limpio?, primero revisemos las bases sobre que es código limpio.

## Que es el código limpio?

Existen varias definiciones, y a mi parecer todas son correctas, una de las mas completas que he visto es la de **Bjarne Stroustrup** inventor de *C++* y autor de **The C++ Programming Language**:

> *"Me gusta que mi código sea elegante y eficaz. La lógica deb ser directa para evitar errores ocultos, las dependencias deben ser mínimas para facilitar el mantenimiento, el procesamiento de errores completo y sujeto a una estrategia articulada, y el rendimiento debe ser optimo para que los usuarios no tiendan a estropear el código con optimizaciones sin sentido. El código limpio hace bien una cosa."*

El código limpio es simple, y elegante, debe ser sencillo de leer, fácil de extender.
 
Veamos como escribir codigo limpio.

## Nombres con Sentido

se deben usar nombres que revelen las intenciones

```ts
// typescript
d: number;
//javascript
let d;
```