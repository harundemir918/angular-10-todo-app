import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  todoForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: [''],
      detail: [''],
    });
  }

  submitForm() {
    this.todoService.create(this.todoForm.value).subscribe(res => {
      alert('Todo created.');
      this.router.navigateByUrl('home');
    });
  }

}
