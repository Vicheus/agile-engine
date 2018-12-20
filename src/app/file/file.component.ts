import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { Format } from '../Format';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  text = '';
  selectedText = '';
  event: any;

  constructor(private textService: TextService) {
  }

  ngOnInit() {
    this.textService.getMockText().then((result) => this.text = result);
    this.textService.current.subscribe((format: Format) => {
      this.formatBold(format.bold);
      this.formatItalic(format.italic);
      this.formatUnderline(format.underline);
    });
  }

  selectText(event: any) {
    this.event = event;
    console.log(window.getSelection());
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;
    this.selectedText = this.text.slice(start, end);
    console.log(this.selectedText);
    this.text = this.text.substring(0, start) + '<span>' + this.selectedText + '</span>' + this.text.substring(end);
    this.textService.onTextSelect(this.selectedText);
  }

  private formatBold(bold: boolean) {
    // console.log(this.event);
    // console.log(bold);
  }

  private formatItalic(italic: boolean) {
    // console.log(this.event);
    // console.log(italic);
  }

  private formatUnderline(underline: boolean) {
    // console.log(this.event);
    // console.log(underline);
  }
}
