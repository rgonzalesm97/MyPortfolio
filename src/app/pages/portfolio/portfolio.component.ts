import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  image1: boolean = true;
  image2: boolean = true;
  image3: boolean = true;

  constructor(
    private render: Renderer2
  ) { }

  /* @ViewChild('image1') image1!:ElementRef; */

  ngOnInit(): void {
  }

  /* setGif1(){
    this.render.setAttribute(this.image1.nativeElement, 'src', '../../../assets/MarsWind.gif');
    
  } */


}
