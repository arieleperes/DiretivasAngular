import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-description.component.html',
  styleUrl: './course-description.component.css'
})
export class CourseDescriptionComponent {

  courses: Course[]=[
    {id: 1, idCategory: 1, title: 'Java para iniciantes',description: 'Aprenda Java de forma fácil: váriaveis, constantes, funções, etc', cost: 100,
      image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg', duration: '10 meses'},
  ]
}
