import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id = 0;
  title = '';
  detail = '';
  constructor(public todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todoService.getById(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.id = res.id;
      this.title = res.title;
      this.detail = res.detail;
    });
  }

}
