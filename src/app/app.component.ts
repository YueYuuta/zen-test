import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AccordionComponent,
  AccordionItem,
} from './components/molecules/accordion/accordion.component';
import { TableComponent } from './components/molecules/table/table.component';
import { FooterTableComponent } from './components/molecules/footer-table/footer-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AccordionComponent,
    TableComponent,
    FooterTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  item: AccordionItem = {
    title: 'Movimientos resueltos por RPA',
    content: '',
    open: false,
  };
  title = 'zendesk-test';
}
