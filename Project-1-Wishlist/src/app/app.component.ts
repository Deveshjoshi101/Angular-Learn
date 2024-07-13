import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: wishItem[] = [
    new wishItem('$100,000,000,000,000', true),
    new wishItem('Learn Angular', true),
    new wishItem('Build an app', true),
    new wishItem('Share my knowledge', true),
    new wishItem('Try out new hobbies', true),
    new wishItem('Become a freelancer', true),
    new wishItem('Eat healthy', true),
    new wishItem('Have fun', true),
    new wishItem('Take care of myself', true),
    new wishItem('Travel', true),
    new wishItem('Be kind to others', true),
    new wishItem('Surround yourself with people who make you happy', true),
    new wishItem('Learn about history', true),
    new wishItem('Get certified in a new skill', true),
    new wishItem('Practice mindfulness', true),
    new wishItem('Start meditation', true),
    new wishItem('Be a better at connecting with others', true),
    new wishItem('Be a better cook', true),
    new wishItem('Be a better at baking', true),
    new wishItem('Eat Junk food'),
  ];

  title = 'my wishlist';
  newWishText = '';
  listFilter: string = '';
  visibleItems: wishItem[] = this.items;

  addNewWish() {
    this.items.push(new wishItem(this.newWishText));
  }

  filterChanged(value: any) {
    if (value === '0') {
      this.visibleItems = this.items;
    } else if (value === '1') {
      this.visibleItems = this.items.filter((item) => item.isComplete);
    } else {
      this.visibleItems = this.items.filter((item) => !item.isComplete);
    }
  }

  toggleItem(item: wishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
