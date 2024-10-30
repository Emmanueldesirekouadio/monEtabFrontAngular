import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.scss'
})
export class ListStudentComponent {

}
