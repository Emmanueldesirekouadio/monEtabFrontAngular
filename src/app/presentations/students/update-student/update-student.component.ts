import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterLink,
    ReactiveFormsModule, NgIf
  ],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.scss'
})
export class UpdateStudentComponent {

formStudent!: FormGroup;
  ngOnInit(): void {
  this.formStudent = new FormGroup({
    lastname: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    firstname: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    date: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    classroom: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    matricule: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
  
  })
  
}
isInvalidInput(field: AbstractControl){
    
  return field.invalid && (field.touched || field.dirty);
  }
  
  saveData() {}

}
