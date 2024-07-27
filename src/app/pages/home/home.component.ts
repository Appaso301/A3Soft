import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  backgroundColor: string = '#e0e4e8'; // Initial background color of the div

  onMouseOver() {
    this.backgroundColor = '#f1dede'; // Background color when mouse is over the div
  }

  onMouseOut() {
    this.backgroundColor = '#e0e4e8'; // Background color when mouse leaves the div
  }
  javaRedirect() {
    this.router.navigate(['/java']);
  }
  springBootRedirect() {
    this.router.navigate(['/springBoot']);
  }
  angularRedirect() {
    this.router.navigate(['/angular']);
  }
  reactRedirect() {
    this.router.navigate(['/react']);
  }
}
