import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Toast } from './toast';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  constructor(private readonly toastService: ToastService) {}

  @ViewChild('toastRef') toastRef!: ToastComponent;

  message = '';
  visible = false;
  type: Toast;

  ngAfterViewInit() {
    this.toastService.register(this);
  }

  show(type: Toast, message: string): void {
    this.type = type;
    this.message = message;
    this.visible = true;

    setTimeout(() => (this.visible = false), 3000);
  }
}
