import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainSwipeService } from '../../services/main-swipe.service';

@Component({
  selector: 'app-main-swipe',
  imports: [MatToolbarModule, MatIconModule],
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
