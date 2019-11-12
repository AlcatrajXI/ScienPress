import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusComponent } from './focus.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FocusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FocusComponent }])
  ]
})
export class FocusModule { }
