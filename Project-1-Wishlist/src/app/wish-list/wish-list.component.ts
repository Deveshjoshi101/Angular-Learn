import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { wishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishes: wishItem[] = [];
  toggleItem(item: wishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
