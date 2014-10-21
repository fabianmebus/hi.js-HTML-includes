# hi.js - HTML includes

**hi.js** - (h)tml (i)ncludes, is a little snippet of JavaScript that uses HTML `imports` ([w3c spec](http://www.w3.org/TR/html-imports/)) 
to provide an *include* functionality in HTML. Basically, you will be able to include and reuse HTML documents in other HTML documents.

## When to use it and when NOT to

From my point of view **hi.js** is a fast and easy way to get an *include* functionality in HTML. 
Because of the [browser support](#supported-browsers) (at the moment) and front end performance concerns, for me it is more a 
tool for prototyping than to use it in production. [*Static site generators*](http://staticsitegenerators.net) or *server side scripting* will be
a better way to get a *include* functionality for your project in production.

## How to use it

First include the **hi.js** file somewhere in your HTML document, like this:

```html
<script async src="path/to/hi.js"></script>
```

Now you are ready to include other HTML documents. Just use the HTML attribute `data-hi-href` with, for instance, a `div` element 
to reference the HTML file you want to include. Place this `<div data-hi-href="path/to/your/includes/file-to-be-included.html"></div>`
in you HTML wherever you want to include *the other* HTML.

Example:

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Example - hi.js - (h)tml (i)ncludes</title>  
  </head>
  <body>
    <h1>hi.js - (h)tml (i)ncludes</h1>
    
    <div data-hi-href="header.html"></div>
    
    <p>some content</p>
    <p>some more content</p>
    
    <script async src="hi.js"></script>
  </body>
</html>
```

**header.html**

```html
<header>
  <h1>This is my <em>included</em> header</h1>
</header>
```

**Result**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Example - hi.js - (h)tml (i)ncludes</title>

    <link rel="import" href="header.html">

  </head>
  <body>
    <h1>hi.js - (h)tml (i)ncludes</h1>
    
    <header>
      <h1>This is my <em>included</em> header</h1>
    </header>
    
    <p>some content</p>
    <p>some more content</p>
    
    <script async src="hi.js"></script>
  </body>
</html>
```

**[Demo page](https://github.com/fabianmebus/...)** 

## Supported Browsers

HTML `imports` ([w3c spec](http://www.w3.org/TR/html-imports/)) are the key technology for **hi.js**. 
Thereby HTML `imports` are drawing the baseline for the supported browsers. According to [caniuse.com](http://caniuse.com/#search=imports) 
HTML `imports` are or will be supported by the following browsers:

* Chrome since version 36
* Chrome for Android version 38
* Opera since version 23
* Opera Mobile since version 24
* Firefox as of version 35 (since version 32 it can be enabled through the "dom.webcomponents.enabled" preference in about:config)

## License

It's all yours under [MIT](https://github.com/fabianmebus/hi.js-HTML-includes/blob/master/LICENSE.md).

## Thanks

Thanks to [Kevin Busse](https://github.com/KevinBusse) for reviewing!