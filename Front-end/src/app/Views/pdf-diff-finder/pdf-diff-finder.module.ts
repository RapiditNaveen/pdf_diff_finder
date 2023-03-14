import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfDiffFinderComponent } from './pdf-diff-finder.component';
import { PdfDiffFinderRoutingModule } from './pdf-diff-finder-routing.module';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import { HighlightDifferencesPipe } from '../../pipes/highlight-differences.pipe';

@NgModule({
  declarations: [PdfDiffFinderComponent, HighlightDifferencesPipe],
  imports: [
    CommonModule,
    PdfDiffFinderRoutingModule,
    FileUploadModule,
    ButtonModule,
    ToastModule,
    CardModule,
  ],
})
export class PdfDiffFinderModule {}
