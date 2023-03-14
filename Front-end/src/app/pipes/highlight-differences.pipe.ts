import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightDifferences'
})
export class HighlightDifferencesPipe implements PipeTransform {

  transform(original: string, modified: string): string {
    if (!original || !modified) {
      return '';
    }

    let output = '';
    let i = 0;
    let j = 0;

    while (i < original.length && j < modified.length) {
      if (original[i] !== modified[j]) {
        output += '<span class="highlight">' + modified[j] + '</span>';
      } else {
        output += modified[j];
      }

      i++;
      j++;
    }

    while (j < modified.length) {
      output += '<span class="highlight">' + modified[j] + '</span>';
      j++;
    }

    return output;
  }
}
