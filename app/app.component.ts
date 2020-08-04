import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Accueil',
      url: '/folder',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'settings'
    },
    {
      title: 'reservation',
      url: '/reservation',
      icon: 'list'
    },
    {
      title: 'Chercher',
      url: '/chercher',
      icon: 'settings'
    },
    {
      title: 'Reglage',
      url: '/reglage',
      icon: 'settings'
    },
    {
      title: 'Souvenirs',
      url: '/souvenirs',
      icon: 'list'
    },
    {
      title: 'Circuit téléchargé',
      url: '/downloaded',
      icon: 'list'
    },
    {
      title: 'boutique',
      url: '/boutique',
      icon: 'card'
    },
    {
      title: 'A propos',
      url: '/propos',
      icon: 'archive'
    },
    {
      title: 'Se connecter',
      url: '/folder',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
