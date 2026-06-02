import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { UpdateUserPayload, User } from '@models/user.models';
import { AuthService } from '@services/auth.service';
import { NotificationService } from '@services/notification.service';
import { UsersService } from '@services/users.service';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { materialImports } from '@shared/material/material.imports';
import { getApiErrorMessage } from '@shared/utils/http-error';
import { UserEditDialogComponent } from './user-edit-dialog.component';

@Component({
  selector: 'app-users',
  imports: [DatePipe, ...materialImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  private readonly usersService = inject(UsersService);
  private readonly auth = inject(AuthService);
  private readonly dialog = inject(MatDialog);
  private readonly notify = inject(NotificationService);

  readonly displayedColumns = ['username', 'email', 'roles', 'createdAt', 'actions'];
  readonly users = signal<User[]>([]);
  readonly total = signal(0);
  readonly loading = signal(false);
  readonly pageIndex = signal(0);
  readonly pageSize = signal(10);

  constructor() {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.usersService.list(this.pageIndex() + 1, this.pageSize()).subscribe({
      next: (result) => {
        this.users.set(result.items);
        this.total.set(result.meta.total);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.notify.error(getApiErrorMessage(err, 'No se pudieron cargar los usuarios'));
      },
    });
  }

  onPage(event: PageEvent): void {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.load();
  }

  edit(user: User): void {
    this.dialog
      .open(UserEditDialogComponent, { data: user, width: '420px' })
      .afterClosed()
      .subscribe((payload?: UpdateUserPayload) => {
        if (!payload) {
          return;
        }
        this.usersService.update(user.id, payload).subscribe({
          next: () => {
            this.notify.success('Usuario actualizado');
            this.load();
          },
          error: (err) => this.notify.error(getApiErrorMessage(err)),
        });
      });
  }

  remove(user: User): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Eliminar usuario',
          message: `¿Seguro que quieres eliminar a "${user.username}"?`,
          confirmText: 'Eliminar',
          danger: true,
        },
      })
      .afterClosed()
      .subscribe((confirmed?: boolean) => {
        if (!confirmed) {
          return;
        }
        this.usersService.remove(user.id).subscribe({
          next: () => {
            this.notify.success('Usuario eliminado');
            this.load();
          },
          error: (err) => this.notify.error(getApiErrorMessage(err)),
        });
      });
  }

  isSelf(user: User): boolean {
    return this.auth.user()?.id === user.id;
  }
}
