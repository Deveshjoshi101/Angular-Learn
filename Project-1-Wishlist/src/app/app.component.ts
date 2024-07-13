import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: wishItem) => item,
  (item: wishItem) => item.isComplete,
  (item: wishItem) => !item.isComplete,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: wishItem[] = [
    new wishItem('Learn Angular'),
    new wishItem('Get Coffee', true),
    new wishItem('Find grass that cuts itself'),
  ];

  listFilter: any = '0';

  newWishText: string = '';

  title: string = 'wishlist';

  get visibleItems(): wishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }

  addNewWish() {
    this.items.push(new wishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item: wishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
