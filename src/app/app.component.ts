import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'tmdb-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(public router: Router, public route: ActivatedRoute ) {}

	public openModal() {
		this.router.navigate([ { outlets: {modal: ''} }],  { relativeTo: this.route });
	}
}
