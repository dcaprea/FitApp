import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { PostsService } from '../core/services/posts.service'
import { PostModel } from './../core/models/posts.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog/dialog.component'

@Component({
  selector: 'fit-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {

  name = new FormControl('Daniel Aprea');

  posts123: any
  comidas = [
    { nome: "Banana" },
    { nome: "Pera" },
    { nome: "Uva" },
    { nome: "Abacaxi" }
  ]
  
  constructor(private postService: PostsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPostView()
  }

  getPostView(){
    this.postService.getPosts().subscribe( (dado) => {
      console.log(dado)
      this.posts123 = dado
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      minWidth: '400px',
      data: {name: 'Daniel', animal: 'Cachorro'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  limpa(){
    this.name.reset();
  }
}
