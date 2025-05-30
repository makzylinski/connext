import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-photo-upload',
  imports: [],
  templateUrl: './photo-upload.component.html',
  styleUrl: './photo-upload.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoUploadComponent {
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private readonly fileUploadService: FileUploadService,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files[0]) {
      this.selectedFile = fileInput.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.cdRef.markForCheck();
      };

      reader.readAsDataURL(this.selectedFile);
    }
  }
  onUpload(): void {
    if (this.selectedFile) {
      this.fileUploadService.uploadProfileImage(this.selectedFile).subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
        },
        (error) => {
          console.error('Error uploading file:', error);
        }
      );
    }
  }
}
