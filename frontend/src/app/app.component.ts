import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  protected readonly value = signal<string>("");

  readonly genRand = async () => {
    const res = await fetch("http://localhost:5235/rand");
    this.value.set(await res.text())
  }
}
