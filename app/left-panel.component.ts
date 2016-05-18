import {Component} from '@angular/core';
import {SubmitForm } from './submitForm.service';
interface Account{
	user: string;
	password: any;
}

@Component({
	selector: 'left-panel',
	templateUrl: '../templates/left-panel.template.html',
	providers: [SubmitForm]
})
export class LeftPanel{
	account:Account = { user: "", password: "" };
	id: number = 1;
	service: string;
	onSubmit = () :void =>{
		// console.log( this.account.user );
		// console.log( this.account.password );
		this.getFormService();
	}
	constructor(private formService:SubmitForm){}
	getFormService(){
		this.service = this.formService.postData();
	}
}