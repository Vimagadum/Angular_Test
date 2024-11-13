import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectionService } from '../change-detection.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // Using OnPush change detection strategy
  providers: [ChangeDetectionService] // Provide a new instance for the child

})
export class ChildComponent {
  @Input() childData: string = '';

  constructor(private changeDetectionService: ChangeDetectionService) {}

  updateChildData() {
    this.childData = `Updated at ${new Date().toLocaleTimeString()}`;
    // Log message using the service
    this.changeDetectionService.logMessage('Child data updated');
  }
}
