import { Injectable } from '@angular/core';
import { Toast } from './toast';
import { ToastComponent } from './toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}
  private toastComponent?: ToastComponent;

  register(toast: ToastComponent) {
    this.toastComponent = toast;
  }

  open(type: Toast, message: string): void {
    this.toastComponent?.show(type, message);
  }
}
