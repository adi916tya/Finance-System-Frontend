import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebMModule } from './modules/web/web-m/web-m.module';
import { AdminMModule } from './modules/admin/admin-m/admin-m.module';
import { CommonMModule } from './component/common/common.module';
import { TermsComponent } from './modules/web/terms/terms.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebMModule,
    AdminMModule,
    CommonMModule,
    HttpClientModule,
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
