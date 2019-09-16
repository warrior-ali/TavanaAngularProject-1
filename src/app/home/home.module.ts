import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BodyComponent } from './components/body/body.component';
import { HomeService } from './shared/service/home.service';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
    declarations:[FooterComponent, HeaderComponent, NavbarComponent, AboutUsComponent, BodyComponent, CategoriesComponent],
    imports:[
        CommonModule,
        SharedModule
    ],
    exports:[
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
        AboutUsComponent,
        BodyComponent,
        CategoriesComponent
    ],
    providers:[HomeService]
})
export class HomeModule{}