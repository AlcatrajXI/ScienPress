import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferencesComponent } from './conferences.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ConferencesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ConferencesComponent }])
  ]
})
export class ConferencesModule { }
