import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadService } from '../../services/file-upload.service';
import { UserService } from '../../services/user.service';
import { Toast } from '../../shared/toast/toast';
import { ToastService } from '../../shared/toast/toast.service';

@Component({
  selector: 'app-photo-upload',
  imports: [MatButtonModule],
  templateUrl: './photo-upload.component.html',
  styleUrl: './photo-upload.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoUploadComponent implements OnInit {
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null =
    'assets/images/default-profile.png';

  selectedPictureUrl = output<string>();
  constructor(
    private readonly fileUploadService: FileUploadService,
    private readonly toastService: ToastService,
    private readonly userService: UserService,
    private readonly cdRef: ChangeDetectorRef,
    private readonly ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.userService.getFirstLoginPhotoUrl().subscribe((photoUrl: string) => {
      if (photoUrl !== '') {
        this.imagePreview = photoUrl;
      }
    });
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files[0]) {
      this.selectedFile = fileInput.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.ngZone.run(() => {
          this.imagePreview = reader.result;
          this.cdRef.markForCheck();
        });
      };

      reader.readAsDataURL(this.selectedFile);
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      console.log(this.selectedFile);
      this.fileUploadService.uploadProfileImage(this.selectedFile).subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
          this.fileUploadService.updatePhotoValidation(true);
          this.selectedPictureUrl.emit(response);
          this.toastService.open(Toast.SUCCESS, 'Zapisano poprawnie');
        },
        (error) => {
          console.error('Error uploading file:', error);
          this.fileUploadService.updatePhotoValidation(false);
          this.toastService.open(Toast.ERROR, 'Błąd podczas zapisu.');
        }
      );
    }
  }
}
