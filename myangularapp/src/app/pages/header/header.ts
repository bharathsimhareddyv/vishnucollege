import { Component, inject, input, signal } from '@angular/core';
import { Student } from '../../student';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
message = input()

private studentService = inject(Student)

protected text = this.studentService.getName()

}
