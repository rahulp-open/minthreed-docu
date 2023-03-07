---
sidebar_position: 1
---

# MinthreeD with Angular


## Using @ViewChild()

```HTML title=template.html
<div #canvas>
    
</div>
```

```ts title=component.ts
export class ViewerComponent {
  @ViewChild('canvas') div;

  ngAfterViewInit() {
    
    const viewer = new ThreeDViewer(70,{width:700,height:700},this.div.nativeElement);
    
    viewer.start(true);
    viewer.addObj({name:"sample",type:"str",data: fileurl });

    const controls = new ThreeDControls(viewer);
    controls.enable(true);
    
  }
}
```