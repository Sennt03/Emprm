import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

type SocialIcon = 'instagram' | 'tiktok' | 'whatsapp';

interface Social {
  name: string;
  handle: string;
  badge: string;
  desc: string;
  url: string;
  cta: string;
  icon: SocialIcon;
}

/** Página "Redes Sociales": hero, tarjetas de redes y llamada a etiquetar. */
@Component({
  selector: 'app-redes',
  imports: [PageHeroComponent, RevealOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero pill="Síguenos" title="Redes Sociales"
      subtitle="Únete a nuestra comunidad y forma parte de EMPRM">
      <svg ph-icon viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 9h14M5 15h14M10 4l-2 16M16 4l-2 16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
      </svg>
    </app-page-hero>

    <section class="rd">
      <div class="rd__grid">
        @for (s of socials; track s.name; let i = $index) {
          <a class="sc" [attr.data-net]="s.icon" [href]="s.url" target="_blank" rel="noopener"
            appReveal [appRevealDelay]="(i % 2) * 90">
            <div class="sc__top">
              <span class="sc__tile">
                @switch (s.icon) {
                  @case ('instagram') {
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.7" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7" />
                      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                    </svg>
                  }
                  @case ('tiktok') {
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M16 3c.3 2.2 1.8 3.9 4 4.2v3c-1.5 0-2.9-.5-4-1.3V15a6 6 0 11-6-6c.34 0 .67.03 1 .09v3.04A3 3 0 1013 15V3h3z" fill="currentColor" />
                    </svg>
                  }
                  @case ('whatsapp') {
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3.5 20.5l1.3-4.6A8 8 0 1112 20a8 8 0 01-4-1.1l-4.5 1.6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                      <path d="M9 8.5c.2 2.5 2 4.3 4.5 4.5.6 0 1.2-.6 1.2-1.2l-1.6-.8-.8.8a4 4 0 01-1.6-1.6l.8-.8-.8-1.6c-.6 0-1.3.6-1.3 1.2z" fill="currentColor" />
                    </svg>
                  }
                }
              </span>
              <div class="sc__id">
                <h3 class="sc__name">{{ s.name }}</h3>
                <span class="sc__handle">{{ s.handle }}</span>
                <span class="sc__badge">{{ s.badge }}</span>
              </div>
            </div>
            <p class="sc__desc">{{ s.desc }}</p>
            <span class="sc__cta">{{ s.cta }} <span aria-hidden="true">→</span></span>
          </a>
        }
      </div>

      <div class="tag" appReveal>
        <h2 class="tag__title">Etiquétanos en tus fotos</h2>
        <p class="tag__sub">Comparte tu estilo EMPRM y podrías aparecer en nuestras redes sociales</p>
        <div class="tag__chips">
          @for (h of hashtags; track h) {
            <span class="tag__chip">{{ h }}</span>
          }
        </div>
        <p class="tag__hint">Usa cualquiera de estos hashtags para que podamos encontrarte</p>
      </div>
    </section>
  `,
  styleUrl: './redes.component.scss',
})
export class RedesComponent {
  private readonly seo = inject(SeoService);

  readonly socials: Social[] = [
    { name: 'Instagram', handle: '@emprm.ec', badge: '', desc: 'Sigue nuestras últimas colecciones, looks del día y contenido exclusivo', url: 'https://www.instagram.com/emprm.ec?igsh=MXBucGMwNHhidXRjbA==', cta: 'Visitar perfil', icon: 'instagram' },
    { name: 'TikTok', handle: '@emporioum96', badge: '', desc: 'Videos de moda, tips de estilo y tendencias', url: 'https://www.tiktok.com/@emporioum96?_r=1&_t=ZS-97QWzglahAi', cta: 'Visitar perfil', icon: 'tiktok' },
    { name: 'WhatsApp', handle: '+593 99 862 1656', badge: 'Chat directo', desc: 'Contáctanos directamente para consultas y pedidos personalizados', url: 'https://wa.me/message/H7KMJRCKRF4DI1', cta: 'Abrir chat', icon: 'whatsapp' },
  ];

  readonly hashtags = ['#EMPRMStyle', '#ModaMasculina', '#EstiloEMPRM', '#EleganciaModerna'];

  constructor() {
    this.seo.update({
      title: 'Redes Sociales · EMPRM',
      description:
        'Síguenos en Instagram, TikTok, Facebook y WhatsApp. Únete a la comunidad EMPRM de moda masculina.',
    });
  }
}
