import {Injectable, Component} from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';


//decorators, makes this class a provider to be injected in another @Component
@Injectable()
export class SubmitForm{
	postData = ():string=>{
		console.log('Here, we setup our logic to post data and should return some confirmation');
		return "Data has posted";
	}
}