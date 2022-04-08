import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { filter, switchMap, share, map } from 'rxjs/operators';
import { fuseAnimations } from '../../../../../@fuse/animations';
import { SnackBarService } from 'app/shared/services/snack-bar.service';
import { ConfirmDeleteModalComponent } from '../../../../shared/modals/confirm-delete/confirm-delete-modal.component';
import { Query } from '../../../../shared/models/query';
import { RequestedWalkerApiService } from '../../../../shared/http/requested-walker-api.service';
import { RequestedWalker } from '../../../../shared/models/requested-walker';


@Component({
  selector: 'app-requested-walkers',
  templateUrl: './requested-walkers.component.html',
  styleUrls: ['./requested-walkers.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class RequestedWalkersComponent {
  query: Query;
  items$: Observable<RequestedWalker[]>;
  numTotal$: Observable<number>;
  loadData$: Subject<Query>;

  dataSource: RequestedWalker[];
  numTotal: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: RequestedWalkerApiService,
    private dialog: MatDialog,
    private snackBarService: SnackBarService,
  ) {
    this.query = this.parseQueryParams(this.route.snapshot.queryParams);
    this.loadData$ = new BehaviorSubject(this.query);

    this.loadData$.subscribe((query: Query) => {
      this.router.navigate(['/admin/walkers'], {
        queryParams: query,
        queryParamsHandling: 'merge',
      });
    });

    const data$ = this.loadData$.pipe(
      switchMap(q => this.api.getByQuery(q)),
      share(),
    );

    this.items$ = data$.pipe(map(d => d.items));
    this.numTotal$ = data$.pipe(map(d => d.numTotal));
  }

  update(data: any): void {
    this.api.update(data)
      .subscribe(
        () => this.snackBarService.open('Updated Successfully'),
        () => this.snackBarService.open('Update Failed'),
        () => this.loadData$.next(this.query)
      );
  }

  updatePositions(data: any): void {
    this.api.updatePositions(data)
      .subscribe(
        () => this.snackBarService.open('Reordered Successfully'),
        () => this.snackBarService.open('Reorder Failed'),
        () => this.loadData$.next(this.query)
      );
  }

  delete(data: RequestedWalker): void {
    this.dialog
      .open(ConfirmDeleteModalComponent, { data })
      .afterClosed()
      .pipe(
        filter(r => r),
        switchMap(() => this.api.delete(data._id)),
      )
      .subscribe(
        () => this.snackBarService.open('Deleted Successfully'),
        () => this.snackBarService.open('Deletion Failed'),
        () => this.loadData$.next(this.query)
      );
  }

  reloadParams(query: Query): void {
    this.query = { ...this.query, ...query };
    this.loadData$.next(this.query);
  }

  parseQueryParams(params): Query {
    return {
      ...params,
      page: params.page ? Number(params.page) : 1,
      limit: params.limit ? Number(params.limit) : 10,
    };
  }
}



