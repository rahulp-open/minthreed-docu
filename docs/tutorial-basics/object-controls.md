---
sidebar_position: 3
---

# Object Controls

Now lets take a look at the **ThreeDControls** module. **ThreeDControls** lets you control the objects in viewer in the 3d space.

## Initialize Controller

To use enable controls first your have to initialize a **ThreeDControls** instance.

```js
import {ThreeDControls} from "minthreed";
const controls = new ThreeDControls(viewer).

controls.enable(true);
```

The **ThreeDControls** contructor takes a **ThreeDViewer** instance as a parameter (refer [All about Scenes](/docs/tutorial-basics/viewer-scene.md)) and applies the controls to the group in the viewer. By default the `orbitcontrols` are set to false, to enable it use `ThreeDControls.enable()` and set it to `true` like above.

:::danger Note
Controls gets applied to the group and not induvidual objects. It treats every object in the viewer as a single object.
This will get improved in the future viersions of minthreed.
:::

## Utils

* `ThreeDControls.enable(value : boolean)` - To enable or disable orbit controls. By default while initialization orbit controls is disabled.
* `ThreeDControls.reset()` -  Resets the objects in the scene. 
* `ThreeDControls.enableZoom(value: boolean)` - Enables zoom functionalities. 
* `ThreeDControls.enablePan(value: boolean)` - Enables pan.
* `ThreeDControls.rotationcontrols(x:number, y:number, z:number)` - Sets (x,y,z) rotation of the object.

## Locking Axes

* `ThreeDControls.dragOnY()` - Locks the rotation of object to only Y axis.
* `ThreeDControls.dragOnX()` - Locks the rotation of object to only X axis.


## Extra

* `ThreeDControls.incOnY(value: boolean)` - Increments rotation on Y axis of the object.
* `ThreeDControls.incOnX(value: boolean)` - Increments rotation on X axis of the object.

