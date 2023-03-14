import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pdf-diff-finder', pathMatch: 'full' },
  {
    path: 'pdf-diff-finder',
    loadChildren: () =>
      import('./Views/pdf-diff-finder/pdf-diff-finder.module').then(
        (m) => m.PdfDiffFinderModule
      ),
  },
  { path: '**', redirectTo: 'pdf-diff-finder' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
