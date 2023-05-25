import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  loader = 'ocultar';

  constructor(private _loader: LoaderService) {}

  ngOnInit(): void {
    this._loader.Loader$().subscribe((response) => {
      this.loader = response;
    });
  }
}
