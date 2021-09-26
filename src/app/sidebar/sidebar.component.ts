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
  //{ path: '/user', title: 'Profile',  icon:'pe-7s-user', class: '' },
  { viewInMenu: true, path: '/patients', title: 'Pacientes',  icon:'pe-7s-users', class: '' },
  { viewInMenu: false, path: '/patient-detail', title: 'Paciente',  icon:'pe-7s-id', class: '' },
  { viewInMenu: false, path: '/vital-signs', title: 'Sinais Vitais',  icon:'pe-7s-note2', class: '' },
  { viewInMenu: false, path: '/vital-signs-create', title: 'Sinais Vitais',  icon:'pe-7s-note2', class: '' },
  //{ path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
  { viewInMenu: true, path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
  //{ path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
  //{ path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
  //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
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
