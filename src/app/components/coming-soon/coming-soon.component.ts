import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  imports: [
    MatButtonModule,
    MatIconModule, 
    RouterLink
  ],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent {


  protected onGettingStarted(): void {
    
  }
}
