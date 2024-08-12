import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgFor} from '@angular/common';
import { StarRatingModule,StarRatingConfigService } from 'angular-star-rating';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgFor, StarRatingModule, CommonModule, SearchComponent, TagsComponent],
  providers:[StarRatingConfigService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
foods:Food[] =[];
constructor(private foodService:FoodService,activatedRoute:ActivatedRoute){
  activatedRoute.params.subscribe((params)=>{
    if(params['searchTerm']){
      this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
    }
    else if(params['tag']){
      this.foods = this.foodService.getAllFoodsByTag(params['tag']); 
    }
    else{
      this.foods = foodService.getAll();
    }
      
  })
  
}
ngOnInit(): void {
  
}
}
