import {Injectable, Component} from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { Jsonp, URLSearchParams } from '@angular/http';

//decorators, makes this class a provider to be injected in another @Component
@Injectable()
export class SubmitForm{
	postData = ():string=>{
		console.log('Here, we setup our logic to post data and should return some confirmation');
		return "Data has posted";
	}
	getData = ():string=>{

		return;
	}
}

@Injectable()
export class WikiService{
	constructor(private jsonp:Jsonp){}
	search(term:string){
		let wikiUrl = 'http://en.wikipedia.org/w/api.php';
		let params = new URLSearchParams();
		params.set('search', term);
		params.set('action', 'opensearch');
		params.set('format', 'json');
		params.set('callback', 'JSON_CALLBACK');

		return this.jsonp
			.get(wikiUrl, { search: params })
			.map(request => <string[]>request.json()[1]);
	}
}