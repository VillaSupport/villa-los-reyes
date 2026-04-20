import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterSection } from "./shared/components/main-footer/main-footer";
import { MainHeader } from "./shared/components/main-header/main-header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterSection, MainHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'villa-los-reyes';
}





