import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { InfoMsgComponent } from './_shared/info-msg/info-msg.component';
import { ExercicesComponent } from './exercices/exercices/exercices.component';
import { LevelAssessComponent } from './exercices/level-assess/level-assess.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InfoMsgComponent,
    ExercicesComponent,
    LevelAssessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
