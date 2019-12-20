---
title: Progressive Development with Vue.js
layout: PostLayout
date: 2019-05-09
author: Christian Tola
description:
    Vue.js is a Javascript Framework for Single Page Applications that allows to create user interfaces.
tags: [vue]
type: vue
meta:
#  facebook metadata
  # - property: fb:app_id
  #   content: 
  - property: og:url
    content: https://christiantola.me/en/blog/start-with-vue.html
  - property: og:type
    content: article
  - property: og:title
    content: Progressive Development with Vue.js
  - property: og:description
    content: Vue.js is a Javascript Framework for Single Page Applications....
  - property: og:image
    content: https://christiantola.me/images/banners/BannerTemplateVue.jpg
  - property: og:site_name
    content: christiantola.me
  - property: article:author
    content: https://www.facebook.com/ctola01/
# twitter
  - name: twitter:card
    content: summary
  - name: twitter:site
    content: '@ctola91'
  - name: twitter:title
    content: Progressive Development with Vue.js
  - name: twitter:description
    content: Vue.js is a Javascript Framework for Single Page Applications....
  - name: twitter:image
    content: https://christiantola.me/images/banners/BannerTemplateVue.jpg
---

# Progressive Development with Vue.js
<Info />

<Banner alt="start with vue"/>

Vue.js is a Javascript Framework for User Interface Development, it allows to create from small apps to more structured and complex big applications.

## Installation

You can use Vue.js from a CDN to add vue inside any page or application, if yoy use ES6(ECMAScript 6), you can import vuejs as a module.

```html
<html>
    <head>
        <!-- ... -->
    </head>
    <body>
        <!-- ... -->

        <!-- Version de desarrollo, incluye ayuda y alertas en la consola -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <!-- o -->
        <!-- version de produccion optimizada -->
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    </body>
</html>
```

```js
// ES6
import Vue from 'import Vue from https://cdn.jsdelivr.net/npm/vue';
```

## Getting Started

To getting started with Vue, We are going to create a div with an id that we will connect our vue app inside our html.

```html
<div id="app"></div>

<script src="index.js"></script>
```
In our *index.js* we import Vue library and create a new Vue instance associated to id **app** of our html, this sample is written in ES6.
```js
import Vue from "https://cdn.jsdelivr.net/npm/vue";

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
The Object Vue has the properties *el*, that is the html element that would have the vue instance, and *data* the place where we put the data elements of this instance, in this case we have the variable *message* with the value **Hello Vue!**, finally we add between curly brackets the message that we want to show.

```html
<div id="app">
    {{ message }}
</div>
```
This is a sample running on [Stackblitz](https://stackblitz.com).

<LiveCode url="https://stackblitz.com/edit/vue-hello?embed=1&file=index.js" />

## Data Binding

Data Binding is the process that allows to sync the data between the model and the view.

Vue has the directive **v-model**, that allow to use data binding in our application, we can associate an element in the model with its value on the view.

```html
<div id="app">
    <input type="text" v-model="name"/>
    <p>Hello {{ name }}!</p>
</div>
```

```js
import Vue from "https://cdn.jsdelivr.net/npm/vue";

let app = new Vue({
  el: '#app',
  data: {
    name: 'Vue'
  }
})
```

if we modify the value on textfield, the text would be updated.

<LiveCode url="https://stackblitz.com/edit/vue-model?embed=1&file=index.js" />

## Directives

Vue use many directives inside our html code.

### v-if

The directive **v-if** allows to render a component if a his condition is true. It is very useful to add o remove elements DOM elements inside our application.

```html
<div id="app">
  <button @click="toogleUser">{{ view ? 'Hide': 'Show'}} user</button>
  <div>
    <div v-if="view">
      <h3>{{user.name}}</h3>
      <span>{{user.lastName}}</span>
      <p>{{user.description}}</p>
    </div>
    <div v-if="!view">
      <p>User not available.</p>
    </div>
  </div>
</div>
```

```js
import Vue from "https://cdn.jsdelivr.net/npm/vue";

let app = new Vue({
  el: '#app',
  data: {
    user: {
      name: 'Juan',
      lastName: 'Pérez',
      description: 'This is a description.'
    },
    view: true
  },
  methods: {
    toogleUser: function () {
      this.view = !this.view;
    }
  }
})
```
**v-if** verify that its value is true or false, if it is true, the content is added to DOM.

The directive **@click** handle the event when the user click on the button, this event call the method *toogleUser* that update the value of view variable, this is defined inside of the property *methods*. This would be reviewed in next posts.

<LiveCode url="https://stackblitz.com/edit/vue-conditional?embed=1&file=index.html" />

### v-for

**v-for** allows to render an array of elements that we have defined inside our vue instance.

```html
<div id="app">
  <div>
    <div v-for="user in users">
      <h3>{{user.name}}</h3>
      <span>{{user.lastName}}</span>
      <p>{{user.description}}</p>
    </div>
  </div>
</div>
```

```js
import Vue from "https://cdn.jsdelivr.net/npm/vue";

let app = new Vue({
  el: '#app',
  data: {
    users: [
      {
        name: 'Juan',
        lastName: 'Pérez',
        description: 'This is a description.'
      },
      {
        name: 'Christian',
        lastName: 'Tola',
        description: 'This is my description'
      },
      {
        name: 'John',
        lastName: 'Smith',
        description: 'I am a description'
      }
    ]
  }
});
```

This would be very helpful when we would need to show a list, a table, etc.

<LiveCode url="https://stackblitz.com/edit/vue-for?embed=1&file=index.html"/>

In Next post we are going to review the events, methods and computed properties in vue.

Regards.

**Share in you=r Social Networks!**
<SocialButtons />

<Disqus />