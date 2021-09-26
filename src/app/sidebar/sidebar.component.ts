import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

declare const $: any;
declare interface RouteInfo {
  viewInMenu: boolean;
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { viewInMenu: true, path: '/dashboard', title: 'Home', icon: 'pe-7s-graph', class: '' },
  { viewInMenu: true, path: '/patients', title: 'Pacientes',  icon:'pe-7s-users', class: '' },
  { viewInMenu: false, path: '/patient-detail', title: 'Paciente',  icon:'pe-7s-id', class: '' },
  { viewInMenu: false, path: '/vital-signs', title: 'Sinais Vitais',  icon:'pe-7s-note2', class: '' },
  { viewInMenu: false, path: '/vital-signs-create', title: 'Cadastrar Sinais Vitais',  icon:'pe-7s-note2', class: '' },
  { viewInMenu: true, path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public socialAuthServive: SocialAuthService, private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.viewInMenu);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  logout(): void {
    this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
  }
}
