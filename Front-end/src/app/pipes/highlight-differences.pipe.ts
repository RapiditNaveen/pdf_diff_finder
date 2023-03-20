import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightDifferences',
})
export class HighlightDifferencesPipe implements PipeTransform {

  transform(original: string, modified: string): string {
    const originalWords = original.split(' ');
    const modifiedWords = modified.split(' ');

    let result = '';

    for (let i = 0; i < originalWords.length || i < modifiedWords.length; i++) {
      const originalWord = originalWords[i] || '';
      const modifiedWord = modifiedWords[i] || '';

      if (originalWord === modifiedWord) {
        result += originalWord + ' ';
      } else {
        result += '<span class="highlight">' + modifiedWord + '</span> ';
      }
    }

    return result.trim();
  }
}
