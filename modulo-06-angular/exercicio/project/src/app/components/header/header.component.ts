import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public paths = [
    {
      name: 'Personagens',
      path: '/personagens',
    },
    {
      name: 'Localizações',
      path: '/localizacoes',
    },
    {
      name: 'Episódios',
      path: '/episodios',
    },
  ];
}
