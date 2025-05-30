import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps-container',
  imports: [],
  templateUrl: './steps-container.component.html',
  styleUrl: './steps-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsContainerComponent {
  @Input() steps: Array<{ step: number; name: string; header: string }>;
  @Input() currentStep: number;

  // currentStep:
}
