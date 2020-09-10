import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'study-notes-front-end';
  innerWidth;
  isCollapsed = false;

  constructor(private sideNav: ElementRef, private content: ElementRef){

  }

  Collapsed(){
    console.log(this.isCollapsed);
  }

  closeSideBar(){
    this.isCollapsed = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth < 768){
      this.isCollapsed = true;
      this.fixSideNav(1);
    }
    else{
      this.isCollapsed = false;
      this.fixSideNav(0);
    }
    console.log(this.isCollapsed);
  }

  fixSideNav(fixed: number){
    let nav = this.sideNav.nativeElement.querySelector(`#nav`);
    let content = this.sideNav.nativeElement.querySelector(`#content`);

    if(fixed === 0){
      nav.style.position = "unset";
      content.style.margin= "0 0 0 0";
    }
    else{
      nav.style.position = "fixed";
      content.style.margin= "0 0 0 36px";
    }
  }


  ngOnInit(): void{
    this.onResize();
  }
}
