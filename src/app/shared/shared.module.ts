import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardTextComponent } from './components/card-text/card-text.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    CardTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    CardTextComponent
  ]
})
export class SharedModule { }
