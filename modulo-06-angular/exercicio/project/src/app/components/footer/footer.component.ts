import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  logos = {
    linkedin: 'radixLinkedinLogo',
    instagram: 'radixInstagramLogo',
    github: 'radixGithubLogo',
    whatsApp: 'tablerBrandWhatsapp',
    twitter: 'tablerBrandTwitterFilled',
    facebook: 'tablerBrandFacebookFilled',
  };
}
