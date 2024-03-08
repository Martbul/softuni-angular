import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]',
})
export class MyRouterLinkDirective implements OnInit {
  @Input() appMyRouterLink!: string;
  @Input() template!: TemplateRef<any>;

  unsubs: (() => void)[] = [];

  viewHasBeenCreated = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private vs: ViewContainerRef
  ) {
    // this.renderer.setAttribute(
    //   this.elementRef.nativeElement,
    //   'data-test',
    //   '123'
    // );

    this.unsubs.push(
      this.renderer.listen(
        this.elementRef.nativeElement,
        'mouseover',
        this.mouseOverHandler
      )
    );
  }

  ngOnInit(): void {
    console.log(this.appMyRouterLink, this.template);
  }

  mouseOverHandler = (e: MouseEvent) => {
    if (this.viewHasBeenCreated) {return} 
    this.vs.createEmbeddedView(this.template);
    this.viewHasBeenCreated = true;
  };
}
