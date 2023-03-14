import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfDiffFinderComponent } from './pdf-diff-finder.component';

const routes: Routes = [{ path: '', component: PdfDiffFinderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfDiffFinderRoutingModule {}
