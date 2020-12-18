(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/abstract-form/abstract-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/abstract-form/abstract-form.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <mat-card class=\"mat-elevation-z0\">\n\t<mat-card-header>\n      <mat-card-title>Record Chart Data \n\t\t\n\t  </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n\t<div class=\"row\">\n\t<div class=\"col pdf-view\" *ngIf=\"showChartDetail\">\n\t\t<button mat-icon-button color=\"accent\" (click)=\"previewChart()\" class=\"topcorner\">\n\t\t\t<mat-icon matTooltip=\"Preview Chart in New Window\">open_in_new</mat-icon>\n\t\t</button>\n\t\t<pdf-viewer [src]=\"src\" [render-text]=\"true\" [render-text-mode]=\"2\" [zoom-scale]=\"page-fit\" [original-size]=\"true\" [zoom]=\"1.0\"></pdf-viewer>\n\t</div>\n\t<div class=\"col\">\n\t<button mat-icon-button color=\"accent\" (click)=\"splitView()\" class=\"topcorner\" *ngIf=\"!showChartDetail\">\n\t\t\t<mat-icon matTooltip=\"Return to Split view\">vertical_split</mat-icon>\n\t</button>\n\t<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n\t  <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\"></formly-form>\n\t</form>\n\t</div>\n\t</div>\n\t</mat-card-content>\n\n  </mat-card>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/abstraction-form/abstraction-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/abstraction-form/abstraction-form.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n  <mat-card class=\"mat-elevation-z0\">\r\n\r\n    <mat-card-content>\r\n\t<div class=\"row\">\r\n\t<div class=\"col\">\r\n\t<app-view-chart></app-view-chart> \r\n\t</div>\r\n\t<div class=\"col\">\r\n\t<app-abstract-form></app-abstract-form> \r\n\t</div>\r\n\t</div>\r\n\t</mat-card-content>\r\n\r\n  </mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/abstraction/abstraction.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/abstraction/abstraction.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<mat-toolbar class=\"user-toolbar\">\r\n\t<span>All Abstractions</span>\r\n\t<span class=\"toolbar-spacer\"></span>\r\n    <mat-form-field class=\"search-box\">\r\n        <input matInput placeholder=\"Search Abstractions\" #input>\r\n\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Search\">\r\n\t\t\t<mat-icon>search</mat-icon>\r\n\t\t</button>\r\n    </mat-form-field>\r\n\t\r\n\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Add</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n\t</mat-toolbar>\r\n\r\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n        <mat-spinner></mat-spinner>\r\n    </div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table class=\"full-width-table\" multiTemplateDataRows [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" matSortActive=\"abstract_created_date\" matSortDirection=\"desc\" matSortDisableClear>\r\n    <!-- Id Column -->\r\n\t<ng-container matColumnDef=\"abstract_id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Abstract ID</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.abstract_id}}</td>\r\n    </ng-container>\r\n\t\r\n    <ng-container matColumnDef=\"chart_id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Chart ID</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.chart_id}}</td>\r\n    </ng-container>\r\n\r\n\t<ng-container matColumnDef=\"project_id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Project</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.project_id}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"lastname\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Lastname</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.chart.lastname}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"firstname\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Firstname</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.chart.firstname}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"abstract_status\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.abstract_status}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"abstract_created_date\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Created on</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.abstract_created_date.$date | date:'medium' }}</td>\r\n    </ng-container>\r\n\t\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"abstract_date\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Abstracted Date</th>\r\n      <td mat-cell *matCellDef=\"let row\"> </td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"abstract_by\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Abstracted by</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.abstract_by}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"edit\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n\t\tEdit\r\n\t  </th>\r\n      <td mat-cell *matCellDef=\"let row; let i=index;\">\r\n\t\t<button mat-icon-button color=\"accent\" (click)=\"editAbstract(row.abstract_id, row.chart.filename)\">\r\n\t\t\t<mat-icon>edit</mat-icon>\r\n\t\t</button>\r\n\t  </td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"expandedDetail\">\r\n    <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"displayedColumns.length\">\r\n\t\t<div class=\"example-element-detail\"\r\n           [@detailExpand]=\"row == abstraction ? 'expanded' : 'collapsed'\">\r\n\t\t\t\t<mat-card class=\"mat-elevation-z0\">\r\n\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"example-element-diagram\">\r\n\t\t\t  \r\n\t\t\t\t\t  <div class=\"example-element-symbol example-element-truncate\"> {{row.chart.patient_id}} </div>\r\n\t\t\t\t\t  <div class=\"example-element-name\"> {{row.chart.lastname}}, {{row.chart.firstname}} </div> \r\n\t\t\t\t\t  <div class=\"example-element-position example-element-truncate\"> {{row.project_id}} </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<table class=\"full-width-table inner-table\">\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-category\">Abstraction Details</th>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-category\"> </th>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-category\"> </th>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <td>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Chart ID:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.chart_id}} [{{row.project_id}}] </td>\r\n\t\t\t\t\t  </tr>\t\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Patient ID:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.chart.patient_id}}</td>\r\n\t\t\t\t\t  </tr>\t\t\t\t\t  \r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Patient:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.chart.lastname}}, {{row.chart.firstname}} - {{row.chart.age}} yrs, {{row.chart.gender}}</td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Address:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.chart.address}} {{row.chart.city}} {{row.chart.state}} {{row.chart.postalCode}}</td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  </td>\r\n\t\t\t\t\t  <td>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Status:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column status-color\"> {{row.abstract_status}}  </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Abstracted on: </th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\"> Abstracted by: </th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\">  {{row.abstract_by}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\"> Created on:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.chart.created_date.$date | date:'medium'}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  </td>\r\n\t\t\t\t\t  <td>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Care Provider:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.cplastname}} {{row.cpfirstname}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">NPI:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.npi}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Hospital/Facility:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.facility}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Address:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\">  {{row.cpaddress}} {{row.cpcity}} {{row.cpstate}} {{row.cppostalCode}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t  </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t  </table>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  </mat-card-content>\r\n\t\t\t\t </mat-card> \r\n\t\t</div>\r\n    </td>\r\n  </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"example-element-row\" [class.example-expanded-row]=\"abstraction === row\"\r\n      (click)=\"abstraction = abstraction === row ? null : row\"></tr>\r\n\t<tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator #paginator\r\n      [length]=\"dataSource.total_count\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[10, 25, 50]\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adjudication/adjudication.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adjudication/adjudication.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart-detail/chart-detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart-detail/chart-detail.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <mat-card class=\"mat-elevation-z0\">\n  <form [formGroup]=\"chart\" novalidate (ngSubmit)=\"onSubmit(chart)\" *appHasPermission=\"'4'\">  \n\t<mat-card-header>\n      <mat-card-title>Chart Review</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n\t \n\t\n\t<div class=\"row\">\n\t\t<div class=\"col pdf-view\" *ngIf=\"showChartDetail\">\n\t\t\t<button mat-icon-button color=\"accent\" (click)=\"previewChart()\" class=\"topcorner\">\n\t\t\t\t<mat-icon matTooltip=\"Preview Chart in New Window\">open_in_new</mat-icon>\n\t\t\t</button>\n\t\t\t<pdf-viewer [src]=\"src\" [render-text]=\"true\" [render-text-mode]=\"2\" [zoom-scale]=\"page-fit\" [original-size]=\"true\" [zoom]=\"1.0\"></pdf-viewer>\n\t\t</div>\n\n<div class=\"col-right\">\n\t<button mat-icon-button color=\"accent\" (click)=\"splitView()\" class=\"topcorner\" *ngIf=\"!showChartDetail\">\n\t\t\t<mat-icon matTooltip=\"Return to Split view\">vertical_split</mat-icon>\n\t</button>\t\t\n\t\t\n  <mat-card class=\"mat-elevation-z0\">\n    \n    <mat-card-content>\n\t<mat-accordion class=\"example-headers-align\"> \n\t<mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n\t\t<mat-expansion-panel-header>\n\t\t  <mat-panel-title>\n\t\t\tBasic Details\n\t\t  </mat-panel-title>\n\t\t  <mat-panel-description>\n\t\t\tChart Details for Abstraction\n\t\t\t<mat-icon color=\"accent\">assignment_ind</mat-icon>\n\t\t  </mat-panel-description>\n\t\t</mat-expansion-panel-header>\n\t\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Chart ID\" formControlName=\"chart_id\">\n            <mat-error *ngIf=\"chart.controls['chart_id'].hasError('required')\">\n              Chart ID is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\t\t<div class=\"col\">\n\t\t\t<mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Patient ID\" formControlName=\"patient_id\">\n            <mat-error *ngIf=\"chart.controls['patient_id'].hasError('required')\">\n              Patient ID is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Project\" formControlName=\"project_id\" [readonly]=\"true\">\n            <mat-error *ngIf=\"chart.controls['project_id'].hasError('required')\">\n              Project is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n\t  <div class=\"row\">\n        \n        <div class=\"col\">\n\t\t  <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Lastname\" formControlName=\"lastname\">\n            <mat-error *ngIf=\"chart.controls['lastname'].hasError('required')\">\n              Lastname is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\t\t<div class=\"col\">\n\t\t  <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Firstname\" formControlName=\"firstname\">\n            <mat-error *ngIf=\"chart.controls['firstname'].hasError('required')\">\n              Firstname is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\t\t<div class=\"col\">\n\t\t  <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Middlename\" formControlName=\"middlename\">            \n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n\t\t\t<mat-form-field class=\"full-width\">\n\t\t\t\t<input matInput maxlength=\"3\" #age placeholder=\"Age (in years)\" formControlName=\"age\" type=\"number\">\t\n\t\t\t\t<mat-hint align=\"end\">{{age.value.length}} / 3</mat-hint>\n\t\t\t\t<mat-error *ngIf=\"chart.controls['age'].hasError('required')\">\n\t\t\t\t\tAge is <strong>required</strong>\n\t\t\t\t</mat-error>\t\t\t\t\n\t\t\t</mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Date of Birth\" formControlName=\"dob\" [matDatepicker]=\"picker\">\n\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t<mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n        </div>\n\t\t<div class=\"col\">\n\t\t\t<mat-form-field class=\"full-width\">\n\t\t\t<mat-select placeholder=\"Gender\" formControlName=\"gender\">\n              <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">\n                {{ gender }}\n              </mat-option>\n            </mat-select>\n\t\t\t<mat-error *ngIf=\"chart.controls['gender'].hasError('required')\">\n\t\t\t\t\tGender is <strong>required</strong>\n\t\t\t</mat-error>\n\t\t\t</mat-form-field>\n        </div>\n      </div>\n      </mat-expansion-panel>\n\t  \n\t  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n\t\t<mat-expansion-panel-header>\n\t\t  <mat-panel-title>\n\t\t\tPatient Location\n\t\t  </mat-panel-title>\n\t\t  <mat-panel-description>\n\t\t\tPatient Address Details\n\t\t\t<mat-icon color=\"accent\">home\t</mat-icon>\n\t\t  </mat-panel-description>\n\t\t</mat-expansion-panel-header>\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<textarea matInput placeholder=\"Address\" formControlName=\"address\"></textarea>\n\t\t\t  </mat-form-field>\n\t\t\t</div>\t\t\t\n\t\t  </div>\n\t\t  <div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<input matInput placeholder=\"City\" formControlName=\"city\">\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<mat-select placeholder=\"State\" formControlName=\"state\">\n\t\t\t\t  <mat-option *ngFor=\"let state of states\" [value]=\"state.name\">\n\t\t\t\t\t{{ state.name }}\n\t\t\t\t  </mat-option>\n\t\t\t\t</mat-select>\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" type=\"number\" formControlName=\"postalCode\">\n\t\t\t\t<mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t  </div>\n\t    </mat-expansion-panel>\n\t\t\n\t\t\n\t\t<mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n\t\t<mat-expansion-panel-header>\n\t\t  <mat-panel-title>\n\t\t\tCare Provider\n\t\t  </mat-panel-title>\n\t\t  <mat-panel-description>\n\t\t\tCare Provider Details\n\t\t\t<mat-icon color=\"accent\">local_hospital</mat-icon>\n\t\t  </mat-panel-description>\n\t\t</mat-expansion-panel-header>\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<input matInput placeholder=\"Lastname\" formControlName=\"cplastname\">\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<input matInput placeholder=\"Firstname\" formControlName=\"cpfirstname\">\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<input matInput placeholder=\"Middlename\" formControlName=\"cpmiddlename\">\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<input matInput placeholder=\"NPI\" formControlName=\"npi\">\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<input matInput placeholder=\"Facility Name\" formControlName=\"facility\">\n\t\t\t  </mat-form-field>\n\t\t\t</div>\t\t\t\n\t\t  </div>\n\t\t\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<textarea matInput placeholder=\"Address\" formControlName=\"cpaddress\"></textarea>\n\t\t\t  </mat-form-field>\n\t\t\t</div>\t\t\t\n\t\t  </div>\n\t\t  <div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<input matInput placeholder=\"City\" formControlName=\"cpcity\">\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<mat-select placeholder=\"State\" formControlName=\"cpstate\">\n\t\t\t\t  <mat-option *ngFor=\"let state of states\" [value]=\"state.name\">\n\t\t\t\t\t{{ state.name }}\n\t\t\t\t  </mat-option>\n\t\t\t\t</mat-select>\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<input matInput #cppostalCode maxlength=\"5\" placeholder=\"Postal Code\" type=\"number\" formControlName=\"cppostalCode\">\n\t\t\t\t<mat-hint align=\"end\">{{cppostalCode.value.length}} / 5</mat-hint>\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t  </div>\n\t    </mat-expansion-panel>\n\t\t\n\t\t<mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle>\n\t\t<mat-expansion-panel-header>\n\t\t  <mat-panel-title>\n\t\t\tReview Comments\n\t\t  </mat-panel-title>\n\t\t  <mat-panel-description>\n\t\t\tUpdate Status and Review comments\n\t\t\t<mat-icon color=\"accent\">comment</mat-icon>\n\t\t  </mat-panel-description>\n\t\t</mat-expansion-panel-header>\n\t\t\t\n\t\t  <div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t<mat-form-field class=\"full-width\">\n\t\t\t<input matInput disabled placeholder=\"Created Date\" value=\"{{created_date | date:'medium' }}\">\n\t\t\t</mat-form-field> \t\t\t  \n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<mat-select placeholder=\"Status\" formControlName=\"chart_status\" (selectionChange)=\"onSelectionChanged($event)\">\n\t\t\t\t  <mat-option *ngFor=\"let status of statuses\" [value]=\"status\">\n\t\t\t\t\t{{ status }}\n\t\t\t\t  </mat-option>\n\t\t\t\t</mat-select>\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\" *ngIf=\"showReviewFailedField\">\n\t\t\t\t<mat-select placeholder=\"Reason for Failure\" formControlName=\"fail_reason\">\n\t\t\t\t  <mat-option *ngFor=\"let reason of reasons\" [value]=\"reason\">\n\t\t\t\t\t{{ reason }}\n\t\t\t\t  </mat-option>\n\t\t\t\t</mat-select>\n\t\t\t  </mat-form-field>\n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t  <mat-form-field class=\"full-width\">\n\t\t\t\t<textarea matInput placeholder=\"Review Comments\" formControlName=\"review_comments\"></textarea>\n\t\t\t  </mat-form-field>\n\t\t\t</div>\t\t\t\n\t\t  </div>\n\t    </mat-expansion-panel>\n\t  \n\t  </mat-accordion>\n    </mat-card-content>\n\t<mat-card-actions align=\"end\">\n\t<div class=\"row\"> \n\t  <div class=\"col\">\n\t\t<button mat-raised-button type=\"button\" (click)=\"previewChart()\">Preview</button>&nbsp;\n\t\t<button mat-raised-button type=\"button\" (click)=\"onCancel()\">Close</button>\n        <button mat-raised-button color=\"primary\" *ngIf=\"!readyForAbstraction\" type=\"submit\">Save</button>\n\t  </div>\n    </div>\n    </mat-card-actions>\n    \n  </mat-card>\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t</div>\n\t</div>   \n\t\n  \n\n</mat-card-content>\n\n\t\n\t</form>\n\n</mat-card>\n\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/charts/charts.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/charts/charts.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<mat-toolbar class=\"user-toolbar\">\r\n\t<span>Charts</span>\r\n\t<span class=\"toolbar-spacer\"></span>\r\n    <mat-form-field class=\"search-box\">\r\n        <input matInput placeholder=\"Search Charts\" #input>\r\n\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Search\">\r\n\t\t\t<mat-icon>search</mat-icon>\r\n\t\t</button>\r\n    </mat-form-field>\r\n\t\r\n\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Add</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n\t</mat-toolbar>\r\n\r\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n        <mat-spinner></mat-spinner>\r\n    </div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table class=\"full-width-table\" multiTemplateDataRows [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" matSortActive=\"created_date\" matSortDirection=\"desc\" matSortDisableClear>\r\n    <!-- Id Column -->\r\n\t<ng-container matColumnDef=\"chart_id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Chart ID</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.chart_id}}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"lastname\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.lastname}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"firstname\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.firstname}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"age\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Age</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.age}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"gender\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Gender</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.gender}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"project_id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Project</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.project_id}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"chart_status\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.chart_status}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"created_date\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Created on</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.created_date.$date | date:'medium' }}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"edit\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n\t\tEdit\r\n\t  </th>\r\n      <td mat-cell *matCellDef=\"let row; let i=index;\">\r\n\t\t<button mat-icon-button color=\"accent\" (click)=\"editChart(row.chart_id, row.filename)\">\r\n\t\t\t<mat-icon>edit</mat-icon>\r\n\t\t</button>\r\n\t  </td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"view\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n\t\tView\r\n\t  </th>\r\n      <td mat-cell *matCellDef=\"let row; let i=index;\">\r\n\t\t<button mat-icon-button color=\"primary\" (click)=\"viewChart(row.filename)\">\r\n\t\t\t<mat-icon>pageview</mat-icon>\r\n\t\t</button>\r\n\t  </td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"download\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n\t\t<button mat-icon-button color=\"primary\" (click)=\"newChart()\">\r\n\t\t\t<mat-icon>add_circle_outline</mat-icon>\r\n\t\t</button>\r\n\t  </th>\r\n      <td mat-cell *matCellDef=\"let row; let i=index;\">\r\n\t\t<button mat-icon-button color=\"primary\" (click)=\"downloadChart(row.filename)\">\r\n\t\t\t<mat-icon>cloud_download</mat-icon>\r\n\t\t</button>\r\n\t  </td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"expandedDetail\">\r\n    <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"displayedColumns.length\">\r\n      <div class=\"example-element-detail\"\r\n           [@detailExpand]=\"row == chart ? 'expanded' : 'collapsed'\">\r\n        \r\n\t\t\t\t\r\n\t\t\t\t<mat-card class=\"mat-elevation-z0\">\r\n\t\t\t\t<mat-card-content>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"example-element-diagram\">\r\n          \r\n\t\t\t\t  <div class=\"example-element-symbol example-element-truncate\"> {{row.patient_id}} </div>\r\n\t\t\t\t  <div class=\"example-element-name\"> {{row.lastname}}, {{row.firstname}} </div> \r\n\t\t\t\t  <div class=\"example-element-position example-element-truncate\"> {{row.project_id}} </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<table class=\"full-width-table inner-table\">\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-category\">Chart Detail View</th>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-category\"> </th>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-category\"> </th>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <td>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Chart ID:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.chart_id}} [{{row.project_id}}] </td>\r\n\t\t\t\t\t  </tr>\t\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Patient ID:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.patient_id}}</td>\r\n\t\t\t\t\t  </tr>\t\t\t\t\t  \r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Patient:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.lastname}}, {{row.firstname}} - {{row.age}} yrs, {{row.gender}}</td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Address:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.address}} {{row.city}} {{row.state}} {{row.postalCode}}</td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  </td>\r\n\t\t\t\t\t  <td>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Status:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column status-color\"> {{row.chart_status}}  </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Created at: </th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.created_date.$date | date:'medium'}}</td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\"> Filename: </th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\">  {{row.filename}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\"> &nbsp; </th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\">  </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  </td>\r\n\t\t\t\t\t  <td>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Care Provider:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.cplastname}} {{row.cpfirstname}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">NPI:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.npi}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Hospital/Facility:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.facility}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Address:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\">  {{row.cpaddress}} {{row.cpcity}} {{row.cpstate}} {{row.cppostalCode}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t  </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t  </table>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  </mat-card-content>\r\n\t\t\t\t </mat-card> \r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"example-element-row\" [class.example-expanded-row]=\"chart === row\"\r\n      (click)=\"chart = chart === row ? null : row\"></tr>\r\n\t<tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator #paginator\r\n      [length]=\"dataSource.total_count\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[10, 25, 50]\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/facilities/facilities.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/facilities/facilities.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>&nbsp;&nbsp;\tResearch Facilities list and details view</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-buildr/form-buildr.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-buildr/form-buildr.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"formGroupItems\" novalidate>   \r\n<div class=\"container\" cdkDropListGroup>\r\n    <div class=\"form-container\">\r\n    <h2>Form</h2>\r\n\r\n\r\n    \r\n      <mat-grid-list cols=\"3\" rowHeight=\"70px\" \r\n      cdkDropList\r\n      [cdkDropListData]=\"fieldArray\"\r\n      class=\"example-list\"\r\n      (cdkDropListDropped)=\"drop($event)\">\t\r\n\t  \r\n\t\t<mat-grid-tile class=\"form-box\" *ngFor=\"let field of fieldArray\" [colspan]=\"1\" [rowspan]=\"1\" cdkDrag>\r\n\t\t\t<div *ngIf=\"field=='0'\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input matInput placeholder=\"Textbox\" > \r\n\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"field=='1'\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t<mat-select placeholder=\"Dropdown\">\r\n\t\t\t\t<mat-option>\r\n\t\t\t\t</mat-option>\t\r\n\t\t\t</mat-select>\r\n\t\t\t</mat-form-field>\t  \r\n\t\t\t</div>\r\n\t\t</mat-grid-tile>\r\n\t  \r\n\t  </mat-grid-list>\r\n\t\r\n  \r\n  </div>\r\n\r\n  \r\n  <div class=\"control-container\">\r\n    <h2>Controls</h2>\r\n\r\n    <div\r\n      cdkDropList\r\n      [cdkDropListData]=\"fieldArray1\"\r\n      class=\"example-list\"\r\n      cdkDropListSortingDisabled\r\n      (cdkDropListDropped)=\"drop($event)\">\r\n      <div class=\"example-box\"cdkDrag>\t  \r\n\t\t<mat-form-field>\r\n\t\t\t<mat-icon matPrefix>short_text</mat-icon><input matInput disabled placeholder=\"Add Textbox\"> \r\n        </mat-form-field>\r\n\t  </div>\r\n\t  <div class=\"example-box\"cdkDrag>\t \t\t\r\n\t\t<mat-form-field>\r\n\t\t\t<mat-icon matPrefix>arrow_drop_down</mat-icon><mat-select disabled placeholder=\"Add Dropdown\"></mat-select>\r\n        </mat-form-field>\r\n\t  </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-container\">\r\n  <h1 class=\"mat-h1\">Dashboard</h1>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <mat-grid-tile [colspan]=\"2\" [rowspan]=\"2\">\r\n      <mat-card class=\"dashboard-card\">\r\n        \r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <app-charts></app-charts>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n\t\r\n\t<mat-grid-tile  [colspan]=\"2\" [rowspan]=\"2\">\r\n      <mat-card class=\"dashboard-card\">\r\n        \r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <app-users></app-users>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n\t\r\n\t<mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        \r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <app-roles></app-roles>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n\t\r\n\t<mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        \r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <app-permissions></app-permissions>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/investigator-form/investigator-form.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/investigator-form/investigator-form.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"user\" novalidate (ngSubmit)=\"onSubmit(user)\" autocomplete=\"off\">\r\n  <mat-card class=\"mat-elevation-z0\">\r\n    <mat-card-header>\r\n      <mat-card-title>Investigator Details</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"First name\" formControlName=\"first_name\" autocomplete=\"off\">\r\n            <mat-error *ngIf=\"user.controls['first_name'].hasError('required')\">\r\n              First name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Last name\" formControlName=\"last_name\" autocomplete=\"off\">\r\n          </mat-form-field>\r\n        </div>\r\n\t\t<div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Middle name\" formControlName=\"middle_name\" autocomplete=\"off\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\t  <div class=\"row\">\r\n        <div class=\"col\">\r\n\t\t<mat-form-field class=\"full-width\">\r\n        <mat-select placeholder=\"Gender\" formControlName=\"gender\">\r\n            <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.display\">\r\n                {{ gender.display }}\r\n            </mat-option>\t\r\n        </mat-select>\r\n      </mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"col\">\r\n\t\t<mat-form-field class=\"full-width\">\r\n            <input matInput #age maxlength=\"3\" placeholder=\"Age\" formControlName=\"age\" autocomplete=\"off\">\r\n\t\t\t<mat-hint align=\"end\">{{age.value.length}} / 3</mat-hint>\r\n          </mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"col\">\r\n\t\t<mat-form-field class=\"full-width\">\r\n        <mat-select placeholder=\"Qualification\" formControlName=\"qualification\">\r\n            <mat-option *ngFor=\"let qualification of qualifications\" [value]=\"qualification.display\">\r\n                {{ qualification.display }}\r\n            </mat-option>\t\r\n        </mat-select>\r\n      </mat-form-field>\r\n\t\t</div>\r\n      </div>\r\n\t  <div class=\"row\">\r\n        <div class=\"col\">\r\n\t\t<mat-form-field class=\"full-width\">\r\n        <mat-select placeholder=\"Speciality\" formControlName=\"speciality\">\r\n            <mat-option *ngFor=\"let speciality of specialities\" [value]=\"speciality.display\">\r\n                {{ speciality.display }}\r\n            </mat-option>\t\r\n        </mat-select>\r\n      </mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"col\">\r\n\t\t<mat-form-field class=\"full-width\">\r\n            <input matInput #clinical_exp maxlength=\"2\" placeholder=\"Clinical Experience\" formControlName=\"clinical_exp\" autocomplete=\"off\">\r\n\t\t\t<mat-hint align=\"end\">{{clinical_exp.value.length}} / 2</mat-hint>\r\n          </mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"col\">\r\n\t\t<mat-form-field class=\"full-width\">\r\n\t\t\t<input matInput #study_exp maxlength=\"2\" placeholder=\"Study Experience\" formControlName=\"study_exp\" autocomplete=\"off\">\r\n\t\t\t<mat-hint align=\"end\">{{age.value.length}} / 2</mat-hint>\r\n\t\t</mat-form-field>\r\n\t\t</div>\r\n      </div>\r\n\t  <div class=\"row\">\r\n        <div class=\"col\">\r\n\t\t<mat-form-field class=\"full-width\">\r\n        <mat-select placeholder=\"Research Facility\" formControlName=\"rf\">\r\n            <mat-option *ngFor=\"let rf of rfs\" [value]=\"rf.display\">\r\n                {{ rf.display }}\r\n            </mat-option>\t\r\n        </mat-select>\r\n      </mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"col\">\r\n\t\t<mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Telephone\" formControlName=\"tel\" autocomplete=\"off\">\r\n          </mat-form-field>\r\n\t\t</div>\r\n      </div> \r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <textarea matInput placeholder=\"Address\" formControlName=\"address\" autocomplete=\"off\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"City\" formControlName=\"city\" autocomplete=\"off\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <mat-select placeholder=\"State\" formControlName=\"state\">\r\n              <mat-option *ngFor=\"let state of states\" [value]=\"state.abbreviation\">\r\n                {{ state.name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" type=\"number\" formControlName=\"postalCode\" autocomplete=\"off\">\r\n            <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\t\t<div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <mat-select placeholder=\"Country\" formControlName=\"country\">\r\n              <mat-option *ngFor=\"let country of countries\" [value]=\"country.name\">\r\n                {{ country.name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"end\">\r\n\t<div class=\"row\">\r\n\t  <div class=\"col\">\r\n\t\t<button mat-raised-button type=\"button\" (click)=\"onCancel()\">Cancel</button>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\r\n\t  </div>\r\n    </div>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/investigators/investigators.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/investigators/investigators.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<mat-toolbar class=\"user-toolbar\">\r\n\t<span>Investigators</span>\r\n\t<span class=\"toolbar-spacer\"></span>\r\n    <mat-form-field class=\"search-box\">\r\n        <input matInput placeholder=\"Search Investigators\" #input>\r\n\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Search\">\r\n\t\t\t<mat-icon>search</mat-icon>\r\n\t\t</button>\r\n    </mat-form-field>\r\n\t\r\n\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Add</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n\t</mat-toolbar>\r\n\r\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n        <mat-spinner></mat-spinner>\r\n    </div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" matSortActive=\"first_name\" matSortDirection=\"asc\" matSortDisableClear>\r\n    \r\n\t<!-- Checkbox Column -->\r\n  <ng-container matColumnDef=\"select\">\r\n    <mat-header-cell *matHeaderCellDef>\r\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                    [aria-label]=\"checkboxLabel()\">\r\n      </mat-checkbox>\r\n    </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row; let i = index\">\r\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"$event ? selection.toggle(row) : null\"\r\n                    [checked]=\"selection.isSelected(i, row)\"\r\n                    [aria-label]=\"checkboxLabel(row)\">\r\n      </mat-checkbox>\r\n    </mat-cell>\r\n  </ng-container>\r\n\t\r\n\t<!-- Id Column -->\r\n    <ng-container matColumnDef=\"first_name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.first_name}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"last_name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.last_name}}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t\r\n\t<ng-container matColumnDef=\"speciality\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Speciality</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.speciality}}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"study_exp\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Study Experience</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.study_exp}}</mat-cell>\r\n    </ng-container> \r\n\t\r\n\t<ng-container matColumnDef=\"rf\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Research Facility</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.rf}}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"city\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>City</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.city}}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"country\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Country</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.country}}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"edit\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n\t\t<button mat-icon-button color=\"primary\" (click)=\"newUser()\">\r\n\t\t\t<mat-icon>add_circle_outline</mat-icon>\r\n\t\t</button>\r\n\t  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n\t\t<button mat-icon-button color=\"primary\">\r\n\t\t\t<mat-icon>edit_circle_outline</mat-icon>\r\n\t\t</button>\r\n\t  </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onRowClicked(row)\"></mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator\r\n      [length]=\"dataSource.total_count\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[10, 25, 50]\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col col-md-4\">\r\n</div>\r\n<div class=\"col col-md-4\">\r\n<form [formGroup]=\"user\" novalidate (ngSubmit)=\"onSubmit(user)\" autocomplete=\"off\">\r\n  <mat-card class=\"login-card mat-elevation-z6\">\r\n    <mat-card-header>\r\n      <mat-card-title>Login to AbstractON</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Username\" formControlName=\"username\">\r\n            <mat-error *ngIf=\"user.controls['username'].hasError('required')\">\r\n              Username is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\t  <div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Passkey\" formControlName=\"passkey\"  [type]=\"hide ? 'password' : 'text'\">\r\n\t\t\t<mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            <mat-error *ngIf=\"user.controls['passkey'].hasError('required')\">\r\n              Passkey is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"end\">\r\n\t<div class=\"row\">\r\n\t  <div class=\"col card-field\">\r\n\t\t<!--<button mat-raised-button (click)=\"registerBusiness()\" type=\"button\">Register as Business</button>-->\r\n\t  </div>\r\n\t  <div class=\"col card-field\">\r\n\t\t<button mat-raised-button (click)=\"register()\" color=\"business\" type=\"button\">Register</button>\r\n\t  </div>\r\n      <div class=\"col card-field\">\r\n\t\t<button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\r\n\t  </div>\r\n    </div>\r\n    </mat-card-actions>\r\n\t&nbsp;\t\r\n  </mat-card>\r\n</form>\r\n</div>\r\n<div class=\"col col-md-4\">\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"mat-elevation-z6\">\r\n  <button\r\n\ttype=\"button\"\r\n\taria-label=\"Toggle sidenav\"\r\n\tmat-icon-button\r\n\t(click)=\"drawer.toggle()\"\r\n\t*ngIf=\"isHandset$ | async\">\r\n\t<mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n  </button>\r\n  <span>AbstractON</span>\r\n  <span class=\"toolbar-spacer\"></span>\r\n  \r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n  <mat-icon aria-label=\"Profile icon\">person</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n\t<mat-icon aria-label=\"Profile icon\">person</mat-icon>\r\n\t<span mat-menu-item disabled>Alex Philip</span>\r\n\t<span mat-menu-item disabled>Role: Admin, Login Time: 1:53 AM</span>\r\n\t<button mat-menu-item (click)=\"onLogout()\">\r\n\t\t<mat-icon aria-label=\"Log off icon\">power_settings_new</mat-icon>\r\n\t\t<span>Logout </span>\t\t\t\r\n\t</button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\"\r\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n      [opened]=\"!(isHandset$ | async)\">\t  \r\n    <mat-nav-list>\r\n      <a mat-list-item [routerLink]=\"['home']\" [routerLinkActive]=\"['is-active']\">Home</a>\r\n\t  <a mat-list-item [routerLink]=\"['projects']\" [routerLinkActive]=\"['is-active']\" *appHasPermission=\"'8'\">Projects</a>\r\n\t  <!-- <a mat-list-item [routerLink]=\"['investigators']\" [routerLinkActive]=\"['is-active']\">Investigators</a>-->\r\n\t  <a mat-list-item [routerLink]=\"['charts']\" [routerLinkActive]=\"['is-active']\" *appHasPermission=\"'1'\">Charts</a>\r\n\t  <a mat-list-item [routerLink]=\"['abstraction']\" [routerLinkActive]=\"['is-active']\" *appHasPermission=\"'8'\">Abstraction</a>\r\n\t  <a mat-list-item [routerLink]=\"['qa-review']\" [routerLinkActive]=\"['is-active']\" *appHasPermission=\"'8'\">QA Review</a>\r\n\t  <a mat-list-item [routerLink]=\"['form-buildr']\" [routerLinkActive]=\"['is-active']\" *appHasPermission=\"'8'\">Templates</a>\r\n\t  <!-- <a mat-list-item [routerLink]=\"['adjudication']\" [routerLinkActive]=\"['is-active']\" *appHasPermission=\"'8'\">Data Extracts</a> -->\r\n\t  <a mat-list-item [routerLink]=\"['tenants']\" [routerLinkActive]=\"['is-active']\" *appHasPermission=\"'8'\">Tenants</a>\r\n      <a mat-list-item [routerLink]=\"['users']\" [routerLinkActive]=\"['is-active']\" *appHasPermission=\"'1'\">Users</a>\r\n\t  <a mat-list-item [routerLink]=\"['roles']\" [routerLinkActive]=\"['is-active']\" *appHasPermission=\"'2'\">&nbsp;&nbsp;Roles</a>\r\n\t  <a mat-list-item [routerLink]=\"['permissions']\" [routerLinkActive]=\"['is-active']\" *appHasPermission=\"'3'\">&nbsp;&nbsp;Permissions</a>\r\n      <a mat-list-item (click)=\"onLogout()\" [routerLinkActive]=\"['is-active']\">Logout</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n  \t\r\n    <router-outlet></router-outlet>\r\n    <!-- Add Content Here -->\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-chart/new-chart.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-chart/new-chart.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <mat-card class=\"mat-elevation-z0\">\r\n  <form [formGroup]=\"chart\" novalidate (ngSubmit)=\"onSubmit(chart)\" *appHasPermission=\"'4'\">  \r\n\t<mat-card-header>\r\n      <mat-card-title>Upload Patient Charts</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n\t \r\n\r\n\t\r\n\t\t  <div class=\"row\">\r\n\t\t  <div class=\"col\">\r\n\t\t\t  <div class=\"uploadfilecontainer\" (click)=\"addFiles()\" appDragDrop (onFileDropped)=\"uploadFile($event)\">\r\n\t\t\t  <span class=\"uploadcenter\">Drag and drop or Click to upload Charts</span>\r\n\t\t\t\t<input hidden id=\"uploadFile\" type=\"file\" #file (change)=\"onFilesAdded($event)\" formControlName=\"upload_file\" multiple>\r\n\t\t\t  </div>\r\n\t\t\t  <!--<div  class=\"files-list\" *ngFor=\"let file of files;let i=index\">\r\n\t\t\t\t<p>{{ file.name }}</p>\r\n\t\t\t  <button class=\"delete-file\" (click)=\"deleteAttachment(file)\" type=\"button\">\r\n\t\t\t\t  <mat-icon>delete</mat-icon>\r\n\t\t\t  </button>\r\n\t\t\t  </div> -->\r\n\t\t  </div>\r\n\t\t  </div>  \r\n\t    \r\n\t<!--<mat-card-actions align=\"end\">\r\n\t  <button mat-raised-button (click)=\"nextStep()\" color=\"primary\" type=\"submit\"><mat-icon>arrow_upward</mat-icon> Upload Chart</button>\r\n      \r\n    </mat-card-actions>-->\r\n\t\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col\">\r\n\t\t<mat-nav-list>\r\n\t\t\t<a mat-list-item *ngFor=\"let file of files;let i=index\" [ngClass]=\"file==selectedFile ? 'is-active' : ''\"  (click)=\"selectFile(file)\" >\r\n\t\t\t\t<span class=\"col-left\">{{ file.name }}</span>\r\n\t\t\t\t<mat-progress-bar mode=\"indeterminate\" *ngIf=\"uploading\"></mat-progress-bar>\r\n\t\t\t\t<button mat-icon-button (click)=\"previewChart(file)\">\r\n\t\t\t\t  <mat-icon>pageview</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button mat-icon-button class=\"delete-file\" (click)=\"deleteAttachment(file)\">\r\n\t\t\t\t  <mat-icon>delete</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t</a>\r\n\t\t  </mat-nav-list>\r\n\t\t</div>\r\n\t\t<div class=\"col-right\" *ngIf=\"showChartDetail\">\r\n\t\t\r\n\t\t\r\n  <mat-card class=\"mat-elevation-z0\">\r\n    <mat-card-header>\r\n      <mat-card-title>Chart Details - {{filename}}</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n\t<mat-accordion class=\"example-headers-align\"> \r\n\t<mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\r\n\t\t<mat-expansion-panel-header>\r\n\t\t  <mat-panel-title>\r\n\t\t\tBasic Details\r\n\t\t  </mat-panel-title>\r\n\t\t  <mat-panel-description>\r\n\t\t\tChart Details for Abstraction\r\n\t\t\t<mat-icon color=\"accent\">assignment_ind</mat-icon>\r\n\t\t  </mat-panel-description>\r\n\t\t</mat-expansion-panel-header>\r\n\t\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Chart ID\" formControlName=\"chart_id\">\r\n            <mat-error *ngIf=\"chart.controls['chart_id'].hasError('required')\">\r\n              Chart ID is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\t\t<div class=\"col\">\r\n\t\t\t<mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Patient ID\" formControlName=\"patient_id\">\r\n            <mat-error *ngIf=\"chart.controls['patient_id'].hasError('required')\">\r\n              Patient ID is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n\t\t\t<mat-select placeholder=\"Project\" formControlName=\"project_id\">\r\n\t\t\t  <mat-option *ngFor=\"let project of projects\" [value]=\"project.project_id\">\r\n\t\t\t\t{{ project.name }} [{{ project.project_id }}]\r\n\t\t\t  </mat-option>\r\n\t\t\t</mat-select>\r\n            <mat-error *ngIf=\"chart.controls['project_id'].hasError('required')\">\r\n              Project is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\t  <div class=\"row\">\r\n        \r\n        <div class=\"col\">\r\n\t\t  <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Lastname\" formControlName=\"lastname\">\r\n            <mat-error *ngIf=\"chart.controls['lastname'].hasError('required')\">\r\n              Lastname is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\t\t<div class=\"col\">\r\n\t\t  <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Firstname\" formControlName=\"firstname\">\r\n            <mat-error *ngIf=\"chart.controls['firstname'].hasError('required')\">\r\n              Firstname is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\t\t<div class=\"col\">\r\n\t\t  <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Middlename\" formControlName=\"middlename\">            \r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n\t\t\t<mat-form-field class=\"full-width\">\r\n\t\t\t\t<input matInput maxlength=\"3\" #age placeholder=\"Age (in years)\" formControlName=\"age\" type=\"number\">\t\r\n\t\t\t\t<mat-hint align=\"end\">{{age.value.length}} / 3</mat-hint>\r\n\t\t\t\t<mat-error *ngIf=\"chart.controls['age'].hasError('required')\">\r\n\t\t\t\t\tAge is <strong>required</strong>\r\n\t\t\t\t</mat-error>\t\t\t\t\r\n\t\t\t</mat-form-field>\r\n        </div>\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Date of Birth\" formControlName=\"dob\" [matDatepicker]=\"picker\">\r\n\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t\t<mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\t\t<div class=\"col\">\r\n\t\t\t<mat-form-field class=\"full-width\">\r\n\t\t\t<mat-select placeholder=\"Gender\" formControlName=\"gender\">\r\n              <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">\r\n                {{ gender }}\r\n              </mat-option>\r\n            </mat-select>\r\n\t\t\t<mat-error *ngIf=\"chart.controls['gender'].hasError('required')\">\r\n\t\t\t\t\tGender is <strong>required</strong>\r\n\t\t\t</mat-error>\r\n\t\t\t</mat-form-field>\r\n        </div>\r\n      </div>\r\n      </mat-expansion-panel>\r\n\t  \r\n\t  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\r\n\t\t<mat-expansion-panel-header>\r\n\t\t  <mat-panel-title>\r\n\t\t\tPatient Location\r\n\t\t  </mat-panel-title>\r\n\t\t  <mat-panel-description>\r\n\t\t\tPatient Address Details\r\n\t\t\t<mat-icon color=\"accent\">home\t</mat-icon>\r\n\t\t  </mat-panel-description>\r\n\t\t</mat-expansion-panel-header>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<textarea matInput placeholder=\"Address\" formControlName=\"address\"></textarea>\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\t\t\t\r\n\t\t  </div>\r\n\t\t  <div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<input matInput placeholder=\"City\" formControlName=\"city\">\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<mat-select placeholder=\"State\" formControlName=\"state\">\r\n\t\t\t\t  <mat-option *ngFor=\"let state of states\" [value]=\"state.name\">\r\n\t\t\t\t\t{{ state.name }}\r\n\t\t\t\t  </mat-option>\r\n\t\t\t\t</mat-select>\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" type=\"number\" formControlName=\"postalCode\">\r\n\t\t\t\t<mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t    </mat-expansion-panel>\r\n\t\t\r\n\t\t\r\n\t\t<mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\r\n\t\t<mat-expansion-panel-header>\r\n\t\t  <mat-panel-title>\r\n\t\t\tCare Provider\r\n\t\t  </mat-panel-title>\r\n\t\t  <mat-panel-description>\r\n\t\t\tCare Provider Details\r\n\t\t\t<mat-icon color=\"accent\">local_hospital</mat-icon>\r\n\t\t  </mat-panel-description>\r\n\t\t</mat-expansion-panel-header>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<input matInput placeholder=\"Lastname\" formControlName=\"cplastname\">\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<input matInput placeholder=\"Firstname\" formControlName=\"cpfirstname\">\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<input matInput placeholder=\"Middlename\" formControlName=\"cpmiddlename\">\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t  <div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<input matInput placeholder=\"NPI\" formControlName=\"npi\">\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<input matInput placeholder=\"Facility Name\" formControlName=\"facility\">\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\t\t\t\r\n\t\t  </div>\r\n\t\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<textarea matInput placeholder=\"Address\" formControlName=\"cpaddress\"></textarea>\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\t\t\t\r\n\t\t  </div>\r\n\t\t  <div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<input matInput placeholder=\"City\" formControlName=\"cpcity\">\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<mat-select placeholder=\"State\" formControlName=\"cpstate\">\r\n\t\t\t\t  <mat-option *ngFor=\"let state of states\" [value]=\"state.name\">\r\n\t\t\t\t\t{{ state.name }}\r\n\t\t\t\t  </mat-option>\r\n\t\t\t\t</mat-select>\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col\">\r\n\t\t\t  <mat-form-field class=\"full-width\">\r\n\t\t\t\t<input matInput #cppostalCode maxlength=\"5\" placeholder=\"Postal Code\" type=\"number\" formControlName=\"cppostalCode\">\r\n\t\t\t\t<mat-hint align=\"end\">{{cppostalCode.value.length}} / 5</mat-hint>\r\n\t\t\t  </mat-form-field>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t    </mat-expansion-panel>\r\n\t  \r\n\t  </mat-accordion>\r\n    </mat-card-content>\r\n    \r\n  </mat-card>\r\n\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\t</div>   \r\n\t\r\n  \r\n\r\n</mat-card-content>\r\n\r\n\t<mat-card-actions align=\"end\">\r\n\t<div class=\"row\"> \r\n\t  <div class=\"col\">\r\n\t\t<button mat-raised-button type=\"button\" (click)=\"onCancel()\" *ngIf=\"showChartDetail\">Cancel</button>\r\n\t\t<button mat-raised-button type=\"button\" (click)=\"onCancel()\" *ngIf=\"!showChartDetail\">Close</button>\r\n        <button mat-raised-button color=\"primary\" *ngIf=\"showChartDetail\" type=\"submit\">Save</button>\r\n\t  </div>\r\n    </div>\r\n    </mat-card-actions>\r\n\t</form>\r\n\r\n</mat-card>\r\n\r\n  \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/permissions/permissions.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/permissions/permissions.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<mat-toolbar class=\"user-toolbar\">\r\n\t<span>All Privileges</span>\r\n\t<span class=\"toolbar-spacer\"></span>\r\n    <mat-form-field class=\"search-box\">\r\n        <input matInput placeholder=\"Search Privileges\" #input>\r\n    </mat-form-field>\r\n\t</mat-toolbar>\r\n\r\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n        <mat-spinner></mat-spinner>\r\n    </div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" matSortActive=\"first_name\" matSortDirection=\"asc\" matSortDisableClear>\r\n    <!-- Id Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.name}}</mat-cell>\r\n    </ng-container>\r\n\r\n    \r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onRowClicked(row)\"></mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator\r\n      [length]=\"dataSource.total_count\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[10, 25, 50]\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-form/project-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-form/project-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z0 mat-card-outer\">\n    <mat-card-header>\n      <mat-card-title>Project Details</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n\n<mat-tab-group color=\"accent\">\n<mat-tab label=\"Basic Details\">\n<form [formGroup]=\"project\" novalidate (ngSubmit)=\"onSubmit(project)\" *appHasPermission=\"'4'\">\n  <mat-card class=\"mat-elevation-z0\">\n    \n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Project ID\" formControlName=\"project_id\" [readonly]=\"edit_mode\">\n            <mat-error *ngIf=\"project.controls['project_id'].hasError('required')\">\n              Project ID is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Name\" formControlName=\"name\">\n            <mat-error *ngIf=\"project.controls['name'].hasError('required')\">\n              Name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\t\t<div class=\"col\"> \n          <mat-form-field class=\"full-width\">\n\t\t\t<mat-select placeholder=\"Type\" formControlName=\"project_type\">\n\t\t\t  <mat-option *ngFor=\"let type of types\" [value]=\"type\"> \n\t\t\t\t{{ type }}\n\t\t\t  </mat-option>\n\t\t\t</mat-select>\n\t\t  </mat-form-field>\n        </div>\n\t\t<div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Customer\" formControlName=\"customer\">\n            <mat-error *ngIf=\"project.controls['customer'].hasError('required')\">\n              Customer is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n\t  <div class=\"row\">\n        <div class=\"col\">\n\t\t  <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Description\" formControlName=\"description\"></textarea>            \n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\t  \n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Start Date\" formControlName=\"start_date\" [matDatepicker]=\"picker_start\">\n\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker_start\"></mat-datepicker-toggle>\n\t\t\t<mat-datepicker #picker_start></mat-datepicker>\n            <mat-error *ngIf=\"project.controls['start_date'].hasError('required')\">\n              Start Date is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n\t\t<div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"End Date\" formControlName=\"end_date\" [matDatepicker]=\"picker_end\">\n\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker_end\"></mat-datepicker-toggle>\n\t\t\t<mat-datepicker #picker_end></mat-datepicker>\n            <mat-error *ngIf=\"project.controls['end_date'].hasError('required')\">\n              End Date is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n\t\t  <mat-form-field class=\"full-width\">\n\t\t\t<mat-select placeholder=\"QA Review Lot\" formControlName=\"qa_review\">\n\t\t\t  <mat-option *ngFor=\"let review of reviews\" [value]=\"review\"> \n\t\t\t\t{{ review }}\n\t\t\t  </mat-option>\n\t\t\t</mat-select>\n\t\t  </mat-form-field>\n\t\t</div>\n\t\t<div class=\"col\">\n\t\t  <mat-form-field class=\"full-width\">\n\t\t\t<input matInput placeholder=\"Percentage\" formControlName=\"percentage\">\n\t\t  </mat-form-field>\n\t\t</div>\n      </div>\n\t  <div class=\"row\">\t  \n        <div class=\"col\">\n\t\t<div class=\"row\">\n\t\t<div class=\"col-inner\" *ngIf=\"!selectedFilename && !edit_mode\">\n\t\t\t<mat-form-field class=\"full-width\">\n            <input matInput disabled placeholder=\"Template\" class=\"full-width\"> \n\t\t\t</mat-form-field> \n\t\t  </div>\n\t\t  <div class=\"col-inner\" *ngIf=\"selectedFilename || edit_mode\">\n\t\t\t<button mat-button color=\"primary\" (click)=\"showTemplate()\" type=\"button\" class=\"full-width\">View {{selectedFilename}}</button> \n\t\t  </div>\n\t\t  <div class=\"col-inner-button\">\n\t\t  <input hidden id=\"uploadFile\" type=\"file\" #file (change)=\"addTemplate($event)\" accept=\".json\">\n\t\t  <button mat-button color=\"accent\" (click)=\"file.click()\" type=\"button\" >Upload Template</button>\n\t\t</div> \n\t\t</div>\n        </div>\n\t\t<div class=\"col\">\n\t\t<div class=\"row\">\n\t\t<div class=\"col-inner\">\n\t\t\t<button mat-button color=\"primary\" (click)=\"downloadExtract()\" type=\"button\" class=\"full-width\">{{extraction_status}}</button> \n\t\t</div>\n\t\t<div class=\"col-inner-button\">\n\t\t\t<button mat-button color=\"accent\" (click)=\"prepareExtract()\" type=\"button\" class=\"full-width\">Generate Extract</button>\n\t\t</div>\t\t\n\t\t</div>\n        </div>\n        <div class=\"col\">\n\t\t  <div *ngIf=\"edit_mode\">\n          <mat-form-field class=\"full-width\">\n\t\t\t<mat-select placeholder=\"Status\" formControlName=\"project_status\">\n\t\t\t  <mat-option *ngFor=\"let status of statuses\" [value]=\"status\"> \n\t\t\t\t{{ status }}\n\t\t\t  </mat-option>\n\t\t\t</mat-select>\n\t\t  </mat-form-field>\n\t\t  </div>       \n        </div>\n\t\t<div class=\"col\">\n\t\t  \n        </div>\n      </div>\n\t  <div class=\"row\" *ngIf=\"viewTemplate\">\t  \n        <div class=\"col\">\n\t\t\n\t\t  <mat-form-field class=\"full-width\">\n            <textarea matInput id=\"template_area\" placeholder=\"Template details\" formControlName=\"template_data\" cols=50 rows=25 value=\"{{ template_data | json }}\"></textarea>\n          </mat-form-field> \n\t\t  \n\t\t  \n        </div>\n      </div>\n\t  \n\t  \n      \n    </mat-card-content>\n    </mat-card>\n</form>\n</mat-tab>\n\n<mat-tab label=\"Data Access\">\n\n<div class=\"mat-elevation-z8\">\n  <mat-table class=\"full-width-table\" [dataSource]=\"data_access\" matSort aria-label=\"Elements\" matSortActive=\"first_name\" matSortDirection=\"asc\" matSortDisableClear>\n    \n\t<!-- Id Column -->\n    <ng-container matColumnDef=\"first_name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.first_name}}</mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"last_name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.last_name}}</mat-cell>\n    </ng-container>\n\t\n\t<ng-container matColumnDef=\"username\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Username</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.username}}</mat-cell>\n    </ng-container>\n\t\n\t\n\t<ng-container matColumnDef=\"edit\">\n      <mat-header-cell *matHeaderCellDef>\n\t\t<button mat-icon-button color=\"primary\" (click)=\"launchSFS()\" *appHasPermission=\"'4'\">\n\t\t\t<mat-icon>add_circle_outline</mat-icon>\n\t\t</button>\n\t  </mat-header-cell>\n      <mat-cell *matCellDef=\"let row; let i=index;\">\n\t\t<button mat-icon-button color=\"primary\" (click)=\"delete(row)\">\n\t\t\t<mat-icon>delete</mat-icon>\n\t\t</button>\n\t  </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; let i = index; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n  <mat-paginator #paginator\n      [length]=\"selected_users_count\"\n      [pageSize]=\"10\"\n      [pageSizeOptions]=\"[10, 25, 50]\">\n  </mat-paginator>\n</div>\n\t\n</mat-tab>\n\n\n\n<mat-tab label=\"Abstraction\">\n</mat-tab>\n<mat-tab label=\"QA Review\">\n</mat-tab>\n<mat-tab label=\"Data Extracts\">Content 3</mat-tab>\n\n</mat-tab-group>\n\n\n</mat-card-content>\n<mat-card-actions align=\"end\">\n\t<div class=\"row\">\n\t  <div class=\"col\">\n\t\t<button mat-raised-button type=\"button\" (click)=\"onCancel()\">Cancel</button>\n        <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"onSubmit(project)\">Save</button>\n\t  </div>\n    </div>\n    </mat-card-actions>\n  </mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<mat-toolbar class=\"user-toolbar\">\r\n\t<span>All Projects</span>\r\n\t<span class=\"toolbar-spacer\"></span>\r\n    <mat-form-field class=\"search-box\">\r\n        <input matInput placeholder=\"Search Projects\" #input>\r\n\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Search\">\r\n\t\t\t<mat-icon>search</mat-icon>\r\n\t\t</button>\r\n    </mat-form-field>\r\n\t\r\n\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Add</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n\t</mat-toolbar>\r\n\r\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n        <mat-spinner></mat-spinner>\r\n    </div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" matSortActive=\"created_date\" matSortDirection=\"desc\" matSortDisableClear>\r\n    <!-- Id Column -->\r\n    <ng-container matColumnDef=\"project_id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Project ID</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.project_id}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"project_name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Project Name</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.name}}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"description\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Description</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.description}}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"customer\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Customer</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.customer}}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"project_status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.project_status}}</mat-cell> \r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"created_date\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Created on</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.created_date.$date | date:'medium' }}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"edit\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n\t\t<button mat-icon-button color=\"primary\" (click)=\"newProject()\" *appHasPermission=\"'4'\">\r\n\t\t\t<mat-icon>add_circle_outline</mat-icon>\r\n\t\t</button>\r\n\t  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n\t\t<button mat-icon-button color=\"primary\" (click)=\"editProject(row.project_id)\">\r\n\t\t\t<mat-icon color=\"accent\">edit</mat-icon>\r\n\t\t</button>\r\n\t  </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onRowClicked(row)\"></mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator\r\n      [length]=\"dataSource.total_count\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[10, 25, 50]\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/qa-review/qa-review.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/qa-review/qa-review.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<mat-toolbar class=\"user-toolbar\">\r\n\t<span>QA Review</span>\r\n\t<span class=\"toolbar-spacer\"></span>\r\n    <mat-form-field class=\"search-box\">\r\n        <input matInput placeholder=\"Search Abstractions\" #input>\r\n\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Search\">\r\n\t\t\t<mat-icon>search</mat-icon>\r\n\t\t</button>\r\n    </mat-form-field>\r\n\t\r\n\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Add</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n\t</mat-toolbar>\r\n\r\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n        <mat-spinner></mat-spinner>\r\n    </div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table class=\"full-width-table\" multiTemplateDataRows [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" matSortActive=\"abstract_created_date\" matSortDirection=\"desc\" matSortDisableClear>\r\n    <!-- Id Column -->\r\n\t<ng-container matColumnDef=\"abstract_id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Abstract ID</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.abstract_id}}</td>\r\n    </ng-container>\r\n\t\r\n    <ng-container matColumnDef=\"chart_id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Chart ID</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.chart_id}}</td>\r\n    </ng-container>\r\n\r\n\t<ng-container matColumnDef=\"project_id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Project</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.project_id}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"lastname\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Lastname</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.chart.lastname}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"firstname\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Firstname</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.chart.firstname}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"abstract_status\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.abstract_status}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"abstract_created_date\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Created on</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.abstract_created_date.$date | date:'medium' }}</td>\r\n    </ng-container>\r\n\t\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"abstract_date\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Abstracted Date</th>\r\n      <td mat-cell *matCellDef=\"let row\"> </td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"abstract_by\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Abstracted by</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.abstract_by}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"edit\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n\t\tEdit\r\n\t  </th>\r\n      <td mat-cell *matCellDef=\"let row; let i=index;\">\r\n\t\t<button mat-icon-button color=\"accent\" (click)=\"editAbstract(row.abstract_id, row.chart.filename)\">\r\n\t\t\t<mat-icon>edit</mat-icon>\r\n\t\t</button>\r\n\t  </td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"expandedDetail\">\r\n    <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"displayedColumns.length\">\r\n\t\t<div class=\"example-element-detail\"\r\n           [@detailExpand]=\"row == abstraction ? 'expanded' : 'collapsed'\">\r\n\t\t\t\t<mat-card class=\"mat-elevation-z0\">\r\n\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"example-element-diagram\">\r\n\t\t\t  \r\n\t\t\t\t\t  <div class=\"example-element-symbol example-element-truncate\"> {{row.chart.patient_id}} </div>\r\n\t\t\t\t\t  <div class=\"example-element-name\"> {{row.chart.lastname}}, {{row.chart.firstname}} </div> \r\n\t\t\t\t\t  <div class=\"example-element-position example-element-truncate\"> {{row.project_id}} </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<table class=\"full-width-table inner-table\">\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-category\">Abstraction Details</th>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-category\"> </th>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-category\"> </th>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <td>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Chart ID:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.chart_id}} [{{row.project_id}}] </td>\r\n\t\t\t\t\t  </tr>\t\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Patient ID:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.chart.patient_id}}</td>\r\n\t\t\t\t\t  </tr>\t\t\t\t\t  \r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Patient:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.chart.lastname}}, {{row.chart.firstname}} - {{row.chart.age}} yrs, {{row.chart.gender}}</td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Address:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.chart.address}} {{row.chart.city}} {{row.chart.state}} {{row.chart.postalCode}}</td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  </td>\r\n\t\t\t\t\t  <td>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Status:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column status-color\"> {{row.abstract_status}}  </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Abstracted on: </th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\"> Abstracted by: </th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\">  {{row.abstract_by}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\"> Created on:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.chart.created_date.$date | date:'medium'}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  </td>\r\n\t\t\t\t\t  <td>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Care Provider:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.cplastname}} {{row.cpfirstname}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">NPI:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.npi}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Hospital/Facility:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\"> {{row.facility}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  <tr>\r\n\t\t\t\t\t  <th mat-header-cell class=\"inner-column\">Address:</th>\r\n\t\t\t\t\t\t<td mat-cell class=\"inner-column\">  {{row.cpaddress}} {{row.cpcity}} {{row.cpstate}} {{row.cppostalCode}} </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t\t  \r\n\t\t\t\t\t  </td>\r\n\t\t\t\t\t  </tr>\r\n\t\t\t\t  </table>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  </mat-card-content>\r\n\t\t\t\t </mat-card> \r\n\t\t</div>\r\n    </td>\r\n  </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"example-element-row\" [class.example-expanded-row]=\"abstraction === row\"\r\n      (click)=\"abstraction = abstraction === row ? null : row\"></tr>\r\n\t<tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator #paginator\r\n      [length]=\"dataSource.total_count\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[10, 25, 50]\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-business/register-business.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-business/register-business.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col col-md-4\">\r\n</div>\r\n<div class=\"col col-md-4\">\r\n<form [formGroup]=\"user\" novalidate (ngSubmit)=\"onSubmit(user)\">\r\n  <mat-card class=\"login-card mat-elevation-z6\">\r\n    <mat-card-header>\r\n      <mat-card-title>Register Business in Codon</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n\t<div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n\t\t\t<mat-form-field class=\"full-width\">\r\n            <mat-select placeholder=\"Type\" formControlName=\"business_type\">\r\n              <mat-option *ngFor=\"let business_type of business_types\" [value]=\"business_type.name\">\r\n                {{ business_type.name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\t<div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Business Name\" formControlName=\"business_name\">\r\n            <mat-error *ngIf=\"user.controls['business_name'].hasError('required')\">\r\n              Business Name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Contact Name\" formControlName=\"first_name\">\r\n            <mat-error *ngIf=\"user.controls['first_name'].hasError('required')\">\r\n              Contact Name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\t  <div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n            <mat-error *ngIf=\"user.controls['email'].hasError('required')\">\r\n              Email is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\t  <div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Passkey\" formControlName=\"passkey\" [type]=\"hide ? 'password' : 'text'\">\r\n\t\t\t<mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            <mat-error *ngIf=\"user.controls['passkey'].hasError('required')\">\r\n              Passkey is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"end\">\r\n\t<div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n\t\t\t<button mat-raised-button type=\"button\" (click)=\"onCancel()\">Cancel</button>\r\n\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\">Register</button>\r\n\t  </div>\r\n    </div>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n</div>\r\n<div class=\"col col-md-4\">\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n<div class=\"col col-md-4\">\r\n</div>\r\n<div class=\"col col-md-4\">\r\n<form [formGroup]=\"user\" novalidate (ngSubmit)=\"onSubmit(user)\">\r\n  <mat-card class=\"login-card mat-elevation-z6\">\r\n    <mat-card-header>\r\n      <mat-card-title>Register to Codon</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Name\" formControlName=\"first_name\">\r\n            <mat-error *ngIf=\"user.controls['first_name'].hasError('required')\">\r\n              Name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\t  <div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n            <mat-error *ngIf=\"user.controls['email'].hasError('required')\">\r\n              Email is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\t  <div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Passkey\" formControlName=\"passkey\" [type]=\"hide ? 'password' : 'text'\">\r\n\t\t\t<mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            <mat-error *ngIf=\"user.controls['passkey'].hasError('required')\">\r\n              Passkey is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"end\">\r\n\t<div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n\t\t\t<button mat-raised-button type=\"button\" (click)=\"onCancel()\">Cancel</button>\r\n\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\">Register</button>\r\n\t  </div>\r\n    </div>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n</div>\r\n<div class=\"col col-md-4\">\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/role-form/role-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/role-form/role-form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"role\" novalidate (ngSubmit)=\"onSubmit(role)\" *appHasPermission=\"'4'\">\r\n  <mat-card class=\"mat-elevation-z0\">\r\n    <mat-card-header>\r\n      <mat-card-title>Role Details</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"row\">\r\n\t    <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"ID\" formControlName=\"role_id\">\r\n            <mat-error *ngIf=\"role.controls['role_id'].hasError('required')\">\r\n              ID is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Name\" formControlName=\"role_name\">\r\n            <mat-error *ngIf=\"role.controls['role_name'].hasError('required')\">\r\n              Name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\t  <div class=\"row\">\r\n        <div class=\"col\">\r\n\t\t\t<mat-form-field class=\"full-width\">\r\n            <mat-select placeholder=\"Privileges\" formControlName=\"privileges\" multiple>\r\n              <mat-option *ngFor=\"let privilege of privileges\" [value]=\"privilege.id\">\r\n                {{ privilege.name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col\">\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"end\">\r\n\t<div class=\"row\">\r\n\t  <div class=\"col\">\r\n\t\t<button mat-raised-button type=\"button\" (click)=\"onCancel()\">Cancel</button>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\r\n\t  </div>\r\n    </div>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/roles/roles.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/roles/roles.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<mat-toolbar class=\"user-toolbar\">\r\n\t<span>All Roles</span>\r\n\t<span class=\"toolbar-spacer\"></span>\r\n    <mat-form-field class=\"search-box\">\r\n        <input matInput placeholder=\"Search Roles\" #input>\r\n    </mat-form-field>\r\n\t</mat-toolbar>\r\n\r\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n        <mat-spinner></mat-spinner>\r\n    </div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" matSortActive=\"first_name\" matSortDirection=\"asc\" matSortDisableClear>\r\n    <!-- Id Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.name}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"edit\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n\t\t<button mat-icon-button color=\"primary\" (click)=\"newRole()\">\r\n\t\t\t<mat-icon>add_circle_outline</mat-icon>\r\n\t\t</button>\r\n\t  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n\t\t<button mat-icon-button color=\"primary\">\r\n\t\t\t<mat-icon>edit_circle_outline</mat-icon>\r\n\t\t</button>\r\n\t  </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onRowClicked(row)\"></mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator\r\n      [length]=\"dataSource.total_count\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[10, 25, 50]\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-users/select-users.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-users/select-users.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z0 mat-card-outer\">\n    <mat-card-header>\n      <mat-card-title>Search and Select Users</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n\n<div>\n\t<mat-toolbar class=\"user-toolbar\">\n\t<span>Select Users</span>\n\t<span class=\"toolbar-spacer\"></span>\n    <mat-form-field class=\"search-box\">\n        <input matInput placeholder=\"Search Users\" #input>\n\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Search\">\n\t\t\t<mat-icon>search</mat-icon>\n\t\t</button>\n    </mat-form-field>\n\t\n\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Add</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n\t</mat-toolbar>\n\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n        <mat-spinner></mat-spinner>\n    </div>\n\n<div class=\"mat-elevation-z0\">\n\n<mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" matSortActive=\"first_name\" matSortDirection=\"asc\" matSortDisableClear>\n    \n\t<!-- Checkbox Column -->\n  <ng-container matColumnDef=\"select\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\">\n      </mat-checkbox>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let row; let i=index;\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row, i) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\">\n      </mat-checkbox>\n    </mat-cell>\n  </ng-container>\n\t\n\t<!-- Id Column -->\n    <ng-container matColumnDef=\"first_name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.first_name}}</mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"last_name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.last_name}}</mat-cell>\n    </ng-container>\n\t\n\t<ng-container matColumnDef=\"username\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Username</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.username}}</mat-cell>\n    </ng-container>\n\t\n\t<ng-container matColumnDef=\"active\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Active</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">{{row.active}}</mat-cell>\n    </ng-container>\n\t\n\t<ng-container matColumnDef=\"edit\">\n      <mat-header-cell *matHeaderCellDef>\n\t\t<button mat-icon-button color=\"primary\" (click)=\"newUser()\" *appHasPermission=\"'4'\">\n\t\t\t<mat-icon>add_circle_outline</mat-icon>\n\t\t</button>\n\t  </mat-header-cell>\n      <mat-cell *matCellDef=\"let row; let i=index;\">\n\t\t<button mat-icon-button color=\"primary\">\n\t\t\t<mat-icon>edit_circle_outline</mat-icon>\n\t\t</button>\n\t  </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; let i = index; columns: displayedColumns;\" (click)=\"selection.toggle(row, i)\"></mat-row>\n  </mat-table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource.total_count\"\n      [pageSize]=\"10\"\n      [pageSizeOptions]=\"[10, 25, 50]\">\n  </mat-paginator>\n</div>\n\n</div>\n\n</mat-card-content>\n<mat-card-actions align=\"end\">\n\t<div class=\"row\">\n\t  <div class=\"col\">\n\t\t<button mat-raised-button type=\"button\" (click)=\"onCancel()\">Cancel</button>\n        <button mat-raised-button [mat-dialog-close]=\"data\" cdkFocusInitial color=\"primary\" (click)=\"addSelectedUsers()\" type=\"submit\">Add</button>\n\t  </div>\n    </div>\n</mat-card-actions>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/studies/studies.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/studies/studies.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<mat-toolbar class=\"user-toolbar\">\r\n\t<span>All Studies</span>\r\n\t<span class=\"toolbar-spacer\"></span>\r\n    <mat-form-field class=\"search-box\">\r\n        <input matInput placeholder=\"Search Studies\" #input>\r\n\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Search\">\r\n\t\t\t<mat-icon>search</mat-icon>\r\n\t\t</button>\r\n    </mat-form-field>\r\n\t\r\n\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Add</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n\t</mat-toolbar>\r\n\r\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n        <mat-spinner></mat-spinner>\r\n    </div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table class=\"full-width-table\" multiTemplateDataRows [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" matSortActive=\"study_id\" matSortDirection=\"asc\" matSortDisableClear>\r\n    <!-- Id Column -->\r\n    <ng-container matColumnDef=\"study_id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Study ID</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.study_id}}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"title\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"phase\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Phase</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.phase}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"active\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Active</th>\r\n      <td mat-cell *matCellDef=\"let row\">{{row.active}}</td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"edit\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n\t\t<button mat-icon-button color=\"primary\" (click)=\"newStudy()\">\r\n\t\t\t<mat-icon>add_circle_outline</mat-icon>\r\n\t\t</button>\r\n\t  </th>\r\n      <td mat-cell *matCellDef=\"let row; let i=index;\">\r\n\t\t<button mat-icon-button color=\"primary\">\r\n\t\t\t<mat-icon>edit_circle_outline</mat-icon>\r\n\t\t</button>\r\n\t  </td>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"expandedDetail\">\r\n    <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"displayedColumns.length\">\r\n      <div class=\"example-element-detail\"\r\n           [@detailExpand]=\"row == study ? 'expanded' : 'collapsed'\">\r\n        <div class=\"example-element-diagram\">\r\n          <div class=\"example-element-position\"> {{row.phase}} </div>\r\n          <div class=\"example-element-symbol\"> {{row.study_id}} </div>\r\n          <div class=\"example-element-name\"> {{row.type}} </div>\r\n        </div>\r\n        <div class=\"example-element-description\">\r\n          {{row.description}}\r\n          <span class=\"example-element-description-attribution\"> -- More Details </span>\r\n        </div>\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"example-element-row\" [class.example-expanded-row]=\"study === row\"\r\n      (click)=\"study = study === row ? null : row\"></tr>\r\n\t<tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator #paginator\r\n      [length]=\"dataSource.total_count\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[10, 25, 50]\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/study-form/study-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/study-form/study-form.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <mat-card class=\"mat-elevation-z0\">\r\n\r\n    <mat-card-content>\r\n<mat-horizontal-stepper [linear]=\"false\" #stepper>\r\n \r\n  <mat-step>\r\n\t<form [formGroup]=\"study\" novalidate (ngSubmit)=\"onSubmit(study)\">   \r\n      <ng-template matStepLabel>Study Details</ng-template>\r\n\t  <mat-accordion class=\"example-headers-align\">\r\n\t  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\r\n\t\t<mat-expansion-panel-header>\r\n\t\t  <mat-panel-title>\r\n\t\t\tSynopsis\r\n\t\t  </mat-panel-title>\r\n\t\t  <mat-panel-description>\r\n\t\t\tStudy Protocol and basic details of the Study\r\n\t\t\t<mat-icon color=\"accent\">assessment</mat-icon>\r\n\t\t  </mat-panel-description>\r\n\t\t</mat-expansion-panel-header>\r\n\t\r\n\t\t  <div class=\"row\">\r\n\t\t  <div class=\"col\">\r\n\t\t\t  <div class=\"uploadfilecontainer\" (click)=\"addFiles()\" appDragDrop (onFileDropped)=\"uploadFile($event)\">\r\n\t\t\t  <span class=\"uploadcenter\">Drag and drop or Click to add Study Protocol Document</span>\r\n\t\t\t\t<input hidden type=\"file\" #file (change)=\"onFilesAdded()\" formControlName=\"upload_file\">\r\n\t\t\t  </div>\r\n\t\t\t  <div  class=\"files-list\" *ngFor=\"let file of files;let i=index\">\r\n\t\t\t\t<p>{{ file.name }}</p>\r\n\t\t\t  <button class=\"delete-file\" (click)=\"deleteAttachment(file)\" type=\"button\">\r\n\t\t\t\t  <mat-icon>delete</mat-icon>\r\n\t\t\t  </button>\r\n\t\t\t  </div>\r\n\t\t  </div>\r\n\t\t  </div>  \r\n\t  \r\n\t  <div class=\"row\">\r\n        <div class=\"col\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput placeholder=\"Study ID\" formControlName=\"study_id\" required>\r\n      </mat-form-field>\r\n\t  </div>\r\n\t  <div class=\"col\">\r\n      <mat-form-field class=\"full-width\">\r\n        <mat-select placeholder=\"Type\" [(ngModel)]=\"selected_type\" formControlName=\"type\">\r\n            <mat-option *ngFor=\"let type of types\" [value]=\"type.display\">\r\n                {{ type.display }}\r\n            </mat-option>\t\r\n        </mat-select>\r\n      </mat-form-field>\r\n\t  </div>\r\n\t  <div class=\"col\">\r\n      <mat-form-field class=\"full-width\">\r\n        <mat-select placeholder=\"Phase\" formControlName=\"phase\">\r\n            <mat-option *ngFor=\"let phase of phases\" [value]=\"phase.display\">\r\n                {{ phase.display }}\r\n            </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\t  </div>\r\n      </div>\r\n\t  \r\n\t  <div class=\"row\">\r\n        <div class=\"col\">\r\n      <mat-form-field class=\"full-width\">\r\n        <textarea matInput placeholder=\"Title\" formControlName=\"title\" required></textarea>\r\n      </mat-form-field>\r\n\t  </div>\r\n      </div>\r\n\t  \r\n\t  <div class=\"row\">\r\n        <div class=\"col\">\r\n      <mat-form-field class=\"full-width\">\r\n        <textarea matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\r\n      </mat-form-field>\r\n\t  </div>\r\n      </div>\r\n\t  \r\n\t  <div class=\"row\">\r\n        <div class=\"col\">\r\n      <mat-form-field class=\"full-width\">\r\n        <textarea matInput placeholder=\"Primary Objective\" formControlName=\"primary_obj\"></textarea>\r\n      </mat-form-field>\r\n\t  </div>\r\n      </div>\r\n\t  \r\n\t  <div class=\"row\">\r\n        <div class=\"col\">\r\n      <mat-form-field class=\"full-width\">\r\n        <textarea matInput placeholder=\"Secondary Objective\" formControlName=\"secondary_obj\"></textarea>\r\n      </mat-form-field>\r\n\t  </div>\r\n      </div>\r\n\t  \r\n\t  <div class=\"row\">\r\n      <div class=\"col\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Estimated Start Date\" formControlName=\"start_date\">\r\n\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t\t<mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n\t  </div>\r\n\t  <div class=\"col\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"Estimated Completion Date\" formControlName=\"end_date\">\r\n\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n\t\t\t<mat-datepicker #picker1></mat-datepicker>\r\n      </mat-form-field>\r\n\t  </div>\r\n\t  <div class=\"col\">\r\n\t  </div>\r\n      </div>\r\n\t  \r\n  <mat-action-row>\r\n\t  <button mat-button (click)=\"nextStep()\" color=\"primary\" type=\"button\"><mat-icon>arrow_downward</mat-icon>Add More Details</button>\r\n\t  <button mat-raised-button matStepperNext color=\"primary\" type=\"button\"><mat-icon>arrow_forward</mat-icon>Next</button>\r\n      \r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Population/Scope\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Study population and Geography\r\n        <mat-icon color=\"accent\">people</mat-icon>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\t<div class=\"row\">\r\n    <div class=\"col\">\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Estimated Enrollment\" formControlName=\"enrollment\">\r\n    </mat-form-field>\r\n\t</div>\r\n\t<div class=\"col\">\r\n\t <mat-form-field class=\"full-width\">\r\n      <mat-select placeholder=\"Countries\" formControlName=\"country\" multiple>\r\n              <mat-option *ngFor=\"let country of countries\" [value]=\"country.code\">\r\n                {{ country.name }}\r\n              </mat-option>\r\n            </mat-select>\r\n    </mat-form-field>\r\n\t</div>\r\n\t<div class=\"col\">\r\n\t <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Total Sites\" formControlName=\"sites\">\r\n    </mat-form-field>\r\n\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t<div class=\"col\">\r\n\t <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Sites per Country\" formControlName=\"sites_country\">\r\n    </mat-form-field>\r\n\t</div>\r\n\t<div class=\"col\">\r\n\t<mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Subjects per Site\" formControlName=\"subjects_site\">\r\n    </mat-form-field>\r\n\t</div>\r\n\t<div class=\"col\"> \r\n\t</div>\r\n\t</div>\r\n\t\r\n\r\n    <mat-action-row>\r\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\" type=\"button\"><mat-icon>arrow_downward</mat-icon>Add More Details</button>\r\n\t  <button mat-raised-button matStepperNext color=\"primary\" type=\"button\"><mat-icon>arrow_forward</mat-icon>Next</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n  \r\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Design\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Summary of Study Design details\r\n        <mat-icon color=\"accent\">list_alt</mat-icon>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\t<div class=\"row\">\r\n    <div class=\"col\">\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput disabled placeholder=\"Type\" [value]=\"selected_type\">\r\n    </mat-form-field>\r\n\t</div>\r\n\t<div class=\"col\">\r\n\t <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Interventional Model\" formControlName=\"intervention\">\r\n    </mat-form-field>\r\n\t</div>\r\n\t<div class=\"col\">\r\n\t <mat-form-field class=\"full-width\">\r\n      <mat-select placeholder=\"Masking\" formControlName=\"masking\">\r\n            <mat-option *ngFor=\"let masking of maskings\" [value]=\"masking.display\">\r\n                {{ masking.display }}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n\t</div>\r\n\t</div>\r\n\t\r\n\t\r\n\r\n    <mat-action-row>\r\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\" type=\"button\"><mat-icon>arrow_downward</mat-icon>Add More Details</button>\r\n\t  <button mat-raised-button matStepperNext color=\"primary\" type=\"button\"><mat-icon>arrow_forward</mat-icon>Next</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n  \r\n  <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Arms and Interventions\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Study Arms and their Interventions\r\n        <mat-icon color=\"accent\">table_chart</mat-icon>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\t<div class=\"row\">\r\n    <div class=\"col\">\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Arm\">\r\n    </mat-form-field>\r\n\t</div>\r\n\t<div class=\"col\">\r\n\t <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Intervention\">\r\n    </mat-form-field>\r\n\t</div>\t\r\n\t</div>\t\r\n\r\n    <mat-action-row>\r\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\" type=\"button\"><mat-icon>arrow_downward</mat-icon>Add More Details</button>\r\n\t  <button mat-raised-button matStepperNext color=\"primary\" type=\"button\"><mat-icon>arrow_forward</mat-icon>Next</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n \r\n   <mat-expansion-panel [expanded]=\"step === 4\" (opened)=\"setStep(4)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Outcome Measures\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Primary and Secondary outcome of the study\r\n        <mat-icon color=\"accent\">bubble_chart</mat-icon>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\t<div class=\"row\">\r\n    <div class=\"col\">\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Primary Outcome\">\r\n    </mat-form-field>\r\n\t</div>\r\n\t<div class=\"col\">\r\n\t <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Secondary Outcomes\">\r\n    </mat-form-field>\r\n\t</div>\t\r\n\t</div>\t\r\n\r\n    <mat-action-row>\r\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\" type=\"button\"><mat-icon>arrow_downward</mat-icon>Add More Details</button>\r\n\t  <button mat-raised-button matStepperNext color=\"primary\" type=\"button\"><mat-icon>arrow_forward</mat-icon>Next</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n  \r\n   <mat-expansion-panel [expanded]=\"step === 5\" (opened)=\"setStep(5)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Eligibility Criteria\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Inclusion and Exclusion criteria of the study\r\n        <mat-icon color=\"accent\">done_all</mat-icon>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\t<div class=\"row\">\r\n    <div class=\"col\">\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Inclusion Criteria\">\r\n    </mat-form-field>\r\n\t</div>\r\n\t<div class=\"col\">\r\n\t <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Exclusion Criteria\">\r\n    </mat-form-field>\r\n\t</div>\t\r\n\t</div>\t\r\n\r\n    <mat-action-row>\r\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\" type=\"button\"><mat-icon>arrow_downward</mat-icon>Add More Details</button>\r\n\t  <button mat-raised-button matStepperNext color=\"primary\" type=\"button\"><mat-icon>arrow_forward</mat-icon>Next</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n  \r\n   <mat-expansion-panel [expanded]=\"step === 6\" (opened)=\"setStep(6)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Contacts and Locations\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Sponsor, CRO and Investigator details\r\n        <mat-icon color=\"accent\">contacts</mat-icon>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\t<div class=\"row\">\r\n    <div class=\"col\">\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Sponsor\">\r\n    </mat-form-field>\r\n\t</div>\r\n\t<div class=\"col\">\r\n\t <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Coordinating Investigator\">\r\n    </mat-form-field>\r\n\t</div>\t\r\n\t</div>\t\r\n\r\n    <mat-action-row>\r\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\" type=\"button\"><mat-icon>stop</mat-icon>End</button>\r\n\t  <button mat-raised-button matStepperNext color=\"primary\" type=\"submit\"><mat-icon>arrow_forward</mat-icon>Next</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n  \r\n  \r\n  </mat-accordion>\r\n  </form>\r\n  </mat-step>\r\n  \r\n  <mat-step [stepControl]=\"secondFormGroup\">\r\n    <form [formGroup]=\"secondFormGroup\" novalidate (ngSubmit)=\"onSubmit(study)\">\r\n    <ng-template matStepLabel>Identify</ng-template>\r\n\t  \r\n\t<app-investigators></app-investigators>\r\n\t  \r\n\t<p></p>\r\n\t  \r\n\t  <div align=\"end\">\r\n\t<div class=\"row\">\r\n\t  <div class=\"col\">\r\n\t\t<button mat-raised-button (click)=\"stepper.reset()\">Reset</button>&nbsp;&nbsp;\r\n\t\t<button mat-raised-button matStepperPrevious type=\"button\">Back</button>&nbsp;&nbsp;\r\n\t\t<button mat-raised-button matStepperNext color=\"primary\" type=\"button\">Next</button>\r\n\t\t\r\n\t  </div>\r\n    </div>\r\n </div>\r\n    </form>\r\n  </mat-step>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Select</ng-template>\r\n\t<div class=\"row\">\r\n        <div class=\"col\">\r\n    Selection based on Feasibility.\r\n\t\r\n\t</div>\r\n    </div>\r\n\t<p></p>\r\n\t<div align=\"end\">\r\n\t<div class=\"row\">\r\n\t  <div class=\"col\">\r\n\t\t<button mat-raised-button (click)=\"stepper.reset()\">Reset</button>&nbsp;&nbsp;\r\n\t\t<button mat-raised-button matStepperPrevious type=\"button\">Back</button>&nbsp;&nbsp;\r\n\t\t<button mat-raised-button matStepperNext color=\"primary\" type=\"button\">Next</button>\t\r\n\t  </div>\r\n    </div>\r\n </div>\r\n  </mat-step>\r\n  \r\n  \r\n  <mat-step>\r\n    <ng-template matStepLabel>Activate</ng-template>\r\n\t<div class=\"row\">\r\n        <div class=\"col\">\r\n    Activate the Sites.\r\n\r\n\t</div>\r\n    </div>\r\n\t<div align=\"end\">\r\n\t<div class=\"row\">\r\n\t  <div class=\"col\">\r\n\t\t<button mat-raised-button (click)=\"stepper.reset()\">Reset</button>&nbsp;&nbsp;\r\n\t\t<button mat-raised-button matStepperPrevious type=\"button\">Back</button>&nbsp;&nbsp;\r\n\t\t<button mat-raised-button matStepperNext color=\"primary\" type=\"button\">Next</button>\t\r\n\t  </div>\r\n    </div>\r\n </div>\r\n  </mat-step>\r\n\r\n\r\n  \r\n</mat-horizontal-stepper>\r\n</mat-card-content>\r\n\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tenants/tenants.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tenants/tenants.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-form/user-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-form/user-form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"user\" novalidate (ngSubmit)=\"onSubmit(user)\" *appHasPermission=\"'4'\">\r\n  <mat-card class=\"mat-elevation-z0\">\r\n    <mat-card-header>\r\n      <mat-card-title>User Details</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Username\" formControlName=\"username\">\r\n            <mat-error *ngIf=\"user.controls['username'].hasError('required')\">\r\n              Username is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Passkey\" formControlName=\"passkey\"  [type]=\"hide ? 'password' : 'text'\">\r\n\t\t\t<mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            <mat-error *ngIf=\"user.controls['passkey'].hasError('required')\">\r\n              Passkey is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\t  <div class=\"row\">\r\n        <div class=\"col\">\r\n\t\t\t<mat-form-field class=\"full-width\">\r\n            <mat-select placeholder=\"Roles\" formControlName=\"roles\" multiple>\r\n              <mat-option *ngFor=\"let role of roles\" [value]=\"role.id\">\r\n                {{ role.name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"First name\" formControlName=\"first_name\">\r\n            <mat-error *ngIf=\"user.controls['first_name'].hasError('required')\">\r\n              First name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Last name\" formControlName=\"last_name\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <textarea matInput placeholder=\"Address\" formControlName=\"address\"></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"City\" formControlName=\"city\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <mat-select placeholder=\"State\" formControlName=\"state\">\r\n              <mat-option *ngFor=\"let state of states\" [value]=\"state.abbreviation\">\r\n                {{ state.name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" type=\"number\" formControlName=\"postalCode\">\r\n            <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\t\t<div class=\"col\">\r\n          <mat-form-field class=\"full-width\">\r\n            <mat-select placeholder=\"Country\" formControlName=\"country\">\r\n              <mat-option *ngFor=\"let country of countries\" [value]=\"country.code\">\r\n                {{ country.name }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"end\">\r\n\t<div class=\"row\">\r\n\t  <div class=\"col\">\r\n\t\t<button mat-raised-button type=\"button\" (click)=\"onCancel()\">Cancel</button>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\r\n\t  </div>\r\n    </div>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<mat-toolbar class=\"user-toolbar\">\r\n\t<span>All Users</span>\r\n\t<span class=\"toolbar-spacer\"></span>\r\n    <mat-form-field class=\"search-box\">\r\n        <input matInput placeholder=\"Search Users\" #input>\r\n\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Search\">\r\n\t\t\t<mat-icon>search</mat-icon>\r\n\t\t</button>\r\n    </mat-form-field>\r\n\t\r\n\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Add</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n\t</mat-toolbar>\r\n\r\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\r\n        <mat-spinner></mat-spinner>\r\n    </div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <mat-table class=\"full-width-table\" [dataSource]=\"dataSource\" matSort aria-label=\"Elements\" matSortActive=\"first_name\" matSortDirection=\"asc\" matSortDisableClear>\r\n\t\r\n\t<!-- Id Column -->\r\n    <ng-container matColumnDef=\"first_name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.first_name}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"last_name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.last_name}}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"username\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Username</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.username}}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"active\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Active</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.active}}</mat-cell>\r\n    </ng-container>\r\n\t\r\n\t<ng-container matColumnDef=\"edit\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n\t\t<button mat-icon-button color=\"primary\" (click)=\"newUser()\" *appHasPermission=\"'4'\">\r\n\t\t\t<mat-icon>add_circle_outline</mat-icon>\r\n\t\t</button>\r\n\t  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n\t\t<button mat-icon-button color=\"primary\">\r\n\t\t\t<mat-icon>edit_circle_outline</mat-icon>\r\n\t\t</button>\r\n\t  </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; let i = index; columns: displayedColumns;\" (click)=\"onRowClicked(row, i);\"></mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator\r\n      [length]=\"dataSource.total_count\"\r\n      [pageSize]=\"10\"\r\n      [pageSizeOptions]=\"[10, 25, 50]\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verifyotp/verifyotp.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verifyotp/verifyotp.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n<div class=\"row\">\r\n<div class=\"col col-md-4\">\r\n</div>\r\n<div class=\"col col-md-4\">\r\n<form [formGroup]=\"user\" novalidate (ngSubmit)=\"onSubmit(user)\">\r\n  <mat-card class=\"login-card mat-elevation-z6\">\r\n    <mat-card-header>\r\n      <mat-card-title>Verify OTP</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>      \r\n\t  <div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input matInput placeholder=\"Enter OTP\" formControlName=\"otp\" type=\"password\">\r\n            <mat-error *ngIf=\"user.controls['otp'].hasError('required')\">\r\n              OTP is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"end\">\r\n\t<div class=\"row\">\t  \r\n        <div class=\"col card-field\">\r\n\t\t\t<button mat-raised-button type=\"button\" (click)=\"onCancel()\">Cancel</button>\r\n\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\">Verify OTP</button>\r\n\t  </div>\r\n    </div>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n</div>\r\n<div class=\"col col-md-4\">\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-chart/view-chart.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-chart/view-chart.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [innerHTML]=\"transformed_html\" class=\"transformed\">\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/roles/roles.component */ "./src/app/components/roles/roles.component.ts");
/* harmony import */ var _components_permissions_permissions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/permissions/permissions.component */ "./src/app/components/permissions/permissions.component.ts");
/* harmony import */ var _services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/ensure-authenticated.service */ "./src/app/services/ensure-authenticated.service.ts");
/* harmony import */ var _services_login_redirect_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/login-redirect.service */ "./src/app/services/login-redirect.service.ts");
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-form/user-form.component */ "./src/app/components/user-form/user-form.component.ts");
/* harmony import */ var _components_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/role-form/role-form.component */ "./src/app/components/role-form/role-form.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_verifyotp_verifyotp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/verifyotp/verifyotp.component */ "./src/app/components/verifyotp/verifyotp.component.ts");
/* harmony import */ var _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/charts/charts.component */ "./src/app/components/charts/charts.component.ts");
/* harmony import */ var _components_new_chart_new_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/new-chart/new-chart.component */ "./src/app/components/new-chart/new-chart.component.ts");
/* harmony import */ var _components_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/view-chart/view-chart.component */ "./src/app/components/view-chart/view-chart.component.ts");
/* harmony import */ var _components_register_business_register_business_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register-business/register-business.component */ "./src/app/components/register-business/register-business.component.ts");
/* harmony import */ var _components_studies_studies_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/studies/studies.component */ "./src/app/components/studies/studies.component.ts");
/* harmony import */ var _components_study_form_study_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/study-form/study-form.component */ "./src/app/components/study-form/study-form.component.ts");
/* harmony import */ var _components_investigators_investigators_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/investigators/investigators.component */ "./src/app/components/investigators/investigators.component.ts");
/* harmony import */ var _components_investigator_form_investigator_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/investigator-form/investigator-form.component */ "./src/app/components/investigator-form/investigator-form.component.ts");
/* harmony import */ var _components_facilities_facilities_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/facilities/facilities.component */ "./src/app/components/facilities/facilities.component.ts");
/* harmony import */ var _components_form_buildr_form_buildr_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/form-buildr/form-buildr.component */ "./src/app/components/form-buildr/form-buildr.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_qa_review_qa_review_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/qa-review/qa-review.component */ "./src/app/components/qa-review/qa-review.component.ts");
/* harmony import */ var _components_adjudication_adjudication_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/adjudication/adjudication.component */ "./src/app/components/adjudication/adjudication.component.ts");
/* harmony import */ var _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/tenants/tenants.component */ "./src/app/components/tenants/tenants.component.ts");
/* harmony import */ var _components_abstraction_abstraction_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/abstraction/abstraction.component */ "./src/app/components/abstraction/abstraction.component.ts");
/* harmony import */ var _components_abstract_form_abstract_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/abstract-form/abstract-form.component */ "./src/app/components/abstract-form/abstract-form.component.ts");
/* harmony import */ var _components_chart_detail_chart_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/chart-detail/chart-detail.component */ "./src/app/components/chart-detail/chart-detail.component.ts");
/* harmony import */ var _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/project-form/project-form.component */ "./src/app/components/project-form/project-form.component.ts");

































var routes = [
    { path: '', redirectTo: '/login-page', pathMatch: 'full' },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"] },
    { path: 'verifyotp', component: _components_verifyotp_verifyotp_component__WEBPACK_IMPORTED_MODULE_14__["VerifyotpComponent"] },
    { path: 'register_business', component: _components_register_business_register_business_component__WEBPACK_IMPORTED_MODULE_18__["RegisterBusinessComponent"] },
    { path: 'login-page', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], canActivate: [_services_login_redirect_service__WEBPACK_IMPORTED_MODULE_10__["LoginRedirectService"]] },
    { path: 'main', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'roles', component: _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_7__["RolesComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'roles/new_role', component: _components_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_12__["RoleFormComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'permissions', component: _components_permissions_permissions_component__WEBPACK_IMPORTED_MODULE_8__["PermissionsComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'users/new_user', component: _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_11__["UserFormComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'charts', component: _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_15__["ChartsComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'charts/new_chart', component: _components_new_chart_new_chart_component__WEBPACK_IMPORTED_MODULE_16__["NewChartComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'charts/view_chart', component: _components_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_17__["ViewChartComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'charts/chart_detail', component: _components_chart_detail_chart_detail_component__WEBPACK_IMPORTED_MODULE_31__["ChartDetailComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'studies', component: _components_studies_studies_component__WEBPACK_IMPORTED_MODULE_19__["StudiesComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'studies/new_study', component: _components_study_form_study_form_component__WEBPACK_IMPORTED_MODULE_20__["StudyFormComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_25__["ProjectsComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'projects/new_project', component: _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_32__["ProjectFormComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'abstraction', component: _components_abstraction_abstraction_component__WEBPACK_IMPORTED_MODULE_29__["AbstractionComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'abstraction/new_abstraction', component: _components_abstract_form_abstract_form_component__WEBPACK_IMPORTED_MODULE_30__["AbstractFormComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'qa-review', component: _components_qa_review_qa_review_component__WEBPACK_IMPORTED_MODULE_26__["QaReviewComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'qa-review/new_abstraction', component: _components_abstract_form_abstract_form_component__WEBPACK_IMPORTED_MODULE_30__["AbstractFormComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'adjudication', component: _components_adjudication_adjudication_component__WEBPACK_IMPORTED_MODULE_27__["AdjudicationComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'tenants', component: _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_28__["TenantsComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'register_business', component: _components_register_business_register_business_component__WEBPACK_IMPORTED_MODULE_18__["RegisterBusinessComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'investigators', component: _components_investigators_investigators_component__WEBPACK_IMPORTED_MODULE_21__["InvestigatorsComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'investigators/new_investigator', component: _components_investigator_form_investigator_form_component__WEBPACK_IMPORTED_MODULE_22__["InvestigatorFormComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'facilities', component: _components_facilities_facilities_component__WEBPACK_IMPORTED_MODULE_23__["FacilitiesComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
            { path: 'form-buildr', component: _components_form_buildr_form_buildr_component__WEBPACK_IMPORTED_MODULE_24__["FormBuildrComponent"], canActivate: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_9__["EnsureAuthenticated"]] },
        ]
    },
    { path: '**', redirectTo: '/login-page', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Codon';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/roles/roles.component */ "./src/app/components/roles/roles.component.ts");
/* harmony import */ var _components_permissions_permissions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/permissions/permissions.component */ "./src/app/components/permissions/permissions.component.ts");
/* harmony import */ var _services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/ensure-authenticated.service */ "./src/app/services/ensure-authenticated.service.ts");
/* harmony import */ var _services_login_redirect_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/login-redirect.service */ "./src/app/services/login-redirect.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user-form/user-form.component */ "./src/app/components/user-form/user-form.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_register_business_register_business_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register-business/register-business.component */ "./src/app/components/register-business/register-business.component.ts");
/* harmony import */ var _components_verifyotp_verifyotp_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/verifyotp/verifyotp.component */ "./src/app/components/verifyotp/verifyotp.component.ts");
/* harmony import */ var _components_studies_studies_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/studies/studies.component */ "./src/app/components/studies/studies.component.ts");
/* harmony import */ var _components_study_form_study_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/study-form/study-form.component */ "./src/app/components/study-form/study-form.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _drag_drop_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./drag-drop.directive */ "./src/app/drag-drop.directive.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/charts/charts.component */ "./src/app/components/charts/charts.component.ts");
/* harmony import */ var _components_new_chart_new_chart_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/new-chart/new-chart.component */ "./src/app/components/new-chart/new-chart.component.ts");
/* harmony import */ var _components_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/view-chart/view-chart.component */ "./src/app/components/view-chart/view-chart.component.ts");
/* harmony import */ var _has_permission_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./has-permission.directive */ "./src/app/has-permission.directive.ts");
/* harmony import */ var _components_investigators_investigators_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/investigators/investigators.component */ "./src/app/components/investigators/investigators.component.ts");
/* harmony import */ var _components_investigator_form_investigator_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/investigator-form/investigator-form.component */ "./src/app/components/investigator-form/investigator-form.component.ts");
/* harmony import */ var _components_facilities_facilities_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/facilities/facilities.component */ "./src/app/components/facilities/facilities.component.ts");
/* harmony import */ var _components_form_buildr_form_buildr_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/form-buildr/form-buildr.component */ "./src/app/components/form-buildr/form-buildr.component.ts");
/* harmony import */ var _components_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/role-form/role-form.component */ "./src/app/components/role-form/role-form.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_qa_review_qa_review_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/qa-review/qa-review.component */ "./src/app/components/qa-review/qa-review.component.ts");
/* harmony import */ var _components_adjudication_adjudication_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/adjudication/adjudication.component */ "./src/app/components/adjudication/adjudication.component.ts");
/* harmony import */ var _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/tenants/tenants.component */ "./src/app/components/tenants/tenants.component.ts");
/* harmony import */ var _components_abstraction_abstraction_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/abstraction/abstraction.component */ "./src/app/components/abstraction/abstraction.component.ts");
/* harmony import */ var _components_abstraction_form_abstraction_form_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/abstraction-form/abstraction-form.component */ "./src/app/components/abstraction-form/abstraction-form.component.ts");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ngx-formly/material */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material.js");
/* harmony import */ var _components_abstract_form_abstract_form_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/abstract-form/abstract-form.component */ "./src/app/components/abstract-form/abstract-form.component.ts");
/* harmony import */ var _components_abstract_form_panel_wrapper_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/abstract-form/panel-wrapper.component */ "./src/app/components/abstract-form/panel-wrapper.component.ts");
/* harmony import */ var _components_abstract_form_stepper_type__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/abstract-form/stepper.type */ "./src/app/components/abstract-form/stepper.type.ts");
/* harmony import */ var _components_chart_detail_chart_detail_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/chart-detail/chart-detail.component */ "./src/app/components/chart-detail/chart-detail.component.ts");
/* harmony import */ var _components_abstract_form_row_wrapper_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/abstract-form/row-wrapper.component */ "./src/app/components/abstract-form/row-wrapper.component.ts");
/* harmony import */ var _components_abstract_form_accordion_wrapper_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/abstract-form/accordion-wrapper.component */ "./src/app/components/abstract-form/accordion-wrapper.component.ts");
/* harmony import */ var _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @ngx-formly/material/datepicker */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material-datepicker.js");
/* harmony import */ var _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/project-form/project-form.component */ "./src/app/components/project-form/project-form.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm5/ng2-pdf-viewer.js");
/* harmony import */ var _components_abstract_form_addons_wrapper__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/abstract-form/addons.wrapper */ "./src/app/components/abstract-form/addons.wrapper.ts");
/* harmony import */ var _components_abstract_form_addons_extension__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/abstract-form/addons.extension */ "./src/app/components/abstract-form/addons.extension.ts");
/* harmony import */ var _components_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/select-users/select-users.component */ "./src/app/components/select-users/select-users.component.ts");

























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
                _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_14__["RolesComponent"],
                _components_permissions_permissions_component__WEBPACK_IMPORTED_MODULE_15__["PermissionsComponent"],
                _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_19__["UserFormComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _components_register_business_register_business_component__WEBPACK_IMPORTED_MODULE_21__["RegisterBusinessComponent"],
                _components_verifyotp_verifyotp_component__WEBPACK_IMPORTED_MODULE_22__["VerifyotpComponent"],
                _components_studies_studies_component__WEBPACK_IMPORTED_MODULE_23__["StudiesComponent"],
                _components_study_form_study_form_component__WEBPACK_IMPORTED_MODULE_24__["StudyFormComponent"],
                _drag_drop_directive__WEBPACK_IMPORTED_MODULE_26__["DragDropDirective"],
                _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_28__["ChartsComponent"],
                _components_new_chart_new_chart_component__WEBPACK_IMPORTED_MODULE_29__["NewChartComponent"],
                _components_view_chart_view_chart_component__WEBPACK_IMPORTED_MODULE_30__["ViewChartComponent"],
                _has_permission_directive__WEBPACK_IMPORTED_MODULE_31__["HasPermissionDirective"],
                _components_investigators_investigators_component__WEBPACK_IMPORTED_MODULE_32__["InvestigatorsComponent"],
                _components_investigator_form_investigator_form_component__WEBPACK_IMPORTED_MODULE_33__["InvestigatorFormComponent"],
                _components_facilities_facilities_component__WEBPACK_IMPORTED_MODULE_34__["FacilitiesComponent"],
                _components_form_buildr_form_buildr_component__WEBPACK_IMPORTED_MODULE_35__["FormBuildrComponent"],
                _components_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_36__["RoleFormComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_37__["ProjectsComponent"],
                _components_qa_review_qa_review_component__WEBPACK_IMPORTED_MODULE_38__["QaReviewComponent"],
                _components_adjudication_adjudication_component__WEBPACK_IMPORTED_MODULE_39__["AdjudicationComponent"],
                _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_40__["TenantsComponent"],
                _components_abstraction_abstraction_component__WEBPACK_IMPORTED_MODULE_41__["AbstractionComponent"],
                _components_abstraction_form_abstraction_form_component__WEBPACK_IMPORTED_MODULE_42__["AbstractionFormComponent"],
                _components_abstract_form_abstract_form_component__WEBPACK_IMPORTED_MODULE_45__["AbstractFormComponent"],
                _components_abstract_form_panel_wrapper_component__WEBPACK_IMPORTED_MODULE_46__["PanelWrapperComponent"],
                _components_abstract_form_stepper_type__WEBPACK_IMPORTED_MODULE_47__["FormlyFieldStepper"],
                _components_chart_detail_chart_detail_component__WEBPACK_IMPORTED_MODULE_48__["ChartDetailComponent"],
                _components_abstract_form_row_wrapper_component__WEBPACK_IMPORTED_MODULE_49__["RowWrapperComponent"],
                _components_abstract_form_accordion_wrapper_component__WEBPACK_IMPORTED_MODULE_50__["AccordionWrapperComponent"],
                _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_52__["ProjectFormComponent"],
                _components_abstract_form_addons_wrapper__WEBPACK_IMPORTED_MODULE_54__["FormlyWrapperAddons"],
                _components_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_56__["SelectUsersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_53__["PdfViewerModule"],
                _ngx_formly_material_datepicker__WEBPACK_IMPORTED_MODULE_51__["FormlyMatDatepickerModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_43__["FormlyModule"].forRoot({
                    extras: { lazyRender: true },
                    validationMessages: [
                        { name: 'required', message: 'This field is required' },
                    ],
                    types: [
                        { name: 'stepper', component: _components_abstract_form_stepper_type__WEBPACK_IMPORTED_MODULE_47__["FormlyFieldStepper"] },
                    ],
                    wrappers: [
                        { name: 'panel', component: _components_abstract_form_panel_wrapper_component__WEBPACK_IMPORTED_MODULE_46__["PanelWrapperComponent"] },
                        { name: 'rowwrap', component: _components_abstract_form_row_wrapper_component__WEBPACK_IMPORTED_MODULE_49__["RowWrapperComponent"] },
                        { name: 'accwrap', component: _components_abstract_form_accordion_wrapper_component__WEBPACK_IMPORTED_MODULE_50__["AccordionWrapperComponent"] },
                        { name: 'addons', component: _components_abstract_form_addons_wrapper__WEBPACK_IMPORTED_MODULE_54__["FormlyWrapperAddons"] },
                    ],
                    extensions: [
                        { name: 'addons', extension: { onPopulate: _components_abstract_form_addons_extension__WEBPACK_IMPORTED_MODULE_55__["addonsExtension"] } },
                    ],
                }),
                _ngx_formly_material__WEBPACK_IMPORTED_MODULE_44__["FormlyMaterialModule"]
            ],
            entryComponents: [_components_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_56__["SelectUsersComponent"]],
            providers: [_services_ensure_authenticated_service__WEBPACK_IMPORTED_MODULE_16__["EnsureAuthenticated"],
                _services_login_redirect_service__WEBPACK_IMPORTED_MODULE_17__["LoginRedirectService"],
                _services_upload_service__WEBPACK_IMPORTED_MODULE_18__["UploadService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/abstract-form/abstract-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/abstract-form/abstract-form.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".display-flex { \r\n  display: flex;\r\n }\r\n\r\n.flex-1 { flex: 1; }\r\n\r\n.flex-2 { flex: 2; }\r\n\r\n.flex-3 { flex: 3; }\r\n\r\n.flex-4 { flex: 4; }\r\n\r\n.flex-5 { flex: 5; }\r\n\r\n.flex-6 { flex: 6; }\r\n\r\n[class*=\"flex-\"] {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n[class*=\"flex-\"]:first-child {\r\n  padding-left: 0;\r\n}\r\n\r\n[class*=\"flex-\"]:nth-last-child(2) {\r\n  padding-right: 0;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.col {\r\n  flex: 1;\r\n}\r\n\r\n.col:last-child {\r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.mat-accordion .mat-expansion-panel:not(.mat-expanded),\r\n.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {\r\n   margin-top: 7px;\r\n   margin-bottom: 7px;\r\n}\r\n\r\n.pdf-view{\r\n  height: 750px;\r\n  position:relative;\r\n}\r\n\r\nbutton.topcorner{\r\n   position:absolute;\r\n   top:0;\r\n   right:20px;\r\n   z-index: 1;\r\n}\r\n\r\n.nlp-color{\r\n  color: #ff4081;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fic3RyYWN0LWZvcm0vYWJzdHJhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkOztBQUVELFVBQVUsT0FBTyxFQUFFOztBQUVuQixVQUFVLE9BQU8sRUFBRTs7QUFFbkIsVUFBVSxPQUFPLEVBQUU7O0FBRW5CLFVBQVUsT0FBTyxFQUFFOztBQUVuQixVQUFVLE9BQU8sRUFBRTs7QUFFbkIsVUFBVSxPQUFPLEVBQUU7O0FBRW5CO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTs7R0FFRyxlQUFlO0dBQ2Ysa0JBQWtCO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtHQUNHLGlCQUFpQjtHQUNqQixLQUFLO0dBQ0wsVUFBVTtHQUNWLFVBQVU7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWJzdHJhY3QtZm9ybS9hYnN0cmFjdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1mbGV4IHsgXHJcbiAgZGlzcGxheTogZmxleDtcclxuIH1cclxuXHJcbi5mbGV4LTEgeyBmbGV4OiAxOyB9XHJcblxyXG4uZmxleC0yIHsgZmxleDogMjsgfVxyXG5cclxuLmZsZXgtMyB7IGZsZXg6IDM7IH1cclxuXHJcbi5mbGV4LTQgeyBmbGV4OiA0OyB9XHJcblxyXG4uZmxleC01IHsgZmxleDogNTsgfVxyXG5cclxuLmZsZXgtNiB7IGZsZXg6IDY7IH1cclxuXHJcbltjbGFzcyo9XCJmbGV4LVwiXSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbltjbGFzcyo9XCJmbGV4LVwiXTpmaXJzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG5bY2xhc3MqPVwiZmxleC1cIl06bnRoLWxhc3QtY2hpbGQoMikge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNvbDpsYXN0LWNoaWxkIHtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtYWNjb3JkaW9uIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSxcclxuLm1hdC1hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmcpIHtcclxuICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi5wZGYtdmlld3tcclxuICBoZWlnaHQ6IDc1MHB4O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG5idXR0b24udG9wY29ybmVye1xyXG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgdG9wOjA7XHJcbiAgIHJpZ2h0OjIwcHg7XHJcbiAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5ubHAtY29sb3J7XHJcbiAgY29sb3I6ICNmZjQwODE7XHJcbn1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/components/abstract-form/abstract-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/abstract-form/abstract-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: AbstractFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormComponent", function() { return AbstractFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var AbstractFormComponent = /** @class */ (function () {
    function AbstractFormComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.abstraction = null;
        this.step = 0;
        this.panelOpenState = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.model = {};
        this.options = {};
        this.showChartDetail = true;
    }
    AbstractFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(JSON.stringify(this.fields));
        //console.log(JSON.parse(template));
        this.route.queryParams.subscribe(function (queryParams) {
            //console.log(queryParams);
            _this.abstract_id = queryParams['abstract_id'];
            _this.viewfilename = queryParams['filename'];
            _this.from_component = queryParams['t'];
        });
        this.getTemplate(this.abstract_id);
        this.viewAbstractionDetail(this.abstract_id);
        this.viewChart(this.viewfilename);
    };
    AbstractFormComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    AbstractFormComponent.prototype.getTemplate = function (abstract_id) {
        var _this = this;
        this.service.getTemplate(localStorage.getItem('token'), abstract_id)
            .subscribe(function (data) {
            console.log(data);
            _this.fields = data.template;
        });
    };
    AbstractFormComponent.prototype.submit = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        var username = decodedJwtData.identity.username;
        //this.abstraction = {"abstract_id": null, "abstract_date": null, "abstract_by": username,"chart_id": null, "project_id": null, "data": this.model, "nlp_data": null};
        //let abstract_data = JSON.stringify(this.model);
        //instead of this.model using form.value to have all fields
        this.abstraction.abstract_by = username;
        //console.log(this.model);
        //console.log(this.form.value);
        //console.log(this.abstraction.data);
        //console.log(this.abstraction);
        if (this.form.valid) {
            //alert(JSON.stringify(this.model));
            if (this.from_component == 'abs') { //abstraction
                this.abstraction.data = JSON.stringify(this.form.value);
                this.service.updateAbstraction(localStorage.getItem('token'), this.abstraction)
                    .subscribe(function (data) {
                    _this.router.navigateByUrl('/main/abstraction');
                });
            }
            else { //qa review
                this.abstraction.qa_data = JSON.stringify(this.form.value);
                this.service.updateQA(localStorage.getItem('token'), this.abstraction)
                    .subscribe(function (data) {
                    _this.router.navigateByUrl('/main/qa-review');
                });
            }
        }
    };
    AbstractFormComponent.prototype.viewAbstractionDetail = function (abstract_id) {
        var _this = this;
        this.service.viewAbstractionDetail(localStorage.getItem('token'), abstract_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return console.log('Success'); }))
            .subscribe(function (data) {
            //this.created_date = data.astract.created_date.$date;
            //delete data.abstract['created_date'];
            //data.chart['fail_reason'] = '';
            //data.chart['review_comments'] = '';
            //this.chart.setValue(data.chart);
            _this.abstraction = data.abstraction;
            if (data.abstraction.data != null && _this.from_component == 'abs') {
                _this.model = data.abstraction.data;
            }
            else if (data.abstraction.qa_data != null) {
                _this.model = data.abstraction.qa_data;
            }
        });
    };
    AbstractFormComponent.prototype.viewChart = function (filename) {
        var _this = this;
        this.service.downloadChart(localStorage.getItem('token'), filename).subscribe(function (response) { return _this.viewFile(response, "application/pdf"); }),
            function (error) { return console.log('Error downloading the file.'); },
            function () { return console.info('OK'); };
    };
    AbstractFormComponent.prototype.viewFile = function (data, type) {
        var blob = new Blob([data], { type: type });
        this.src = window.URL.createObjectURL(blob);
        //window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=800");
    };
    AbstractFormComponent.prototype.previewChart = function () {
        var _this = this;
        this.service.downloadChart(localStorage.getItem('token'), this.viewfilename).subscribe(function (response) { return _this.previewFile(response, "application/pdf"); }),
            function (error) { return console.log('Error downloading the file.'); },
            function () { return console.info('OK'); };
        //window.open('/main/charts/view_chart?filename='+filename, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=800")
    };
    AbstractFormComponent.prototype.previewFile = function (data, type) {
        this.showChartDetail = false;
        var blob = new Blob([data], { type: type });
        var url = window.URL.createObjectURL(blob);
        window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=800");
    };
    AbstractFormComponent.prototype.splitView = function () {
        this.showChartDetail = true;
    };
    AbstractFormComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    AbstractFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-abstract-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./abstract-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/abstract-form/abstract-form.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./abstract-form.component.css */ "./src/app/components/abstract-form/abstract-form.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AbstractFormComponent);
    return AbstractFormComponent;
}());



/***/ }),

/***/ "./src/app/components/abstract-form/accordion-wrapper.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/abstract-form/accordion-wrapper.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccordionWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionWrapperComponent", function() { return AccordionWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var AccordionWrapperComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccordionWrapperComponent, _super);
    function AccordionWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'formly-accordion-panel',
            template: "\n    \n    <mat-accordion class=\"example-headers-align\">\n        <ng-container #fieldComponent></ng-container>\n    </mat-accordion>\n    \n  ",
        })
    ], AccordionWrapperComponent);
    return AccordionWrapperComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"]));



/***/ }),

/***/ "./src/app/components/abstract-form/addons.extension.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/abstract-form/addons.extension.ts ***!
  \**************************************************************/
/*! exports provided: addonsExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addonsExtension", function() { return addonsExtension; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function addonsExtension(field) {
    if (!field.templateOptions || (field.wrappers && field.wrappers.indexOf('addons') !== -1)) {
        return;
    }
    if (field.templateOptions.addonLeft || field.templateOptions.addonRight) {
        field.wrappers = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]((field.wrappers || []), ['addons']);
    }
}


/***/ }),

/***/ "./src/app/components/abstract-form/addons.wrapper.ts":
/*!************************************************************!*\
  !*** ./src/app/components/abstract-form/addons.wrapper.ts ***!
  \************************************************************/
/*! exports provided: FormlyWrapperAddons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyWrapperAddons", function() { return FormlyWrapperAddons; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var FormlyWrapperAddons = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FormlyWrapperAddons, _super);
    function FormlyWrapperAddons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyWrapperAddons.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.matPrefix) {
            Promise.resolve().then(function () { return _this.to.prefix = _this.matPrefix; });
        }
        if (this.matSuffix) {
            Promise.resolve().then(function () { return _this.to.suffix = _this.matSuffix; });
        }
    };
    FormlyWrapperAddons.prototype.addonRightClick = function ($event) {
        if (this.to.addonRight.onClick) {
            this.to.addonRight.onClick(this.to, this, $event);
        }
    };
    FormlyWrapperAddons.prototype.addonLeftClick = function ($event) {
        if (this.to.addonLeft.onClick) {
            this.to.addonLeft.onClick(this.to, this, $event);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matPrefix', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], FormlyWrapperAddons.prototype, "matPrefix", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matSuffix', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], FormlyWrapperAddons.prototype, "matSuffix", void 0);
    FormlyWrapperAddons = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'formly-wrapper-addons',
            template: "\n  <ng-template #matPrefix>\n    <span\n      *ngIf=\"to.addonLeft\"\n      [ngStyle]=\"{cursor: to.addonLeft.onClick ? 'pointer' : 'inherit'}\"\n      (click)=\"addonLeftClick($event)\"\n    >\n      <mat-icon *ngIf=\"to.addonLeft.icon\">{{ to.addonLeft.icon }}</mat-icon>&nbsp;\n      <span *ngIf=\"to.addonLeft.text\">{{ to.addonLeft.text }}</span>&nbsp;\n    </span>\n  </ng-template>\n\n  <ng-container #fieldComponent></ng-container>\n\n  <ng-template #matSuffix>\n    <span\n      *ngIf=\"to.addonRight\"\n      [ngStyle]=\"{cursor: to.addonRight.onClick ? 'pointer' : 'inherit'}\"\n      (click)=\"addonRightClick($event)\"\n    >\n      &nbsp;<mat-icon color=\"accent\" *ngIf=\"to.addonRight.icon\">{{ to.addonRight.icon }}</mat-icon>\n      &nbsp;<span *ngIf=\"to.addonRight.text\">{{ to.addonRight.text }}</span>\n    </span>\n  </ng-template>\n  ",
        })
    ], FormlyWrapperAddons);
    return FormlyWrapperAddons;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"]));



/***/ }),

/***/ "./src/app/components/abstract-form/panel-wrapper.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/abstract-form/panel-wrapper.component.ts ***!
  \*********************************************************************/
/*! exports provided: PanelWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelWrapperComponent", function() { return PanelWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var PanelWrapperComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PanelWrapperComponent, _super);
    function PanelWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'formly-wrapper-panel',
            template: "\n    \n    <mat-expansion-panel  (opened)=\"panelOpenState = true\" hideToggle>\n    <mat-expansion-panel-header> \n\t\t<mat-panel-title> {{ to.label }} </mat-panel-title>\n\t\t<mat-panel-description>  {{ to.description }} <mat-icon color=\"accent\">assessment</mat-icon>\n\t\t </mat-panel-description>\n\t</mat-expansion-panel-header>\n        <ng-container #fieldComponent></ng-container>\n    </mat-expansion-panel>\n    \n  ",
        })
    ], PanelWrapperComponent);
    return PanelWrapperComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"]));



/***/ }),

/***/ "./src/app/components/abstract-form/row-wrapper.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/abstract-form/row-wrapper.component.ts ***!
  \*******************************************************************/
/*! exports provided: RowWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowWrapperComponent", function() { return RowWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var RowWrapperComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RowWrapperComponent, _super);
    function RowWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'formly-row-panel',
            template: "\n    \n        <ng-container #fieldComponent></ng-container>\n    \n    \n  ",
        })
    ], RowWrapperComponent);
    return RowWrapperComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"]));



/***/ }),

/***/ "./src/app/components/abstract-form/stepper.type.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/abstract-form/stepper.type.ts ***!
  \**********************************************************/
/*! exports provided: FormlyFieldStepper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldStepper", function() { return FormlyFieldStepper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");



var FormlyFieldStepper = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FormlyFieldStepper, _super);
    function FormlyFieldStepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldStepper.prototype.isValid = function (field) {
        var _this = this;
        if (field.key) {
            return field.formControl.valid;
        }
        return field.fieldGroup.every(function (f) { return _this.isValid(f); });
    };
    FormlyFieldStepper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'formly-field-stepper',
            template: "\n  <mat-vertical-stepper #stepper>\n    <mat-step *ngFor=\"let step of field.fieldGroup; let index = index; let last = last;\">\n      <ng-template matStepLabel>{{ step.templateOptions.label }}</ng-template>\n\t  \n\t\t<formly-field [field]=\"step\"></formly-field>\n\n\t  <p>\n\t  <div align=\"end\">\n\t\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t<button mat-button (click)=\"options.resetModel()\">Reset</button>\n\t\t<button mat-button matStepperPrevious *ngIf=\"index !== 0\" type=\"button\">Back</button>\n\t\t<button mat-button matStepperNext *ngIf=\"!last\" color=\"primary\" type=\"button\">Next</button>\n\t\t<button mat-button matStepperNext color=\"primary\" type=\"button\">Save</button>\n\t\t<button mat-raised-button matStepperNext *ngIf=\"last\" color=\"warn\" type=\"submit\">Submit</button>        \n      </div>\n\t  </div>\n\t  </div>\n\t  \n    </mat-step>\n  </mat-vertical-stepper>\n",
        })
    ], FormlyFieldStepper);
    return FormlyFieldStepper;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__["FieldType"]));



/***/ }),

/***/ "./src/app/components/abstraction-form/abstraction-form.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/abstraction-form/abstraction-form.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-radio-button {\r\n  display: block;\r\n  margin: 5px 0;\r\n}\r\n\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.col:last-child {\r\n}\r\n\r\n\r\n.uploadfilecontainer {\r\n  background-size: 100px;\r\n  background-position: center;\r\n  height: 100px;\r\n  width: 100%;\r\n  margin: 20px auto;\r\n  border: 2px dashed gray;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  line-height: 100px;\r\n}\r\n\r\n\r\n.uploadcenter {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  line-height: normal;\r\n  font-weight: lighter;\r\n  color: gray;\r\n}\r\n\r\n\r\n.uploadfilecontainer:hover {\r\n  cursor: pointer;\r\n  background-color: #9ecbec !important;\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n.files-list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  margin: 10px auto;\r\n  background: #ffffff;\r\n  border: 1px dashed gray;\r\n  border-radius: 5px;\r\n  padding-left: 10px;\r\n  color: black;\r\n}\r\n\r\n\r\n.files-list .delete-file {\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.files-list .delete-file img{\r\n  width:30px;\r\n}\r\n\r\n\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fic3RyYWN0aW9uLWZvcm0vYWJzdHJhY3Rpb24tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7O0FBRUE7QUFDQTs7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7OztBQUdBOztFQUVFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2Fic3RyYWN0aW9uLWZvcm0vYWJzdHJhY3Rpb24tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbn1cclxuXHJcbi51cGxvYWRmaWxlY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4udXBsb2FkY2VudGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4udXBsb2FkZmlsZWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWNiZWMgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5maWxlcy1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZmlsZXMtbGlzdCAuZGVsZXRlLWZpbGUge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZpbGVzLWxpc3QgLmRlbGV0ZS1maWxlIGltZ3tcclxuICB3aWR0aDozMHB4O1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/abstraction-form/abstraction-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/abstraction-form/abstraction-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: AbstractionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractionFormComponent", function() { return AbstractionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");






var AbstractionFormComponent = /** @class */ (function () {
    function AbstractionFormComponent(_formBuilder, router, auth, uploadService) {
        this._formBuilder = _formBuilder;
        this.router = router;
        this.auth = auth;
        this.uploadService = uploadService;
        this.files = new Set();
        this.step = 0;
        this.dragfiles = [];
        this.canBeClosed = true;
        this.primaryButtonText = 'Upload';
        this.showCancelButton = true;
        this.uploading = false;
        this.uploadSuccessful = false;
        this.selected_type = '';
    }
    AbstractionFormComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            //this.uploadService.upload(this.files, 'upload_study_file'); 
            this.auth.newAbstraction(localStorage.getItem('token'), value)
                .subscribe(function (data) {
                _this.router.navigateByUrl('/main/studies');
            });
        }
    };
    AbstractionFormComponent.prototype.ngOnInit = function () {
        this.study = this._formBuilder.group({
            study_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phase: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: null,
            upload_file: null,
            primary_obj: null,
            secondary_obj: null,
            start_date: null,
            end_date: null,
            enrollment: null,
            country: null,
            sites: null,
            sites_country: null,
            subjects_site: null,
            intervention: null,
            masking: null
        });
        this.secondFormGroup = this._formBuilder.group({
            description: null,
            study_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phase: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            upload_file: null,
            primary_obj: null,
            secondary_obj: null,
            start_date: null,
            end_date: null,
            enrollment: null,
            country: null,
            sites: null,
            sites_country: null,
            subjects_site: null,
            intervention: null,
            masking: null
        });
    };
    AbstractionFormComponent.prototype.onFilesAdded = function () {
        var files = this.file.nativeElement.files;
        for (var key in files) {
            if (!isNaN(parseInt(key))) {
                this.files.add(files[key]);
            }
        }
    };
    AbstractionFormComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    AbstractionFormComponent.prototype.uploadFile = function (event) {
        for (var index = 0; index < event.length; index++) {
            var element = event[index];
            this.files.add(element);
        }
    };
    AbstractionFormComponent.prototype.deleteAttachment = function (file) {
        this.files.delete(file);
    };
    AbstractionFormComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    AbstractionFormComponent.prototype.nextStep = function () {
        this.step++;
    };
    AbstractionFormComponent.prototype.prevStep = function () {
        this.step--;
    };
    AbstractionFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AbstractionFormComponent.prototype, "file", void 0);
    AbstractionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-abstraction-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./abstraction-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/abstraction-form/abstraction-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./abstraction-form.component.css */ "./src/app/components/abstraction-form/abstraction-form.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]])
    ], AbstractionFormComponent);
    return AbstractionFormComponent;
}());



/***/ }),

/***/ "./src/app/components/abstraction/abstraction-datasource.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/abstraction/abstraction-datasource.ts ***!
  \******************************************************************/
/*! exports provided: AbstractDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDataSource", function() { return AbstractDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AbstractDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AbstractDataSource, _super);
    function AbstractDataSource(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.abstractionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        _this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        _this.loading$ = _this.loadingSubject.asObservable();
        _this.data = [];
        return _this;
    }
    AbstractDataSource.prototype.loadAbstractions = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        var _this = this;
        console.log("testing");
        this.loadingSubject.next(true);
        this.service.allAbstractions(localStorage.getItem('token'), filter, sortField, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (allAbstractions) {
            _this.total_count = allAbstractions.total_count,
                _this.abstractionsSubject.next(allAbstractions.abstractions);
        });
    };
    AbstractDataSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.abstractionsSubject.asObservable();
    };
    AbstractDataSource.prototype.disconnect = function (collectionViewer) {
        this.abstractionsSubject.complete();
        this.loadingSubject.complete();
    };
    return AbstractDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/abstraction/abstraction.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/abstraction/abstraction.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\r\n  width: 100%;\r\n  text-align: left !important;\r\n}\r\n\r\n.inner-table {\r\n  width: 100% !important;\r\n  text-align: left !important;\r\n  margin-left: 20px;\r\n}\r\n\r\n.inner-column {\r\n  width: 370px !important;\r\n  padding: 5px !important;\r\n  border-bottom-width: 0;\r\n  \r\n}\r\n\r\nth.inner-column {\r\n  width: 100px !important;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.inner-category {\r\n  text-align: left !important;\r\n  font-size: 14px;\r\n}\r\n\r\n.search-box{\r\n}\r\n\r\n.user-toolbar{\r\n  padding: 12px 12px 0 12px;\r\n  font-size: 16px;\r\n}\r\n\r\n.title-bar {\r\n  float:left;\r\n}\r\n\r\n.spinner-container {\r\n    position: fixed;\r\n\tmargin-left: 50%;\r\n\theight: 360px;\r\n    width: 390px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin-left: -195px;\t\r\n}\r\n\r\n.button-row button {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-column-abstract_id, .mat-column-chart_id, .mat-column-project_id{\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 7% !important;\r\n  width: 7% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.mat-column-abstract_status, .mat-column-abstract_created_date, .mat-column-abstract_date, .mat-column-abstract_by{\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 12% !important;\r\n  width: 12% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.mat-column-edit{\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 3% !important;\r\n  width: 3% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\ntd.mat-cell {\r\n\tpadding-right: 25px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #efefef;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 100px;\r\n  border: 2px solid gray;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 80px;\r\n}\r\n\r\n.example-element-truncate {\r\n  overflow: hidden;\r\n  white-space: nowrap;  \r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 10px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n.mat-paginator {\r\n  bottom: 0px;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  z-index: 10;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.status-color{\r\n  color: #f44336;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fic3RyYWN0aW9uL2Fic3RyYWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7QUFDQTs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtDQUNsQixnQkFBZ0I7Q0FDaEIsYUFBYTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUdBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWJzdHJhY3Rpb24vYWJzdHJhY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbm5lci10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5pbm5lci1jb2x1bW4ge1xyXG4gIHdpZHRoOiAzNzBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgXHJcbn1cclxuXHJcbnRoLmlubmVyLWNvbHVtbiB7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmlubmVyLWNhdGVnb3J5IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveHtcclxufVxyXG4udXNlci10b29sYmFye1xyXG4gIHBhZGRpbmc6IDEycHggMTJweCAwIDEycHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGl0bGUtYmFyIHtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG5cdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0aGVpZ2h0OiAzNjBweDtcclxuICAgIHdpZHRoOiAzOTBweDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIG1hdC1zcGlubmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTk1cHg7XHRcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnRvb2xiYXItc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tYWJzdHJhY3RfaWQsIC5tYXQtY29sdW1uLWNoYXJ0X2lkLCAubWF0LWNvbHVtbi1wcm9qZWN0X2lke1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCA3JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA3JSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWFic3RyYWN0X3N0YXR1cywgLm1hdC1jb2x1bW4tYWJzdHJhY3RfY3JlYXRlZF9kYXRlLCAubWF0LWNvbHVtbi1hYnN0cmFjdF9kYXRlLCAubWF0LWNvbHVtbi1hYnN0cmFjdF9ieXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgMTIlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEyJSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWVkaXR7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDMlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDMlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubW9yZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGQubWF0LWNlbGwge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtdHJ1bmNhdGUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgIFxyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3Ige1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtY29sb3J7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/abstraction/abstraction.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/abstraction/abstraction.component.ts ***!
  \*****************************************************************/
/*! exports provided: AbstractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractionComponent", function() { return AbstractionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _abstraction_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstraction-datasource */ "./src/app/components/abstraction/abstraction-datasource.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");









var AbstractionComponent = /** @class */ (function () {
    //expandedElement: dataSource | null;
    function AbstractionComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['abstract_id', 'chart_id', 'project_id', 'lastname', 'firstname', 'abstract_status', 'abstract_created_date', 'abstract_date', 'abstract_by', 'edit'];
    }
    AbstractionComponent.prototype.ngOnInit = function () {
        this.abstraction = this.route.snapshot.data["abstraction"];
        this.dataSource = new _abstraction_datasource__WEBPACK_IMPORTED_MODULE_4__["AbstractDataSource"](this.userService);
        this.dataSource.loadAbstractions('', 'abstract_created_date', 'desc', 0, 10);
        //this.dataSource = new UsersDataSource(this.userService, this.paginator, this.sort);
    };
    AbstractionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadAbstractionsPage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loadAbstractionsPage(); }))
            .subscribe();
    };
    AbstractionComponent.prototype.loadAbstractionsPage = function () {
        this.dataSource.loadAbstractions(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    AbstractionComponent.prototype.editAbstract = function (abstract_id, filename) {
        this.router.navigateByUrl('/main/abstraction/new_abstraction?abstract_id=' + abstract_id + '&filename=' + filename + '&t=abs');
    };
    AbstractionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], AbstractionComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], AbstractionComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AbstractionComponent.prototype, "input", void 0);
    AbstractionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-abstraction',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./abstraction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/abstraction/abstraction.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./abstraction.component.css */ "./src/app/components/abstraction/abstraction.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AbstractionComponent);
    return AbstractionComponent;
}());



/***/ }),

/***/ "./src/app/components/adjudication/adjudication.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/adjudication/adjudication.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hZGp1ZGljYXRpb24vYWRqdWRpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/adjudication/adjudication.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/adjudication/adjudication.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdjudicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjudicationComponent", function() { return AdjudicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdjudicationComponent = /** @class */ (function () {
    function AdjudicationComponent() {
    }
    AdjudicationComponent.prototype.ngOnInit = function () {
    };
    AdjudicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adjudication',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adjudication.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adjudication/adjudication.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adjudication.component.css */ "./src/app/components/adjudication/adjudication.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdjudicationComponent);
    return AdjudicationComponent;
}());



/***/ }),

/***/ "./src/app/components/chart-detail/chart-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/chart-detail/chart-detail.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-radio-button {\r\n  display: block;\r\n  margin: 5px 0;\r\n}\r\n\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.col-left {\r\n  width: 200px;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n.col-right {\r\n  flex: 6;\r\n}\r\n\r\n\r\n.col:last-child {\r\n}\r\n\r\n\r\n.uploadfilecontainer {\r\n  background-size: 100px;\r\n  background-position: center;\r\n  height: 100px;\r\n  width: 100%;\r\n  margin: 20px auto;\r\n  border: 2px dashed gray;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  line-height: 100px;\r\n}\r\n\r\n\r\n.uploadcenter {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  line-height: normal;\r\n  font-weight: lighter;\r\n  color: gray;\r\n}\r\n\r\n\r\n.uploadfilecontainer:hover {\r\n  cursor: pointer;\r\n  background-color: #9ecbec !important;\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n.files-list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  margin: 10px auto;\r\n  background: #ffffff;\r\n  border: 1px dashed gray;\r\n  border-radius: 5px;\r\n  padding-left: 10px;\r\n  color: black;\r\n}\r\n\r\n\r\n.files-list .delete-file {\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  position: right;\r\n}\r\n\r\n\r\n.files-list .delete-file img{\r\n  width:30px;\r\n}\r\n\r\n\r\n.spinner-icon {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.is-active {\r\n  background-color: #3f51b5 !important;\r\n  color: #ffffff !important;\r\n}\r\n\r\n\r\n.example-button-row {\r\n  display: table-cell;\r\n  width: 490px;\r\n}\r\n\r\n\r\n.example-button-row .mat-button-base {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n\r\n\r\n.pdf-view{\r\n  height: 750px;\r\n  position:relative;\r\n}\r\n\r\n\r\nbutton.topcorner{\r\n   position:absolute;\r\n   top:0;\r\n   right:20px;\r\n   z-index: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NoYXJ0LWRldGFpbC9jaGFydC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLE9BQU87QUFDVDs7O0FBR0E7QUFDQTs7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7OztBQUNBO0VBQ0UsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUdBOztFQUVFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7O0FBRUE7R0FDRyxpQkFBaUI7R0FDakIsS0FBSztHQUNMLFVBQVU7R0FDVixVQUFVO0FBQ2IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvY2hhcnQtZGV0YWlsL2NoYXJ0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb2wtbGVmdCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmNvbC1yaWdodCB7XHJcbiAgZmxleDogNjtcclxufVxyXG5cclxuXHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbn1cclxuXHJcbi51cGxvYWRmaWxlY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4udXBsb2FkY2VudGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4udXBsb2FkZmlsZWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWNiZWMgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5maWxlcy1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZmlsZXMtbGlzdCAuZGVsZXRlLWZpbGUge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJpZ2h0O1xyXG59XHJcbi5maWxlcy1saXN0IC5kZWxldGUtZmlsZSBpbWd7XHJcbiAgd2lkdGg6MzBweDtcclxufVxyXG5cclxuLnNwaW5uZXItaWNvbiB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pcy1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiA0OTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbn1cclxuXHJcbi5wZGYtdmlld3tcclxuICBoZWlnaHQ6IDc1MHB4O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG5idXR0b24udG9wY29ybmVye1xyXG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgdG9wOjA7XHJcbiAgIHJpZ2h0OjIwcHg7XHJcbiAgIHotaW5kZXg6IDE7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/chart-detail/chart-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/chart-detail/chart-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChartDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDetailComponent", function() { return ChartDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _resources_states_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../resources/states.json */ "./src/app/resources/states.json");
var _resources_states_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../resources/states.json */ "./src/app/resources/states.json", 1);











var ChartDetailComponent = /** @class */ (function () {
    function ChartDetailComponent(fb, router, service, uploadService, route) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.uploadService = uploadService;
        this.route = route;
        this.files = new Set();
        this.showChartDetail = true;
        this.selectedFile = null;
        this.uploading = false;
        this.charts = [];
        this.genders = ["Male", "Female", "Other"];
        this.step = 3;
        this.states = _resources_states_json__WEBPACK_IMPORTED_MODULE_9__;
        this.statuses = ['Uploaded', 'Review in-progress', 'Ready for Abstraction', 'Review Failed'];
        this.reasons = ["Chart content not legible", "Artifacts in Chart", "Chart not loading", "Chart has multiple patient details", "Insufficient content in chart"];
        this.showReviewFailedField = false;
        this.readyForAbstraction = false;
    }
    ChartDetailComponent.prototype.onSubmit = function (_a) {
        //console.log(this.chart.value); 
        //this.uploading = true;
        //let status = 0;
        //if (valid){
        //let data: any =	this.uploadService.upload(this.selectedFile); 
        var _this = this;
        var value = _a.value, valid = _a.valid;
        //for(let file_status in data)
        //{				
        //let file_observable: any = data[file_status].progress;
        //console.log(file_observable);
        //file_observable.subscribe(resp => {
        //	status = resp;
        //	console.log(status);
        //if (status === 100) {
        this.service.updateChart(localStorage.getItem('token'), value)
            .subscribe(function (data) {
            //this.uploading = false;
            //this.files.delete(this.selectedFile);
            // this.showChartDetail=false;
            //this.chart.reset();
            //this.formDirective.resetForm();
            //var iterator = this.files.values();
            //if (this.files.size != 0){
            //this.selectFile(iterator.next().value);
            //console.log(data);
            _this.router.navigateByUrl('/main/charts');
        });
        //}
        //});
        //}
        //}
    };
    ChartDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chart = this.fb.group({
            chart_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            patient_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            project_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            middlename: null,
            dob: null,
            age: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)])],
            gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            filename: null,
            upload_file: null,
            address: null,
            city: null,
            state: null,
            postalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)])],
            cplastname: null,
            cpfirstname: null,
            cpmiddlename: null,
            cpaddress: null,
            cpcity: null,
            cpstate: null,
            cppostalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)])],
            npi: null,
            facility: null,
            chart_status: null,
            review_comments: null,
            fail_reason: null
        });
        this.route.queryParams.subscribe(function (queryParams) {
            //console.log(queryParams);
            _this.chart_id = queryParams['chart_id'];
            _this.viewfilename = queryParams['filename'];
        });
        this.viewChartDetail(this.chart_id);
        this.viewChart(this.viewfilename);
    };
    ChartDetailComponent.prototype.onFilesAdded = function (event) {
        var files = this.file.nativeElement.files;
        for (var key in files) {
            if (!isNaN(parseInt(key))) {
                this.files.add(files[key]);
            }
        }
        var first_file = this.file.nativeElement.files[0];
        this.selectFile(first_file);
    };
    ChartDetailComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    ChartDetailComponent.prototype.uploadFile = function (event) {
        for (var index = 0; index < event.length; index++) {
            var element = event[index];
            if (index == 0) {
                this.selectFile(element);
            }
            this.files.add(element);
        }
    };
    ChartDetailComponent.prototype.deleteAttachment = function (file) {
        this.files.delete(file);
        this.showChartDetail = false;
    };
    ChartDetailComponent.prototype.selectFile = function (file) {
        this.selectedFile = file;
        this.filename = file.name.replace(/\s/g, "");
        this.chart.patchValue({ 'filename': this.filename });
        //this.chart.patchValue({'status':'Uploaded'});
        this.showChartDetail = true;
        var iterator = this.files.values();
    };
    ChartDetailComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/main/charts');
    };
    ChartDetailComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ChartDetailComponent.prototype.nextStep = function () {
        this.step++;
    };
    ChartDetailComponent.prototype.prevStep = function () {
        this.step--;
    };
    ChartDetailComponent.prototype.viewChartDetail = function (chart_id) {
        var _this = this;
        this.service.viewChartDetail(localStorage.getItem('token'), chart_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return console.log('Success'); }))
            .subscribe(function (data) {
            _this.created_date = data.chart.created_date.$date;
            delete data.chart['created_date'];
            if ('fail_reason' in data.chart == false)
                data.chart['fail_reason'] = '';
            if ('review_comments' in data.chart == false)
                data.chart['review_comments'] = '';
            _this.chart.setValue(data.chart);
            console.log(_this.chart.get('chart_status').value);
            _this.reviewFailCheck(_this.chart.value.chart_status);
            //if (this.chart.value.chart_status == 'Ready for Abstraction') {		
            //  this.readyForAbstraction = true;
            //} else {
            //  this.readyForAbstraction = false;
            //}
        });
    };
    ChartDetailComponent.prototype.viewChart = function (filename) {
        var _this = this;
        this.service.downloadChart(localStorage.getItem('token'), filename).subscribe(function (response) { return _this.viewFile(response, "application/pdf"); }),
            function (error) { return console.log('Error downloading the file.'); },
            function () { return console.info('OK'); };
    };
    ChartDetailComponent.prototype.viewFile = function (data, type) {
        var blob = new Blob([data], { type: type });
        this.src = window.URL.createObjectURL(blob);
        //window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=800");
    };
    ChartDetailComponent.prototype.onSelectionChanged = function (_a) {
        var value = _a.value;
        this.reviewFailCheck(value);
    };
    ChartDetailComponent.prototype.reviewFailCheck = function (value) {
        if (value === 'Review Failed') {
            this.showReviewFailedField = true;
        }
        else {
            this.showReviewFailedField = false;
        }
    };
    ChartDetailComponent.prototype.previewChart = function () {
        var _this = this;
        this.service.downloadChart(localStorage.getItem('token'), this.viewfilename).subscribe(function (response) { return _this.previewFile(response, "application/pdf"); }),
            function (error) { return console.log('Error downloading the file.'); },
            function () { return console.info('OK'); };
        this.showChartDetail = false;
        //window.open('/main/charts/view_chart?filename='+filename, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=800")
    };
    ChartDetailComponent.prototype.previewFile = function (data, type) {
        var blob = new Blob([data], { type: type });
        var url = window.URL.createObjectURL(blob);
        window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=800");
    };
    ChartDetailComponent.prototype.splitView = function () {
        this.showChartDetail = true;
    };
    ChartDetailComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartDetailComponent.prototype, "file", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"])
    ], ChartDetailComponent.prototype, "formDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"])
    ], ChartDetailComponent.prototype, "accordion", void 0);
    ChartDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chart-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart-detail/chart-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chart-detail.component.css */ "./src/app/components/chart-detail/chart-detail.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ChartDetailComponent);
    return ChartDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/charts/chart-datasource.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/charts/chart-datasource.ts ***!
  \*******************************************************/
/*! exports provided: ChartDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDataSource", function() { return ChartDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ChartDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChartDataSource, _super);
    function ChartDataSource(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.chartsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        _this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        _this.loading$ = _this.loadingSubject.asObservable();
        _this.data = [];
        return _this;
    }
    ChartDataSource.prototype.loadCharts = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        var _this = this;
        console.log("testing");
        this.loadingSubject.next(true);
        this.userService.allCharts(localStorage.getItem('token'), filter, sortField, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (allcharts) {
            _this.total_count = allcharts.total_count,
                _this.chartsSubject.next(allcharts.charts);
        });
    };
    ChartDataSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.chartsSubject.asObservable();
    };
    ChartDataSource.prototype.disconnect = function (collectionViewer) {
        this.chartsSubject.complete();
        this.loadingSubject.complete();
    };
    return ChartDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/charts/charts.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/charts/charts.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\r\n  width: 100%;\r\n  text-align: left !important;\r\n}\r\n\r\n.inner-table {\r\n  width: 100% !important;\r\n  text-align: left !important;\r\n  margin-left: 20px;\r\n}\r\n\r\n.inner-column {\r\n  width: 370px !important;\r\n  padding: 5px !important;\r\n  border-bottom-width: 0;\r\n  \r\n}\r\n\r\nth.inner-column {\r\n  width: 100px !important;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.inner-category {\r\n  text-align: left !important;\r\n  font-size: 14px;\r\n}\r\n\r\n.search-box{\r\n}\r\n\r\n.user-toolbar{\r\n  padding: 12px 12px 0 12px;\r\n  font-size: 16px;\r\n}\r\n\r\n.title-bar {\r\n  float:left;\r\n}\r\n\r\n.spinner-container {\r\n    position: fixed;\r\n\tmargin-left: 50%;\r\n\theight: 360px;\r\n    width: 390px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin-left: -195px;\t\r\n}\r\n\r\n.button-row button {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-column-project, .mat-column-created_date, .mat-column-chart_status{\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 15% !important;\r\n  width: 15% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.mat-column-patient_id, .mat-column-chart_id, .mat-column-gender, .mat-column-gender{\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 7% !important;\r\n  width: 7% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.mat-column-view, .mat-column-edit, .mat-column-age {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 3% !important;\r\n  width: 3% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\ntd.mat-cell {\r\n\tpadding-right: 25px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #efefef;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  width: 100px;\r\n  border: 2px solid gray;\r\n  padding: 5px 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 80px;\r\n  text-align: left;\r\n  \r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-truncate {\r\n  overflow: hidden;\r\n  white-space: nowrap;  \r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 10px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n.mat-paginator {\r\n  bottom: 0px;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  z-index: 10;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.status-color{\r\n  color: #f44336;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtBQUNBOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0NBQ2xCLGdCQUFnQjtDQUNoQixhQUFhO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBR0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbm5lci10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5pbm5lci1jb2x1bW4ge1xyXG4gIHdpZHRoOiAzNzBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgXHJcbn1cclxuXHJcbnRoLmlubmVyLWNvbHVtbiB7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmlubmVyLWNhdGVnb3J5IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveHtcclxufVxyXG4udXNlci10b29sYmFye1xyXG4gIHBhZGRpbmc6IDEycHggMTJweCAwIDEycHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGl0bGUtYmFyIHtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG5cdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0aGVpZ2h0OiAzNjBweDtcclxuICAgIHdpZHRoOiAzOTBweDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIG1hdC1zcGlubmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTk1cHg7XHRcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnRvb2xiYXItc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tcHJvamVjdCwgLm1hdC1jb2x1bW4tY3JlYXRlZF9kYXRlLCAubWF0LWNvbHVtbi1jaGFydF9zdGF0dXN7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1wYXRpZW50X2lkLCAubWF0LWNvbHVtbi1jaGFydF9pZCwgLm1hdC1jb2x1bW4tZ2VuZGVyLCAubWF0LWNvbHVtbi1nZW5kZXJ7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDclICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDclICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tdmlldywgLm1hdC1jb2x1bW4tZWRpdCwgLm1hdC1jb2x1bW4tYWdlIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgMyUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMyUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbCB7XHJcblx0cGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgcGFkZGluZzogNXB4IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogODBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIFxyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtdHJ1bmNhdGUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgIFxyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICBib3R0b206IDBweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY29sIHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnN0YXR1cy1jb2xvcntcclxuICBjb2xvcjogI2Y0NDMzNjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/charts/charts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/charts/charts.component.ts ***!
  \*******************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _chart_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart-datasource */ "./src/app/components/charts/chart-datasource.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");









var ChartsComponent = /** @class */ (function () {
    //expandedElement: dataSource | null;
    function ChartsComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['chart_id', 'lastname', 'firstname', 'age', 'gender', 'project_id', 'chart_status', 'created_date', 'edit', 'view', 'download'];
        this.innerColumns = ['chart_id', 'chart_status', 'gender', 'middlename',];
        this.problemColumns = ['code', 'name'];
    }
    ChartsComponent.prototype.ngOnInit = function () {
        this.chart = this.route.snapshot.data["chart"];
        this.dataSource = new _chart_datasource__WEBPACK_IMPORTED_MODULE_4__["ChartDataSource"](this.userService);
        this.dataSource.loadCharts('', 'created_date', 'desc', 0, 10);
        //this.dataSource = new UsersDataSource(this.userService, this.paginator, this.sort);
    };
    ChartsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadChartsPage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loadChartsPage(); }))
            .subscribe();
    };
    ChartsComponent.prototype.loadChartsPage = function () {
        this.dataSource.loadCharts(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    ChartsComponent.prototype.newChart = function () {
        this.router.navigateByUrl('/main/charts/new_chart');
    };
    ChartsComponent.prototype.viewChart = function (filename) {
        var _this = this;
        this.userService.downloadChart(localStorage.getItem('token'), filename).subscribe(function (response) { return _this.viewFile(response, "application/pdf"); }),
            function (error) { return console.log('Error downloading the file.'); },
            function () { return console.info('OK'); };
        //window.open('/main/charts/view_chart?filename='+filename, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=800")
    };
    ChartsComponent.prototype.downloadChart = function (filename) {
        var _this = this;
        this.userService.downloadChart(localStorage.getItem('token'), filename).subscribe(function (response) { return _this.downloadFile(response, "application/pdf"); }),
            function (error) { return console.log('Error downloading the file.'); },
            function () { return console.info('OK'); };
    };
    ChartsComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
    };
    ChartsComponent.prototype.downloadFile = function (data, type) {
        var blob = new Blob([data], { type: type });
        var url = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'ccda_pdf.pdf';
        link.click();
        window.URL.revokeObjectURL(link.href);
        //for opening in another window
        //let pwa = window.open(url);
        //if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        //    alert( 'Please disable your Pop-up blocker and try again.');
        //}
    };
    ChartsComponent.prototype.viewFile = function (data, type) {
        var blob = new Blob([data], { type: type });
        var url = window.URL.createObjectURL(blob);
        window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=800");
    };
    ChartsComponent.prototype.editChart = function (chart_id, filename) {
        this.router.navigateByUrl('/main/charts/chart_detail' + '?chart_id=' + chart_id + '&filename=' + filename);
    };
    ChartsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ChartsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ChartsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChartsComponent.prototype, "input", void 0);
    ChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charts',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./charts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/charts/charts.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./charts.component.css */ "./src/app/components/charts/charts.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/components/facilities/facilities.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/facilities/facilities.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9mYWNpbGl0aWVzL2ZhY2lsaXRpZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/facilities/facilities.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/facilities/facilities.component.ts ***!
  \***************************************************************/
/*! exports provided: FacilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiesComponent", function() { return FacilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FacilitiesComponent = /** @class */ (function () {
    function FacilitiesComponent() {
    }
    FacilitiesComponent.prototype.ngOnInit = function () {
    };
    FacilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-facilities',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./facilities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/facilities/facilities.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./facilities.component.css */ "./src/app/components/facilities/facilities.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FacilitiesComponent);
    return FacilitiesComponent;
}());



/***/ }),

/***/ "./src/app/components/form-buildr/form-buildr.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/form-buildr/form-buildr.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin: 0 25px 25px 0;\r\n  display: inline-block\r\n}\r\n.form-container {\r\n  width: 75%;\r\n  max-width: 80%;\r\n  margin: 0 25px 25px 0;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  float: left;\r\n}\r\n.control-container {\r\n  width: 20%px;\r\n  max-width: 20%;\r\n  margin: 0 25px 25px 0;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  float: right;\r\n}\r\n.example-list {\r\n  border: solid 1px #ccc;\r\n  min-height: 60px;\r\n  background: white;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n  display: block;\r\n}\r\n.example-box {\r\n  padding: 20px 10px;\r\n  border-bottom: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  background: white;\r\n  font-size: 14px;\r\n}\r\n.form-box {\r\n  padding: 10px 10px 0 10px;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  cursor: move;\r\n  font-size: 14px;\r\n}\r\n.cdk-drag-preview {\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n.cdk-drag-placeholder {\r\n  opacity: 0;\r\n}\r\n.cdk-drag-animating {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.example-box:last-child {\r\n  border: none;\r\n}\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Zvcm0tYnVpbGRyL2Zvcm0tYnVpbGRyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQjs7Z0RBRThDO0FBQ2hEO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZm9ybS1idWlsZHIvZm9ybS1idWlsZHIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNvbnRyb2wtY29udGFpbmVyIHtcclxuICB3aWR0aDogMjAlcHg7XHJcbiAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdCB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0tYm94IHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/form-buildr/form-buildr.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-buildr/form-buildr.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormBuildrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuildrComponent", function() { return FormBuildrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var FormBuildrComponent = /** @class */ (function () {
    function FormBuildrComponent(fb) {
        this.fb = fb;
        this.controls = 'matInput';
        this.formItems = [];
        this.phases = [{ value: 101, display: 'Phase I' },
            { value: 102, display: 'Phase II' },
            { value: 103, display: 'Phase III' },
            { value: 104, display: 'Phase IV' }];
        this.fieldArray = [];
        this.fieldArray1 = [];
        this.textAttribute = {};
        this.dropAttribute = {};
        this.droppedItems = [];
    }
    FormBuildrComponent.prototype.ngOnInit = function () {
        this.formGroupItems = this.fb.group({
            textbox: null
        });
    };
    FormBuildrComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            //this.fieldArray.push(this.dropAttribute);
            this.fieldArray.splice(event.currentIndex, 0, event.previousIndex);
        }
        //console.log("Previous "+event.previousIndex);
        //this.addFieldValue();
    };
    FormBuildrComponent.prototype.addFieldValue = function () {
        //this.fieldArray.push(this.textAttribute);
    };
    FormBuildrComponent.prototype.deleteFieldValue = function (index) {
        this.fieldArray.splice(index, 1);
    };
    FormBuildrComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    FormBuildrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-buildr',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-buildr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-buildr/form-buildr.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-buildr.component.css */ "./src/app/components/form-buildr/form-buildr.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FormBuildrComponent);
    return FormBuildrComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-container {\r\n  margin: 20px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm1vcmUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Studies', cols: 1, rows: 1, ui: 'app-users' },
                    { title: 'Roles', cols: 1, rows: 1, ui: 'app-roles' },
                    { title: 'Privileges', cols: 1, rows: 1, ui: 'app-permissions' }
                ];
            }
            return [
                { title: 'Users', cols: 2, rows: 2 },
                { title: 'Roles', cols: 1, rows: 1 },
                { title: 'Privileges', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/investigator-form/investigator-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/investigator-form/investigator-form.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-radio-button {\r\n  display: block;\r\n  margin: 5px 0;\r\n}\r\n\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.col:last-child {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2ludmVzdGlnYXRvci1mb3JtL2ludmVzdGlnYXRvci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COzs7QUFFQTtBQUNBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2ludmVzdGlnYXRvci1mb3JtL2ludmVzdGlnYXRvci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY29sIHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNvbDpsYXN0LWNoaWxkIHtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/investigator-form/investigator-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/investigator-form/investigator-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InvestigatorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigatorFormComponent", function() { return InvestigatorFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _resources_countries_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources/countries.json */ "./src/app/resources/countries.json");
var _resources_countries_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../resources/countries.json */ "./src/app/resources/countries.json", 1);
/* harmony import */ var _resources_states_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/states.json */ "./src/app/resources/states.json");
var _resources_states_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../resources/states.json */ "./src/app/resources/states.json", 1);







var InvestigatorFormComponent = /** @class */ (function () {
    function InvestigatorFormComponent(fb, router, auth) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.hide = true;
        this.hasUnitNumber = false;
        this.countries = _resources_countries_json__WEBPACK_IMPORTED_MODULE_5__;
        this.states = _resources_states_json__WEBPACK_IMPORTED_MODULE_6__;
        this.genders = [
            { value: 101, display: 'Male' },
            { value: 102, display: 'Female' },
            { value: 103, display: 'Indeterminate' },
        ];
        this.qualifications = [
            { value: 101, display: 'MD' },
            { value: 102, display: 'MCh' },
            { value: 103, display: 'MS' },
        ];
        this.specialities = [
            { value: 101, display: 'Anaesthesiology' },
            { value: 102, display: 'Cardio-Thoracic Surgery' },
            { value: 103, display: 'Cadiology' },
            { value: 103, display: 'Endocrinology' },
            { value: 103, display: 'Gastroenterology' },
            { value: 103, display: 'Ophthalmalogy' },
            { value: 103, display: 'Paediatrics' },
            { value: 103, display: 'Dermatology' },
            { value: 103, display: 'Nephrology' },
            { value: 103, display: 'Urology' },
        ];
        this.rfs = [
            { value: 101, display: 'Harvard Medical School, Boston' },
            { value: 102, display: 'New York Presbyterian Hospital, New York City' },
            { value: 103, display: 'Massachusetts General Hospital, Boston' },
            { value: 103, display: 'University Medical Center, Utah' },
            { value: 103, display: 'Mayo Clinic, San Francisco' },
            { value: 103, display: 'John Hopkins Medical School, New Jersey' },
            { value: 103, display: 'Conway Medical, Ohio' },
        ];
    }
    InvestigatorFormComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid)
            this.auth.newInvestigator(localStorage.getItem('token'), value)
                .subscribe(function (data) {
                _this.router.navigateByUrl('/main/investigators');
            });
    };
    InvestigatorFormComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/main/investigators');
    };
    InvestigatorFormComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            middle_name: null,
            gender: null,
            age: null,
            qualification: null,
            speciality: null,
            clinical_exp: null,
            study_exp: null,
            rf: null,
            tel: null,
            address: null,
            city: null,
            state: null,
            postalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)])],
            country: null
        });
    };
    InvestigatorFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    InvestigatorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-investigator-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./investigator-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/investigator-form/investigator-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./investigator-form.component.css */ "./src/app/components/investigator-form/investigator-form.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], InvestigatorFormComponent);
    return InvestigatorFormComponent;
}());



/***/ }),

/***/ "./src/app/components/investigators/investigators-datasource.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/investigators/investigators-datasource.ts ***!
  \**********************************************************************/
/*! exports provided: InvestigatorsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigatorsDataSource", function() { return InvestigatorsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var InvestigatorsDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InvestigatorsDataSource, _super);
    function InvestigatorsDataSource(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.usersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        _this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        _this.loading$ = _this.loadingSubject.asObservable();
        _this.data = [];
        return _this;
    }
    InvestigatorsDataSource.prototype.loadUsers = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        var _this = this;
        console.log("testing");
        this.loadingSubject.next(true);
        this.userService.allInvestigators(localStorage.getItem('token'), filter, sortField, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (allusers) {
            _this.total_count = allusers.total_count,
                _this.usersSubject.next(allusers.users);
        });
    };
    InvestigatorsDataSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.usersSubject.asObservable();
    };
    InvestigatorsDataSource.prototype.disconnect = function (collectionViewer) {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    };
    return InvestigatorsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/investigators/investigators.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/investigators/investigators.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\r\n  width: 100%;\r\n}\r\n\r\n.search-box{\r\n}\r\n\r\n.user-toolbar{\r\n  padding: 12px 12px 0 12px;\r\n  font-size: 16px;\r\n}\r\n\r\n.title-bar {\r\n  float:left;\r\n}\r\n\r\n.spinner-container {\r\n    position: fixed;\r\n\tmargin-left: 50%;\r\n\theight: 360px;\r\n    width: 390px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin-left: -195px;\t\r\n}\r\n\r\n.button-row button {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-column-first_name, .mat-column-last_name, {\r\n  flex: 0 0 160px;\r\n}\r\n\r\n.mat-column-edit{\r\n  flex: 0 0 30px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2ludmVzdGlnYXRvcnMvaW52ZXN0aWdhdG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0FBQ0E7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtJQUNJLGVBQWU7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGFBQWE7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2ludmVzdGlnYXRvcnMvaW52ZXN0aWdhdG9ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveHtcclxufVxyXG4udXNlci10b29sYmFye1xyXG4gIHBhZGRpbmc6IDEycHggMTJweCAwIDEycHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGl0bGUtYmFyIHtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG5cdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0aGVpZ2h0OiAzNjBweDtcclxuICAgIHdpZHRoOiAzOTBweDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIG1hdC1zcGlubmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTk1cHg7XHRcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnRvb2xiYXItc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZmlyc3RfbmFtZSwgLm1hdC1jb2x1bW4tbGFzdF9uYW1lLCB7XHJcbiAgZmxleDogMCAwIDE2MHB4O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1lZGl0e1xyXG4gIGZsZXg6IDAgMCAzMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/investigators/investigators.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/investigators/investigators.component.ts ***!
  \*********************************************************************/
/*! exports provided: InvestigatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigatorsComponent", function() { return InvestigatorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _investigators_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./investigators-datasource */ "./src/app/components/investigators/investigators-datasource.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");









var InvestigatorsComponent = /** @class */ (function () {
    function InvestigatorsComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['select', 'first_name', 'last_name', 'speciality', 'study_exp', 'rf', 'city', 'country', 'edit'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
    }
    InvestigatorsComponent.prototype.ngOnInit = function () {
        this.user = this.route.snapshot.data["user"];
        this.dataSource = new _investigators_datasource__WEBPACK_IMPORTED_MODULE_4__["InvestigatorsDataSource"](this.userService);
        this.dataSource.loadUsers('', 'first_name', 'asc', 0, 10);
        //this.dataSource = new UsersDataSource(this.userService, this.paginator, this.sort);
    };
    InvestigatorsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadUsersPage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loadUsersPage(); }))
            .subscribe();
    };
    InvestigatorsComponent.prototype.loadUsersPage = function () {
        this.dataSource.loadUsers(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    InvestigatorsComponent.prototype.newUser = function () {
        this.router.navigateByUrl('/main/investigators/new_investigator');
    };
    InvestigatorsComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
    };
    /** Whether the number of selected elements matches the total number of rows. */
    InvestigatorsComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    InvestigatorsComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    /** The label for the checkbox on the passed row */
    InvestigatorsComponent.prototype.checkboxLabel = function (i, row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (i + 1);
    };
    InvestigatorsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], InvestigatorsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], InvestigatorsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InvestigatorsComponent.prototype, "input", void 0);
    InvestigatorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-investigators',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./investigators.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/investigators/investigators.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./investigators.component.css */ "./src/app/components/investigators/investigators.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], InvestigatorsComponent);
    return InvestigatorsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n.login-card {\r\n  min-width: 250px;\r\n  max-width: 370px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.col {\r\n  flex: 1;\r\n}\r\n\r\n.col:last-child {\r\n}\r\n\r\n.card-field {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.mat-business {\r\n    background-color: coral;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztBQUNmIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJkIHtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1heC13aWR0aDogMzcwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY29sIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uY29sOmxhc3QtY2hpbGQge1xyXG59XHJcblxyXG4uY2FyZC1maWVsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWJ1c2luZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, auth) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passkey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid)
            this.auth.login(value)
                .subscribe(function (data) {
                localStorage.setItem('token', data.access_token);
                //console.log(localStorage.getItem('token'));
                //alert(localStorage.getItem('token'));
                _this.router.navigateByUrl('/main');
            });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent.prototype.registerBusiness = function () {
        this.router.navigateByUrl('/register_business');
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\r\n  height: 90%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 7;\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.is-active {\r\n  background-color: #3f51b5 !important;\r\n  color: #ffffff !important;\r\n}\r\n\r\n.mat-sidenav-content {\r\n  overflow-y:scroll;\r\n  overflow-x:hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDc7XHJcbn1cclxuXHJcbi50b29sYmFyLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5pcy1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYtY29udGVudCB7XHJcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");






var MainComponent = /** @class */ (function () {
    function MainComponent(breakpointObserver, router, auth) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.auth = auth;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MainComponent.prototype.onLogout = function () {
        var _this = this;
        this.auth.logout(localStorage.getItem('token'))
            .subscribe(function (data) {
            localStorage.removeItem('token');
            _this.router.navigateByUrl('/login');
        }, function (error) { return console.log(error); });
    };
    MainComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/new-chart/new-chart.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/new-chart/new-chart.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-radio-button {\r\n  display: block;\r\n  margin: 5px 0;\r\n}\r\n\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.col-left {\r\n  width: 200px;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n.col-right {\r\n  flex: 6;\r\n}\r\n\r\n\r\n.col:last-child {\r\n}\r\n\r\n\r\n.uploadfilecontainer {\r\n  background-size: 100px;\r\n  background-position: center;\r\n  height: 100px;\r\n  width: 100%;\r\n  margin: 20px auto;\r\n  border: 2px dashed gray;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  line-height: 100px;\r\n}\r\n\r\n\r\n.uploadcenter {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  line-height: normal;\r\n  font-weight: lighter;\r\n  color: gray;\r\n}\r\n\r\n\r\n.uploadfilecontainer:hover {\r\n  cursor: pointer;\r\n  background-color: #9ecbec !important;\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n.files-list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  margin: 10px auto;\r\n  background: #ffffff;\r\n  border: 1px dashed gray;\r\n  border-radius: 5px;\r\n  padding-left: 10px;\r\n  color: black;\r\n}\r\n\r\n\r\n.files-list .delete-file {\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  position: right;\r\n}\r\n\r\n\r\n.files-list .delete-file img{\r\n  width:30px;\r\n}\r\n\r\n\r\n.spinner-icon {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.is-active {\r\n  background-color: #3f51b5 !important;\r\n  color: #ffffff !important;\r\n}\r\n\r\n\r\n.example-button-row {\r\n  display: table-cell;\r\n  width: 490px;\r\n}\r\n\r\n\r\n.example-button-row .mat-button-base {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25ldy1jaGFydC9uZXctY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLE9BQU87QUFDVDs7O0FBR0E7QUFDQTs7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7OztBQUNBO0VBQ0UsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUdBOztFQUVFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbmV3LWNoYXJ0L25ldy1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb2wtbGVmdCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmNvbC1yaWdodCB7XHJcbiAgZmxleDogNjtcclxufVxyXG5cclxuXHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbn1cclxuXHJcbi51cGxvYWRmaWxlY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4udXBsb2FkY2VudGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4udXBsb2FkZmlsZWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWNiZWMgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5maWxlcy1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZmlsZXMtbGlzdCAuZGVsZXRlLWZpbGUge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJpZ2h0O1xyXG59XHJcbi5maWxlcy1saXN0IC5kZWxldGUtZmlsZSBpbWd7XHJcbiAgd2lkdGg6MzBweDtcclxufVxyXG5cclxuLnNwaW5uZXItaWNvbiB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pcy1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiA0OTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/new-chart/new-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/new-chart/new-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: NewChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChartComponent", function() { return NewChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _resources_states_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/states.json */ "./src/app/resources/states.json");
var _resources_states_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../resources/states.json */ "./src/app/resources/states.json", 1);








var NewChartComponent = /** @class */ (function () {
    function NewChartComponent(fb, router, auth, uploadService) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.uploadService = uploadService;
        this.files = new Set();
        this.showChartDetail = false;
        this.selectedFile = null;
        this.uploading = false;
        this.charts = [];
        this.genders = ["Male", "Female", "Other"];
        this.step = 0;
        this.states = _resources_states_json__WEBPACK_IMPORTED_MODULE_7__;
        this.projects = [];
    }
    NewChartComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        console.log(this.chart.value);
        var status = 0;
        if (valid) {
            this.uploading = true;
            var data = this.uploadService.upload(this.selectedFile);
            for (var file_status in data) {
                var file_observable = data[file_status].progress;
                console.log(file_observable);
                file_observable.subscribe(function (resp) {
                    status = resp;
                    console.log(status);
                    if (status === 100) {
                        _this.auth.newChart(localStorage.getItem('token'), value)
                            .subscribe(function (data) {
                            _this.uploading = false;
                            _this.files.delete(_this.selectedFile);
                            _this.showChartDetail = false;
                            _this.chart.reset();
                            _this.formDirective.resetForm();
                            var iterator = _this.files.values();
                            if (_this.files.size != 0) {
                                _this.selectFile(iterator.next().value);
                            }
                        });
                    }
                });
            }
        }
    };
    NewChartComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.chart = this.fb.group({
            chart_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            patient_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            project_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            middlename: null,
            dob: null,
            age: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)])],
            gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            filename: null,
            upload_file: null,
            address: null,
            city: null,
            state: null,
            postalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)])],
            cplastname: null,
            cpfirstname: null,
            cpmiddlename: null,
            cpaddress: null,
            cpcity: null,
            cpstate: null,
            cppostalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)])],
            npi: null,
            facility: null
        });
    };
    NewChartComponent.prototype.onFilesAdded = function (event) {
        var files = this.file.nativeElement.files;
        for (var key in files) {
            if (!isNaN(parseInt(key))) {
                this.files.add(files[key]);
            }
        }
        var first_file = this.file.nativeElement.files[0];
        this.selectFile(first_file);
    };
    NewChartComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    NewChartComponent.prototype.uploadFile = function (event) {
        for (var index = 0; index < event.length; index++) {
            var element = event[index];
            if (index == 0) {
                this.selectFile(element);
            }
            this.files.add(element);
        }
    };
    NewChartComponent.prototype.deleteAttachment = function (file) {
        this.files.delete(file);
        if (this.files.size == 0) {
            this.showChartDetail = false;
        }
        else {
            this.selectFile(this.file.nativeElement.files[0]);
        }
    };
    NewChartComponent.prototype.selectFile = function (file) {
        this.selectedFile = file;
        this.filename = file.name.replace(/\s/g, "");
        this.chart.patchValue({ 'filename': this.filename });
        //this.chart.patchValue({'status':'Uploaded'});
        this.showChartDetail = true;
        //var iterator = this.files.values();
    };
    NewChartComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/main/charts');
    };
    NewChartComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    NewChartComponent.prototype.nextStep = function () {
        this.step++;
    };
    NewChartComponent.prototype.prevStep = function () {
        this.step--;
    };
    NewChartComponent.prototype.getProjects = function () {
        var _this = this;
        this.auth.allProjects(localStorage.getItem('token'), '', 'name', 'asc', 0, 15)
            .subscribe(function (data) { return _this.projects = data.projects; });
    };
    NewChartComponent.prototype.previewChart = function (file) {
        var fileType = file.type;
        console.log(file.type);
        if (file.type == 'text/xml') {
            var xsltContent_1;
            var xmlContent_1;
            this.auth.getCdaXsl()
                .subscribe(function (data) {
                xsltContent_1 = data;
                var fileReader = new FileReader();
                fileReader.readAsText(file);
                fileReader.onloadend = function () {
                    xmlContent_1 = fileReader.result;
                    var parser = new DOMParser();
                    var xsl_doc = parser.parseFromString(xsltContent_1, "application/xml");
                    var xml_doc = parser.parseFromString(xmlContent_1, "application/xml");
                    var xsltProcessor = new XSLTProcessor();
                    xsltProcessor.importStylesheet(xsl_doc);
                    var html = xsltProcessor.transformToDocument(xml_doc);
                    var xmlwin = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=800");
                    xmlwin.document.write(html.documentElement.innerHTML);
                };
            });
        }
        if (file.type == 'application/pdf') {
            var blob = new Blob([file], { type: 'application/pdf' });
            var url = window.URL.createObjectURL(blob);
            window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=800");
        }
    };
    NewChartComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewChartComponent.prototype, "file", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"])
    ], NewChartComponent.prototype, "formDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"])
    ], NewChartComponent.prototype, "accordion", void 0);
    NewChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-chart',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-chart/new-chart.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-chart.component.css */ "./src/app/components/new-chart/new-chart.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]])
    ], NewChartComponent);
    return NewChartComponent;
}());



/***/ }),

/***/ "./src/app/components/permissions/permissions-datasource.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/permissions/permissions-datasource.ts ***!
  \******************************************************************/
/*! exports provided: PermissionsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsDataSource", function() { return PermissionsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the Permissions view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var PermissionsDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PermissionsDataSource, _super);
    function PermissionsDataSource(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.privilegesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        _this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        _this.loading$ = _this.loadingSubject.asObservable();
        _this.data = [];
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    PermissionsDataSource.prototype.loadPrivileges = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        var _this = this;
        this.loadingSubject.next(true);
        this.userService.privilege_list(localStorage.getItem('token'), filter, sortField, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (allprivileges) {
            _this.total_count = allprivileges.total_count,
                _this.privilegesSubject.next(allprivileges.privileges);
        });
    };
    PermissionsDataSource.prototype.connect = function (collectionViewer) {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        return this.privilegesSubject.asObservable();
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    PermissionsDataSource.prototype.disconnect = function (collectionViewer) {
        this.privilegesSubject.complete();
        this.loadingSubject.complete();
    };
    return PermissionsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/permissions/permissions.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/permissions/permissions.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\r\n  width: 100%;\r\n}\r\n\r\n.search-box{\r\n}\r\n\r\n.user-toolbar{\r\n  padding: 15px 20px 0 20px;\r\n  font-size: 16px;\r\n}\r\n\r\n.title-bar {\r\n  float:left;\r\n}\r\n\r\n.spinner-container {\r\n    position: fixed;\r\n\tmargin-left: 50%;\r\n\theight: 360px;\r\n    width: 390px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin-left: -195px;\t\r\n}\r\n\r\n.button-row button {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-column-id, .mat-column-name,{\r\n  flex: 0 0 160px;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Blcm1pc3Npb25zL3Blcm1pc3Npb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7QUFDQTs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtDQUNsQixnQkFBZ0I7Q0FDaEIsYUFBYTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wZXJtaXNzaW9ucy9wZXJtaXNzaW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveHtcclxufVxyXG4udXNlci10b29sYmFye1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweCAwIDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGl0bGUtYmFyIHtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG5cdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0aGVpZ2h0OiAzNjBweDtcclxuICAgIHdpZHRoOiAzOTBweDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIG1hdC1zcGlubmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTk1cHg7XHRcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnRvb2xiYXItc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4taWQsIC5tYXQtY29sdW1uLW5hbWUse1xyXG4gIGZsZXg6IDAgMCAxNjBweDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/permissions/permissions.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/permissions/permissions.component.ts ***!
  \*****************************************************************/
/*! exports provided: PermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsComponent", function() { return PermissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _permissions_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions-datasource */ "./src/app/components/permissions/permissions-datasource.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var PermissionsComponent = /** @class */ (function () {
    function PermissionsComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
    }
    PermissionsComponent.prototype.ngOnInit = function () {
        this.privilege = this.route.snapshot.data["privilege"];
        this.dataSource = new _permissions_datasource__WEBPACK_IMPORTED_MODULE_1__["PermissionsDataSource"](this.userService);
        this.dataSource.loadPrivileges('', 'name', 'asc', 0, 10);
    };
    PermissionsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadPrivilegesPage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loadPrivilegesPage(); }))
            .subscribe();
    };
    PermissionsComponent.prototype.loadPrivilegesPage = function () {
        this.dataSource.loadPrivileges(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    PermissionsComponent.prototype.newPrivilege = function () {
        //this.router.navigateByUrl('/main/users/new_user');
    };
    PermissionsComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
    };
    PermissionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], PermissionsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], PermissionsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], PermissionsComponent.prototype, "input", void 0);
    PermissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-permissions',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./permissions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/permissions/permissions.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./permissions.component.css */ "./src/app/components/permissions/permissions.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], PermissionsComponent);
    return PermissionsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-form/project-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/project-form/project-form.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-radio-button {\r\n  display: block;\r\n  margin: 5px 0;\r\n}\r\n\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.col-plain {\r\n  flex: 1;\r\n}\r\n\r\n\r\n.col:last-child {\r\n}\r\n\r\n\r\n.col-inner {\r\n  flex: 2;\r\n}\r\n\r\n\r\n.col-inner-button {\r\n  flex: 1;\r\n}\r\n\r\n\r\n.mat-card-outer{\r\n  padding:0;\r\n}\r\n\r\n\r\n.mat-column-edit{\r\n  flex: 0 0 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3QtZm9ybS9wcm9qZWN0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsT0FBTztBQUNUOzs7QUFFQTtBQUNBOzs7QUFFQTtFQUNFLE9BQU87QUFDVDs7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7OztBQUVBO0VBQ0UsU0FBUztBQUNYOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcHJvamVjdC1mb3JtL3Byb2plY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb2wtcGxhaW4ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbn1cclxuXHJcbi5jb2wtaW5uZXIge1xyXG4gIGZsZXg6IDI7XHJcbn1cclxuXHJcbi5jb2wtaW5uZXItYnV0dG9uIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtb3V0ZXJ7XHJcbiAgcGFkZGluZzowO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1lZGl0e1xyXG4gIGZsZXg6IDAgMCAzMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/project-form/project-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-form/project-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFormComponent", function() { return ProjectFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _select_users_select_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../select-users/select-users.component */ "./src/app/components/select-users/select-users.component.ts");











var ProjectFormComponent = /** @class */ (function () {
    function ProjectFormComponent(fb, router, service, route, _snackBar, dialog) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.route = route;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.edit_mode = false;
        this.statuses = ['Created', 'Chart Loading', 'Abstraction In-progress', 'Completed'];
        this.default_status = 'Created';
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.viewTemplate = false;
        this.reviews = ['None', 'Daily', 'Weekly', 'Total'];
        this.types = ['Risk Adjustment', 'HEDIS Abstraction', 'Special Abstraction', 'Other'];
        this.extraction_status = 'Pending';
        this.displayedColumns = ['first_name', 'last_name', 'username', 'edit'];
        this.selected_users_count = 0;
    }
    ProjectFormComponent.prototype.onSubmit = function (_a) {
        var _b;
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.project.patchValue((_b = {},
            _b['template_data'] = this.template_data,
            _b));
        if (this.edit_mode) {
            if (valid)
                this.service.updateProject(localStorage.getItem('token'), value)
                    .subscribe(function (data) {
                    _this.router.navigateByUrl('/main/projects');
                });
        }
        else {
            if (valid)
                this.service.newProject(localStorage.getItem('token'), value)
                    .subscribe(function (data) {
                    _this.router.navigateByUrl('/main/projects');
                });
        }
    };
    ProjectFormComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/main/projects');
    };
    ProjectFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        //let project_status = this.fb.group({});
        this.route.queryParams.subscribe(function (queryParams) {
            //console.log(queryParams);
            _this.project_id = queryParams['project_id'];
            if (_this.project_id != null) {
                _this.edit_mode = true;
                _this.viewProjectDetail(_this.project_id);
            }
            else {
                _this.edit_mode = false;
            }
        });
        this.project = this.fb.group({
            project_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: null,
            customer: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            project_status: null,
            start_date: null,
            end_date: null,
            project_type: null,
            qa_review: null,
            percentage: null,
            template_data: null,
            data_access: null
        });
    };
    ProjectFormComponent.prototype.viewProjectDetail = function (project_id) {
        var _this = this;
        this.service.viewProjectDetail(localStorage.getItem('token'), project_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return console.log('Success'); }))
            .subscribe(function (data) {
            _this.created_date = data.project.created_date.$date;
            delete data.project['created_date'];
            //data.chart['review_comments'] = '';
            delete data.project['extraction_file'];
            delete data.project['extraction_status'];
            //data.project['data_access'] = '';
            _this.project.setValue(data.project);
            _this.template_data = data.project.template_data;
            _this.data_access = data.project.data_access;
        });
    };
    ProjectFormComponent.prototype.addTemplate = function (event) {
        var _this = this;
        var file = (this.file.nativeElement.files[0] ? this.file.nativeElement.files[0] : this.file.nativeElement.files[0].value || undefined), supportedFormats = ['.json', 'application/json'];
        if (file && file.type) {
            if (0 > supportedFormats.indexOf(file.type)) {
                this._snackBar.open('File Format Not Supported', 'Close', {
                    duration: 5000,
                    horizontalPosition: this.horizontalPosition,
                    verticalPosition: this.verticalPosition,
                });
            }
            else {
                this.selectedFile = event.target.files[0];
                this.selectedFilename = this.selectedFile.name;
                var fileReader_1 = new FileReader();
                fileReader_1.readAsText(this.selectedFile, "UTF-8");
                fileReader_1.onload = function () {
                    var _a;
                    _this.template_data = JSON.parse(fileReader_1.result);
                    _this.project.patchValue((_a = {},
                        _a['template_data'] = JSON.parse(fileReader_1.result),
                        _a));
                    //this.template_data = JSON.stringify((JSON.parse(fileReader.result as string)), undefined, 4);
                    //document.getElementById('template_area').innerHTML = this.template_data;
                };
                fileReader_1.onerror = function (error) {
                    console.log(error);
                };
            }
        }
    };
    ProjectFormComponent.prototype.showTemplate = function () {
        this.viewTemplate = !this.viewTemplate;
    };
    ProjectFormComponent.prototype.prepareExtract = function () {
        this.service.initiateExtract(localStorage.getItem('token'), this.project_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return console.log('Success'); }))
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ProjectFormComponent.prototype.downloadExtract = function () {
        var _this = this;
        this.service.downloadExtract(localStorage.getItem('token'), this.project_id).subscribe(function (response) { return _this.downloadFile(response, "text/csv"); }),
            function (error) { return console.log('Error downloading the file.'); },
            function () { return console.info('OK'); };
    };
    ProjectFormComponent.prototype.downloadFile = function (data, type) {
        var blob = new Blob([data], { type: type });
        var url = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = this.project_id + this.getDateTime() + '.csv';
        link.click();
        window.URL.revokeObjectURL(link.href);
    };
    ProjectFormComponent.prototype.getDateTime = function () {
        var d = new Date();
        var mo = this.addZero(d.getMonth() + 1);
        var yr = this.addZero(d.getFullYear());
        var dt = this.addZero(d.getDate());
        var h = this.addZero(d.getHours());
        var m = this.addZero(d.getMinutes());
        var s = this.addZero(d.getSeconds());
        return ("_" + mo + '-' + dt + '-' + yr + '-' + h + "-" + m + "-" + s);
    };
    ProjectFormComponent.prototype.addZero = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };
    ProjectFormComponent.prototype.launchSFS = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_9__["SelectUsersComponent"], {
            width: '800px',
            data: { selected_users: this.selected_users, existing_users: this.data_access }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            var _a;
            result.selected_users.forEach(function (element) {
                delete element['created_date'];
            });
            _this.data_access = result.selected_users;
            _this.selected_users_count = result.selected_users.length;
            _this.project.patchValue((_a = {},
                _a['data_access'] = _this.data_access,
                _a));
        });
    };
    ProjectFormComponent.prototype.delete = function (row) {
        var _a;
        this.data_access = this.data_access.filter(function (i) { return i !== row; });
        this.selected_users_count = this.data_access.length;
        this.project.patchValue((_a = {},
            _a['data_access'] = this.data_access,
            _a));
    };
    ProjectFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectFormComponent.prototype, "file", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectFormComponent.prototype, "selected_users", void 0);
    ProjectFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-form/project-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-form.component.css */ "./src/app/components/project-form/project-form.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], ProjectFormComponent);
    return ProjectFormComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects-datasource.ts":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects-datasource.ts ***!
  \************************************************************/
/*! exports provided: ProjectsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsDataSource", function() { return ProjectsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ProjectsDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectsDataSource, _super);
    function ProjectsDataSource(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.projectsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        _this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        _this.loading$ = _this.loadingSubject.asObservable();
        _this.data = [];
        return _this;
    }
    ProjectsDataSource.prototype.loadProjects = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        var _this = this;
        this.loadingSubject.next(true);
        this.service.allProjects(localStorage.getItem('token'), filter, sortField, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (projects) {
            _this.total_count = projects.total_count,
                _this.projectsSubject.next(projects.projects);
        });
    };
    ProjectsDataSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.projectsSubject.asObservable();
    };
    ProjectsDataSource.prototype.disconnect = function (collectionViewer) {
        this.projectsSubject.complete();
        this.loadingSubject.complete();
    };
    return ProjectsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\r\n  width: 100%;\r\n}\r\n\r\n.search-box{\r\n}\r\n\r\n.user-toolbar{\r\n  padding: 12px 12px 0 12px;\r\n  font-size: 16px;\r\n}\r\n\r\n.title-bar {\r\n  float:left;\r\n}\r\n\r\n.spinner-container {\r\n    position: fixed;\r\n\tmargin-left: 50%;\r\n\theight: 360px;\r\n    width: 390px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin-left: -195px;\t\r\n}\r\n\r\n.button-row button {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-column-project_id, .mat-column-project_name, .mat-column-description, .mat-column-customer,{\r\n  flex: 0 0 160px;\r\n}\r\n\r\n.mat-column-edit{\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 3% !important;\r\n  width: 3% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7QUFDQTs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtDQUNsQixnQkFBZ0I7Q0FDaEIsYUFBYTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveHtcclxufVxyXG4udXNlci10b29sYmFye1xyXG4gIHBhZGRpbmc6IDEycHggMTJweCAwIDEycHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGl0bGUtYmFyIHtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG5cdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0aGVpZ2h0OiAzNjBweDtcclxuICAgIHdpZHRoOiAzOTBweDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIG1hdC1zcGlubmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTk1cHg7XHRcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnRvb2xiYXItc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tcHJvamVjdF9pZCwgLm1hdC1jb2x1bW4tcHJvamVjdF9uYW1lLCAubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiwgLm1hdC1jb2x1bW4tY3VzdG9tZXIse1xyXG4gIGZsZXg6IDAgMCAxNjBweDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZWRpdHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgMyUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMyUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _projects_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-datasource */ "./src/app/components/projects/projects-datasource.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['project_id', 'project_name', 'description', 'customer', 'project_status', 'created_date', 'edit'];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.project = this.route.snapshot.data["project"];
        this.dataSource = new _projects_datasource__WEBPACK_IMPORTED_MODULE_4__["ProjectsDataSource"](this.service);
        this.dataSource.loadProjects('', 'created_date', 'desc', 0, 10);
        //this.dataSource = new UsersDataSource(this.userService, this.paginator, this.sort);
    };
    ProjectsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadProjectsPage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loadProjectsPage(); }))
            .subscribe();
    };
    ProjectsComponent.prototype.loadProjectsPage = function () {
        this.dataSource.loadProjects(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    ProjectsComponent.prototype.newProject = function () {
        this.router.navigateByUrl('/main/projects/new_project');
    };
    ProjectsComponent.prototype.editProject = function (project_id) {
        this.router.navigateByUrl('/main/projects/new_project?project_id=' + project_id);
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ProjectsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ProjectsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProjectsComponent.prototype, "input", void 0);
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/qa-review/qa-review-datasource.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/qa-review/qa-review-datasource.ts ***!
  \**************************************************************/
/*! exports provided: AbstractDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDataSource", function() { return AbstractDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AbstractDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AbstractDataSource, _super);
    function AbstractDataSource(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.abstractionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        _this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        _this.loading$ = _this.loadingSubject.asObservable();
        _this.data = [];
        return _this;
    }
    AbstractDataSource.prototype.loadAbstractions = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        var _this = this;
        console.log("testing");
        this.loadingSubject.next(true);
        this.service.allQAReviews(localStorage.getItem('token'), filter, sortField, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (allAbstractions) {
            _this.total_count = allAbstractions.total_count,
                _this.abstractionsSubject.next(allAbstractions.abstractions);
        });
    };
    AbstractDataSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.abstractionsSubject.asObservable();
    };
    AbstractDataSource.prototype.disconnect = function (collectionViewer) {
        this.abstractionsSubject.complete();
        this.loadingSubject.complete();
    };
    return AbstractDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/qa-review/qa-review.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/qa-review/qa-review.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\r\n  width: 100%;\r\n  text-align: left !important;\r\n}\r\n\r\n.inner-table {\r\n  width: 100% !important;\r\n  text-align: left !important;\r\n  margin-left: 20px;\r\n}\r\n\r\n.inner-column {\r\n  width: 370px !important;\r\n  padding: 5px !important;\r\n  border-bottom-width: 0;\r\n  \r\n}\r\n\r\nth.inner-column {\r\n  width: 100px !important;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.inner-category {\r\n  text-align: left !important;\r\n  font-size: 14px;\r\n}\r\n\r\n.search-box{\r\n}\r\n\r\n.user-toolbar{\r\n  padding: 12px 12px 0 12px;\r\n  font-size: 16px;\r\n}\r\n\r\n.title-bar {\r\n  float:left;\r\n}\r\n\r\n.spinner-container {\r\n    position: fixed;\r\n\tmargin-left: 50%;\r\n\theight: 360px;\r\n    width: 390px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin-left: -195px;\t\r\n}\r\n\r\n.button-row button {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-column-abstract_id, .mat-column-chart_id, .mat-column-project_id{\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 7% !important;\r\n  width: 7% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.mat-column-abstract_status, .mat-column-abstract_created_date, .mat-column-abstract_date, .mat-column-abstract_by{\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 12% !important;\r\n  width: 12% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.mat-column-edit{\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 3% !important;\r\n  width: 3% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\ntd.mat-cell {\r\n\tpadding-right: 25px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #efefef;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 100px;\r\n  border: 2px solid gray;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 80px;\r\n}\r\n\r\n.example-element-truncate {\r\n  overflow: hidden;\r\n  white-space: nowrap;  \r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 10px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n.mat-paginator {\r\n  bottom: 0px;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  z-index: 10;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.status-color{\r\n  color: #f44336;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3FhLXJldmlldy9xYS1yZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtBQUNBOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0NBQ2xCLGdCQUFnQjtDQUNoQixhQUFhO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBR0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9xYS1yZXZpZXcvcWEtcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aC10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5uZXItdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uaW5uZXItY29sdW1uIHtcclxuICB3aWR0aDogMzcwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gIFxyXG59XHJcblxyXG50aC5pbm5lci1jb2x1bW4ge1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5pbm5lci1jYXRlZ29yeSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3h7XHJcbn1cclxuLnVzZXItdG9vbGJhcntcclxuICBwYWRkaW5nOiAxMnB4IDEycHggMCAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRpdGxlLWJhciB7XHJcbiAgZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHRtYXJnaW4tbGVmdDogNTAlO1xyXG5cdGhlaWdodDogMzYwcHg7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbn1cclxuXHJcbi5zcGlubmVyLWNvbnRhaW5lciBtYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE5NXB4O1x0XHJcbn1cclxuXHJcbi5idXR0b24tcm93IGJ1dHRvbiB7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi50b29sYmFyLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWFic3RyYWN0X2lkLCAubWF0LWNvbHVtbi1jaGFydF9pZCwgLm1hdC1jb2x1bW4tcHJvamVjdF9pZHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgNyUgIWltcG9ydGFudDtcclxuICB3aWR0aDogNyUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1hYnN0cmFjdF9zdGF0dXMsIC5tYXQtY29sdW1uLWFic3RyYWN0X2NyZWF0ZWRfZGF0ZSwgLm1hdC1jb2x1bW4tYWJzdHJhY3RfZGF0ZSwgLm1hdC1jb2x1bW4tYWJzdHJhY3RfYnl7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDEyJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMiUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1lZGl0e1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAzJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzJSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm1vcmUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRkLm1hdC1jZWxsIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXRydW5jYXRlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7ICBcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICBib3R0b206IDBweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc3RhdHVzLWNvbG9ye1xyXG4gIGNvbG9yOiAjZjQ0MzM2O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/qa-review/qa-review.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/qa-review/qa-review.component.ts ***!
  \*************************************************************/
/*! exports provided: QaReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaReviewComponent", function() { return QaReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _qa_review_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qa-review-datasource */ "./src/app/components/qa-review/qa-review-datasource.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");









var QaReviewComponent = /** @class */ (function () {
    //expandedElement: dataSource | null;
    function QaReviewComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['abstract_id', 'chart_id', 'project_id', 'lastname', 'firstname', 'abstract_status', 'abstract_created_date', 'abstract_date', 'abstract_by', 'edit'];
    }
    QaReviewComponent.prototype.ngOnInit = function () {
        this.abstraction = this.route.snapshot.data["abstraction"];
        this.dataSource = new _qa_review_datasource__WEBPACK_IMPORTED_MODULE_4__["AbstractDataSource"](this.userService);
        this.dataSource.loadAbstractions('', 'abstract_created_date', 'desc', 0, 10);
        //this.dataSource = new UsersDataSource(this.userService, this.paginator, this.sort);
    };
    QaReviewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadAbstractionsPage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loadAbstractionsPage(); }))
            .subscribe();
    };
    QaReviewComponent.prototype.loadAbstractionsPage = function () {
        this.dataSource.loadAbstractions(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    QaReviewComponent.prototype.editAbstract = function (abstract_id, filename) {
        this.router.navigateByUrl('/main/qa-review/new_abstraction?abstract_id=' + abstract_id + '&filename=' + filename);
    };
    QaReviewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], QaReviewComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], QaReviewComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], QaReviewComponent.prototype, "input", void 0);
    QaReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qa-review',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qa-review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/qa-review/qa-review.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./qa-review.component.css */ "./src/app/components/qa-review/qa-review.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], QaReviewComponent);
    return QaReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/register-business/register-business.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/register-business/register-business.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n.login-card {\r\n  min-width: 250px;\r\n  max-width: 370px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.col {\r\n  flex: 1;\r\n}\r\n\r\n.col:last-child {\r\n}\r\n\r\n.card-field {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.mat-business {\r\n    background-color: coral;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JlZ2lzdGVyLWJ1c2luZXNzL3JlZ2lzdGVyLWJ1c2luZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztBQUNmIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3JlZ2lzdGVyLWJ1c2luZXNzL3JlZ2lzdGVyLWJ1c2luZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJkIHtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1heC13aWR0aDogMzcwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY29sIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uY29sOmxhc3QtY2hpbGQge1xyXG59XHJcblxyXG4uY2FyZC1maWVsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWJ1c2luZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/register-business/register-business.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/register-business/register-business.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegisterBusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterBusinessComponent", function() { return RegisterBusinessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





var RegisterBusinessComponent = /** @class */ (function () {
    function RegisterBusinessComponent(fb, router, auth) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.business_types = [];
        this.hide = true;
    }
    RegisterBusinessComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid)
            this.auth.generate_otp(value)
                .subscribe(function (data) {
                localStorage.setItem('user', JSON.stringify(value));
                _this.router.navigateByUrl('/verifyotp');
            });
    };
    RegisterBusinessComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/login-page');
    };
    RegisterBusinessComponent.prototype.ngOnInit = function () {
        this.business_types = [
            { id: '1', name: 'Clinic' },
            { id: '2', name: 'Hospital' },
            { id: '3', name: 'Lab' },
            { id: '4', name: 'Pharmacy' }
        ];
        this.user = this.fb.group({
            business_type: null,
            business_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passkey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    RegisterBusinessComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    RegisterBusinessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-business',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-business.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register-business/register-business.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-business.component.css */ "./src/app/components/register-business/register-business.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RegisterBusinessComponent);
    return RegisterBusinessComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n.login-card {\r\n  min-width: 250px;\r\n  margin: 40px;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.col {\r\n  flex: 1;\r\n}\r\n\r\n.col:last-child {\r\n}\r\n\r\n.card-field {\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZCB7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNvbDpsYXN0LWNoaWxkIHtcclxufVxyXG5cclxuLmNhcmQtZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, router, auth) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.hide = true;
    }
    RegisterComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid)
            this.auth.generate_otp(value)
                .subscribe(function (data) {
                localStorage.setItem('user', JSON.stringify(value));
                _this.router.navigateByUrl('/verifyotp');
            });
    };
    RegisterComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/login-page');
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passkey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/role-form/role-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/role-form/role-form.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-radio-button {\r\n  display: block;\r\n  margin: 5px 0;\r\n}\r\n\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.col:last-child {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JvbGUtZm9ybS9yb2xlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUVBO0FBQ0EiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcm9sZS1mb3JtL3JvbGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/role-form/role-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/role-form/role-form.component.ts ***!
  \*************************************************************/
/*! exports provided: RoleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleFormComponent", function() { return RoleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





var RoleFormComponent = /** @class */ (function () {
    function RoleFormComponent(fb, router, auth) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.hide = true;
        this.hasUnitNumber = false;
        this.privileges = [];
    }
    RoleFormComponent.prototype.getPrivileges = function () {
        var _this = this;
        console.log('test');
        this.auth.privilege_list(localStorage.getItem('token'), '', 'name', 'asc', 0, 15)
            .subscribe(function (data) { return _this.privileges = data.privileges; });
    };
    RoleFormComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid)
            this.auth.newRole(localStorage.getItem('token'), value)
                .subscribe(function (data) {
                _this.router.navigateByUrl('/main/roles');
            });
    };
    RoleFormComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/main/roles');
    };
    RoleFormComponent.prototype.ngOnInit = function () {
        this.getPrivileges();
        this.role = this.fb.group({
            role_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            privileges: null
        });
    };
    RoleFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    RoleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./role-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/role-form/role-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./role-form.component.css */ "./src/app/components/role-form/role-form.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RoleFormComponent);
    return RoleFormComponent;
}());



/***/ }),

/***/ "./src/app/components/roles/roles-datasource.ts":
/*!******************************************************!*\
  !*** ./src/app/components/roles/roles-datasource.ts ***!
  \******************************************************/
/*! exports provided: RolesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesDataSource", function() { return RolesDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
];
/**
 * Data source for the Roles view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var RolesDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RolesDataSource, _super);
    function RolesDataSource(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.rolesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        _this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        _this.loading$ = _this.loadingSubject.asObservable();
        _this.data = [];
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    RolesDataSource.prototype.loadRoles = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        var _this = this;
        this.loadingSubject.next(true);
        this.userService.role_list(localStorage.getItem('token'), filter, sortField, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (allroles) {
            _this.total_count = allroles.total_count,
                _this.rolesSubject.next(allroles.roles);
        });
    };
    RolesDataSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.rolesSubject.asObservable();
    };
    RolesDataSource.prototype.disconnect = function (collectionViewer) {
        this.rolesSubject.complete();
        this.loadingSubject.complete();
    };
    return RolesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/roles/roles.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/roles/roles.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\r\n  width: 100%;\r\n}\r\n\r\n.search-box{\r\n}\r\n\r\n.user-toolbar{\r\n  padding: 15px 20px 0 20px;\r\n  font-size: 16px;\r\n}\r\n\r\n.title-bar {\r\n  float:left;\r\n}\r\n\r\n.spinner-container {\r\n    position: fixed;\r\n\tmargin-left: 50%;\r\n\theight: 360px;\r\n    width: 390px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin-left: -195px;\t\r\n}\r\n\r\n.button-row button {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-column-id, .mat-column-name,{\r\n  flex: 0 0 160px;\r\n}\r\n\r\n.mat-column-edit{\r\n  flex: 0 0 30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7QUFDQTs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtDQUNsQixnQkFBZ0I7Q0FDaEIsYUFBYTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3h7XHJcbn1cclxuLnVzZXItdG9vbGJhcntcclxuICBwYWRkaW5nOiAxNXB4IDIwcHggMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRpdGxlLWJhciB7XHJcbiAgZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHRtYXJnaW4tbGVmdDogNTAlO1xyXG5cdGhlaWdodDogMzYwcHg7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbn1cclxuXHJcbi5zcGlubmVyLWNvbnRhaW5lciBtYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE5NXB4O1x0XHJcbn1cclxuXHJcbi5idXR0b24tcm93IGJ1dHRvbiB7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi50b29sYmFyLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWlkLCAubWF0LWNvbHVtbi1uYW1lLHtcclxuICBmbGV4OiAwIDAgMTYwcHg7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWVkaXR7XHJcbiAgZmxleDogMCAwIDMwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/roles/roles.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/roles/roles.component.ts ***!
  \*****************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _roles_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./roles-datasource */ "./src/app/components/roles/roles-datasource.ts");








var RolesComponent = /** @class */ (function () {
    function RolesComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name', 'edit'];
    }
    RolesComponent.prototype.ngOnInit = function () {
        this.role = this.route.snapshot.data["role"];
        this.dataSource = new _roles_datasource__WEBPACK_IMPORTED_MODULE_7__["RolesDataSource"](this.userService);
        this.dataSource.loadRoles('', 'name', 'asc', 0, 10);
    };
    RolesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadRolesPage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.loadRolesPage(); }))
            .subscribe();
    };
    RolesComponent.prototype.loadRolesPage = function () {
        this.dataSource.loadRoles(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    RolesComponent.prototype.newRole = function () {
        this.router.navigateByUrl('/main/roles/new_role');
    };
    RolesComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
    };
    RolesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], RolesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], RolesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RolesComponent.prototype, "input", void 0);
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roles',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./roles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/roles/roles.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./roles.component.css */ "./src/app/components/roles/roles.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/components/select-users/select-users.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/select-users/select-users.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\r\n  width: 100%;\r\n}\r\n\r\n.search-box{\r\n}\r\n\r\n.user-toolbar{\r\n  padding: 12px 12px 0 12px;\r\n  font-size: 16px;\r\n}\r\n\r\n.title-bar {\r\n  float:left;\r\n}\r\n\r\n.spinner-container {\r\n    position: fixed;\r\n\tmargin-left: 50%;\r\n\theight: 360px;\r\n    width: 390px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin-left: -195px;\t\r\n}\r\n\r\n.button-row button {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-column-first_name, .mat-column-last_name, .mat-column-username,{\r\n  flex: 0 0 160px;\r\n}\r\n\r\n.mat-column-edit, .mat-column-select{\r\n  flex: 0 0 30px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NlbGVjdC11c2Vycy9zZWxlY3QtdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtBQUNBOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0NBQ2xCLGdCQUFnQjtDQUNoQixhQUFhO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zZWxlY3QtdXNlcnMvc2VsZWN0LXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aC10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94e1xyXG59XHJcbi51c2VyLXRvb2xiYXJ7XHJcbiAgcGFkZGluZzogMTJweCAxMnB4IDAgMTJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi50aXRsZS1iYXIge1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcblx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHRoZWlnaHQ6IDM2MHB4O1xyXG4gICAgd2lkdGg6IDM5MHB4O1xyXG59XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXIgbWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOTVweDtcdFxyXG59XHJcblxyXG4uYnV0dG9uLXJvdyBidXR0b24ge1xyXG5cdG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1maXJzdF9uYW1lLCAubWF0LWNvbHVtbi1sYXN0X25hbWUsIC5tYXQtY29sdW1uLXVzZXJuYW1lLHtcclxuICBmbGV4OiAwIDAgMTYwcHg7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWVkaXQsIC5tYXQtY29sdW1uLXNlbGVjdHtcclxuICBmbGV4OiAwIDAgMzBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubW9yZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY29sIHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/select-users/select-users.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/select-users/select-users.component.ts ***!
  \*******************************************************************/
/*! exports provided: SelectUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectUsersComponent", function() { return SelectUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _users_users_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/users-datasource */ "./src/app/components/users/users-datasource.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");










var SelectUsersComponent = /** @class */ (function () {
    function SelectUsersComponent(route, router, userService, dialogRef, data) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['select', 'first_name', 'last_name', 'username'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
    }
    SelectUsersComponent.prototype.ngOnInit = function () {
        this.dataSource = new _users_users_datasource__WEBPACK_IMPORTED_MODULE_4__["UsersDataSource"](this.userService);
        this.dataSource.loadUsers('', 'first_name', 'asc', 0, 10);
        //this.dataSource = new UsersDataSource(this.userService, this.paginator, this.sort);
        //this.dataSource.forEach(row=> console.log(row))
        console.log(this.dataSource.total_count);
    };
    SelectUsersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadUsersPage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loadUsersPage(); }))
            .subscribe();
    };
    SelectUsersComponent.prototype.loadUsersPage = function () {
        this.dataSource.loadUsers(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    SelectUsersComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    SelectUsersComponent.prototype.addSelectedUsers = function () {
        this.data.selected_users = this.selection.selected;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    SelectUsersComponent.prototype.isAllSelected = function () {
        //console.log(this.dataSource.data);
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.total_count;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    SelectUsersComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    /** The label for the checkbox on the passed row */
    SelectUsersComponent.prototype.checkboxLabel = function (row, i) {
        var _this = this;
        this.dataSource.data.forEach(function (row) {
            if (_this.data.existing_users != null)
                _this.data.existing_users.forEach(function (user) {
                    if (row.username == user.username) {
                        console.log(row);
                        _this.selection.select(row);
                    }
                });
        });
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (i + 1);
    };
    SelectUsersComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], SelectUsersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SelectUsersComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SelectUsersComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectUsersComponent.prototype, "existing_users", void 0);
    SelectUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-users',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-users/select-users.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-users.component.css */ "./src/app/components/select-users/select-users.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"], Object])
    ], SelectUsersComponent);
    return SelectUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/studies/studies.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/studies/studies.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\r\n  width: 100%;\r\n  text-align: left !important;\r\n}\r\n\r\n.search-box{\r\n}\r\n\r\n.user-toolbar{\r\n  padding: 12px 12px 0 12px;\r\n  font-size: 16px;\r\n}\r\n\r\n.title-bar {\r\n  float:left;\r\n}\r\n\r\n.spinner-container {\r\n    position: fixed;\r\n\tmargin-left: 50%;\r\n\theight: 360px;\r\n    width: 390px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin-left: -195px;\t\r\n}\r\n\r\n.button-row button {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-column-study_id, .mat-column-title, .mat-column-phase,{\r\n  flex: 0 0 160px;\r\n}\r\n\r\n.mat-column-edit{\r\n  flex: 0 0 30px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\ntd.mat-cell {\r\n\tpadding-right: 25px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #efefef;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 1px solid gray;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 65px;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n.mat-paginator {\r\n  bottom: 0px;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  z-index: 10;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3N0dWRpZXMvc3R1ZGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtBQUNBOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0NBQ2xCLGdCQUFnQjtDQUNoQixhQUFhO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFHQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3N0dWRpZXMvc3R1ZGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3h7XHJcbn1cclxuLnVzZXItdG9vbGJhcntcclxuICBwYWRkaW5nOiAxMnB4IDEycHggMCAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRpdGxlLWJhciB7XHJcbiAgZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHRtYXJnaW4tbGVmdDogNTAlO1xyXG5cdGhlaWdodDogMzYwcHg7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbn1cclxuXHJcbi5zcGlubmVyLWNvbnRhaW5lciBtYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE5NXB4O1x0XHJcbn1cclxuXHJcbi5idXR0b24tcm93IGJ1dHRvbiB7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi50b29sYmFyLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXN0dWR5X2lkLCAubWF0LWNvbHVtbi10aXRsZSwgLm1hdC1jb2x1bW4tcGhhc2Use1xyXG4gIGZsZXg6IDAgMCAxNjBweDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZWRpdHtcclxuICBmbGV4OiAwIDAgMzBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubW9yZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGQubWF0LWNlbGwge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gIG1pbi13aWR0aDogODBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICBib3R0b206IDBweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/studies/studies.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/studies/studies.component.ts ***!
  \*********************************************************/
/*! exports provided: StudiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudiesComponent", function() { return StudiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _study_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./study-datasource */ "./src/app/components/studies/study-datasource.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");









var StudiesComponent = /** @class */ (function () {
    //expandedElement: dataSource | null;
    function StudiesComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['study_id', 'title', 'phase', 'active', 'edit'];
    }
    StudiesComponent.prototype.ngOnInit = function () {
        this.study = this.route.snapshot.data["study"];
        this.dataSource = new _study_datasource__WEBPACK_IMPORTED_MODULE_4__["StudyDataSource"](this.userService);
        this.dataSource.loadStudies('', 'study_id', 'asc', 0, 10);
        //this.dataSource = new UsersDataSource(this.userService, this.paginator, this.sort);
    };
    StudiesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadStudiesPage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loadStudiesPage(); }))
            .subscribe();
    };
    StudiesComponent.prototype.loadStudiesPage = function () {
        this.dataSource.loadStudies(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    StudiesComponent.prototype.newStudy = function () {
        this.router.navigateByUrl('/main/studies/new_study');
    };
    StudiesComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
    };
    StudiesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], StudiesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StudiesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StudiesComponent.prototype, "input", void 0);
    StudiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studies',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./studies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/studies/studies.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./studies.component.css */ "./src/app/components/studies/studies.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], StudiesComponent);
    return StudiesComponent;
}());



/***/ }),

/***/ "./src/app/components/studies/study-datasource.ts":
/*!********************************************************!*\
  !*** ./src/app/components/studies/study-datasource.ts ***!
  \********************************************************/
/*! exports provided: StudyDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyDataSource", function() { return StudyDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var StudyDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudyDataSource, _super);
    function StudyDataSource(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.studiesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        _this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        _this.loading$ = _this.loadingSubject.asObservable();
        _this.data = [];
        return _this;
    }
    StudyDataSource.prototype.loadStudies = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        var _this = this;
        console.log("testing");
        this.loadingSubject.next(true);
        this.userService.allStudies(localStorage.getItem('token'), filter, sortField, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (allstudies) {
            _this.total_count = allstudies.total_count,
                _this.studiesSubject.next(allstudies.studies);
        });
    };
    StudyDataSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.studiesSubject.asObservable();
    };
    StudyDataSource.prototype.disconnect = function (collectionViewer) {
        this.studiesSubject.complete();
        this.loadingSubject.complete();
    };
    return StudyDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/study-form/study-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/study-form/study-form.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-radio-button {\r\n  display: block;\r\n  margin: 5px 0;\r\n}\r\n\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.col:last-child {\r\n}\r\n\r\n\r\n.uploadfilecontainer {\r\n  background-size: 100px;\r\n  background-position: center;\r\n  height: 100px;\r\n  width: 100%;\r\n  margin: 20px auto;\r\n  border: 2px dashed gray;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  line-height: 100px;\r\n}\r\n\r\n\r\n.uploadcenter {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  line-height: normal;\r\n  font-weight: lighter;\r\n  color: gray;\r\n}\r\n\r\n\r\n.uploadfilecontainer:hover {\r\n  cursor: pointer;\r\n  background-color: #9ecbec !important;\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n.files-list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  margin: 10px auto;\r\n  background: #ffffff;\r\n  border: 1px dashed gray;\r\n  border-radius: 5px;\r\n  padding-left: 10px;\r\n  color: black;\r\n}\r\n\r\n\r\n.files-list .delete-file {\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.files-list .delete-file img{\r\n  width:30px;\r\n}\r\n\r\n\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3N0dWR5LWZvcm0vc3R1ZHktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7O0FBRUE7QUFDQTs7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7OztBQUdBOztFQUVFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3N0dWR5LWZvcm0vc3R1ZHktZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbn1cclxuXHJcbi51cGxvYWRmaWxlY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4udXBsb2FkY2VudGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4udXBsb2FkZmlsZWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWNiZWMgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5maWxlcy1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZmlsZXMtbGlzdCAuZGVsZXRlLWZpbGUge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZpbGVzLWxpc3QgLmRlbGV0ZS1maWxlIGltZ3tcclxuICB3aWR0aDozMHB4O1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/study-form/study-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/study-form/study-form.component.ts ***!
  \***************************************************************/
/*! exports provided: StudyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyFormComponent", function() { return StudyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _resources_countries_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/countries.json */ "./src/app/resources/countries.json");
var _resources_countries_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../resources/countries.json */ "./src/app/resources/countries.json", 1);







var StudyFormComponent = /** @class */ (function () {
    function StudyFormComponent(_formBuilder, router, auth, uploadService) {
        this._formBuilder = _formBuilder;
        this.router = router;
        this.auth = auth;
        this.uploadService = uploadService;
        this.files = new Set();
        this.step = 0;
        this.dragfiles = [];
        this.canBeClosed = true;
        this.primaryButtonText = 'Upload';
        this.showCancelButton = true;
        this.uploading = false;
        this.uploadSuccessful = false;
        this.selected_type = '';
        this.phases = [{ value: 101, display: 'Phase I' },
            { value: 102, display: 'Phase II' },
            { value: 103, display: 'Phase III' },
            { value: 104, display: 'Phase IV' }];
        this.types = [{ value: 101, display: 'Interventional' },
            { value: 102, display: 'Observational' },
            { value: 103, display: 'Expanded Access' }];
        this.countries = _resources_countries_json__WEBPACK_IMPORTED_MODULE_6__;
        this.maskings = [{ value: 101, display: 'Open Label' },
            { value: 102, display: 'Single Blind' },
            { value: 103, display: 'Double Blind' },
            { value: 104, display: 'Triple Blind' }];
    }
    StudyFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        //if (valid){
        //	this.uploadService.upload(this.files, 'upload_study_file'); 
        //this.auth.newStudy(localStorage.getItem('token'),value)
        //.subscribe((data) => {
        // this.router.navigateByUrl('/main/studies');
        //});  
        //}
    };
    StudyFormComponent.prototype.ngOnInit = function () {
        this.study = this._formBuilder.group({
            study_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phase: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: null,
            upload_file: null,
            primary_obj: null,
            secondary_obj: null,
            start_date: null,
            end_date: null,
            enrollment: null,
            country: null,
            sites: null,
            sites_country: null,
            subjects_site: null,
            intervention: null,
            masking: null
        });
        this.secondFormGroup = this._formBuilder.group({
            description: null
        });
    };
    StudyFormComponent.prototype.onFilesAdded = function () {
        var files = this.file.nativeElement.files;
        for (var key in files) {
            if (!isNaN(parseInt(key))) {
                this.files.add(files[key]);
            }
        }
    };
    StudyFormComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    StudyFormComponent.prototype.uploadFile = function (event) {
        for (var index = 0; index < event.length; index++) {
            var element = event[index];
            this.files.add(element);
        }
    };
    StudyFormComponent.prototype.deleteAttachment = function (file) {
        this.files.delete(file);
    };
    StudyFormComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    StudyFormComponent.prototype.nextStep = function () {
        this.step++;
    };
    StudyFormComponent.prototype.prevStep = function () {
        this.step--;
    };
    StudyFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StudyFormComponent.prototype, "file", void 0);
    StudyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-study-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./study-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/study-form/study-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./study-form.component.css */ "./src/app/components/study-form/study-form.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]])
    ], StudyFormComponent);
    return StudyFormComponent;
}());



/***/ }),

/***/ "./src/app/components/tenants/tenants.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/tenants/tenants.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy90ZW5hbnRzL3RlbmFudHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/tenants/tenants.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tenants/tenants.component.ts ***!
  \*********************************************************/
/*! exports provided: TenantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantsComponent", function() { return TenantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TenantsComponent = /** @class */ (function () {
    function TenantsComponent() {
    }
    TenantsComponent.prototype.ngOnInit = function () {
    };
    TenantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tenants',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tenants.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tenants/tenants.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tenants.component.css */ "./src/app/components/tenants/tenants.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TenantsComponent);
    return TenantsComponent;
}());



/***/ }),

/***/ "./src/app/components/user-form/user-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-form/user-form.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-radio-button {\r\n  display: block;\r\n  margin: 5px 0;\r\n}\r\n\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n.col:last-child {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUVBO0FBQ0EiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/user-form/user-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-form/user-form.component.ts ***!
  \*************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _resources_countries_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources/countries.json */ "./src/app/resources/countries.json");
var _resources_countries_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../resources/countries.json */ "./src/app/resources/countries.json", 1);
/* harmony import */ var _resources_states_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/states.json */ "./src/app/resources/states.json");
var _resources_states_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../resources/states.json */ "./src/app/resources/states.json", 1);







var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(fb, router, auth) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.hide = true;
        this.hasUnitNumber = false;
        this.countries = _resources_countries_json__WEBPACK_IMPORTED_MODULE_5__;
        this.states = _resources_states_json__WEBPACK_IMPORTED_MODULE_6__;
        this.roles = [];
    }
    UserFormComponent.prototype.getRoles = function () {
        var _this = this;
        console.log('test');
        this.auth.role_list(localStorage.getItem('token'), '', 'name', 'asc', 0, 15)
            .subscribe(function (data) { return _this.roles = data.roles; });
    };
    UserFormComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid)
            this.auth.newUser(localStorage.getItem('token'), value)
                .subscribe(function (data) {
                _this.router.navigateByUrl('/main/users');
            });
    };
    UserFormComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/main/users');
    };
    UserFormComponent.prototype.ngOnInit = function () {
        this.getRoles();
        this.user = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passkey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: null,
            address: null,
            city: null,
            state: null,
            postalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)])],
            roles: null,
            country: null
        });
    };
    UserFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-form/user-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-form.component.css */ "./src/app/components/user-form/user-form.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users-datasource.ts":
/*!******************************************************!*\
  !*** ./src/app/components/users/users-datasource.ts ***!
  \******************************************************/
/*! exports provided: UsersDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDataSource", function() { return UsersDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UsersDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersDataSource, _super);
    function UsersDataSource(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.usersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        _this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        _this.loading$ = _this.loadingSubject.asObservable();
        _this.data = [];
        return _this;
    }
    UsersDataSource.prototype.loadUsers = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        var _this = this;
        this.loadingSubject.next(true);
        this.userService.allUsers(localStorage.getItem('token'), filter, sortField, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (allusers) {
            _this.total_count = allusers.users.length;
            _this.data = allusers.users;
            _this.usersSubject.next(allusers.users);
        });
    };
    UsersDataSource.prototype.connect = function (collectionViewer) {
        return this.usersSubject.asObservable();
    };
    UsersDataSource.prototype.disconnect = function (collectionViewer) {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    };
    return UsersDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width-table {\r\n  width: 100%;\r\n}\r\n\r\n.search-box{\r\n}\r\n\r\n.user-toolbar{\r\n  padding: 12px 12px 0 12px;\r\n  font-size: 16px;\r\n}\r\n\r\n.title-bar {\r\n  float:left;\r\n}\r\n\r\n.spinner-container {\r\n    position: fixed;\r\n\tmargin-left: 50%;\r\n\theight: 360px;\r\n    width: 390px;\r\n}\r\n\r\n.spinner-container mat-spinner {\r\n    margin-left: -195px;\t\r\n}\r\n\r\n.button-row button {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.toolbar-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-column-first_name, .mat-column-last_name, .mat-column-username,{\r\n  flex: 0 0 160px;\r\n}\r\n\r\n.mat-column-edit{\r\n  flex: 0 0 30px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.col {\r\n  flex: 1;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7QUFDQTs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtDQUNsQixnQkFBZ0I7Q0FDaEIsYUFBYTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3h7XHJcbn1cclxuLnVzZXItdG9vbGJhcntcclxuICBwYWRkaW5nOiAxMnB4IDEycHggMCAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRpdGxlLWJhciB7XHJcbiAgZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHRtYXJnaW4tbGVmdDogNTAlO1xyXG5cdGhlaWdodDogMzYwcHg7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbn1cclxuXHJcbi5zcGlubmVyLWNvbnRhaW5lciBtYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE5NXB4O1x0XHJcbn1cclxuXHJcbi5idXR0b24tcm93IGJ1dHRvbiB7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi50b29sYmFyLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWZpcnN0X25hbWUsIC5tYXQtY29sdW1uLWxhc3RfbmFtZSwgLm1hdC1jb2x1bW4tdXNlcm5hbWUse1xyXG4gIGZsZXg6IDAgMCAxNjBweDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZWRpdHtcclxuICBmbGV4OiAwIDAgMzBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubW9yZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY29sIHtcclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _users_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-datasource */ "./src/app/components/users/users-datasource.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var UsersComponent = /** @class */ (function () {
    function UsersComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['first_name', 'last_name', 'username', 'active', 'edit'];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.user = this.route.snapshot.data["user"];
        this.dataSource = new _users_datasource__WEBPACK_IMPORTED_MODULE_4__["UsersDataSource"](this.userService);
        this.dataSource.loadUsers('', 'first_name', 'asc', 0, 10);
        //this.dataSource = new UsersDataSource(this.userService, this.paginator, this.sort);
    };
    UsersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadUsersPage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loadUsersPage(); }))
            .subscribe();
    };
    UsersComponent.prototype.loadUsersPage = function () {
        this.dataSource.loadUsers(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    UsersComponent.prototype.newUser = function () {
        this.router.navigateByUrl('/main/users/new_user');
    };
    UsersComponent.prototype.onRowClicked = function (row, i) {
        console.log('Row clicked: ', i, row);
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UsersComponent.prototype, "input", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/components/verifyotp/verifyotp.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/verifyotp/verifyotp.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\r\n  width: 100%;\r\n}\r\n\r\n.login-card {\r\n  min-width: 250px;\r\n  margin: 40px;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.col {\r\n  flex: 1;\r\n}\r\n\r\n.col:last-child {\r\n}\r\n\r\n.card-field {\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3ZlcmlmeW90cC92ZXJpZnlvdHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3ZlcmlmeW90cC92ZXJpZnlvdHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWNhcmQge1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbn1cclxuXHJcbi5jYXJkLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/verifyotp/verifyotp.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/verifyotp/verifyotp.component.ts ***!
  \*************************************************************/
/*! exports provided: VerifyotpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyotpComponent", function() { return VerifyotpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





var VerifyotpComponent = /** @class */ (function () {
    function VerifyotpComponent(fb, router, auth) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.registration = JSON.parse(localStorage.getItem('user'));
        this.business_name = this.registration['business_name'];
    }
    VerifyotpComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            otp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passkey: this.registration['passkey'],
            email: this.registration['email'],
            first_name: this.registration['first_name'],
            business_name: this.registration['business_name'],
            business_type: this.registration['business_type'],
        });
        //this.registration.otp = this.user.value.otp;
    };
    VerifyotpComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            if (this.registration['business_name']) {
                this.auth.register_business(value)
                    .subscribe(function (data) {
                    _this.router.navigateByUrl('/main');
                });
            }
            else {
                this.auth.register(value)
                    .subscribe(function (data) {
                    _this.router.navigateByUrl('/main');
                });
            }
        }
    };
    VerifyotpComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/main');
    };
    VerifyotpComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    VerifyotpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verifyotp',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verifyotp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verifyotp/verifyotp.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verifyotp.component.css */ "./src/app/components/verifyotp/verifyotp.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], VerifyotpComponent);
    return VerifyotpComponent;
}());



/***/ }),

/***/ "./src/app/components/view-chart/cda.css":
/*!***********************************************!*\
  !*** ./src/app/components/view-chart/cda.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\ndiv{\r\n\tfont-family: Segoe UI,\"Open Sans\",Arial, \"Trebuchet MS\";\r\n}\r\na {\r\n  color: #003366;\r\n  background-color: #FFFFFF;\r\n}\r\np.h1{\r\n\tfont-size:1.5em;\r\n\tfont-weight: bold;\r\n}\r\np.secth3 {\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n  margin:0;\r\n  padding:0;\r\n\tcolor:#1f8dd6;\r\n\twhite-space:nowrap;\r\n\toverflow:hidden;\r\n}\r\ndiv.sectiontext{\r\n\tmargin-top:0.5em;\r\n\tclear:both;\r\n}\r\n#tocdiv .pure-button{\r\n\tfont-size:80%;\r\n\tmargin-right:2px;\r\n}\r\nh4 {\r\n  font-size: 1em;\r\n  font-weight: bold;\r\n}\r\ndiv {\r\n\r\n}\r\n/*Turn on for table sorting\r\nth.narr_th{\r\n\tcursor:ns-resize;\r\n}\r\nth.narr_th:hover{\r\n\tcursor:ns-resize;\r\n\tborder:1px solid #E3F4FF;\r\n\tbackground:#E3F4FF;\r\n}\r\n*/\r\n.h1center {\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\ndiv.section{\r\n\tborder:1px solid #BFE6FF;\r\n\tdisplay:inline-block;\r\n\t/*width:30em;*/\r\n\tmargin:0;\r\n\tbackground:white;\r\n\tbox-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);\r\n\tcursor:move;\r\n\tpage-break-inside: avoid !important;\r\n}\r\ndiv.recordTarget{\r\n\tcursor:default;\r\n}\r\ndiv.section.is-dragging,\r\ndiv.section.is-positioning-post-drag {\r\n  background: #C90;\r\n  z-index: 2;\r\n}\r\n@media (min-width:400px){\r\n\t.section{\r\n\t\twidth:99%;\r\n\t}\r\n}\r\n.packery-drop-placeholder {\r\n\tbackground:white;\r\n  outline: 3px dashed hsla(0, 0%, 0%, 0.5);\r\n  outline-offset: -6px;\r\n  transition: transform 0.2s;\r\n}\r\ndiv.section_in{\r\n\tpadding:2px;\r\n\tborder:3px solid transparent;\r\n}\r\ndiv.section_in:hover,div.sectionhover{\r\n\tborder:3px solid #BFE6FF;\r\n}\r\ndiv.controls{\r\n\tfloat:right;\r\n\tclear:right;\r\n\tcursor:pointer;\r\n\tdisplay:none;\r\n}\r\ni.btn{\r\n\tborder-radius:0.25em;\r\n\tpadding:0.2em;\r\n\tborder: 1px solid #BFE6FF;\r\n\twidth:1.5em;\r\n}\r\n.tocul {\r\n    padding-left: 0;\r\n\tmargin:0;\r\n    margin-left: 0.5em;\r\n    list-style-type: none;\r\n\tpadding-right:0.5em;\r\n}\r\n.toc{\r\n\tmargin-bottom:0.25em;\r\n\toverflow:hidden;\r\n\ttext-align:left;\r\n}\r\n.hide{\r\n}\r\n#tocdiv{\r\n\tfloat:right;\r\n\tclear:right;\r\n\tborder-right:none;\r\n\tbackground:#BFE6FF;\r\n}\r\ndiv.fadehighlight{\r\n\tborder:1px solid red;\r\n\tborder:3px solid #BFE6FF;\r\n\tfont-weight:bold;\r\n\tz-index:1;\r\n\tbackground:#BFE6FF;\r\n}\r\n.tocX .fa-arrow-up{\r\n\tfloat:right;\r\n}\r\n/*border: 1px solid #1f8dd6;\r\nbox-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset, 0 1px 1px rgba(100, 100, 100, 0.3);*/\r\nspan.tocup,span.tocdown{\r\n\tpadding:0.5em;\r\n}\r\ni.thumb{\r\n\tfloat:left;padding:0.25em;margin-top:-0.4em;margin-left:-0.4em;background:white;margin-right:0.25em;font-size:1.5em;border-radius:10px;\r\n\tborder-top:2px solid #BFE6FF;border-left:2px solid #BFE6FF;color:#1f8dd6;\r\n}\r\ntr.duplicatefirst{\r\n\tbackground:#eee;\r\n}\r\ntr.duplicate{\r\n\tbackground:white;\r\n\tdisplay:none;\r\n}\r\ntextarea{\r\n\tborder:1px solid #999;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3ZpZXctY2hhcnQvY2RhLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtDQUNDLHVEQUF1RDtBQUN4RDtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsU0FBUztDQUNWLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFVBQVU7QUFDWDtBQUNBO0NBQ0MsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBOztBQUVBO0FBR0E7Ozs7Ozs7OztDQVNDO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBR0E7Q0FDQyx3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxRQUFRO0NBQ1IsZ0JBQWdCO0NBQ2hCLHdDQUF3QztDQUN4QyxXQUFXO0NBQ1gsbUNBQW1DO0FBQ3BDO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBRUE7Q0FDQztFQUNDLFNBQVM7Q0FDVjtBQUNEO0FBR0E7Q0FDQyxnQkFBZ0I7RUFDZix3Q0FBd0M7RUFDeEMsb0JBQW9CO0VBRVosMEJBQTBCO0FBQ3BDO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsY0FBYztDQUNkLFlBQVk7QUFDYjtBQUNBO0NBQ0Msb0JBQW9CO0NBQ3BCLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsV0FBVztBQUNaO0FBQ0E7SUFDSSxlQUFlO0NBQ2xCLFFBQVE7SUFDTCxrQkFBa0I7SUFDbEIscUJBQXFCO0NBQ3hCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0Msb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixlQUFlO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1Qsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTt3RkFDd0Y7QUFDeEY7Q0FDQyxhQUFhO0FBQ2Q7QUFFQTtDQUNDLFVBQVUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLGtCQUFrQjtDQUN0SSw0QkFBNEIsQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhO0FBQ3pFO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdmlldy1jaGFydC9jZGEuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuZGl2e1xyXG5cdGZvbnQtZmFtaWx5OiBTZWdvZSBVSSxcIk9wZW4gU2Fuc1wiLEFyaWFsLCBcIlRyZWJ1Y2hldCBNU1wiO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiAjMDAzMzY2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbn1cclxucC5oMXtcclxuXHRmb250LXNpemU6MS41ZW07XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxucC5zZWN0aDMge1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG5cdGNvbG9yOiMxZjhkZDY7XHJcblx0d2hpdGUtc3BhY2U6bm93cmFwO1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5kaXYuc2VjdGlvbnRleHR7XHJcblx0bWFyZ2luLXRvcDowLjVlbTtcclxuXHRjbGVhcjpib3RoO1xyXG59XHJcbiN0b2NkaXYgLnB1cmUtYnV0dG9ue1xyXG5cdGZvbnQtc2l6ZTo4MCU7XHJcblx0bWFyZ2luLXJpZ2h0OjJweDtcclxufVxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuZGl2IHtcclxuXHJcbn1cclxuXHJcblxyXG4vKlR1cm4gb24gZm9yIHRhYmxlIHNvcnRpbmdcclxudGgubmFycl90aHtcclxuXHRjdXJzb3I6bnMtcmVzaXplO1xyXG59XHJcbnRoLm5hcnJfdGg6aG92ZXJ7XHJcblx0Y3Vyc29yOm5zLXJlc2l6ZTtcclxuXHRib3JkZXI6MXB4IHNvbGlkICNFM0Y0RkY7XHJcblx0YmFja2dyb3VuZDojRTNGNEZGO1xyXG59XHJcbiovXHJcbi5oMWNlbnRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuZGl2LnNlY3Rpb257XHJcblx0Ym9yZGVyOjFweCBzb2xpZCAjQkZFNkZGO1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdC8qd2lkdGg6MzBlbTsqL1xyXG5cdG1hcmdpbjowO1xyXG5cdGJhY2tncm91bmQ6d2hpdGU7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjE0KTtcclxuXHRjdXJzb3I6bW92ZTtcclxuXHRwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQgIWltcG9ydGFudDtcclxufVxyXG5kaXYucmVjb3JkVGFyZ2V0e1xyXG5cdGN1cnNvcjpkZWZhdWx0O1xyXG59XHJcbmRpdi5zZWN0aW9uLmlzLWRyYWdnaW5nLFxyXG5kaXYuc2VjdGlvbi5pcy1wb3NpdGlvbmluZy1wb3N0LWRyYWcge1xyXG4gIGJhY2tncm91bmQ6ICNDOTA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NDAwcHgpe1xyXG5cdC5zZWN0aW9ue1xyXG5cdFx0d2lkdGg6OTklO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi5wYWNrZXJ5LWRyb3AtcGxhY2Vob2xkZXIge1xyXG5cdGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgb3V0bGluZTogM3B4IGRhc2hlZCBoc2xhKDAsIDAlLCAwJSwgMC41KTtcclxuICBvdXRsaW5lLW9mZnNldDogLTZweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnM7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxufVxyXG5kaXYuc2VjdGlvbl9pbntcclxuXHRwYWRkaW5nOjJweDtcclxuXHRib3JkZXI6M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbmRpdi5zZWN0aW9uX2luOmhvdmVyLGRpdi5zZWN0aW9uaG92ZXJ7XHJcblx0Ym9yZGVyOjNweCBzb2xpZCAjQkZFNkZGO1xyXG59XHJcbmRpdi5jb250cm9sc3tcclxuXHRmbG9hdDpyaWdodDtcclxuXHRjbGVhcjpyaWdodDtcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxuXHRkaXNwbGF5Om5vbmU7XHJcbn1cclxuaS5idG57XHJcblx0Ym9yZGVyLXJhZGl1czowLjI1ZW07XHJcblx0cGFkZGluZzowLjJlbTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjQkZFNkZGO1xyXG5cdHdpZHRoOjEuNWVtO1xyXG59XHJcbi50b2N1bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcblx0bWFyZ2luOjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0cGFkZGluZy1yaWdodDowLjVlbTtcclxufVxyXG4udG9je1xyXG5cdG1hcmdpbi1ib3R0b206MC4yNWVtO1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxuXHR0ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuLmhpZGV7XHJcbn1cclxuI3RvY2RpdntcclxuXHRmbG9hdDpyaWdodDtcclxuXHRjbGVhcjpyaWdodDtcclxuXHRib3JkZXItcmlnaHQ6bm9uZTtcclxuXHRiYWNrZ3JvdW5kOiNCRkU2RkY7XHJcbn1cclxuZGl2LmZhZGVoaWdobGlnaHR7XHJcblx0Ym9yZGVyOjFweCBzb2xpZCByZWQ7XHJcblx0Ym9yZGVyOjNweCBzb2xpZCAjQkZFNkZGO1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0ei1pbmRleDoxO1xyXG5cdGJhY2tncm91bmQ6I0JGRTZGRjtcclxufVxyXG4udG9jWCAuZmEtYXJyb3ctdXB7XHJcblx0ZmxvYXQ6cmlnaHQ7XHJcbn1cclxuLypib3JkZXI6IDFweCBzb2xpZCAjMWY4ZGQ2O1xyXG5ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldCwgMCAxcHggMXB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC4zKTsqL1xyXG5zcGFuLnRvY3VwLHNwYW4udG9jZG93bntcclxuXHRwYWRkaW5nOjAuNWVtO1xyXG59XHJcblxyXG5pLnRodW1ie1xyXG5cdGZsb2F0OmxlZnQ7cGFkZGluZzowLjI1ZW07bWFyZ2luLXRvcDotMC40ZW07bWFyZ2luLWxlZnQ6LTAuNGVtO2JhY2tncm91bmQ6d2hpdGU7bWFyZ2luLXJpZ2h0OjAuMjVlbTtmb250LXNpemU6MS41ZW07Ym9yZGVyLXJhZGl1czoxMHB4O1xyXG5cdGJvcmRlci10b3A6MnB4IHNvbGlkICNCRkU2RkY7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkICNCRkU2RkY7Y29sb3I6IzFmOGRkNjtcclxufVxyXG50ci5kdXBsaWNhdGVmaXJzdHtcclxuXHRiYWNrZ3JvdW5kOiNlZWU7XHJcbn1cclxudHIuZHVwbGljYXRle1xyXG5cdGJhY2tncm91bmQ6d2hpdGU7XHJcblx0ZGlzcGxheTpub25lO1xyXG59XHJcbnRleHRhcmVhe1xyXG5cdGJvcmRlcjoxcHggc29saWQgIzk5OTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/view-chart/view-chart.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/view-chart/view-chart.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".transformed{ \r\n  margin:20px;\r\n  color: #003366;\r\n  background-color: #FFFFFF;\r\n  font-family: Verdana, Tahoma, sans-serif;\r\n  font-size: 11px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3ZpZXctY2hhcnQvdmlldy1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdmlldy1jaGFydC92aWV3LWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNmb3JtZWR7IFxyXG4gIG1hcmdpbjoyMHB4O1xyXG4gIGNvbG9yOiAjMDAzMzY2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/view-chart/view-chart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/view-chart/view-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: ViewChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewChartComponent", function() { return ViewChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ViewChartComponent = /** @class */ (function () {
    function ViewChartComponent(userService, sanitizer, route) {
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.filename = '';
    }
    ViewChartComponent.prototype.loadChart = function (file) {
        var _this = this;
        this.userService.viewChart(localStorage.getItem('token'), file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return console.log('Final'); }))
            .subscribe(function (file_content) {
            _this.transformed_html = _this.sanitizer.bypassSecurityTrustHtml(file_content.file_content);
        });
    };
    ViewChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            //console.log(queryParams);
            _this.filename = queryParams['filename'.replace(/\s/g, "")];
        });
        this.loadChart(this.filename);
    };
    ViewChartComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    ViewChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-chart',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-chart/view-chart.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-chart.component.css */ "./src/app/components/view-chart/view-chart.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cda.css */ "./src/app/components/view-chart/cda.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ViewChartComponent);
    return ViewChartComponent;
}());



/***/ }),

/***/ "./src/app/drag-drop.directive.ts":
/*!****************************************!*\
  !*** ./src/app/drag-drop.directive.ts ***!
  \****************************************/
/*! exports provided: DragDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDirective", function() { return DragDropDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DragDropDirective = /** @class */ (function () {
    function DragDropDirective() {
        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Dragover listener
    DragDropDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    };
    //Dragleave listener
    DragDropDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
    };
    //Drop listener
    DragDropDirective.prototype.ondrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DragDropDirective.prototype, "onFileDropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.background-color'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DragDropDirective.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.opacity'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DragDropDirective.prototype, "opacity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DragDropDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DragDropDirective.prototype, "onDragLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DragDropDirective.prototype, "ondrop", null);
    DragDropDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDragDrop]'
        })
    ], DragDropDirective);
    return DragDropDirective;
}());



/***/ }),

/***/ "./src/app/has-permission.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/has-permission.directive.ts ***!
  \*********************************************/
/*! exports provided: HasPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasPermissionDirective", function() { return HasPermissionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var HasPermissionDirective = /** @class */ (function () {
    /**
     * @param {ViewContainerRef} viewContainerRef
     * 	-- the location where we need to render the templateRef
     * @param {TemplateRef<any>} templateRef
     *   -- the templateRef to be potentially rendered
     * @param {RolesService} rolesService
     *   -- will give us access to the roles a user has
     */
    function HasPermissionDirective(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isVisible = false;
    }
    HasPermissionDirective.prototype.ngOnInit = function () {
        //  We subscribe to the roles$ to know the roles the user has
        var token = localStorage.getItem('token');
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        console.log('Is admin: ' + decodedJwtData.identity.roles);
        var roles = decodedJwtData.identity.roles;
        // If he doesn't have any roles, we clear the viewContainerRef
        //const hasExpectedRole = roles.some(r => r.value === '1')
        if (!roles) {
            this.viewContainerRef.clear();
        }
        // If the user has the role needed to
        // render this component we can add it
        if (roles.includes(this.appHasPermission)) {
            // If it is already visible (which can happen if
            // his roles changed) we do not need to add it a second time
            if (!this.isVisible) {
                // We update the `isVisible` property and add the
                // templateRef to the view using the
                // 'createEmbeddedView' method of the viewContainerRef
                this.isVisible = true;
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        }
        else {
            // If the user does not have the role,
            // we update the `isVisible` property and clear
            // the contents of the viewContainerRef
            this.isVisible = false;
            this.viewContainerRef.clear();
        }
    };
    // Clear the subscription on destroy
    HasPermissionDirective.prototype.ngOnDestroy = function () {
        this.stop$.next();
    };
    HasPermissionDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HasPermissionDirective.prototype, "appHasPermission", void 0);
    HasPermissionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHasPermission]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], HasPermissionDirective);
    return HasPermissionDirective;
}());



/***/ }),

/***/ "./src/app/resources/countries.json":
/*!******************************************!*\
  !*** ./src/app/resources/countries.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Afghanistan\",\"dial_code\":\"+93\",\"code\":\"AF\"},{\"name\":\"Albania\",\"dial_code\":\"+355\",\"code\":\"AL\"},{\"name\":\"Algeria\",\"dial_code\":\"+213\",\"code\":\"DZ\"},{\"name\":\"AmericanSamoa\",\"dial_code\":\"+1 684\",\"code\":\"AS\"},{\"name\":\"Andorra\",\"dial_code\":\"+376\",\"code\":\"AD\"},{\"name\":\"Angola\",\"dial_code\":\"+244\",\"code\":\"AO\"},{\"name\":\"Anguilla\",\"dial_code\":\"+1 264\",\"code\":\"AI\"},{\"name\":\"Antigua and Barbuda\",\"dial_code\":\"+1268\",\"code\":\"AG\"},{\"name\":\"Argentina\",\"dial_code\":\"+54\",\"code\":\"AR\"},{\"name\":\"Armenia\",\"dial_code\":\"+374\",\"code\":\"AM\"},{\"name\":\"Aruba\",\"dial_code\":\"+297\",\"code\":\"AW\"},{\"name\":\"Australia\",\"dial_code\":\"+61\",\"code\":\"AU\"},{\"name\":\"Austria\",\"dial_code\":\"+43\",\"code\":\"AT\"},{\"name\":\"Azerbaijan\",\"dial_code\":\"+994\",\"code\":\"AZ\"},{\"name\":\"Bahamas\",\"dial_code\":\"+1 242\",\"code\":\"BS\"},{\"name\":\"Bahrain\",\"dial_code\":\"+973\",\"code\":\"BH\"},{\"name\":\"Bangladesh\",\"dial_code\":\"+880\",\"code\":\"BD\"},{\"name\":\"Barbados\",\"dial_code\":\"+1 246\",\"code\":\"BB\"},{\"name\":\"Belarus\",\"dial_code\":\"+375\",\"code\":\"BY\"},{\"name\":\"Belgium\",\"dial_code\":\"+32\",\"code\":\"BE\"},{\"name\":\"Belize\",\"dial_code\":\"+501\",\"code\":\"BZ\"},{\"name\":\"Benin\",\"dial_code\":\"+229\",\"code\":\"BJ\"},{\"name\":\"Bermuda\",\"dial_code\":\"+1 441\",\"code\":\"BM\"},{\"name\":\"Bhutan\",\"dial_code\":\"+975\",\"code\":\"BT\"},{\"name\":\"Bosnia and Herzegovina\",\"dial_code\":\"+387\",\"code\":\"BA\"},{\"name\":\"Botswana\",\"dial_code\":\"+267\",\"code\":\"BW\"},{\"name\":\"Brazil\",\"dial_code\":\"+55\",\"code\":\"BR\"},{\"name\":\"British Indian Ocean Territory\",\"dial_code\":\"+246\",\"code\":\"IO\"},{\"name\":\"Bulgaria\",\"dial_code\":\"+359\",\"code\":\"BG\"},{\"name\":\"Burkina Faso\",\"dial_code\":\"+226\",\"code\":\"BF\"},{\"name\":\"Burundi\",\"dial_code\":\"+257\",\"code\":\"BI\"},{\"name\":\"Cambodia\",\"dial_code\":\"+855\",\"code\":\"KH\"},{\"name\":\"Cameroon\",\"dial_code\":\"+237\",\"code\":\"CM\"},{\"name\":\"Canada\",\"dial_code\":\"+1\",\"code\":\"CA\"},{\"name\":\"Cape Verde\",\"dial_code\":\"+238\",\"code\":\"CV\"},{\"name\":\"Cayman Islands\",\"dial_code\":\"+ 345\",\"code\":\"KY\"},{\"name\":\"Central African Republic\",\"dial_code\":\"+236\",\"code\":\"CF\"},{\"name\":\"Chad\",\"dial_code\":\"+235\",\"code\":\"TD\"},{\"name\":\"Chile\",\"dial_code\":\"+56\",\"code\":\"CL\"},{\"name\":\"China\",\"dial_code\":\"+86\",\"code\":\"CN\"},{\"name\":\"Christmas Island\",\"dial_code\":\"+61\",\"code\":\"CX\"},{\"name\":\"Colombia\",\"dial_code\":\"+57\",\"code\":\"CO\"},{\"name\":\"Comoros\",\"dial_code\":\"+269\",\"code\":\"KM\"},{\"name\":\"Congo\",\"dial_code\":\"+242\",\"code\":\"CG\"},{\"name\":\"Cook Islands\",\"dial_code\":\"+682\",\"code\":\"CK\"},{\"name\":\"Costa Rica\",\"dial_code\":\"+506\",\"code\":\"CR\"},{\"name\":\"Croatia\",\"dial_code\":\"+385\",\"code\":\"HR\"},{\"name\":\"Cuba\",\"dial_code\":\"+53\",\"code\":\"CU\"},{\"name\":\"Cyprus\",\"dial_code\":\"+537\",\"code\":\"CY\"},{\"name\":\"Czech Republic\",\"dial_code\":\"+420\",\"code\":\"CZ\"},{\"name\":\"Denmark\",\"dial_code\":\"+45\",\"code\":\"DK\"},{\"name\":\"Djibouti\",\"dial_code\":\"+253\",\"code\":\"DJ\"},{\"name\":\"Dominica\",\"dial_code\":\"+1 767\",\"code\":\"DM\"},{\"name\":\"Dominican Republic\",\"dial_code\":\"+1 849\",\"code\":\"DO\"},{\"name\":\"Ecuador\",\"dial_code\":\"+593\",\"code\":\"EC\"},{\"name\":\"Egypt\",\"dial_code\":\"+20\",\"code\":\"EG\"},{\"name\":\"El Salvador\",\"dial_code\":\"+503\",\"code\":\"SV\"},{\"name\":\"Equatorial Guinea\",\"dial_code\":\"+240\",\"code\":\"GQ\"},{\"name\":\"Eritrea\",\"dial_code\":\"+291\",\"code\":\"ER\"},{\"name\":\"Estonia\",\"dial_code\":\"+372\",\"code\":\"EE\"},{\"name\":\"Ethiopia\",\"dial_code\":\"+251\",\"code\":\"ET\"},{\"name\":\"Faroe Islands\",\"dial_code\":\"+298\",\"code\":\"FO\"},{\"name\":\"Fiji\",\"dial_code\":\"+679\",\"code\":\"FJ\"},{\"name\":\"Finland\",\"dial_code\":\"+358\",\"code\":\"FI\"},{\"name\":\"France\",\"dial_code\":\"+33\",\"code\":\"FR\"},{\"name\":\"French Guiana\",\"dial_code\":\"+594\",\"code\":\"GF\"},{\"name\":\"French Polynesia\",\"dial_code\":\"+689\",\"code\":\"PF\"},{\"name\":\"Gabon\",\"dial_code\":\"+241\",\"code\":\"GA\"},{\"name\":\"Gambia\",\"dial_code\":\"+220\",\"code\":\"GM\"},{\"name\":\"Georgia\",\"dial_code\":\"+995\",\"code\":\"GE\"},{\"name\":\"Germany\",\"dial_code\":\"+49\",\"code\":\"DE\"},{\"name\":\"Ghana\",\"dial_code\":\"+233\",\"code\":\"GH\"},{\"name\":\"Gibraltar\",\"dial_code\":\"+350\",\"code\":\"GI\"},{\"name\":\"Greece\",\"dial_code\":\"+30\",\"code\":\"GR\"},{\"name\":\"Greenland\",\"dial_code\":\"+299\",\"code\":\"GL\"},{\"name\":\"Grenada\",\"dial_code\":\"+1 473\",\"code\":\"GD\"},{\"name\":\"Guadeloupe\",\"dial_code\":\"+590\",\"code\":\"GP\"},{\"name\":\"Guam\",\"dial_code\":\"+1 671\",\"code\":\"GU\"},{\"name\":\"Guatemala\",\"dial_code\":\"+502\",\"code\":\"GT\"},{\"name\":\"Guinea\",\"dial_code\":\"+224\",\"code\":\"GN\"},{\"name\":\"Guinea-Bissau\",\"dial_code\":\"+245\",\"code\":\"GW\"},{\"name\":\"Guyana\",\"dial_code\":\"+595\",\"code\":\"GY\"},{\"name\":\"Haiti\",\"dial_code\":\"+509\",\"code\":\"HT\"},{\"name\":\"Honduras\",\"dial_code\":\"+504\",\"code\":\"HN\"},{\"name\":\"Hungary\",\"dial_code\":\"+36\",\"code\":\"HU\"},{\"name\":\"Iceland\",\"dial_code\":\"+354\",\"code\":\"IS\"},{\"name\":\"India\",\"dial_code\":\"+91\",\"code\":\"IN\"},{\"name\":\"Indonesia\",\"dial_code\":\"+62\",\"code\":\"ID\"},{\"name\":\"Iraq\",\"dial_code\":\"+964\",\"code\":\"IQ\"},{\"name\":\"Ireland\",\"dial_code\":\"+353\",\"code\":\"IE\"},{\"name\":\"Israel\",\"dial_code\":\"+972\",\"code\":\"IL\"},{\"name\":\"Italy\",\"dial_code\":\"+39\",\"code\":\"IT\"},{\"name\":\"Jamaica\",\"dial_code\":\"+1 876\",\"code\":\"JM\"},{\"name\":\"Japan\",\"dial_code\":\"+81\",\"code\":\"JP\"},{\"name\":\"Jordan\",\"dial_code\":\"+962\",\"code\":\"JO\"},{\"name\":\"Kazakhstan\",\"dial_code\":\"+7 7\",\"code\":\"KZ\"},{\"name\":\"Kenya\",\"dial_code\":\"+254\",\"code\":\"KE\"},{\"name\":\"Kiribati\",\"dial_code\":\"+686\",\"code\":\"KI\"},{\"name\":\"Kuwait\",\"dial_code\":\"+965\",\"code\":\"KW\"},{\"name\":\"Kyrgyzstan\",\"dial_code\":\"+996\",\"code\":\"KG\"},{\"name\":\"Latvia\",\"dial_code\":\"+371\",\"code\":\"LV\"},{\"name\":\"Lebanon\",\"dial_code\":\"+961\",\"code\":\"LB\"},{\"name\":\"Lesotho\",\"dial_code\":\"+266\",\"code\":\"LS\"},{\"name\":\"Liberia\",\"dial_code\":\"+231\",\"code\":\"LR\"},{\"name\":\"Liechtenstein\",\"dial_code\":\"+423\",\"code\":\"LI\"},{\"name\":\"Lithuania\",\"dial_code\":\"+370\",\"code\":\"LT\"},{\"name\":\"Luxembourg\",\"dial_code\":\"+352\",\"code\":\"LU\"},{\"name\":\"Madagascar\",\"dial_code\":\"+261\",\"code\":\"MG\"},{\"name\":\"Malawi\",\"dial_code\":\"+265\",\"code\":\"MW\"},{\"name\":\"Malaysia\",\"dial_code\":\"+60\",\"code\":\"MY\"},{\"name\":\"Maldives\",\"dial_code\":\"+960\",\"code\":\"MV\"},{\"name\":\"Mali\",\"dial_code\":\"+223\",\"code\":\"ML\"},{\"name\":\"Malta\",\"dial_code\":\"+356\",\"code\":\"MT\"},{\"name\":\"Marshall Islands\",\"dial_code\":\"+692\",\"code\":\"MH\"},{\"name\":\"Martinique\",\"dial_code\":\"+596\",\"code\":\"MQ\"},{\"name\":\"Mauritania\",\"dial_code\":\"+222\",\"code\":\"MR\"},{\"name\":\"Mauritius\",\"dial_code\":\"+230\",\"code\":\"MU\"},{\"name\":\"Mayotte\",\"dial_code\":\"+262\",\"code\":\"YT\"},{\"name\":\"Mexico\",\"dial_code\":\"+52\",\"code\":\"MX\"},{\"name\":\"Monaco\",\"dial_code\":\"+377\",\"code\":\"MC\"},{\"name\":\"Mongolia\",\"dial_code\":\"+976\",\"code\":\"MN\"},{\"name\":\"Montenegro\",\"dial_code\":\"+382\",\"code\":\"ME\"},{\"name\":\"Montserrat\",\"dial_code\":\"+1664\",\"code\":\"MS\"},{\"name\":\"Morocco\",\"dial_code\":\"+212\",\"code\":\"MA\"},{\"name\":\"Myanmar\",\"dial_code\":\"+95\",\"code\":\"MM\"},{\"name\":\"Namibia\",\"dial_code\":\"+264\",\"code\":\"NA\"},{\"name\":\"Nauru\",\"dial_code\":\"+674\",\"code\":\"NR\"},{\"name\":\"Nepal\",\"dial_code\":\"+977\",\"code\":\"NP\"},{\"name\":\"Netherlands\",\"dial_code\":\"+31\",\"code\":\"NL\"},{\"name\":\"Netherlands Antilles\",\"dial_code\":\"+599\",\"code\":\"AN\"},{\"name\":\"New Caledonia\",\"dial_code\":\"+687\",\"code\":\"NC\"},{\"name\":\"New Zealand\",\"dial_code\":\"+64\",\"code\":\"NZ\"},{\"name\":\"Nicaragua\",\"dial_code\":\"+505\",\"code\":\"NI\"},{\"name\":\"Niger\",\"dial_code\":\"+227\",\"code\":\"NE\"},{\"name\":\"Nigeria\",\"dial_code\":\"+234\",\"code\":\"NG\"},{\"name\":\"Niue\",\"dial_code\":\"+683\",\"code\":\"NU\"},{\"name\":\"Norfolk Island\",\"dial_code\":\"+672\",\"code\":\"NF\"},{\"name\":\"Northern Mariana Islands\",\"dial_code\":\"+1 670\",\"code\":\"MP\"},{\"name\":\"Norway\",\"dial_code\":\"+47\",\"code\":\"NO\"},{\"name\":\"Oman\",\"dial_code\":\"+968\",\"code\":\"OM\"},{\"name\":\"Pakistan\",\"dial_code\":\"+92\",\"code\":\"PK\"},{\"name\":\"Palau\",\"dial_code\":\"+680\",\"code\":\"PW\"},{\"name\":\"Panama\",\"dial_code\":\"+507\",\"code\":\"PA\"},{\"name\":\"Papua New Guinea\",\"dial_code\":\"+675\",\"code\":\"PG\"},{\"name\":\"Paraguay\",\"dial_code\":\"+595\",\"code\":\"PY\"},{\"name\":\"Peru\",\"dial_code\":\"+51\",\"code\":\"PE\"},{\"name\":\"Philippines\",\"dial_code\":\"+63\",\"code\":\"PH\"},{\"name\":\"Poland\",\"dial_code\":\"+48\",\"code\":\"PL\"},{\"name\":\"Portugal\",\"dial_code\":\"+351\",\"code\":\"PT\"},{\"name\":\"Puerto Rico\",\"dial_code\":\"+1 939\",\"code\":\"PR\"},{\"name\":\"Qatar\",\"dial_code\":\"+974\",\"code\":\"QA\"},{\"name\":\"Romania\",\"dial_code\":\"+40\",\"code\":\"RO\"},{\"name\":\"Rwanda\",\"dial_code\":\"+250\",\"code\":\"RW\"},{\"name\":\"Samoa\",\"dial_code\":\"+685\",\"code\":\"WS\"},{\"name\":\"San Marino\",\"dial_code\":\"+378\",\"code\":\"SM\"},{\"name\":\"Saudi Arabia\",\"dial_code\":\"+966\",\"code\":\"SA\"},{\"name\":\"Senegal\",\"dial_code\":\"+221\",\"code\":\"SN\"},{\"name\":\"Serbia\",\"dial_code\":\"+381\",\"code\":\"RS\"},{\"name\":\"Seychelles\",\"dial_code\":\"+248\",\"code\":\"SC\"},{\"name\":\"Sierra Leone\",\"dial_code\":\"+232\",\"code\":\"SL\"},{\"name\":\"Singapore\",\"dial_code\":\"+65\",\"code\":\"SG\"},{\"name\":\"Slovakia\",\"dial_code\":\"+421\",\"code\":\"SK\"},{\"name\":\"Slovenia\",\"dial_code\":\"+386\",\"code\":\"SI\"},{\"name\":\"Solomon Islands\",\"dial_code\":\"+677\",\"code\":\"SB\"},{\"name\":\"South Africa\",\"dial_code\":\"+27\",\"code\":\"ZA\"},{\"name\":\"South Georgia and the South Sandwich Islands\",\"dial_code\":\"+500\",\"code\":\"GS\"},{\"name\":\"Spain\",\"dial_code\":\"+34\",\"code\":\"ES\"},{\"name\":\"Sri Lanka\",\"dial_code\":\"+94\",\"code\":\"LK\"},{\"name\":\"Sudan\",\"dial_code\":\"+249\",\"code\":\"SD\"},{\"name\":\"Suriname\",\"dial_code\":\"+597\",\"code\":\"SR\"},{\"name\":\"Swaziland\",\"dial_code\":\"+268\",\"code\":\"SZ\"},{\"name\":\"Sweden\",\"dial_code\":\"+46\",\"code\":\"SE\"},{\"name\":\"Switzerland\",\"dial_code\":\"+41\",\"code\":\"CH\"},{\"name\":\"Tajikistan\",\"dial_code\":\"+992\",\"code\":\"TJ\"},{\"name\":\"Thailand\",\"dial_code\":\"+66\",\"code\":\"TH\"},{\"name\":\"Togo\",\"dial_code\":\"+228\",\"code\":\"TG\"},{\"name\":\"Tokelau\",\"dial_code\":\"+690\",\"code\":\"TK\"},{\"name\":\"Tonga\",\"dial_code\":\"+676\",\"code\":\"TO\"},{\"name\":\"Trinidad and Tobago\",\"dial_code\":\"+1 868\",\"code\":\"TT\"},{\"name\":\"Tunisia\",\"dial_code\":\"+216\",\"code\":\"TN\"},{\"name\":\"Turkey\",\"dial_code\":\"+90\",\"code\":\"TR\"},{\"name\":\"Turkmenistan\",\"dial_code\":\"+993\",\"code\":\"TM\"},{\"name\":\"Turks and Caicos Islands\",\"dial_code\":\"+1 649\",\"code\":\"TC\"},{\"name\":\"Tuvalu\",\"dial_code\":\"+688\",\"code\":\"TV\"},{\"name\":\"Uganda\",\"dial_code\":\"+256\",\"code\":\"UG\"},{\"name\":\"Ukraine\",\"dial_code\":\"+380\",\"code\":\"UA\"},{\"name\":\"United Arab Emirates\",\"dial_code\":\"+971\",\"code\":\"AE\"},{\"name\":\"United Kingdom\",\"dial_code\":\"+44\",\"code\":\"GB\"},{\"name\":\"United States\",\"dial_code\":\"+1\",\"code\":\"US\"},{\"name\":\"Uruguay\",\"dial_code\":\"+598\",\"code\":\"UY\"},{\"name\":\"Uzbekistan\",\"dial_code\":\"+998\",\"code\":\"UZ\"},{\"name\":\"Vanuatu\",\"dial_code\":\"+678\",\"code\":\"VU\"},{\"name\":\"Wallis and Futuna\",\"dial_code\":\"+681\",\"code\":\"WF\"},{\"name\":\"Yemen\",\"dial_code\":\"+967\",\"code\":\"YE\"},{\"name\":\"Zambia\",\"dial_code\":\"+260\",\"code\":\"ZM\"},{\"name\":\"Zimbabwe\",\"dial_code\":\"+263\",\"code\":\"ZW\"},{\"name\":\"land Islands\",\"dial_code\":\"\",\"code\":\"AX\"},{\"name\":\"Antarctica\",\"dial_code\":null,\"code\":\"AQ\"},{\"name\":\"Bolivia, Plurinational State of\",\"dial_code\":\"+591\",\"code\":\"BO\"},{\"name\":\"Brunei Darussalam\",\"dial_code\":\"+673\",\"code\":\"BN\"},{\"name\":\"Cocos (Keeling) Islands\",\"dial_code\":\"+61\",\"code\":\"CC\"},{\"name\":\"Congo, The Democratic Republic of the\",\"dial_code\":\"+243\",\"code\":\"CD\"},{\"name\":\"Cote d'Ivoire\",\"dial_code\":\"+225\",\"code\":\"CI\"},{\"name\":\"Falkland Islands (Malvinas)\",\"dial_code\":\"+500\",\"code\":\"FK\"},{\"name\":\"Guernsey\",\"dial_code\":\"+44\",\"code\":\"GG\"},{\"name\":\"Holy See (Vatican City State)\",\"dial_code\":\"+379\",\"code\":\"VA\"},{\"name\":\"Hong Kong\",\"dial_code\":\"+852\",\"code\":\"HK\"},{\"name\":\"Iran, Islamic Republic of\",\"dial_code\":\"+98\",\"code\":\"IR\"},{\"name\":\"Isle of Man\",\"dial_code\":\"+44\",\"code\":\"IM\"},{\"name\":\"Jersey\",\"dial_code\":\"+44\",\"code\":\"JE\"},{\"name\":\"Korea, Democratic People's Republic of\",\"dial_code\":\"+850\",\"code\":\"KP\"},{\"name\":\"Korea, Republic of\",\"dial_code\":\"+82\",\"code\":\"KR\"},{\"name\":\"Lao People's Democratic Republic\",\"dial_code\":\"+856\",\"code\":\"LA\"},{\"name\":\"Libyan Arab Jamahiriya\",\"dial_code\":\"+218\",\"code\":\"LY\"},{\"name\":\"Macao\",\"dial_code\":\"+853\",\"code\":\"MO\"},{\"name\":\"Macedonia, The Former Yugoslav Republic of\",\"dial_code\":\"+389\",\"code\":\"MK\"},{\"name\":\"Micronesia, Federated States of\",\"dial_code\":\"+691\",\"code\":\"FM\"},{\"name\":\"Moldova, Republic of\",\"dial_code\":\"+373\",\"code\":\"MD\"},{\"name\":\"Mozambique\",\"dial_code\":\"+258\",\"code\":\"MZ\"},{\"name\":\"Palestinian Territory, Occupied\",\"dial_code\":\"+970\",\"code\":\"PS\"},{\"name\":\"Pitcairn\",\"dial_code\":\"+872\",\"code\":\"PN\"},{\"name\":\"Réunion\",\"dial_code\":\"+262\",\"code\":\"RE\"},{\"name\":\"Russia\",\"dial_code\":\"+7\",\"code\":\"RU\"},{\"name\":\"Saint Barthélemy\",\"dial_code\":\"+590\",\"code\":\"BL\"},{\"name\":\"Saint Helena, Ascension and Tristan Da Cunha\",\"dial_code\":\"+290\",\"code\":\"SH\"},{\"name\":\"Saint Kitts and Nevis\",\"dial_code\":\"+1 869\",\"code\":\"KN\"},{\"name\":\"Saint Lucia\",\"dial_code\":\"+1 758\",\"code\":\"LC\"},{\"name\":\"Saint Martin\",\"dial_code\":\"+590\",\"code\":\"MF\"},{\"name\":\"Saint Pierre and Miquelon\",\"dial_code\":\"+508\",\"code\":\"PM\"},{\"name\":\"Saint Vincent and the Grenadines\",\"dial_code\":\"+1 784\",\"code\":\"VC\"},{\"name\":\"Sao Tome and Principe\",\"dial_code\":\"+239\",\"code\":\"ST\"},{\"name\":\"Somalia\",\"dial_code\":\"+252\",\"code\":\"SO\"},{\"name\":\"Svalbard and Jan Mayen\",\"dial_code\":\"+47\",\"code\":\"SJ\"},{\"name\":\"Syrian Arab Republic\",\"dial_code\":\"+963\",\"code\":\"SY\"},{\"name\":\"Taiwan, Province of China\",\"dial_code\":\"+886\",\"code\":\"TW\"},{\"name\":\"Tanzania, United Republic of\",\"dial_code\":\"+255\",\"code\":\"TZ\"},{\"name\":\"Timor-Leste\",\"dial_code\":\"+670\",\"code\":\"TL\"},{\"name\":\"Venezuela, Bolivarian Republic of\",\"dial_code\":\"+58\",\"code\":\"VE\"},{\"name\":\"Viet Nam\",\"dial_code\":\"+84\",\"code\":\"VN\"},{\"name\":\"Virgin Islands, British\",\"dial_code\":\"+1 284\",\"code\":\"VG\"},{\"name\":\"Virgin Islands, U.S.\",\"dial_code\":\"+1 340\",\"code\":\"VI\"}]");

/***/ }),

/***/ "./src/app/resources/states.json":
/*!***************************************!*\
  !*** ./src/app/resources/states.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Alabama\",\"abbreviation\":\"AL\"},{\"name\":\"Alaska\",\"abbreviation\":\"AK\"},{\"name\":\"American Samoa\",\"abbreviation\":\"AS\"},{\"name\":\"Arizona\",\"abbreviation\":\"AZ\"},{\"name\":\"Arkansas\",\"abbreviation\":\"AR\"},{\"name\":\"California\",\"abbreviation\":\"CA\"},{\"name\":\"Colorado\",\"abbreviation\":\"CO\"},{\"name\":\"Connecticut\",\"abbreviation\":\"CT\"},{\"name\":\"Delaware\",\"abbreviation\":\"DE\"},{\"name\":\"District Of Columbia\",\"abbreviation\":\"DC\"},{\"name\":\"Federated States Of Micronesia\",\"abbreviation\":\"FM\"},{\"name\":\"Florida\",\"abbreviation\":\"FL\"},{\"name\":\"Georgia\",\"abbreviation\":\"GA\"},{\"name\":\"Guam\",\"abbreviation\":\"GU\"},{\"name\":\"Hawaii\",\"abbreviation\":\"HI\"},{\"name\":\"Idaho\",\"abbreviation\":\"ID\"},{\"name\":\"Illinois\",\"abbreviation\":\"IL\"},{\"name\":\"Indiana\",\"abbreviation\":\"IN\"},{\"name\":\"Iowa\",\"abbreviation\":\"IA\"},{\"name\":\"Kansas\",\"abbreviation\":\"KS\"},{\"name\":\"Kentucky\",\"abbreviation\":\"KY\"},{\"name\":\"Louisiana\",\"abbreviation\":\"LA\"},{\"name\":\"Maine\",\"abbreviation\":\"ME\"},{\"name\":\"Marshall Islands\",\"abbreviation\":\"MH\"},{\"name\":\"Maryland\",\"abbreviation\":\"MD\"},{\"name\":\"Massachusetts\",\"abbreviation\":\"MA\"},{\"name\":\"Michigan\",\"abbreviation\":\"MI\"},{\"name\":\"Minnesota\",\"abbreviation\":\"MN\"},{\"name\":\"Mississippi\",\"abbreviation\":\"MS\"},{\"name\":\"Missouri\",\"abbreviation\":\"MO\"},{\"name\":\"Montana\",\"abbreviation\":\"MT\"},{\"name\":\"Nebraska\",\"abbreviation\":\"NE\"},{\"name\":\"Nevada\",\"abbreviation\":\"NV\"},{\"name\":\"New Hampshire\",\"abbreviation\":\"NH\"},{\"name\":\"New Jersey\",\"abbreviation\":\"NJ\"},{\"name\":\"New Mexico\",\"abbreviation\":\"NM\"},{\"name\":\"New York\",\"abbreviation\":\"NY\"},{\"name\":\"North Carolina\",\"abbreviation\":\"NC\"},{\"name\":\"North Dakota\",\"abbreviation\":\"ND\"},{\"name\":\"Northern Mariana Islands\",\"abbreviation\":\"MP\"},{\"name\":\"Ohio\",\"abbreviation\":\"OH\"},{\"name\":\"Oklahoma\",\"abbreviation\":\"OK\"},{\"name\":\"Oregon\",\"abbreviation\":\"OR\"},{\"name\":\"Palau\",\"abbreviation\":\"PW\"},{\"name\":\"Pennsylvania\",\"abbreviation\":\"PA\"},{\"name\":\"Puerto Rico\",\"abbreviation\":\"PR\"},{\"name\":\"Rhode Island\",\"abbreviation\":\"RI\"},{\"name\":\"South Carolina\",\"abbreviation\":\"SC\"},{\"name\":\"South Dakota\",\"abbreviation\":\"SD\"},{\"name\":\"Tennessee\",\"abbreviation\":\"TN\"},{\"name\":\"Texas\",\"abbreviation\":\"TX\"},{\"name\":\"Utah\",\"abbreviation\":\"UT\"},{\"name\":\"Vermont\",\"abbreviation\":\"VT\"},{\"name\":\"Virgin Islands\",\"abbreviation\":\"VI\"},{\"name\":\"Virginia\",\"abbreviation\":\"VA\"},{\"name\":\"Washington\",\"abbreviation\":\"WA\"},{\"name\":\"West Virginia\",\"abbreviation\":\"WV\"},{\"name\":\"Wisconsin\",\"abbreviation\":\"WI\"},{\"name\":\"Wyoming\",\"abbreviation\":\"WY\"}]");

/***/ }),

/***/ "./src/app/services/ensure-authenticated.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/ensure-authenticated.service.ts ***!
  \**********************************************************/
/*! exports provided: EnsureAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureAuthenticated", function() { return EnsureAuthenticated; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




var EnsureAuthenticated = /** @class */ (function () {
    function EnsureAuthenticated(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    EnsureAuthenticated.prototype.canActivate = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token) {
            this.auth.ensureAuthenticated(token).subscribe(function (data) {
                console.log('Token Valid!');
            }, function (error) {
                console.log('Error:', error);
                localStorage.removeItem('token');
                _this.router.navigateByUrl('/login');
                return false;
            });
            var jwtData = token.split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            var decodedJwtData = JSON.parse(decodedJwtJsonData);
            console.log('Is admin: ' + decodedJwtData.identity.roles + this.router.url);
            //if (decodedJwtData.identity.roles==='Admin' && this.router.url === '/')
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    EnsureAuthenticated.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    EnsureAuthenticated = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EnsureAuthenticated);
    return EnsureAuthenticated;
}());



/***/ }),

/***/ "./src/app/services/login-redirect.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/login-redirect.service.ts ***!
  \****************************************************/
/*! exports provided: LoginRedirectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRedirectService", function() { return LoginRedirectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




var LoginRedirectService = /** @class */ (function () {
    function LoginRedirectService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginRedirectService.prototype.canActivate = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.router.navigateByUrl('/main');
            return false;
        }
        else {
            return true;
        }
    };
    LoginRedirectService.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginRedirectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginRedirectService);
    return LoginRedirectService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





//const url = 'http://localhost:5000/upload_file';
//const httpOptions = {
//  headers: new HttpHeaders({
//    'Content-Type':  'multipart/form-data'
//  })
//};
var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
        this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
    }
    UploadService.prototype.upload = function (file, upload_path) {
        if (upload_path === void 0) { upload_path = 'upload_file'; }
        // this will be the our resulting map
        var status = {};
        //files.forEach(file => {
        // create a new multipart-form for every file
        var formData = new FormData();
        formData.append('file', file, file.name);
        // create a http-post request and pass the form
        // tell it to report the upload progress
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer " + this.token
        });
        var url = this.BASE_URL + "/" + 'upload_file';
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', url, formData, {
            reportProgress: true,
            headers: httpOptions
        });
        // create a new progress-subject for every file
        var progress = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var filedetails = null;
        // send the http-request and subscribe for progress-updates
        var startTime = new Date().getTime();
        this.http.request(req).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                // calculate the progress percentage
                var percentDone = Math.round((100 * event.loaded) / event.total);
                // pass the percentage into the progress-stream
                progress.next(percentDone);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // Close the progress-stream if we get an answer form the API
                // The upload is complete
                //console.log(event);
                progress.complete();
            }
        });
        // Save every progress-observable in a map of all observables
        status[file.name] = {
            progress: progress.asObservable()
        };
        //});
        // return the map of progress.observables
        return status;
    };
    UploadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    UserService.prototype.login = function (user) {
        var url = this.BASE_URL + "/login";
        return this.http.post(url, user, httpOptions);
    };
    UserService.prototype.generate_otp = function (user) {
        var url = this.BASE_URL + "/generate_otp";
        return this.http.post(url, user, httpOptions);
    };
    UserService.prototype.register = function (user) {
        var url = this.BASE_URL + "/register";
        return this.http.post(url, user, httpOptions);
    };
    UserService.prototype.register_business = function (user) {
        var url = this.BASE_URL + "/register_business";
        return this.http.post(url, user, httpOptions);
    };
    UserService.prototype.newUser = function (token, user) {
        var url = this.BASE_URL + "/new_user";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.post(url, user, { headers: httpOptions });
    };
    UserService.prototype.ensureAuthenticated = function (token) {
        var url = this.BASE_URL + "/ensure_auth";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.get(url, { headers: httpOptions });
    };
    UserService.prototype.logout = function (token) {
        var url = this.BASE_URL + "/logout/access";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.post(url, null, { headers: httpOptions });
    };
    UserService.prototype.userDetail = function (token) {
        var url = this.BASE_URL + "/secret";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.get(url, { headers: httpOptions });
    };
    UserService.prototype.allUsers = function (token, filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        var url = this.BASE_URL + "/users";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('filter', filter)
            .set('sortField', sortField)
            .set('sortDirection', sortDirection)
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString());
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.allRoles = function (token, filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        var url = this.BASE_URL + "/roles";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.get(url, { headers: httpOptions });
    };
    UserService.prototype.role_list = function (token, filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        var url = this.BASE_URL + "/roles";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('filter', filter)
            .set('sortField', sortField)
            .set('sortDirection', sortDirection)
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString());
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.newRole = function (token, role) {
        var url = this.BASE_URL + "/new_role";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.post(url, role, { headers: httpOptions });
    };
    UserService.prototype.privilege_list = function (token, filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        var url = this.BASE_URL + "/privileges";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('filter', filter)
            .set('sortField', sortField)
            .set('sortDirection', sortDirection)
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString());
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.allStudies = function (token, filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        var url = this.BASE_URL + "/studies";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('filter', filter)
            .set('sortField', sortField)
            .set('sortDirection', sortDirection)
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString());
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.newAbstraction = function (token, study) {
        var url = this.BASE_URL + "/new_abstraction";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.post(url, study, { headers: httpOptions });
    };
    UserService.prototype.upload = function (token, formData) {
        var url = this.BASE_URL + "/upload_file";
        var httpOptions1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer " + token
        });
        return this.http.post(url, formData, { headers: httpOptions1 });
    };
    UserService.prototype.allCharts = function (token, filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        var url = this.BASE_URL + "/charts";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('filter', filter)
            .set('sortField', sortField)
            .set('sortDirection', sortDirection)
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString());
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.newChart = function (token, chart) {
        var url = this.BASE_URL + "/new_chart";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.post(url, chart, { headers: httpOptions });
    };
    UserService.prototype.updateChart = function (token, chart) {
        var url = this.BASE_URL + "/update_chart";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.post(url, chart, { headers: httpOptions });
    };
    UserService.prototype.viewChart = function (token, filename) {
        var url = this.BASE_URL + "/view_chart";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('filename', filename);
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.viewChartDetail = function (token, chart_id) {
        var url = this.BASE_URL + "/chart_detail";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('chart_id', chart_id);
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.downloadChart = function (token, filename) {
        var url = this.BASE_URL + "/download_chart";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('filename', filename);
        return this.http.get(url, {
            params: params,
            responseType: 'arraybuffer',
            headers: httpOptions
        });
    };
    UserService.prototype.allInvestigators = function (token, filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        var url = this.BASE_URL + "/investigators";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('filter', filter)
            .set('sortField', sortField)
            .set('sortDirection', sortDirection)
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString());
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.newInvestigator = function (token, user) {
        var url = this.BASE_URL + "/new_investigator";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.post(url, user, { headers: httpOptions });
    };
    UserService.prototype.getTemplate = function (token, abstract_id) {
        //return this.http.get('assets/default-template.json');
        var url = this.BASE_URL + "/get_template";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('abstract_id', abstract_id);
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.allProjects = function (token, filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        var url = this.BASE_URL + "/projects";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('filter', filter)
            .set('sortField', sortField)
            .set('sortDirection', sortDirection)
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString());
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.newProject = function (token, project) {
        var url = this.BASE_URL + "/new_project";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.post(url, project, { headers: httpOptions });
    };
    UserService.prototype.updateProject = function (token, project) {
        var url = this.BASE_URL + "/update_project";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.post(url, project, { headers: httpOptions });
    };
    UserService.prototype.viewProjectDetail = function (token, project_id) {
        var url = this.BASE_URL + "/project_detail";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('project_id', project_id);
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.updateProjectStatus = function (token, project_id, project_status) {
        var url = this.BASE_URL + "/project_status";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('project_id', project_id)
            .set('project_status', project_status);
        return this.http.post(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.allAbstractions = function (token, filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        var url = this.BASE_URL + "/abstractions";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('filter', filter)
            .set('sortField', sortField)
            .set('sortDirection', sortDirection)
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString());
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.viewAbstractionDetail = function (token, abstract_id) {
        var url = this.BASE_URL + "/abstraction_detail";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('abstract_id', abstract_id);
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.updateAbstraction = function (token, abstraction) {
        var url = this.BASE_URL + "/update_abstraction";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.post(url, abstraction, { headers: httpOptions });
    };
    UserService.prototype.initiateExtract = function (token, project_id) {
        var url = this.BASE_URL + "/extract_data";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('project_id', project_id);
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.prototype.downloadExtract = function (token, project_id) {
        var url = this.BASE_URL + "/download_extract";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer " + token,
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('project_id', project_id);
        return this.http.get(url, {
            params: params,
            responseType: 'arraybuffer',
            headers: httpOptions
        });
    };
    UserService.prototype.updateQA = function (token, abstraction) {
        var url = this.BASE_URL + "/update_qa";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        return this.http.post(url, abstraction, { headers: httpOptions });
    };
    UserService.prototype.getCdaXsl = function () {
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'text/xml',
            'Accept': 'text/xml'
        });
        return this.http.get("/assets/CDA.xsl", { responseType: "text" });
    };
    UserService.prototype.allQAReviews = function (token, filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        var url = this.BASE_URL + "/qareviews";
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('filter', filter)
            .set('sortField', sortField)
            .set('sortDirection', sortDirection)
            .set('pageIndex', pageIndex.toString())
            .set('pageSize', pageSize.toString());
        return this.http.get(url, {
            params: params,
            headers: httpOptions
        });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    apiUrl: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\abstracton\dev-ui\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map