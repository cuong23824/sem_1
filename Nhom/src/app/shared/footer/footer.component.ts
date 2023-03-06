import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="bg-gray-100 font-medium" >
    <div class="container mx-auto px-14">
      <div class=" flex items-center justify-between py-3 mt-4">
        <div class="flex items-center ">
          <div class="hover:cursor-pointer" routerLink="/about-us">
            About
          </div>
        </div>
        <div class="flex space-x-4 ">
          <div class="hover:cursor-pointer">
            FAQ
          </div>
          <div class="hover:cursor-pointer">
            Contact
          </div>
        </div>
      </div>
      
    </div>
  </div>

  <div class="container mx-auto px-14 py-3">
        <div>CELLINFO@2022</div>
  </div>
  
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
