+++
date = "2015-01-23T06:38:26Z"
description = "towards more frontend skills"
tags = ["js"]
title = "learning react"

+++

## fb's [getting started tutorial](http://facebook.github.io/react/docs/getting-started.html)

React templates can be 'compiled' client- or server-side.
When running client-side, you include this JSXTransformer code that converts your JSX (XML syntax inside js) into vanilla js.
There is some weirdness -- the XML is like your typical html tags but with some adjustments to work around reserved js keywords.
Maybe the more appealing thing is to use react server-side:

```shell
$ sudo apt-get install npm
$ sudo npm install -g react-tools
$ sudo ln -s /usr/bin/nodejs /usr/bin/node
$ jsx --watch src/ build/
```

Now files in src are built into vanilla js, which can just be included in your website.


## react's [comment box tutorial](http://facebook.github.io/react/docs/tutorial.html)

Could of course write vanilla js with react, but let’s try JSX..
React has builtin xss protection, it says so we’re not quite just rendering strings.
I added two vim plugins: [pangloss/vim-javascript](http://github.com/pangloss/vim-javascript)
and [mxw/vim-jsx](http://github.com/mxw/vim-jsx), btw,
With `let g:jsx_ext_required = 0` in my vimrc so jsx is rendered in js file.

Composition of components is nice:

```js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
```

You can pass data to child components -- this passed data is called ‘props.’
So the comment becomes:

```js
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});
```

We get the actual text via `this.props.children` -- note that the comment text is “an XML-like child node."

For client-side markdown rendering, we skip the xss protection with `dangerouslySetInnerHTML`.
Components can define a `getInitialState` method that will execute once during the component’s lifecycle.
You can also specify `componentDidMount` which is called when the component is rendered.
Changing the state with `setState` will trigger a re-render.

You setup your own system to get new data (websockets, polling, etc).
Use the `ref` attribute to assign a name to a child component, and then access the refs with `this.refs`.
Pass data to a parent node by attaching a callback to a prop and binding to an event
(eh, this is kinda convoluted -- see the `handleCommentSubmit` bits of code in the tutorial).

Note the little `bind(this)` appends to the ajax calls.
It’s the new alternative to caching `this` ala `var that = this;`.
An [article](http://www.smashingmagazine.com/2014/01/23/understanding-javascript-function-prototype-bind) on the subject.


## the [material dropdown](http://www.syncano.com/getting-started-reactjs-tutorial/) tutorial

Note that this sets props name and key, which makes sense..they are HTML / XML properties, nothing special with the naming there:

```js
return (<DropdownItem name={item} key={index} />);
```

This tutorial notes that state is mutable while properties are not, or that’s how you should treat it.
So `visibility` of the menu is a state as it changes when the dropdown is shown/hidden.
But the name of a menu item, that’s a property.

Interesting that we’re using react for an animation state change.
And managing svg icons, that’s cool too.
The end demo is pretty broken and outdated, but it’s good to just type this stuff, I think.

Also of note:

* a [react chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* on [react vs polymer](http://programmers.stackexchange.com/questions/225400)
(polymer being an implementation of the web components standard)
* another possibly interesting tutorial on [flux and react](https://www.codementor.io/reactjs/tutorial/react-js-flux-architecture-tutorial)
