import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  constructor(private http: HttpClient) {}

  search(host: HTMLInputElement) {
    console.log(`search(${host.value})`);
    const observable = this.http.get('http://freegeoip.net/json/' + host.value);
    observable.subscribe(
      value => console.log(value),
      err => console.log(err)
    );
  }

}
