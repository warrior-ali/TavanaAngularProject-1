import { NgModule } from '@angular/core';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[SignInComponent],
    imports:[
        CommonModule,
        SharedModule
    ],
    exports:[
        SignInComponent
    ],
    providers:[]
})

export class AuthModule{}