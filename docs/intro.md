---
sidebar_position: 1
---

# Introduction

Let's discover **minThreeD in less than 5 minutes**.

## Getting Started

Get started by **creating a HTML Page**.

Or **try cloning our demo repository** with **[demo.minThreeD](https://docusaurus.new)**.

### What you'll need

- [minThreeD](https://nodejs.org/en/download/) version 1.0.2 or above:
  - Download from above and import it.

## Generate a new scene

Generate a new minThreeD scene with the **ThreeDViewer** instance.
Import ThreeDViewer Class from minThreeD.js
```bash
import {ThreeDViewer} from "minthreed";
```

The following lines will let you start a demo scene in minThreeD:

```js
//Output HTMLElement
const canvas = document.querySelector(".canvas") as HTMLElement;

const viewer = new ThreeDViewer(70, {width:canvas.clientWidth, height:canvas.clientHeight}, canvas);

viewer.addObj({name:"sample",type:"url", data:"box.svg"});
viewer.start(true);
```
`ThreeDViewer` is a class that lets the user create a scene and render it out to a particular HTMLElement.
The `addObj` is used to add objects to scene.
The `start` function runs the scene and if its called with `true` the autoresize is enabled. You can read more about them in the later modules.

## Make it 3D

Add the `ThreeDControls` instance:

```js
import {ThreeDControls} from "minthreed";
const controls = new ThreeDControls(viewer);
controls.enable(true);
```
After generating the scene, try out the following code to make the object 3D. You can freely rotate, pan and zoom the object.
`ThreeDControls` Class lets you add controls to the objects in the `viewer`. More on it on the way.