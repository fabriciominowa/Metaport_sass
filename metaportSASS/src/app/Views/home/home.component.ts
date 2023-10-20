import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  fileUrl = 'https://example.com/path/to/your/file.pdf';
  fileName = 'example-file.pdf'
}
