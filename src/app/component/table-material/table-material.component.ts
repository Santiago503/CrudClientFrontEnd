import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'prx-table-material',
  templateUrl: './table-material.component.html',
  styleUrls: ['./table-material.component.scss'],
})
export class TableMaterialComponent implements OnInit {
  @Input() listData: any[];
  @Input() loading: boolean;
  @Input() pagination: boolean;
  @Input() canDelete: boolean = false;
  @Input() seeAction: boolean = false;
  @Input() canEdit: boolean = false;
  @Input() canSee: boolean = false;
  @Input() canOtherMethor: boolean = false;
  @Input() matFooter: boolean = false;
  @Input() displayedColumns: string[];
  @Input() title: string;

  //Para cualquier otro metodo, mandar el icon y el Alt
  @Input() otherMethorTitle = {
    title: 'thumb_up_alt',
    matTooltip: 'Completar Ticket',
  };

  //Pagination
  @Input() totalRegistros: number;
  @Input() cantidadMostrar: number = 10;
  @Input() page: number = 0;

  @Output() getPage = new EventEmitter<any>();
  @Output() onUpdateSee = new EventEmitter<any>();
  @Output() onDelet = new EventEmitter<any>();
  @Output() otherMethor = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onUpdate(data: any, editSee: boolean) {
    var dataEmit = {
      ...data,
      canEditOrSee: editSee,
    };

    this.onUpdateSee.emit(dataEmit);
  }

  onDelete(dataEmit: any) {
    Swal.fire({
      title: 'Are you sure, do you want to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Do it!',
    }).then((result: any) => {
      if (result.value) {
        this.onDelet.emit(dataEmit);
      }
    });
  }

  onPage(event: any) {
    this.getPage.emit(event);
  }

  otherMeth(event: any) {
    this.otherMethor.emit(event);
  }

  getTotal(column: string) {
    return this.listData?.map((t) => t[column]).reduce((acc, value) => acc + value, 0);
  }
}
