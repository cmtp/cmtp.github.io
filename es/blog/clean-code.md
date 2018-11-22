---
title: Código Limpio parte 1
date: 2018-11-18
author: Christian Tola
description:
    Que es el código limpio? por que deberíamos escribir código limpio?
    Aprenderemos mas sobre las bases del código limpio.
tags: [code, patterns]
---

# Código Limpio parte 1

*Este es el primer articulo de la serie de código limpio donde iremos agregando consejos de como mejorar nuestro código.*

¿Que es el código limpio? ¿Por que deberíamos escribir código limpio?, primero revisemos las bases sobre que es código limpio.

## Que es el código limpio?

Existen varias definiciones, y a mi parecer todas son correctas, una de las mas completas que he visto es la de **Bjarne Stroustrup** inventor de *C++* y autor de **The C++ Programming Language**:

> *"Me gusta que mi código sea elegante y eficaz. La lógica deb ser directa para evitar errores ocultos, las dependencias deben ser mínimas para facilitar el mantenimiento, el procesamiento de errores completo y sujeto a una estrategia articulada, y el rendimiento debe ser optimo para que los usuarios no tiendan a estropear el código con optimizaciones sin sentido. El código limpio hace bien una cosa."*

El código limpio es simple, y elegante, debe ser sencillo de leer, fácil de extender.
 
Veamos como escribir código limpio.

## Nombres con Sentido

Se deben usar nombres que revelen las intenciones, estos nombres si bien son validos, no brindan información util al desarrollador.

```ts
// Mal Código
let d; // Este tipo de nombres no ofrecen ningún tipo de información sobre su uso.
let ac;
let d12;
let theList; // Este nombre es muy genérico, también colocar el tipo (List) en el nombre puede llevar a confusiones.
const M;
// Código Limpio
let remainingDate;
let userAccountInformation;
let userAccounts;
const HTTP_METHODS;
```

Evitar nombres con variaciones mínimas, estos nombres agregan ruido al momento de realizar una búsqueda de alguna clase especifica, método, o variable.

```ts
/** 
 * Ambos nombres son parecidos pero no iguales, esto puede generar confusión 
 * para el desarrollador 
**/
export default class XYZControllerForEfficientHandlingOfStrings {
    ...
}
export default class XYZControllerForEfficientStorageOfStrings {
    ...
}
```

Usar nombres que se puedan buscar y que sean fáciles de pronunciar. 

```ts
// variables
let accounts;
let accountsInformation;
let billingAccount;
let mailingRecipients;

// functions
printBillingInformation() {
    ...
}

addNewCustomer() {
    ...
}
```
Cuando nombramos funciones el método debe revelar su implementación, no debería ser necesario revisar todo el método si el nombre esta bien escrito

Evite usar codificaciones, no por que este trabajando en el modulo de **XYZ** el nombre de todos los controladores sera *XYZ-AccountController*, *XYZ-UserController*, etc. esto ocasiona que el desarrollador tenga que aprender.

<Disqus />