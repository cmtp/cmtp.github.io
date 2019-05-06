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
avoid names with little changes, this names add noise when we apply a search in a specific class, method or variable.

```ts
/** 
 * Both names are similar, but they aren't the same, this would be confuse for the developer.
**/
export default class XYZControllerForEfficientHandlingOfStrings {
    ...
}
export default class XYZControllerForEfficientStorageOfStrings {
    ...
}
```

You should use names that would be searchable, and would be easy to say.

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
When functions are called, theirs name should reveal theirs implementation, there isn't necessary to review the code inside functions if the name is right.

Avoid use codes in names, developers need to review a lot of code written from other developers, add additional code in names only delay the work of developers, for example, a company Called "X" use de code A01254 to identify a class type that is related to the report's section of users and A01253 to save information from the report of user's profile, the company calls these classes *A01254-controller* and *A01253-controller* and to understand this code the company provides a dictionary to find the value of this codes, I think that would be better for understand call this classes as a *ReportUserController* and *ReportUserProfileController*.

In next articles we are going to see more samples about clean code, a book that I recommended is *"Clean Code: A handbook of Agile Software Craftsmanship"* of Robert C. Martin.

Goodbye!

<Disqus />