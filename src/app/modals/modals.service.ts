import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { AssessmentModalComponent } from './assessment-modal/assessment-modal.component';

@Injectable({ providedIn: 'root' })

export class ModalService {
    openedDialog:Subject<any> = new Subject<any>();
    data!: any

    constructor(public dialog: MatDialog) {}
    
    getData(data: any) {
      this.data = data
    }

    openDialog(variant: string) {
        let modalVariant: any
        let modalStyles: Object = {}
        switch (variant) {
            case 'assessment': 
                if (variant == 'assessment') {
                    modalVariant = AssessmentModalComponent
                    // modalStyles = {
                    //   panelClass: 'modal-products',
                    // }
                } 
                break
        }
        this.openedDialog.next(variant)
        const dialogRef = this.dialog.open(modalVariant, modalStyles);
        dialogRef.afterClosed().subscribe(result => {
          this.openedDialog.next(false)
        });
      }

      closeDialog() {
        this.dialog.closeAll()
      }
}