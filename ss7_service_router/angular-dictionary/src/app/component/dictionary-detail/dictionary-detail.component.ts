import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';
import {IWord} from '../../model/iWord';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  iword: IWord;
  wordSearch: IWord;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix
        this.iword = dictionaryService.findById(parseInt(id));
        console.log(this.iword);
      }
      const word = next.get('word');
      console.log(word);
      if (word != null) {
        this.wordSearch = dictionaryService.search(word);
      }
    });
  }

  ngOnInit(): void {
  }

}
