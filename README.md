# vuejs

> A Vue.js project

```$xslt
<template>
  <ul v-if="items">
    <li v-for="item in items">
        {{item.title}}
        <NestedSetsItems v-if="item.subitems" :items="item.subitems"></NestedSetsItems>
    </li>
  </ul>
</template>
```

## Input parameters
<code>items</code> array of Object:
```$xslt
[
  {
    title: 'Сlothes',
    left: 1,
    right: 22
  },
  {
    title: 'For men',
    left: 2,
    right: 9
  },
  {
    title: 'For women',
    left: 10,
    right: 21
  },
  ...
]  
```

## Store format
Nested Sets

## Component HTML output

```
<ul>
  <li>Сlothes
    <ul>
      <li>For men
        <ul>
          <li>Suits
            <ul>
              <li>Pants</li>
              <li>Jackets</li>
            </ul>
          </li>
         </ul> 
      </li>
      <li>For women
        <ul>
          <li>Dresses
            <ul>
              <li>Evening</li>
              <li>Summer</li>
            </ul>
          </li>
          <li>Skirts</li>
          <li>Blouses</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

## Restrictions
- Component use only ES5
- inside only <code>ul</code> and <code>li</code> elements
- empty ul/li node removed
- Component don't fix missed parameters structure but throw exceptions

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the 
[Creating Reusable Components](https://codeburst.io/creating-reusable-components-with-vue-js-button-component-503167facfde) 
and 
[Recursive components](https://codeburst.io/recursive-components-2de24459d98).
