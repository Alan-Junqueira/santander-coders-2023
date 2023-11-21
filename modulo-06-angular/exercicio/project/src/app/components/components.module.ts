import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  radixInstagramLogo,
  radixLinkedinLogo,
  radixGithubLogo,
} from '@ng-icons/radix-icons';
import {
  tablerBrandWhatsapp,
  tablerBrandTwitterFilled,
  tablerBrandFacebookFilled,
} from '@ng-icons/tabler-icons';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      radixInstagramLogo,
      radixLinkedinLogo,
      radixGithubLogo,
      tablerBrandWhatsapp,
      tablerBrandTwitterFilled,
      tablerBrandFacebookFilled,
    }),
    AppRoutingModule,
  ],
})
export class ComponentsModule {}
