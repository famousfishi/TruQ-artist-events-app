import { Component, OnInit } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';

@Component({
	selector: 'app-truq-logo',
	template: `
		<ion-content>
			<ion-content>
				<ion-row style="background-color: #011743;
					margin-right: 35px;
					margin-top: 30px;
					border-radius: 0 35px 35px 0;
					color: #fff;
					padding-top: 5px;">
					<ion-col size="3">
						<img src="../../../assets/images/KowgoApp ic.png">
					</ion-col>
					<ion-col size="9">
						<p>Supported by:</p>
						<!-- <p>New Kowgo Design/Development is proudly sponsored by:</p> -->
					</ion-col>
				</ion-row>
				<!-- <div class="sponsor-text">
					<div class="kowgo-sponsor-image">
					</div>
				</div>			 -->
				<div class="sponsor-body">
					<div class="truq-image">
						<img src="../../../assets/images/truq.jpg" alt="TruQ LOGO">
						<p>
							<a href="https://www.humphreyfellowship.org/">TruQ</a>
						</p>
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
		}, 3);
	}
}
