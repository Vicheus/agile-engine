import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { FormatTypes } from '../FormatTypes';
import { Format } from '../Format';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  current: Format = new Format();

  constructor(private textService: TextService) {
  }

  ngOnInit() {
    this.textService.current.subscribe((format: Format) => {
      this.current = format;
    });
  }

  formatBold() {
    this.textService.onFormat(FormatTypes.Bold, !this.current.bold);
  }

  formatItalic() {
    this.textService.onFormat(FormatTypes.Italic, !this.current.italic);
  }

  formatUnderline() {
    this.textService.onFormat(FormatTypes.Underline, !this.current.underline);
  }
}
