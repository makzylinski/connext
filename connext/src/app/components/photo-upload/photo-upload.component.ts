import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-photo-upload',
  imports: [],
  templateUrl: './photo-upload.component.html',
  styleUrl: './photo-upload.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoUploadComponent {
  selectedFile: File | null = null;

  constructor(private readonly fileUploadService: FileUploadService) {}

  onFileSelected = (event: any) => (this.selectedFile = event.target.files[0]);

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
