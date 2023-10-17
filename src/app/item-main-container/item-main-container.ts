import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-main-container',
  templateUrl: './item-main-container.html',
  styleUrls: ['./item-main-container.css']
})
export class ItemMainContainer {
  @Input() selectedMenu!: string;
};