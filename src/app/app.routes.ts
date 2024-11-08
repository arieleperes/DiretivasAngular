import { Routes } from '@angular/router';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseComponent } from './course/course.component';
import { NewComponent } from './category-bar/new/new.component';

export const routes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'course-description', component: CourseDescriptionComponent },
  //defino uma nova rota para cursos, onde id é o identificador do parâmetro que
  //será enviado pela url
  { path: 'course/:id', component: CourseComponent },
  {path:'category/new', component: NewComponent},
];
