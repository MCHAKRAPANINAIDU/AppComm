export class DataObj {
    productSize: string;
     item: string;
     plu_upc: string;
     price: string;
     productId: string;
     prodDesc: string;
     prodReviews: Array<string>;
     uom: string;
     img_url: string;
     constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
