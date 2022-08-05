import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TitleCasePipe'
})
export class CustomPipe implements PipeTransform {

  transform(input: string): string {
    return input.length === 0 ? '' :
      input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.slice(1).toLowerCase() ));
  }

}
