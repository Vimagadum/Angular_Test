import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectionService } from '../change-detection.service';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.Default // Using default change detection strategy
})
export class ParentComponent {
  parentData: string = "Initial Parent Data";

  // This method will update the parent data
  constructor(private changeDetectionService: ChangeDetectionService) {}

  updateParentData() {
    this.parentData = `Updated at ${new Date().toLocaleTimeString()}`;
    // Call the service method to log the update
    this.changeDetectionService.logMessage('Parent data updated');
  }

}
