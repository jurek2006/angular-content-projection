import {
  Component,
  OnInit,
  Input,
  ContentChild,
  OnChanges,
  AfterContentInit
} from "@angular/core";
import { InputRefDirective } from "./input-ref.directive";

@Component({
  selector: "app-fa-input",
  templateUrl: "./fa-input.component.html",
  styleUrls: ["./fa-input.component.scss"]
})
export class FaInputComponent {
  @Input() icon: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  get classes() {
    const cssClasses = {
      fa: true
    };
    cssClasses[`fa-${this.icon}`] = true;

    return cssClasses;
  }
}
