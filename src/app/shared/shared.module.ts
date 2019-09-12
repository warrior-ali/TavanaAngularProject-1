import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/shared/material.module';
import { HomeService } from '../home/shared/service/home.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule
  ],
  providers:[HomeService]
})
export class SharedModule { }
