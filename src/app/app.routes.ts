import { Routes } from '@angular/router';
import { LoginComponent } from './presentations/login/login.component';
import { DashboardComponent } from './presentations/dashboard/dashboard.component';
import { ListStudentComponent } from './presentations/students/list-student/list-student.component';
import { AddStudentComponent } from './presentations/students/add-student/add-student.component';
import { UpdateStudentComponent } from './presentations/students/update-student/update-student.component';
import { ListTeacherComponent } from './presentations/teachers/list-teacher/list-teacher.component';
import { AddTeacherComponent } from './presentations/teachers/add-teacher/add-teacher.component';
import { UpdateTeacherComponent } from './presentations/teachers/update-teacher/update-teacher.component';
import { ListUsersComponent } from './presentations/users/list-users/list-users.component';
import { UpdateUserComponent } from './presentations/users/update-user/update-user.component';
import { AddUserComponent } from './presentations/users/add-user/add-user.component';
import { ReportsComponent } from './presentations/reports/reports.component';

export const routes: Routes = [
    {
        path : '',
        component : LoginComponent
    },
    {
        path : 'dashboard',
        component : DashboardComponent
    },
    {
        path : 'list_student',
        component : ListStudentComponent
    },
    {
        path : 'add_student',
        component : AddStudentComponent
    },
    {
        path : 'update_student',
        component : UpdateStudentComponent
    },
    {
        path : 'list_teacher',
        component : ListTeacherComponent
    },
    {
        path : 'add_teacher',
        component : AddTeacherComponent
    },
    {
        path : 'update_teacher',
        component : UpdateTeacherComponent
    },
    {
        path : 'list_user',
        component : ListUsersComponent
    },
    {
        path : 'add_user',
        component : AddUserComponent
    },
    {
        path : 'update_user',
        component : UpdateUserComponent
    },
    {
        path : 'report',
        component : ReportsComponent
    },
];
