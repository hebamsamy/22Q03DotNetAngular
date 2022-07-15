import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentEditViewModel } from 'src/app/models/Student';
import { StudentServices } from 'src/app/Services/StudentServices';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  isEdit = false;
  Loading = false;
  form: FormGroup = new FormGroup([]);
  
  constructor(
    private builder: FormBuilder,
    private StdService: StudentServices,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    if (
      this.route.snapshot.params['id'] != null ||
      this.route.snapshot.params['id'] != undefined
    ) {
      this.isEdit = true;
      this.Loading = true;
      this.StdService.getStudentEditableByID(this.route.snapshot.params['id']).subscribe((res) => {
        let std:StudentEditViewModel = res.Data;
        this.Loading = false;
        this.build(std);
      });
    }
    this.build();
  }
  build(std?:StudentEditViewModel) {
    //if (typeof std !== 'undefined') {}
    this.form = this.builder.group({
      NationalID: [
        std?.NationalID || '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(17),
        ],
      ],
      FirstName: [
        std?.FirstName || '',
        [Validators.required, Validators.minLength(3)],
      ],
      LastName: [
        std?.LastName || '',
        [Validators.required, Validators.minLength(3)],
      ],
      Email: [std?.Email || '', [Validators.required, Validators.email]],
      Mobile: [
        std?.Mobile || '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(15),
        ],
      ],
      Age: [std?.Age || '', [Validators.required]],
    });
  }
  add() {
    let sendStd =new StudentEditViewModel;
    sendStd.FirstName = this.form.value['FirstName'];
    sendStd.LastName = this.form.value['LastName'];
    sendStd.Age = this.form.value['Age'];
    sendStd.Email = this.form.value['Email'];
    sendStd.Mobile = this.form.value['Mobile'];
    sendStd.NationalID = this.form.value['NationalID'];
    sendStd.NameArabic= this.form.value['FirstName'] + " " +this.form.value['LastName'];
    sendStd.NameEnglish= this.form.value['FirstName'] + " " +this.form.value['LastName'];
    
    console.log(sendStd)
    if (this.isEdit) {
      this.StdService.updateStudent(sendStd).subscribe(res=>{
          alert(res.Message);
          this.router.navigate(["/"])
        }
      );
    } else {
      this.StdService.addStudent(sendStd).subscribe(res=>{
        alert(res.Message)
      });
    }
  }
}
