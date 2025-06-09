import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Toast } from './toast';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  imports: [MatIconModule, CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  constructor(
    private readonly toastService: ToastService,
    private readonly cdRef: ChangeDetectorRef
  ) {}

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
    this.cdRef.detectChanges();

    setTimeout(() => {
      this.visible = false;
    }, 3000);
  }

  closeToast = () => (this.visible = false);
}
