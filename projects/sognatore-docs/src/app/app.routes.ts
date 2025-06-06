import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'getting-started',
    loadComponent: () => import('./pages/getting-started/getting-started.component').then(m => m.GettingStartedComponent)
  },
  {
    path: 'components',
    children: [
      {
        path: 'button',
        loadComponent: () => import('./pages/components/button/button-demo.component').then(m => m.ButtonDemoComponent)
      },
      {
        path: 'input',
        loadComponent: () => import('./pages/components/input/input-demo.component').then(m => m.InputDemoComponent)
      },
      {
        path: 'card',
        loadComponent: () => import('./pages/components/card/card-demo.component').then(m => m.CardDemoComponent)
      },
      {
        path: 'navbar',
        loadComponent: () => import('./pages/components/navbar/navbar-demo.component').then(m => m.NavbarDemoComponent)
      },
      {
        path: 'accordion',
        loadComponent: () => import('./pages/components/accordion/accordion-demo.component').then(m => m.AccordionDemoComponent)
      },
      {
        path: 'icon',
        loadComponent: () => import('./pages/components/icon/icon-demo.component').then(m => m.IconDemoComponent)
      },
      {
        path: 'tabs',
        loadComponent: () => import('./pages/components/tabs/tabs-demo.component').then(m => m.TabsDemoComponent)
      },
      {
        path: 'tooltip',
        loadComponent: () => import('./pages/components/tooltip/tooltip-demo.component').then(m => m.TooltipDemoComponent)
      },
      {
        path: 'tooltip/playground',
        loadComponent: () => import('./pages/components/tooltip/tooltip-playground.component').then(m => m.TooltipPlaygroundComponent)
      },
      {
        path: 'tooltip/examples',
        loadComponent: () => import('./pages/components/tooltip/tooltip-examples.component').then(m => m.TooltipExamplesComponent)
      },
      {
        path: 'badge',
        loadComponent: () => import('./pages/components/badge/badge-demo.component').then(m => m.BadgeDemoComponent)
      },
      {
        path: 'progress',
        loadComponent: () => import('./pages/components/progress/progress-demo.component').then(m => m.ProgressDemoComponent)
      },
      {
        path: 'chip',
        loadComponent: () => import('./pages/components/chip/chip-demo.component').then(m => m.ChipDemoComponent)
      },
      {
        path: 'dialog',
        loadComponent: () => import('./pages/components/dialog/dialog-demo.component').then(m => m.DialogDemoComponent)
      },
      {
        path: 'modal',
        loadComponent: () => import('./pages/components/modal/modal-demo.component').then(m => m.ModalDemoComponent)
      },
      {
        path: '',
        redirectTo: 'button',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];