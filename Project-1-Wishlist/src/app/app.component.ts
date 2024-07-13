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
    // new wishItem('$100,000,000,000,000', true),
    // new wishItem('Learn Angular', true),
    // new wishItem('Build an app', true),
    // new wishItem('Share my knowledge', true),
    // new wishItem('Try out new hobbies', true),
  ];

  title = 'my wishlist';
  newWishText = '';
  listFilter: string = '';

  addNewWish() {
    this.items.push(new wishItem(this.newWishText));
  }

  get visibleItems(): wishItem[] {
    let value = this.listFilter;

    if (value === '0') {
      return this.items;
    } else if (value === '1') {
      return this.items.filter((item) => item.isComplete);
    } else {
      return this.items.filter((item) => !item.isComplete);
    }
  }

  // filterChanged(value: any) {
  //   if (value === '0') {
  //     this.visibleItems = this.items;
  //   } else if (value === '1') {
  //     this.visibleItems = this.items.filter((item) => item.isComplete);
  //   } else {
  //     this.visibleItems = this.items.filter((item) => !item.isComplete);
  //   }
  // }

  toggleItem(item: wishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
