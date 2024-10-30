import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-update-teacher',
  standalone: true,
  imports: [SidebarComponent, ReactiveFormsModule, NgIf],
  templateUrl: './update-teacher.component.html',
  styleUrl: './update-teacher.component.scss'
})
export class UpdateTeacherComponent {
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
