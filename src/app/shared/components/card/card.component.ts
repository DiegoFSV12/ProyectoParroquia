import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  public imgSrc:string='';
  @Input()
  public title:string='';
  @Input()
  public description:string='';
  @Input()
  public link:string='';
}
