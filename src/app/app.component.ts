import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee';
  // Add the Fileds name property to the AppComponent class
  lastName: string = '';
  firstName: string = '';
  middleName: string = '';
  gender: string = '';
  dateOfBirth: string = '';
  age: string = '';
  bloodGroup: string = '';
  dateOfJoining: string = '';
  empId: string = '';
  phone: string = '';
  emailid: string = '';




  onLastNameInputChange(event: Event) {
    this.lastName = (event.target as HTMLInputElement).value;
  }
  onFirstNameInputChange(event: Event) {
    this.firstName = (event.target as HTMLInputElement).value;
  }
  onMiddleNameInputChange(event: Event) {
    this.middleName = (event.target as HTMLInputElement).value;
  }
  onGenderInputChange(event: Event) {
    this.gender = (event.target as HTMLInputElement).value;
  }
  onDateInputChange(event: Event) {
    this.dateOfBirth = (event.target as HTMLInputElement).value;
    this.age = this.calculateAge(this.dateOfBirth);
  }
  onAgeInputChange(event: Event) {
    this.age = (event.target as HTMLInputElement).value;
  }
  onBloodGroupInputChange(event: Event) {
    this.bloodGroup = (event.target as HTMLInputElement).value;
  }
  onDojInputChange(event: Event) {
    this.dateOfJoining = (event.target as HTMLInputElement).value;
  }
  onEmpIdInputChange(event: Event) {
    this.empId = (event.target as HTMLInputElement).value;
  }
  onPhoneInputChange(event: Event) {
    this.phone = (event.target as HTMLInputElement).value;
  }
  onEmailInputChange(event: Event) {
    this.emailid = (event.target as HTMLInputElement).value;
  }

  calculateAge(dateOfBirth: string): string {
    const dob = new Date(dateOfBirth);
    const now = new Date();
    const diff = now.getTime() - dob.getTime();
    const ageInMilliseconds = new Date(diff);
    return (ageInMilliseconds.getUTCFullYear() - 1970).toString();
  }
  

  constructor(private http: HttpClient) {}

  handleSubmit() {
    const basicDetails = {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender,
      empId: this.empId,
      phone: this.phone,
      emailid: this.emailid,
      age: this.age,
      bloodGroup: this.bloodGroup,
      dateOfJoining: this.dateOfJoining,
    };

    console.log(
      basicDetails.firstName,
      basicDetails.lastName,
      basicDetails.bloodGroup,
      basicDetails.dateOfBirth,
      basicDetails.dateOfJoining

    )
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.http
      .post<any>('http://192.168.0.51:8080/employeeDetails/CreateNewEmployee', basicDetails, httpOptions)
      .subscribe((response) => {
        console.log('New employee Added');
      });
  }
}

