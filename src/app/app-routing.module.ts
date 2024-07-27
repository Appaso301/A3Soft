import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JavaComponent } from './pages/courses/java/java.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SpringBootComponent } from './pages/courses/spring-boot/spring-boot.component';
import { AngularComponent } from './pages/courses/angular/angular.component';
import { ReactComponent } from './pages/courses/react/react.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'java', component: JavaComponent },
  { path: 'springBoot', component: SpringBootComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'react', component: ReactComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
