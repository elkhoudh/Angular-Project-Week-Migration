import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.less"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  on() {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "block";
  }

  off() {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
  }
}
