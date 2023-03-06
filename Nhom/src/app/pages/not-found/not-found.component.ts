import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-not-found',
  template: `
    <div class=" w-full h-screen flex flex-col items-center justify-center space-y-3">
      <h1 class="text-9xl font-bold">404</h1>
      <h1 class="font-bold text-blue-500">Page Not Found</h1>
      <p>The page you are looking for does not exist</p> 
      <button type="button" class="px-5 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:ring-4" routerLink="">GO TO HOMEPAGE</button>
    </div>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent{
  
}
