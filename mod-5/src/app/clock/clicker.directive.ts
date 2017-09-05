import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: "[appClicker]"
})
export class ClickerDirective implements OnInit, OnDestroy {
  private unregister;
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    // this.element.nativeElement.addEventListener("click", this.onClick);
    this.unregister = this.renderer.listen(this.element.nativeElement, 'click', this.onClick)
  }

    public ngOnDestroy(): void {
      // this.element.nativeElement.removeEventListener("click", this.onClick);
      this.unregister();
    }

  onClick = () => {
    // this.element.nativeElement.style.color= 'red';
    this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }
}
