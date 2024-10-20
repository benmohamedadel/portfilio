import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
// Services
import { ApiService } from '../common/api.service';
import { ApiConstants, API_CONSTANTS } from '../api_constants';

// Params
import { ParamContactFlowRes, ParamPostContact } from '../params/contact-param';


@Injectable({
  providedIn: 'root'
})
export class ApiContactService {

	constructor(
		private apiService: ApiService,
		@Inject(API_CONSTANTS) public apiConstants: ApiConstants
	) { }



	add(contact: any): any {
		// console.log(data);

		const params = contact;
		emailjs.send('service_8nfpjwi', 'template_y87sxde',
			 {name: params.name,details: params.details,reply_to:params.email} ,"UrMHhJC3HJLLayWi1"
		) .then((result: EmailJSResponseStatus) => {
			console.log(result.text);
			alert('Email envoyé avec succès !');
		  }, (error) => {
			console.error(error.text);
		  });
		//const urlPath = this.apiConstants.contact().contacts;
		//return this.apiService.post(urlPath, params);
	}



}
