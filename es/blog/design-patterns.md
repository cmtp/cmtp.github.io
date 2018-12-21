---
title: Patrones de diseño
date: 2018-12-04
author: Christian Tola
description:
    En el año 1995 se publico el libro "Design Patterns - Elements of Reusable Object Oriented Software" que se ha convertido los patrones de diseño en una de las partes fundamentales dentro del desarrollo.
tags: [Design Patterns, patterns, Architecture]
---

# Patrones de Diseño

## Que son?

Los Patrones de diseño *(Design patterns en ingles)* son soluciones a problemas de diseño recurrentes que ocurren en la programación, al ser recurrentes estos problemas, un desarrollador podría encontrar diferentes maneras de abordar el problema llegando a diferentes soluciones, algunas mas optimas que otras.

En el año 1995 se publico el libro *"Design Patterns - Elements of Reusable Object Oriented Software"* publicado por el **"Gang of Four"** *(la banda de los cuatro)*, nombre con el que se conoce a los autores del libro. **Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides**. Este es el libro de referencia en cuanto a patrones de diseño.

Los patrones de diseño son soluciones ya conocidas y probadas cuyo diseño proviene de la experiencia del programador, no tienen un marco teórico, están basados en las buenas practicas de la programación orientada a objetos.

## Catálogo de Patrones de diseño

Según la clasificación del *"GoF"* los patrones de diseño están divididos en los siguientes grupos:

| Patrones de Construcción | Patrones de Estructuración | Patrones de Comportamiento |
| ------------------------ |:--------------------------:| --------------------------:|
| Abstract Factory         | Adapter                    | Chain of Responsibility    |
| Builder                  | Bridge                     | Command                    |
| Factory Method           | Composite                  | Interpreter                |
| Prototype                | Decorator                  | Iterator                   |
| Singleton                | Facade                     | Mediator                   |
|                          | Flyweight                  | Memento                    |
|                          | Proxy                      | Observer                   |
|                          |                            | State                      |
|                          |                            | Strategy                   |
|                          |                            | Template Method            |
|                          |                            | Visitor                    |

### Patrones de Construcción

Los patrones de construcción tienen como objetivo organizar la creación de objetos.

#### Abstract Factory

Tiene como objetivo la creación de objetos reagrupados en familias sin tener que conocer las clases concretas destinadas a la creación de estos objetos.

#### Builder

Permite separar la creación de objetos complejos de su implementación de modo que un cliente pueda crear estos objetos complejos con implementaciones diferentes

#### Factory Method

Tiene como objetivo presentar un método abstracto para la creación de un objeto reportando a las subclases concretas la creación efectiva

#### Prototype

Permite crear nuevos objetos por duplicación de objetos existentes llamados prototipos que disponen de la capacidad de colación.

#### Singleton

Permite asegurar que de una clase concreta exista una única instancia y proporciona un método único que la devuelve.

### Patrones de Estructuración

Facilitan la organización de la jerarquía de clases y de sus relaciones.

#### Adapter

Tiene como objetivo convertir la interfaz de una clase existente en la interfaz esperada por los clientes también existentes para que puedan trabajar de forma conjunta.

#### Bridge

Tiene como objetivo separar los aspectos conceptuales de una jerarquía de clases de su implementación.

#### Composite

Proporciona un marco de diseño de una composición de objetos con una profundidad de composición variable, basándose en el diseño de un árbol.