import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { WHATSAPP_NUMBER } from '@services/cart.service';
import { SeoService } from '@services/seo.service';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';

/**
 * Página "Datos de envío". No aparece en el menú: es un enlace público que los
 * vendedores comparten con el cliente para que complete sus datos. Al enviar,
 * abre WhatsApp con el mensaje ya armado (nombre, cédula, teléfono, ciudad,
 * dirección y mensaje opcional). No usa correo ni backend.
 */
@Component({
  selector: 'app-datos-envio',
  imports: [PageHeroComponent, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero pill="Completa tus datos" title="Datos de envío"
      subtitle="Déjanos tus datos y te contactamos por WhatsApp para coordinar tu pedido y el envío.">
      <svg ph-icon viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
        <circle cx="7" cy="17" r="1.6" stroke="currentColor" stroke-width="1.6" />
        <circle cx="17.5" cy="17" r="1.6" stroke="currentColor" stroke-width="1.6" />
      </svg>
    </app-page-hero>

    <section class="de">
      <div class="de__card">
        @if (sent()) {
          <div class="de__done">
            <span class="de__done-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </span>
            <h2 class="de__done-title">¡Te abrimos WhatsApp!</h2>
            <p class="de__done-text">Tus datos quedaron listos en un mensaje. Solo pulsa enviar dentro de WhatsApp para que los recibamos.</p>
            <button type="button" class="de__again" (click)="reset()">Enviar otros datos</button>
          </div>
        } @else {
          <form class="de__form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
            <div class="de__two">
              <label class="de__field">
                <span class="de__flabel">Nombre</span>
                <input class="de__input" type="text" formControlName="name" placeholder="Tu nombre completo" autocomplete="name" />
                @if (invalid('name')) { <span class="de__err">Ingresa tu nombre.</span> }
              </label>
              <label class="de__field">
                <span class="de__flabel">Cédula</span>
                <input class="de__input" type="text" inputmode="numeric" formControlName="cedula" placeholder="1712345678" autocomplete="off" />
                @if (invalid('cedula')) { <span class="de__err">Ingresa un número de cédula válido.</span> }
              </label>
            </div>
            <div class="de__two">
              <label class="de__field">
                <span class="de__flabel">Teléfono</span>
                <input class="de__input" type="tel" inputmode="tel" formControlName="phone" placeholder="0991234567" autocomplete="tel" />
                @if (invalid('phone')) { <span class="de__err">Ingresa un teléfono válido.</span> }
              </label>
              <label class="de__field">
                <span class="de__flabel">Ciudad</span>
                <input class="de__input" type="text" formControlName="city" placeholder="Quito" autocomplete="address-level2" />
                @if (invalid('city')) { <span class="de__err">Ingresa tu ciudad.</span> }
              </label>
            </div>
            <label class="de__field">
              <span class="de__flabel">Dirección</span>
              <input class="de__input" type="text" formControlName="address" placeholder="Calle principal, número, referencia…" autocomplete="street-address" />
              @if (invalid('address')) { <span class="de__err">Ingresa tu dirección.</span> }
            </label>
            <label class="de__field">
              <span class="de__flabel">Mensaje <span class="de__opt">(opcional)</span></span>
              <textarea class="de__input de__textarea" formControlName="message" rows="4" placeholder="¿Algo que debamos saber sobre tu pedido o entrega?"></textarea>
            </label>

            <button type="submit" class="de__send">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.5 20.5l1.3-4.6A8 8 0 1112 20a8 8 0 01-4-1.1l-4.5 1.6z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
              </svg>
              Enviar por WhatsApp
            </button>
            <p class="de__note">Al enviar se abrirá WhatsApp con tus datos listos para confirmar.</p>
          </form>
        }
      </div>
    </section>
  `,
  styleUrl: './datos-envio.component.scss',
})
export class DatosEnvioComponent {
  private readonly fb = inject(FormBuilder);
  private readonly seo = inject(SeoService);

  readonly sent = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    cedula: ['', [Validators.required, Validators.pattern(/^[0-9]{6,13}$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s-]{7,15}$/)]],
    city: ['', Validators.required],
    address: ['', Validators.required],
    message: [''],
  });

  constructor() {
    this.seo.update({
      title: 'Datos de envío · EMPRM',
      description: 'Déjanos tus datos de envío y coordinamos tu pedido por WhatsApp.',
      noindex: true,
      image: null,
    });
  }

  invalid(ctrl: string): boolean {
    const c = this.form.get(ctrl);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const lines = [
      '¡Hola EMPRM! 👋 Estos son mis datos de envío:',
      '',
      `*Nombre:* ${v.name}`,
      `*Cédula:* ${v.cedula}`,
      `*Teléfono:* ${v.phone}`,
      `*Ciudad:* ${v.city}`,
      `*Dirección:* ${v.address}`,
    ];
    if (v.message.trim()) {
      lines.push('', `*Mensaje:* ${v.message.trim()}`);
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;

    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
    this.sent.set(true);
  }

  reset(): void {
    this.sent.set(false);
    this.form.reset();
  }
}
