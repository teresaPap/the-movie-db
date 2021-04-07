import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparated'
})
export class CommaSeparatedPipe implements PipeTransform {

  transform(value: string, isFirst?: boolean): string {
    return isFirst ? value : `, ${value}`
  }

}
