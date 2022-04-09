import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

 //Create Dialog Material
 onCreateDialog(
  components: any,
  height?: string,
  width?: string,
  formEnableOrdisable: boolean = true,
  data?: any,
  disableClose: boolean = false,
  autoFocus: boolean = true,
  maxWidth?: string,
  position: string = 'center'
) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = disableClose;
    dialogConfig.autoFocus = autoFocus;
    dialogConfig.panelClass = 'custom-dialog-container';

    dialogConfig.minHeight = "350Px";
    dialogConfig.minWidth  = "300px";


    if(position == 'right') {
      dialogConfig.position = { right : '0px', top   : '0px' };
    }else if(position == 'left') {
      dialogConfig.position = { left  : '0px', top   : '0px'  };
    }

    if (width) dialogConfig.width = width + '%';
    if (maxWidth) dialogConfig.maxWidth  = maxWidth;

    if (height) dialogConfig.height = height + '%';

    dialogConfig.data = { data: data, formEnableOrdisable: formEnableOrdisable, };

    const dg = this.dialog.open(components, dialogConfig);
    return dg;
  }

  dialogClose(){
    this.dialog.closeAll();
  }

}
