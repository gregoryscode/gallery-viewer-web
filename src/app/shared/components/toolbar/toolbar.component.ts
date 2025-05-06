import { Router, ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../../../components/home/home.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  currentRoute = '/';

  @Output() openMenu = new EventEmitter();

  constructor(
    private _router: Router,
    private _actualRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void { }

  goToUserInfo(): void {
    this._router.navigate(['/minha-conta']);
  }

  navigateToHome() {
    if (this._actualRoute.children[0].component === HomeComponent) {
      window.location.reload();
    } else {
      this._router.navigateByUrl('/');
    }
  }

  hideOnRoute(subPath: string) {
    return !this._router.url.includes(subPath.toLowerCase());
  }

  showOnRoute(subPath: string) {
    return this._router.url.includes(subPath.toLowerCase());
  }
}
