import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import { authAutoLogin } from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task-manager';

  constructor(private store: Store<fromApp.AppState>) {}

  public ngOnInit() {
    this.store.dispatch(authAutoLogin());
  }

}
