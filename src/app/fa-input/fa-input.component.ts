import { Component, Input, ContentChild, HostBinding } from "@angular/core";
import { InputRefDirective } from "./input-ref.directive";

@Component({
  selector: "app-fa-input",
  templateUrl: "./fa-input.component.html",
  styleUrls: ["./fa-input.component.scss"]
})
export class FaInputComponent {
  @Input() icon: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  @HostBinding("class.focus") get focus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {
      fa: true
    };
    cssClasses[`fa-${this.icon}`] = true;

    return cssClasses;
  }
}
