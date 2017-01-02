import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { NewsfeedComponent } from './components/newsfeed.component';
import { ActivepageComponent } from './components/activepage.component';
import { FilterpageComponent } from './components/filter.component';

// service
import { DataService } from './service/data.service';
// routing
import { DataAppRoutes } from './routing/main.routing'

@NgModule({
  declarations: [
    
    AppComponent, 
    NewsfeedComponent, 
    ActivepageComponent, 
    FilterpageComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(DataAppRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
