import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  sseColumnDefs: ColDef[] = [
    { field: 'market' },
    { field: 'product' },
    { field: 'hub' },
    { field: 'strip' },
    { field: 'updateTime' },
    { field: 'marketMaker' },
    { field: 'orderType' },
    { field: 'orderState' },
    { field: 'buyer' },
    { field: 'seller' },
    { field: 'price' },
    { field: 'priceUnit' },
    { field: 'orderQuantity' },
    { field: 'lotSize' },
    { field: 'lotUnit' },
    { field: 'orderBegin' },
    { field: 'orderEnd' },
    { field: 'orderDate' },
    { field: 'orderTime' },
    { field: 'orderId' },
    { field: 'orderSequence' },
    { field: 'dealId' },
    { field: 'dealBegin' },
    { field: 'dealEnd' },
    { field: 'dealQuantity' },
    { field: 'dealQuantityMin' },
    { field: 'dealQuantityMax' },
    { field: 'dealTerms' },
    { field: 'counterpartyParent' },
    { field: 'counterparty' },
    { field: 'marketMakerParent' },
    { field: 'buyerParent' },
    { field: 'sellerParent' },
    { field: 'buyerMnemonic' },
    { field: 'sellerMnemonic' },
    { field: 'marketMakerMnemonic' },
    { field: 'counterpartyMnemonic' },
    { field: 'windowRegion' },
    { field: 'marketShortCode' },
    { field: 'marketType' },
    { field: 'c1PriceBasis' },
    { field: 'c1Percentage' },
    { field: 'c1Price' },
    { field: 'c1BasisPeriod' },
    { field: 'c1BasisPeriodDetails' },
    { field: 'c2PriceBasis' },
    { field: 'c2Percentage' },
    { field: 'c2Price' },
    { field: 'c2BasisPeriod' },
    { field: 'c2BasisPeriodDetails' },
    { field: 'c3PriceBasis' },
    { field: 'c3Percentage' },
    { field: 'c3Price' },
    { field: 'c3BasisPeriod' },
    { field: 'c3BasisPeriodDetails' },
    { field: 'windowState' },
    { field: 'orderClassification' },
    { field: 'ocoOrderId' },
    { field: 'referenceOrderId' },
    { field: 'orderPlattsId' },
    { field: 'orderCancelled' },
    { field: 'orderDerived' },
    { field: 'orderQuantityTotal' },
    { field: 'orderRepeat' },
    { field: 'legPrices' },
    { field: 'parentDealId' },
    { field: 'orderSpread' },
    { field: 'orderStateDetail' },
    { field: 'optolMinQuantity' },
    { field: 'optolMaxQuantity' },
    { field: 'optolPriceBasis' },
    { field: 'optolPriceBasisPeriod' },
    { field: 'optolPriceBasisSubLevel' },
    { field: 'optolPrice' },
    { field: 'repeatedOrderId' },
    { field: 'iceMarketId' },
    { field: 'iceProductId' },
    { field: 'iceHubId' },
    { field: 'iceStripId' },
    { field: 'remainingQuantity' },
    { field: 'referenceOrderPlattsId' },
    { field: 'ghvMin' },
    { field: 'ghvMax' },
    { field: 'ghvUnit' },
    { field: 'marketCode' },
  ];

  dbColumnDefs: ColDef[] = [
    { field: 'market' },
    { field: 'product' },
    { field: 'hub' },
    { field: 'strip' },
    { field: 'updateTime' },
    { field: 'marketMaker' },
    { field: 'orderType' },
    { field: 'orderState' },
    { field: 'buyer' },
    { field: 'seller' },
    { field: 'price' },
    { field: 'priceUnit' },
    { field: 'orderQuantity' },
    { field: 'lotSize' },
    { field: 'lotUnit' },
    { field: 'orderBegin' },
    { field: 'orderEnd' },
    { field: 'orderDate' },
    { field: 'orderTime' },
    { field: 'orderId' },
    { field: 'orderSequence' },
    { field: 'dealId' },
    { field: 'dealBegin' },
    { field: 'dealEnd' },
    { field: 'dealQuantity' },
    { field: 'dealQuantityMin' },
    { field: 'dealQuantityMax' },
    { field: 'dealTerms' },
    { field: 'counterpartyParent' },
    { field: 'counterparty' },
    { field: 'marketMakerParent' },
    { field: 'buyerParent' },
    { field: 'sellerParent' },
    { field: 'buyerMnemonic' },
    { field: 'sellerMnemonic' },
    { field: 'marketMakerMnemonic' },
    { field: 'counterpartyMnemonic' },
    { field: 'windowRegion' },
    { field: 'marketShortCode' },
    { field: 'marketType' },
    { field: 'c1PriceBasis' },
    { field: 'c1Percentage' },
    { field: 'c1Price' },
    { field: 'c1BasisPeriod' },
    { field: 'c1BasisPeriodDetails' },
    { field: 'c2PriceBasis' },
    { field: 'c2Percentage' },
    { field: 'c2Price' },
    { field: 'c2BasisPeriod' },
    { field: 'c2BasisPeriodDetails' },
    { field: 'c3PriceBasis' },
    { field: 'c3Percentage' },
    { field: 'c3Price' },
    { field: 'c3BasisPeriod' },
    { field: 'c3BasisPeriodDetails' },
    { field: 'windowState' },
    { field: 'orderClassification' },
    { field: 'ocoOrderId' },
    { field: 'referenceOrderId' },
    { field: 'orderPlattsId' },
    { field: 'orderCancelled' },
    { field: 'orderDerived' },
    { field: 'orderQuantityTotal' },
    { field: 'orderRepeat' },
    { field: 'legPrices' },
    { field: 'parentDealId' },
    { field: 'orderSpread' },
    { field: 'orderStateDetail' },
    { field: 'optolMinQuantity' },
    { field: 'optolMaxQuantity' },
    { field: 'optolPriceBasis' },
    { field: 'optolPriceBasisPeriod' },
    { field: 'optolPriceBasisSubLevel' },
    { field: 'optolPrice' },
    { field: 'repeatedOrderId' },
    { field: 'iceMarketId' },
    { field: 'iceProductId' },
    { field: 'iceHubId' },
    { field: 'iceStripId' },
    { field: 'remainingQuantity' },
    { field: 'referenceOrderPlattsId' },
    { field: 'ghvMin' },
    { field: 'ghvMax' },
    { field: 'ghvUnit' },
    { field: 'marketCode' },
  ];

  sseRowData: any[] = [];
  dbRowData: any[] = [];
  newRowIds: Set<string> = new Set();
  themeName: string = '';

  constructor(
    private dataService: DataService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscribeToSSE();
    this.loadAllDbData();
  }

  getRowClass = (params: any): string => {
    return this.newRowIds.has(params.data.idtest) ? 'highlight-yellow' : '';
  };
  subscribeToSSE() {
    this.dataService.getSSEData().subscribe({
      next: (data) => {
        if (data) {
          this.sseRowData = [data, ...this.sseRowData];
          this.newRowIds.add(data.idtest);
          this.sseRowData = [...this.sseRowData];
          console.log(this.newRowIds);
          this.changeDetectorRef.detectChanges();

          // Remove the highlight after a delay
          setTimeout(() => {
            this.newRowIds.delete(data.idtest);
            this.changeDetectorRef.detectChanges();
          }, 5000);
        } else {
          console.log('non');
        }
      },
      error: (error) => console.error('SSE Error:', error),
    });
  }

  loadAllDbData() {
    this.dataService.getAllDbData().subscribe({
      next: (data) => {
        this.dbRowData = data;
        this.changeDetectorRef.detectChanges();
      },
      error: (error) => console.error('DB Data Error:', error),
    });
  }
  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
