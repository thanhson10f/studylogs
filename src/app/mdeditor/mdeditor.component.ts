import { Component, ElementRef, ViewChild, Input, AfterViewInit, Output, forwardRef} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
	  useExisting: forwardRef(() => MdeditorComponent),
		  multi: true
};

//declare var SimpleMDE : any;
declare let require: any;
var SimpleMDE = require('simplemde/dist/simplemde.min.js');

@Component({
	selector: 'mdeditor',
	providers: [ CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR ],
	template: '<textarea #simplemde>{{text}}</textarea>',
})
export class MdeditorComponent implements AfterViewInit{
	@ViewChild('simplemde') textarea : ElementRef;
	
	@Input() text: string;

	ngAfterViewInit() {
		var mde = new SimpleMDE({
			element: this.textarea.nativeElement,
			showIcons: ["code", "table"]
		});
	}
private _value: any = '';
  
  // get value for component from private variable
  get value(): any { return this._value; };
  // set the value (emit) to the parent model
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }
  // write the value to the input
  writeValue(value: any) {
    this._value = value;
    this.onChange(value);
  }

  onChange = (_) => {};
  onTouched = () => {};
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
