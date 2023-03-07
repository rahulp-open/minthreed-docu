---
sidebar_position: 1
---

# All about Scenes

Start by importing **ThreeDViewer** class to create a viewer. 

Constructor - **ThreeDViewer(fov,res,out,campos)** 

- `fov` - Field of view of camera.
- `res` → `{width: number, height: number}` - Resolution of camera and renderer.
- `out` - Output HTMLElement.
- `campos` - Z axis position of Perspective camera (Default is 1400).

## Initializing the scene

After importing the **minthreed** library

```js
import {ThreeDViewer} from "minthreed";
const canvas = document.querySelector(".canvas") as HTMLElement;

const viewer = new ThreeDViewer(70, {width:canvas.clientWidth, height:canvas.clientHeight}, canvas);
```
Here `canvas` is the output element. `fov` value is similar to zoom in mm value of an actual camera so when the value changes the perspective will change like in a camera. Ideal values are 35-75. 
`res` can be set to `clientWidth` and `clientHeight` to get better results or you can have a fixed size by passing constant values.
You can tweak the `campos` inorder to adjust the camera position on initialization or you can set it to default and later use `setCamera` to change camera position.

Now check out [Viewer Objects](/docs/tutorial-basics/viewer-objects.md) to add objects to the scene.

:::danger Take care

Make sure the HTMLElement is properly linked otherwise the it will cause errors.

:::

:::tip My tip

Use a `div` element as output element and try use the element's `clientWidth` and `clientHeight` for initializing viewer.

:::

## Resolution Factor

Resolution set while initializing the viewer `{width: number , height: number}` is used to set size of renderer and set resolution of perspective camera. 
The resultion of camera and rendere size can be overridden with `ThreeDViewer.setResolution()` and `ThreeDViewer.setRendererSize()`.

```js
viewer.setResolution({width: 500, height:500});
viewer.setRendererSize({widht:800, height:800});
```

## Camera position 

The viewer model works on the CSS3DRendere as of now and takes SVG Elements in different formats as its objects. 
So inorder to prevent overflow due to the size of svg the default **Z axis** position of camera is 1400.
The camera position can be overriden using `ThreeDViewer.setCamera()` and `ThreeDViewer.setCameraPos()`.
- `setCamera(z:number)` - Lets you set the z axis postion of camera.
- `setCameraPos(x:number,y:number,z:number)` - Lets you set the (x,y,z) positons of camera.  

```js
viewer.setCamera(2000);
viewer.setCameraPos(100,100,200);
```

## Start the Scene

After adding the objects (refer [Viewer Objects](/docs/tutorial-basics/viewer-objects)) to render the output we have to start the animation. Run `ThreeDViewer.start()` to render the scene.

```js
viewer.start();
```

### Responsive Viewer 

minthreed lets you create responsive elements without any extra code. Based on the change in size of window the renderer will get updated.
To enable this run `ThreeDViewer.start()` with true as parameter.

```js
viewer.start(true);
```
