import {Injectable} from '@angular/core';
import {IWord} from '../model/iWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  iWords: IWord[] = [{id: 1, word: 'apple', mean: 'táo', description: 'táo là 1 loại quả'},
    {id: 2, word: 'banana', mean: 'chuối', description: 'chuối là 1 loại quả'},
    {id: 3, word: 'orange', mean: 'cam', description: 'cam là 1 loại quả'},
    {id: 4, word: 'grapefruit', mean: 'bưởi', description: 'bưởi là 1 loại quả'}
  ];

  constructor() {
  }

  getAll() {
    return this.iWords;
  }

  search(word: string) {
    const result = this.iWords.filter(element => element.word === word);
    return result[0];
  }

  findById(id: number) {
    const result = this.iWords.filter(element => element.id === id);
    return result[0];
  }
}
