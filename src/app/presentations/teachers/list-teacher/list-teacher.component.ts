import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-teacher',
  standalone: true,
  imports: [SidebarComponent, RouterLink],
  templateUrl: './list-teacher.component.html',
  styleUrl: './list-teacher.component.scss'
})
export class ListTeacherComponent {

}
