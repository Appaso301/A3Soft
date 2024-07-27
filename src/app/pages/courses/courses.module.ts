import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { JavaComponent } from './java/java.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';


@NgModule({
  declarations: [JavaComponent, SpringBootComponent, AngularComponent, ReactComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
