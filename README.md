phonegap-screenshot-example
===========================

##### An example of auto-generating screenshots from a url with grunt

This application takes screenshots at device orientations and sizes and save the output to the shots directory. This uses the [grunt autoshot]() plugin.

Installation
============

To install this example you need to ensure you have [node](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed. I have a quick [introduction to node and npm](http://crowdhailer.tumblr.com/post/84311910118/starting-with-node-js-and-npm) if you have not yet started with these.

Clone this repo and change directory into it

```
git clone 

cd phonegap-screenshot-example
```

Make sure that you have the grunt command line tool installed, skip this step if you have it already

```
npm install -g grunt-cli
```

Install dependencies from npm

```
npm install
```

Usage
=====

See grunt autoshot documentation for options. To capture images run the autoshot grunt task. Here it is also the default grunt task.

```
grunt 
//or
grunt autoshot:mine
```

NOTE
====
This plugin has default values for taking screenshots of both local and remote pages. To take only remote shots you need to overwrite the local configurations. 

```js
    local: {
        files: []
    },
```