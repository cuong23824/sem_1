import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcumb',
  template: `
   
    <!-- Breadcrumb -->
    <nav class="px-5 py-5 mb-5 flex text-gray-700  rounded bg-gray-100 ">
      <ol class="inline-flex items-center space-x-1 ">
        <li class="inline-flex items-center">
          <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600" routerLink="">
            <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            Home
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            <a class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600" routerLink="/brands">Brands</a>
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            <a routerLink="/huawei" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600" [routerLink]="['/brands/huawei']">Huawei</a>
          </div>
        </li>

        
      </ol>
    </nav>

  `,
  styleUrls: ['./breadcumb.component.scss']
})
export class BreadcumbComponent {

}
