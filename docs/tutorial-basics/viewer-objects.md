---
sidebar_position: 2
---

# Viewer Objects

ThreeDViewer lets you create **CSS3DObjects** by taking SVG data in the form of string or url. As of the latetst version of **minthreed** ThreeDViewer takes only SVG data as input, this will improved and refined in the later versions of **minthreed**. ThreeDViewer runs on **CSS3DRenderer** so every object in the scene will be translated to **CSS3DObjects**.

## Adding Objects

`ThreeDViewer.addObj()` lets you add objects to the `ThreeDViewer` Scene. We can pass the object data as string or as URL to the file. `addObj()` takes an object as input of the type `{name: string, type: 'str'|'url', data: string, position:{x: number, y: number}, invert: boolean}`.
- `name` - name of the object (default is "sample").
- `type` - "url" or "str".
- `data` - File path or Object string.
- `position` - {x,y,z} positon of object.(Default is {0,0,0}).
- `invert` - Takes a boolean value, wether to invert the object or not.(Default is false).

```js
viewer.addObj({name:"sample",type:"url",data:"box.svg",position:{x:1,y:1,z:2},invert:false})
```

Refer [All about Scenes](/docs/tutorial-basics/viewer-scene.md) before adding objects.

## Viewer Object Model

Every object that is added to the scene first gets added to a ThreeJs Group. When the `ThreeDViewer.start()` function is called the group gets added the the scene, because of this the object controls gets applied to the group and not the induvidual object. This feature will be updated in later versions. `ThreeDViewer.summary()` returns summary of the scene and logs it.

```js
viewer.summary()
```

## Remove Object

`ThreeDViewer.removeObj()` takes the name of the object as input and removes it from the `ThreeDViewer.group`.

```js
viewer.removeObj("sample");
```
