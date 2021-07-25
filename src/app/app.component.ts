import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TruqLogoComponent } from './widgets/truq/truq.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private router: Router, 
    private modalCtrl: ModalController,
    ) {
      this.initializeApp();
    }


  initializeApp() {
    this.platform.ready().then(() => {
			this.statusBar.styleLightContent();
			this.splashScreen.hide();
			this.showTruQLogo().then(_ =>{
						this.router.navigate(['/tabs-navigation/home'])
			});
		});
  }


  	async showTruQLogo() {
		const modal = await this.modalCtrl.create({
			component: TruqLogoComponent,
			animated: false,
			backdropDismiss: false,
			keyboardClose: false,
			showBackdrop: false,
			swipeToClose: false
		});

		await modal.present().then( _ => {
			return setTimeout(() => {
				modal.dismiss();
			}, 4000);
		});
	}

    
}
