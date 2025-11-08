import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTitle',
})
export class AppTitlePipe implements PipeTransform {
  transform(resourceId: string): string {
    return resourceId ? 'Edit Product' : 'Add Product';
  }
}
