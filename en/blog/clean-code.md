---
title: Código Limpio
date: 2018-11-26
author: Christian Tola
description:
    What is clean code? Why should we write clean clode?
    We are going to learn about the basis of Clean Code.
tags: [code, patterns]
type: code
---

# Clean Code part 1

<Info />

*This is the first post of Clean Code Series, we are going to add tips on how to get better our code.*

What is *"clean code"*? Why should we write clean code?, first we'll review the basis about Write Clean Code.

## What is Clean Code?

There are many definitions, and all are right, one of the most complete that I've seen is of *C++*'s inventors, **Bjarne Stroustrup**, the author of **The C++ Programming Language** says:

> *"I like my code to be elegant and efficient. The logic should be straightforward and make it hard for bugs to hide, the dependencies minimal to ease maintenance, error handling complete according to an articulated strategy, and performance close to optimal so as not to tempt people to make the code messy with unprincipled optimizations. Clean code does one thing well."*

Clean code is simple, elegant, easy to read and easy to understand.

Let's see how to write clean code.

## Meaningful Names

Names that show the intentions should be used, these names although they are valid, do not provide useful information to developers.

```ts
// Bad Code
let d; // These type of names doesn't offer a valid information.
let ac;
let d12;
let theList; // This name is too generic, the type (List) in the name can lead to confusion.
const M;
// Clean Code
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

Evite usar codificaciones en los nombres, de por si un desarrollador revisara código de otras personas, agregar una codificación adicional solo retrasara al desarrollador, un ejemplo, una empresa "X" utiliza A01254 para identificar a un tipo de clases que están relacionadas con una sección de reportes de las actividades de los usuarios y A01253 para la información almacenada de los usuarios, todas las clases relacionadas a este sistema se nombran de la siguiente manera *A01254-controller o A01253-controller*, para entender a que modulo pertenece cada clase la empresa brinda un diccionario de los códigos, En lugar de ello es mucho mas fácil de entender y mas rapido de encontrar, cuando se utiliza *ReportUserController ReportUserInformationController.*

Aquí terminamos esta primera parte de código limpio, en artículos posteriores veremos algunos ejemplos mas de como mejorar nuestro código.

Si gustan buscar mas información sobre como escribir código limpio les recomiendo el libro *"Clean Code: A handbook of Agile Software Craftsmanship"* the Robert C. Martin

Adiós!

<Disqus />