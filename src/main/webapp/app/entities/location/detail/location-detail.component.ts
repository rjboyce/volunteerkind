import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMyLocation } from '../location.model';

@Component({
  selector: 'jhi-location-detail',
  templateUrl: './location-detail.component.html',
})
export class LocationDetailComponent implements OnInit {
  location: IMyLocation | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ location }) => {
      this.location = location;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
