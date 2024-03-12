import { Pipe, PipeTransform } from '@angular/core';
import { SearchResult } from '@random/models'; // Adjust the import path as necessary

@Pipe({
  name: 'nameSearch',
  standalone: true
})
export class NameSearchPipe implements PipeTransform {

  transform(items: SearchResult[] | null, searchText: string): SearchResult[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.name.first.toLowerCase().includes(searchText) || 
             item.name.last.toLowerCase().includes(searchText);
    });
  }

}
