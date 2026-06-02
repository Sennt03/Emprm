import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { materialImports } from '@shared/material/material.imports';
import { map } from 'rxjs';

interface NavItem {
  label: string;
  icon: string;
  link: string;
  exact: boolean;
  adminOnly: boolean;
}

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ...materialImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private readonly auth = inject(AuthService);
  private readonly breakpoints = inject(BreakpointObserver);

  readonly user = this.auth.user;
  readonly isAdmin = this.auth.isAdmin;

  readonly isHandset = toSignal(
    this.breakpoints.observe(Breakpoints.Handset).pipe(map((result) => result.matches)),
    { initialValue: false },
  );
  readonly opened = signal(true);

  readonly navItems: NavItem[] = [
    { label: 'Inicio', icon: 'dashboard', link: '/', exact: true, adminOnly: false },
    { label: 'Mi perfil', icon: 'person', link: '/profile', exact: false, adminOnly: false },
    { label: 'Usuarios', icon: 'group', link: '/users', exact: false, adminOnly: true },
  ];

  constructor() {
    // Abierto en escritorio, cerrado en móvil.
    effect(() => this.opened.set(!this.isHandset()));
  }

  toggle(): void {
    this.opened.set(!this.opened());
  }

  closeIfHandset(): void {
    if (this.isHandset()) {
      this.opened.set(false);
    }
  }

  logout(): void {
    this.auth.logout();
  }
}
