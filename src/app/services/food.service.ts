import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from '../../data';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
   }

   getAllTag():Tag[]{
    return sample_tags
   }

   getAllFoodsByTag(tag:string):Food[]{
    if(tag==="All"){
     return  this.getAll();
    }else{
      return this.getAll().filter(food => food.tags?.includes(tag))
    }
    
   }
   getFoodById(foodId:string):Food{
    return this.getAll().find(food =>foodId === foodId) ?? new Food();
   }
}
