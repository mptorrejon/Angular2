import {Component} from '@angular/core';
import {JSONP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {WikiService} from './submitForm.service';

@Component({
	selector: 'my-wiki',
	templateUrl: 'my-wiki-search.template.html',
	providers: [JSONP_PROVIDERS, WikiService]
})
export class wikiComponent{
	constructor(private wikiService: WikiService){}
	items: Observable<string[]>;
	search(term:string){
		this.items = this.wikiService.search(term);
	}
}
