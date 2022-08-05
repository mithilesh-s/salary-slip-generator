import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  constructor() { }
  
  @Input('userInfo') userName!:string;
  @HostBinding('style.backgroundColor') bgColor:string
  @HostBinding('style.fontSize') fontSize:string
  @HostBinding('style.fontWeight') fontWeight:string
  @HostBinding('innerHTML') innerHTML:string
  @HostBinding('class') class:string
  
  ngOnInit(): void {
    this.bgColor='green'
    this.fontSize='18px'
    this.fontWeight='normal'
    this.innerHTML='Hello '+this.userName
    this.class='mt-5 border border-dark rounded px-5 py-3'
  }


  @HostListener('mouseover') onMouseOver(){
    this.bgColor='orange'
    this.fontSize='28px'
    this.fontWeight='bolder'
  }
  @HostListener('mouseout') onMouseOut(){
    this.bgColor='green'
    this.fontSize='18px'
    this.fontWeight='normal'
  }
}
