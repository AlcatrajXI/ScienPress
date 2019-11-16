import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusComponent } from './focus.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [FocusComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: FocusComponent }])
  ]
})
export class FocusModule { }
