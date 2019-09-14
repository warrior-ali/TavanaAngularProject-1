import { NgModule } from '@angular/core';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[SignInComponent,SignUpComponent],
    imports:[
        CommonModule,
        SharedModule
    ],
    exports:[
        SignInComponent,
        SignUpComponent
    ],
    providers:[]
})

export class AuthModule{}