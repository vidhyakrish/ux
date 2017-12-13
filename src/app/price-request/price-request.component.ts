import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { flatten } from 'flat';

@Component({
  selector: 'app-price-request',
  templateUrl: './price-request.component.html',
  styleUrls: ['./price-request.component.scss']
})

export class PriceRequestComponent implements OnInit {
  public data: any;
  public isPanelVisible:boolean;

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.doGET();
    this.isPanelVisible=true;
    this.log();
  }

  doGET() {
    let url = `./assets/prices.json`;
    this.http.get(url).subscribe(
      res => this.data = res.json()
    );
  }

log(){
  console.log('test');
}
  getFive() {
    console.log(flatten(this.data),'5');
  }
  
  getTen() {
    console.log('10');
  }

  getTwentyFive() {
    console.log('25');
  }

  getN() {
    console.log('n');
  }

  togglePanel() {
    this.isPanelVisible = !this.isPanelVisible; 
    console.log('toggle');
  }
}
