import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student, StudentEditViewModel } from 'src/app/models/Student';
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
  std: Student = new Student();
  constructor(
    private builder: FormBuilder,
    private StdService: StudentServices,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (
      this.route.snapshot.params['id'] != null ||
      this.route.snapshot.params['id'] != undefined
    ) {
      this.isEdit = true;
      this.Loading = true;
      this.StdService.getStudentEditableByID(
        this.route.snapshot.params['id']
      ).subscribe((res) => {
        this.std = res.Data;
        this.Loading = false;
        this.build();
      });
    }
    this.build();
  }
  build() {
    this.form = this.builder.group({
      NationalID: [
        this.std.NationalID || '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(17),
        ],
      ],
      FirstName: [
        this.std.FirstName || '',
        [Validators.required, Validators.minLength(3)],
      ],
      LastName: [
        this.std.LastName || '',
        [Validators.required, Validators.minLength(3)],
      ],
      Email: [this.std.Email || '', [Validators.required, Validators.email]],
      Mobile: [
        this.std.Mobile || '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(15),
        ],
      ],
      Age: [this.std.Age || '', [Validators.required]],
    });
  }
  add() {
    let sendStd =new StudentEditViewModel;
    sendStd.FirstName = this.form.value['FirstName'];
    sendStd.LastName = this.form.value['LastName'];
    sendStd.Age = this.form.value['Age'];
    sendStd.Email = this.form.value['Email'];
    sendStd.Mobile = this.form.value['Mobile'] as number;
    sendStd.NationalID = this.form.value['NationalID'];
    sendStd.NameArabic= this.form.value['FirstName'] + " " +this.form.value['LastName'];
    sendStd.NameEnglish= this.form.value['FirstName'] + " " +this.form.value['LastName'];
    
    console.log(sendStd)
    if (this.isEdit) {
      this.StdService.updateStudent(sendStd).subscribe(res=>
        {
          alert(res.Message);
        }
      );
    } else {
      this.StdService.addStudent(sendStd).subscribe(res=>{
        alert(res.Message)
      });
    }
  }
}
