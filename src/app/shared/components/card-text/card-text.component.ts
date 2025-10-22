import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-text',
  standalone: false,
  templateUrl: './card-text.component.html',
  styleUrl: './card-text.component.css'
})
export class CardTextComponent {
  @Input()
  public iconClass:string='';
  @Input()
  public title:string='';
  @Input()
  public days:string='';
  @Input()
  public dates:string='';
  @Input()
  public days2:string='';
  @Input()
  public dates2:string='';
}
