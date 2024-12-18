import { Component } from '@angular/core';
import { MainSwipeService } from '../../services/main-swipe.service';

@Component({
  selector: 'app-main-swipe',
  standalone: true,
  imports: [],
  templateUrl: './main-swipe.component.html',
  styleUrl: './main-swipe.component.scss',
})
export class MainSwipeComponent {
  constructor(private readonly mainSwipeService: MainSwipeService) {}

  ngOnInit(): void {
    // this.mainSwipeService
    //   .addUser({
    //     username: 'gosciu',
    //     email: 'test@test.com',
    //     password: 'password',
    //   })
    //   .subscribe((user) => {
    //     console.log(user);
    //   });

    this.mainSwipeService.getUser().subscribe((user) => {
      console.log(user);
    });
  }
}
