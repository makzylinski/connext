import { Component } from '@angular/core';
import { MainSwipeService } from '../../services/main-swipe.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-main-swipe',
  imports: [ToolbarComponent],
  standalone: true,
  templateUrl: './main-swipe.component.html',
  styleUrl: './main-swipe.component.scss',
})
export class MainSwipeComponent {
  constructor(private readonly mainSwipeService: MainSwipeService) {}

  ngOnInit(): void {
    this.mainSwipeService.getUser().subscribe((user) => {
      console.log(user);
    });
  }
}
