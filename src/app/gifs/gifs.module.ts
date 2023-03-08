import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
