import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-matches-thumbnails',
  imports: [],
  templateUrl: './matches-thumbnails.component.html',
  styleUrl: './matches-thumbnails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MatchesThumbnailsComponent {
  testProfiles = [
    {
      image:
        'https://www.man-shop.eu/thumbnail/db/93/05/1726129673/MAN%20Lifestyle%20Merchandising%20Shop%20Bekleidung%20Herren_800x800.png',
      name: 'John Doe',
    },
    {
      image:
        'https://as2.ftcdn.net/v2/jpg/02/95/69/87/1000_F_295698768_8NS9qp5sJmOMCEQDbcpGTZd7DttKnAql.jpg',
      name: 'Jane Doe',
    },
  ];
}
