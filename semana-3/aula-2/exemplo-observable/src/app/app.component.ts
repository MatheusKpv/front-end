import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { filter, map, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'exemplo-observable';

  observable$ = of([1, 2, 3, 4, 5]);
  observablePipe$ = of(1, 2, 3, 4, 5);
  myObservable$ = new Observable(observer => {
    observer.next('next');
    observer.next('next2');
    observer.complete();
  })

  turnedObservable$ = new Subject<string>();

  ngOnInit(): void {
    this.myObservable$.subscribe(value => console.log(value));
    this.myObservable$.subscribe({
      next: value => console.log(value),
      error: value => console.error(value),
      complete: () => console.log('complete')
    })

    this.observablePipe$.pipe(
      filter(value => value % 2 == 0),
      map(value => value * 10)
    ).subscribe(result => {
      console.log(result);
    })

    this.turnedObservable$.subscribe(value => console.log('inscricao 1: ', value));
    this.turnedObservable$.subscribe(value => console.log('inscricao 2: ', value));
  }

  emitValue() {
    this.turnedObservable$.next(`${(Math.random() * 100).toFixed(0)}`)
  }
}
