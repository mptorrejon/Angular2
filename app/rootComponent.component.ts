import {Component} from '@angular/core';
import {HeaderComponent} from './header.component';
import {LeftPanel} from './left-panel.component';
import {RightPanel} from './right-panel.component';
import {Footer} from './footer.component';

@Component({
	selector: 'my-app',
	templateUrl: '../templates/root.template.html',
	directives: [HeaderComponent, LeftPanel, RightPanel, Footer]
})

export class RootComponent{}