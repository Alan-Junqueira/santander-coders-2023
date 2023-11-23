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

  public socials = [
    {
      icon: this.logos.linkedin,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/alan-junqueira/",
      slug: "linkedin"
    },
    {
      icon: this.logos.instagram,
      name: "Instagram",
      link: "https://www.instagram.com/_alanjunqueira/",
      slug: "instagram"
    },
    {
      icon: this.logos.github,
      name: "github",
      link: "https://www.instagram.com/_alanjunqueira/",
      slug: "github"
    },
    {
      icon: this.logos.whatsApp,
      name: "WhatsApp",
      link: "https://wa.me/64992391327",
      slug: "whatsApp"
    },
    {
      icon: this.logos.twitter,
      name: "Twitter",
      link: "https://twitter.com/_alanjunqueira",
      slug: "twitter"
    },
    // {
    //   icon: this.logos.facebook,
    //   name: "Facebook",
    //   link: "https://twitter.com/_alanjunqueira",
    //   slug: "facebook"
    // },
  ]
}
