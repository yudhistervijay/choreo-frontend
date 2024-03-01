import { Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';


export const routes: Routes = [
    {path:'', redirectTo:'add-student',pathMatch: 'full'},
    {path:'add-student', component:AddStudentComponent}
];
