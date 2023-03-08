import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../services/gifs.service";

interface OnInit {
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit{
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  public constructor(private _gifsService: GifsService) {
  }

  search() {
    const value = this.txtSearch.nativeElement.value;
    if (value.length === 0){ return; }
    this._gifsService.searchGifs(value);
    this.txtSearch.nativeElement.value = '';

  }
}
