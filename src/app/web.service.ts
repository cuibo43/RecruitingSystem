import { Injectable } from '@angular/core';
import { Candidate } from './home/candidate';
import { HttpClient } from '@angular/common/http';
import { Interview} from './interview/interview';
import { AllCandidate} from './candidate/allcandidate';
import { HttpHeaders } from '@angular/common/http';
import { MyCandidate } from './my-candidate/myCandidate';
import { EmailTemplate } from './candidate/emailTemplate';







@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }
  getMyInterview() {
    return this.http.get<Candidate[]>('api/home')
    ;
  }
  getMyInterviews() {
    return this.http.get<Interview[][]>('api/Interview')
    ;
  }

  getCandidate() {
    return this.http.get<AllCandidate[]>('api/AllCandidate')
    ;
  }
  getMyCandidate() {
    return this.http.get<MyCandidate[]>('api/MyCandidate');
  }
  getPosition() {
    return this.http.get<string[]>('api/ListPosition');
  }
  getTemplatename() {
    return this.http.get<string[]>('api/ListEmailTemplateName');
  }
  getTemplate() {
    return this.http.get<EmailTemplate[]>('api/ListEmailTemplate');
  }


  postMyCandidate(candidatearray) {
    const myObj = {
      candidate: candidatearray
    };
    console.log(candidatearray);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=UTF-8'})};
    return this.http.post('api/AddToCandidate', JSON.stringify(myObj), httpOptions);
  }


  postNewCandidate(newCandidate) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=UTF-8'})};
   console.log(newCandidate);
    return this.http.post('api/NewCandidate', JSON.stringify(newCandidate), httpOptions);
  }

  postNewInteview(NewInterview) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=UTF-8'})};
    return this.http.post('api/NewInterview', JSON.stringify(NewInterview), httpOptions);
  }

  PostNewTemplate(NewTemplate) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=UTF-8'})};
    return this.http.post('api/EmailTemplate', JSON.stringify(NewTemplate), httpOptions);
  }

  UpdateMyCandidate( MyCandidate: MyCandidate[]) {
    const myObj = {
      candidateList: MyCandidate
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=UTF-8'})};
    return this.http.post('api/UpdateMyCandidate', JSON.stringify(myObj), httpOptions);
  }




}
