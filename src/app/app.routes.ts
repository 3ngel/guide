import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    // {path: '**', redirectTo: 'home'},
    {path: 'home', component: HomePageComponent},
    {path: 'guide', component: PersonalPageComponent}
];
@NgModule({
    imports:[
        RouterModule.forRoot(routes),
    ],
    exports:[RouterModule],
})
export class AppRoutingModule{}
