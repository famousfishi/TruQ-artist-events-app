import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-truq-logo',
	template: `
		<ion-content>
			<ion-content>
				<ion-row style="background-color: #2D2266;
					margin-right: 35px;
					margin-top: 30px;
					border-radius: 0 35px 35px 0;
					color: #fff;
					padding-top: 5px;">
					<ion-col size="3">
						<img class="animate__animated animate__flipInX"
						src="../../../assets/images/Music festival-cuatepng.png">
					</ion-col>
					<ion-col size="9">
						<p>Supported by:</p>
						 <p>TruQ is proudly sponsored by: Music Fest</p>
					</ion-col>
				</ion-row>
				<div class="sponsor-body">
					<div class="truq-image">
						<img class="animate__animated animate__zoomInUp"
						src="../../../assets/images/Listening happy music-pana.svg" alt="TruQ LOGO">
						
					</div>
				</div>
			</ion-content>
		</ion-content>
  `,
	styles: [],
})
export class TruqLogoComponent implements OnInit {
	constructor(private modalCtrl: ModalController) { }

	ngOnInit() {
	}

	closeModal() {
		setTimeout(() => {
			this.modalCtrl.dismiss();
		}, 1);
	}
}
