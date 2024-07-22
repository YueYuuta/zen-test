import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
export interface AccordionItem {
  title: string;
  content: string;
  open: boolean;
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent implements AfterViewInit {
  // @ViewChildren('content') contents!: QueryList<ElementRef>;

  // items: AccordionItem[] = [
  //   { title: 'Item 1', content: 'Contenido del Item 1', open: false },
  //   { title: 'Item 2', content: 'Contenido del Item 2', open: false },
  //   { title: 'Item 3', content: 'Contenido del Item 3', open: false },
  // ];

  // toggleItem(item: AccordionItem, index: number) {
  //   item.open = !item.open;
  //   this.contents.toArray().forEach((content, i) => {
  //     if (index === i) {
  //       const contentEl = content.nativeElement;
  //       if (item.open) {
  //         contentEl.style.maxHeight = contentEl.scrollHeight + 'px';
  //       } else {
  //         contentEl.style.maxHeight = '0';
  //       }
  //     }
  //   });
  // }
  @ViewChild('content') content!: ElementRef<HTMLDivElement>;

  @Input() item: AccordionItem = {
    title: 'Movimientos pendientes de análisis',
    content: 'Contenido del Item 1',
    open: true,
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.updateContentHeight();
  }

  toggleItem(): void {
    this.item.open = !this.item.open;
    this.updateContentHeight();
  }

  private updateContentHeight(): void {
    const contentEl = this.content.nativeElement;
    contentEl.style.maxHeight = this.item.open
      ? contentEl.scrollHeight + 'px'
      : '0';
  }
}
