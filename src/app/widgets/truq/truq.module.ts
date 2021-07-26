import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TruqLogoComponent } from "./truq.component";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      
    ],
    declarations: [TruqLogoComponent],
    schemas:[
      NO_ERRORS_SCHEMA,
      CUSTOM_ELEMENTS_SCHEMA
    ],
    exports:[TruqLogoComponent]
  })
  export class TruqComponentModule {}
