import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [SidebarComponent, ReactiveFormsModule, NgIf],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.scss'
})
export class AddTeacherComponent implements OnInit {
  formTeacher! : FormGroup
  
  ngOnInit(): void {
    this.formTeacher = new FormGroup({
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
