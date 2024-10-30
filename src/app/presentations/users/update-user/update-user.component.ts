import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [SidebarComponent, ReactiveFormsModule, NgIf],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  formUser!: FormGroup;
  ngOnInit(): void {
    this.formUser = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(30)]),
      old_password: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    
    });
    
  }
  isInvalidInput(field: AbstractControl){
    
    return field.invalid && (field.touched || field.dirty);
    } 
    
    saveData() {}

}
