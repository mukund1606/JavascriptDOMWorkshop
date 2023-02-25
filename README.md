# DOM Manipulation using JavaScript

## What is DOM?

DOM stands for Document Object Model. It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

## History of DOM

The DOM was first introduced in 1998. It was originally designed by Netscape. It was later standardized by the World Wide Web Consortium (W3C) in 1998. The DOM is a cross-platform and language-independent convention. It is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

## What is DOM Manipulation?

DOM manipulation is a technique to change the structure, style, or content of a document by using a scripting language such as JavaScript. It is a cross-platform and language-independent convention. It is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

## What is DOM Tree?

The DOM tree is a representation of the HTML document in the form of a tree structure. Each node in the tree is an object representing a part of the document. The DOM tree is used to connect web pages to scripts like JavaScript.

## DOM Tree Example

![DOM Tree Example](https://www.freecodecamp.org/news/content/images/2022/06/DOM-tree.png)

## Nodes vs Elements

Nodes are the objects in the DOM tree. They can be of different types

Elements are the nodes that represent HTML elements. They are the most common type of nodes.

There are many other types of nodes such as text nodes, comment nodes, and document nodes.

## Relationship between Nodes and Elements

![Relationship between Nodes and Elements](https://www.w3schools.com/xml/navigate.gif)

The nodes in the DOM tree have a hierarchical relationship with each other in the DOM tree. They are defined by their position relative to each other in the DOM tree.

These are the node positions present in the DOM tree illustration above:

- Root node - The root node is the topmost node in the DOM tree. It is the parent of all other nodes in the DOM tree. `html` is the root node in the DOM tree.
- Child node - A child node is a node that is a direct child of another node. `head` and `body` are the child nodes of the `html` node.
- Descendant node - A descendant node is a node that is a child, grandchild, great-grandchild, and so on of another node. `title` is the descendant node of the `html` node.
- Parent node - A parent node is a node that is the direct parent of another node. `html` is the parent node of the `head` and `body` nodes.
- Sibling node - A sibling node is a node that has the same parent as another node. `head` and `body` are the sibling nodes of the `html` node.
- Ancestor node - An ancestor node is a node that is a parent, grandparent, great-grandparent, and so on of another node. `html` is the ancestor node of the `title` node.

## How to Manipulate DOM?

There are many ways to manipulate the DOM. Some of them are:

1. Using JavaScript
2. Using jQuery
3. Using AngularJS
4. Using ReactJS
5. Using VueJS

   and many more...

## Methods to Manipulate DOM using JavaScript

There are many methods to manipulate the DOM using JavaScript. Some of them are:

- createElement()
- createTextNode()
- appendChild()
- getElementById()
- getElementsByClassName()
- getElementsByTagName()
- querySelector()
- querySelectorAll()
- setAttribute()
- removeAttribute()
- contains()
- hasChildNodes()

## DOM Events

### What is an Event?

An event is something that happens to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.

### DOM Events Example

- click - A click is when the user clicks an HTML element

- mouseover - A mouseover occurs when the user moves the mouse over an HTML element

- dblclick - A dblclick occurs when the user double-clicks on an HTML element

- keypress - A keypress occurs when the user presses a key

- submit - A submit occurs when the user submits an HTML form

- load - A load occurs when the user loads the page

## DOM Event Listeners

### What is an Event Listener?

An event listener is a procedure or function in a computer program that waits for an event to occur. It is a type of callback function, since it is called when a specific event has been triggered.

### DOM Event Listener Example

```js
document
  .getElementById("myBtn")
  .addEventListener("click", () => console.log("Hello World"));
```
