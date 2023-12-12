import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  @Input() name = "";
  @Input() date = "";
  @Input() description = "";
  @Input() assetPath = "";
}
