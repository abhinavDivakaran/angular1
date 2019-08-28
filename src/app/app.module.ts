import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';


const appRoutes:Routes=[
  {path:'',component:ContactUsComponent},
  {path:'view',component: ViewComponent },
  {path:'search',component:SearchComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactUsComponent,
    ViewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent ]
})
export class AppModule { }
