import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  todoForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public todoService: TodoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: [''],
      detail: [''],
    });
  }

  updateForm() {
    this.todoService.update(this.route.snapshot.paramMap.get('id'), this.todoForm.value).subscribe(res => {
      alert('Todo updated.');
      this.router.navigateByUrl('home');
    });
  }
}
