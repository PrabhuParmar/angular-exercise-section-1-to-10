import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-read-more-less',
  templateUrl: './read-more-less.component.html',
  styleUrls: ['./read-more-less.component.css']
})
export class ReadMoreLessComponent {
  @Input() text!: string;
  @Input() wordLimit!: number;
  showMore!: boolean;
};
