import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent implements OnInit {
   categories: any=[];
  constructor(private categoryService: CategoryService){}
  ngOnInit():void{
    this.categoryService.getList().subscribe({
      next: (response: any)=>{
        this.categories = response.categories;
      },
      error: (err: any) =>{
      }
    })


  }


}
