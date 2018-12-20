import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormatTypes } from '../FormatTypes';
import { Format } from '../Format';

@Injectable()
export class TextService {
  private selected: any = {};
  private currentSelected: Format;
  current: BehaviorSubject<Format> = new BehaviorSubject<Format>(new Format());

  getMockText() {
    return new Promise<string>(function (resolve) {
      resolve('A year ago I was in the audience at a gathering of designers in San Francisco. ' +
        'There were four designers on stage, and two of them worked for me. I was there to support them. ' +
        'The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. ' +
        'What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, ' +
        'that modern design problems were very complex. And we ought to need a license to solve them.');
    });
  }

  onFormat(type: FormatTypes, value: boolean) {
    switch (type) {
      case FormatTypes.Bold:
        this.currentSelected.bold = value;
        break;
      case FormatTypes.Italic:
        this.currentSelected.italic = value;
        break;
      case FormatTypes.Underline:
        this.currentSelected.underline = value;
        break;
    }
    this.current.next(this.currentSelected);
  }

  onTextSelect(text: string) {
    if (!this.selected[text]) {
      this.selected[text] = new Format();
    }
    this.currentSelected = this.selected[text];
    this.current.next(this.currentSelected);
  }
}
