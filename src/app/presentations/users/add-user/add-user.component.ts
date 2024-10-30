import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [SidebarComponent, ReactiveFormsModule, NgIf],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit {
  formUser!: FormGroup;
  ngOnInit(): void {
    this.formUser = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(30)]),
      password: new FormControl('', [Validators.required]),
    
    });
    
  }
  isInvalidInput(field: AbstractControl){
    
    return field.invalid && (field.touched || field.dirty);
    } 
    
    saveData() {}

}