import { Component, EventEmitter, Input, Output, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="absolute -bottom-6 right-0 translate-y-full bg-gray-50 rounded border w-80 h-96 flex flex-col z-50">
      <div class="border-b p-3">
        <div class="flex items-center justify-between">
          <div class="flex space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
            </svg>
            <div class="font-medium">
              Notification
            </div>
          </div>
          
          <div class="text-blue-500 font-medium" (click)="close()">
            See all
          </div>
        </div>
      </div>
      <div class="px-3 py-1">
        <div class="mb-0.5">{{messageFromParent}}</div>
      </div>
     
    </div>
  `,
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() messageFromParent: string = '';
  @Output() closeFromChild = new EventEmitter<void>();

  close() {
    this.closeFromChild.emit();
  }
  
}
