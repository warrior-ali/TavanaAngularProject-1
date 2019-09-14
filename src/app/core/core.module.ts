import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { AuthModule } from '../Authentication/auth.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    AuthModule
  ],
  exports:[
    HomeModule,
    AuthModule
  ]
})
export class CoreModule { }
