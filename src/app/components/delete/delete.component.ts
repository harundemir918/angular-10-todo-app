import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public todoService: TodoService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.deleteTodo();
  }

  deleteTodo() {
    this.todoService.delete(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      alert('Todo deleted.');
      this.router.navigateByUrl('/home');
    });
  }
}
