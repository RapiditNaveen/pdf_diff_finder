import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PdfDiffFinderService } from '../../services/pdf-diff-finder.service';
import { MessageService } from 'primeng/api';
import { PdfDifferences } from 'src/app/interfaces/pdf-differences';

@Component({
  selector: 'app-pdf-diff-finder',
  templateUrl: './pdf-diff-finder.component.html',
  styleUrls: ['./pdf-diff-finder.component.css'],
  providers: [MessageService],
})
export class PdfDiffFinderComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload: any;
  @ViewChild('targetFileContents') targetFileContents!: ElementRef;

  public uploadedFiles: any[] = [];
  public originalFileContent = '';
  public targetFileContent = '';
  public differences: PdfDifferences[] = [];

  constructor(
    private pdfDiffFinderService: PdfDiffFinderService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  public onFileUpload(event: any, position: any) {
    for (let file of event.files) {
      file.position = position;
      this.uploadedFiles.push(file);
    }
  }

  public async compareFiles() {
    const formData: FormData = new FormData();
    for (let file of this.uploadedFiles) {
      formData.append(`${file.position}`, file);
    }
    if (this.uploadedFiles.length === 2) {
      this.pdfDiffFinderService.comparePdfFiles(formData).subscribe(
        (res) => {
          if (res.status === 200) {
            this.originalFileContent = res.data ? res.data.textInOriginal : '';
            this.targetFileContent = res.data ? res.data.textInTarget : '';
            this.differences = res.data ? res.data.differences : [];
          }
        },
        (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went wrong. Please try again later',
          });
        }
      );
    }
  }
}
