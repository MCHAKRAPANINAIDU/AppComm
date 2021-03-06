import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataObj } from '../data-obj';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private messageId = new BehaviorSubject('105');
  currentMessage = this.messageId.asObservable();
    // Placeholder for todos
    dataObject: DataObj[] = [];
    finalData;
constructor() { }
  getItems() {
      this.dataObject = [
            {
              productSize: '',
              item: 'Egg Manchurian',
              plu_upc: 'Appetizer',
              price: ' $5.15 ',
              productId: '102',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 30 Mins',
              img_url: '../assets/img/recpie_1.webp'
            },
            {
              productSize: '',
              item: 'Pure Vegetable Bowl ',
              plu_upc: 'Appetizer',
              price: ' $5.15 ',
              productId: '159',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 30 Mins',
              img_url: '../assets/img/recpie_2.webp'
            },
            {
              productSize: '',
              item: 'Pure Vegetable Bowl',
              plu_upc: 'Appetizer',
              price: ' $5.15 ',
              productId: '105',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 40 Mins',
              img_url: '../assets/img/recpie_3.webp'
            },
            {
              productSize: '',
              item: 'SMOKED VIRGINA HAM',
              plu_upc: 'Appetizer',
              price: ' $5.15 ',
              productId: '156',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 45 Mins',
              img_url: '../assets/img/144502_Shamarie84_118a408a-c55b-4bcb-9769-07935a83ed5c.jpeg'
            },
            {
              productSize: '',
              item: 'HONEY MAPLE HAM',
              plu_upc: 'Appetizer',
              price: ' $5.15 ',
              productId: '150',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 20 Mins',
              img_url: '../assets/img/BHDeluxeHam__67214.1550868478.webp'
            },
            {
              productSize: '',
              item: 'HONEY MAPLE HAM 1/2',
              plu_upc: 'Appetizer',
              price: ' $5.15 ',
              productId: '151',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 50 Mins',
              img_url: '../assets/img/boars-head-deluxe-low-sodium-oven-roasted-beef-cap-off-top-round.jpg'
            },
            {
              productSize: '',
              item: 'BAVARIAN SMOKED HAM ',
              plu_upc: 'Appetizer',
              price: ' $5.15 ',
              productId: '166',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 25 Mins',
              img_url: '../assets/img/default-931317f3313ee020efbaacb5293446308aeade2ba44e0856b93ff773c352b025.png'
            },
            {
              productSize: '',
              item: 'BLACK FOREST BEECHWOOD HAM L/S',
              plu_upc: 'Appetizer',
              price: ' $5.15 ',
              productId: '11005',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 25 Mins',
              img_url: '../assets/img/del_bh_lwsd_dlxham_z.jpg'
            },
            {
              productSize: '',
              item: 'TAVERN SMOKED HAM',
              plu_upc: 'Appetizer',
              price: ' $5.15 ',
              productId: '158',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 25 Mins',
              img_url: '../assets/img/detail-001@1200.1525977406.jpg'
            },
            {
              productSize: '',
              item: 'ROSEMARY HAM',
              plu_upc: 'Appetizer',
              price: ' $5.15 ',
              productId: '173',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 55 Mins',
              img_url: '../assets/img/primary_00e850a2-3719-4b8d-ae1b-a1cf9eab3818.jpg'
            },
            {
              productSize: '',
              item: 'PESTO PARMESAN HAM',
              plu_upc: 'Appetizer',
              price: ' $5.15 ',
              productId: '189',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 35 Mins',
              img_url: '../assets/img/primary_14e6df27-8bd4-4f34-9f0d-ed67a3da9d38.jpg'
            },
            {
              productSize: '',
              item: 'DELI SWEET SLICE SMOKED HAM',
              plu_upc: 'Desserts',
              price: ' $4.95 ',
              productId: '11018',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/primary_36c59916-2df7-4d78-bf57-f3eab5f9edf6.jpeg'
            },
            {
              productSize: '',
              item: 'HABANERO HAM ',
              plu_upc: 'Desserts',
              price: ' $5.15 ',
              productId: '11044',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/primary_63ff2328-a9e5-43e9-a1a4-a91b9f724fd4.jpg'
            },
            {
              productSize: '',
              item: 'ITALIAN RSTD HAM (PROSC COTTO)',
              plu_upc: 'Desserts',
              price: ' $5.79 ',
              productId: '11022',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/primary_b69923c0-1e6e-4cb7-a183-2026dea0378e.jpg'
            },
            {
              productSize: '',
              item: 'SUNDAY HOT HAM (SWEET SLICE)',
              plu_upc: 'Desserts',
              price: ' $4.95 ',
              productId: '11018',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/primary_b5666443-b215-4d6f-bc29-0b5b0f1786b8.jpg'
            },
            {
              productSize: '',
              item: 'DELUXE ROAST BEEF TOP-ROUND',
              plu_upc: 'Desserts',
              price: ' $6.95 ',
              productId: '235',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/primary_cab5b92b-2014-4a79-8b50-9bd4eccd422d.jpg'
            },
            {
              productSize: '',
              item: 'LONDONPORT ROAST BEEF',
              plu_upc: 'Desserts',
              price: ' $6.95 ',
              productId: '915',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/primary_fa4eae39-109a-4733-82e9-47ff1d76a83b.jpg'
            },
            {
              productSize: '',
              item: 'ITALIAN ROAST BEEF TOP-ROUND',
              plu_upc: 'Desserts',
              price: ' $6.95 ',
              productId: '232',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'SEASOND ROAST BEEF TOP-ROUND',
              plu_upc: 'Desserts',
              price: ' $6.95 ',
              productId: '246',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/turkey-crop-74909f3624504149b970586e921239af.webp'
            },
            {
              productSize: '',
              item: 'CORNED BEEF TOP-ROUND',
              plu_upc: 'Desserts',
              price: ' $6.50 ',
              productId: '197',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'PASTRAMI BEEF TOP-ROUND',
              plu_upc: 'Desserts',
              price: ' $6.50 ',
              productId: '205',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'LONDON BROIL ROAST BEEF',
              plu_upc: 'Desserts',
              price: ' $6.95 ',
              productId: '12011',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'MESQUITE SMOKEHOUSE BRISKET ',
              plu_upc: 'Desserts',
              price: ' $6.95 ',
              productId: '12012',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'CAJUN ROAST BEEF TOP-ROUND',
              plu_upc: 'Desserts',
              price: ' $6.95 ',
              productId: '227',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'WELL DONE SEASONED ROAST BEEF',
              plu_upc: 'Desserts',
              price: ' $6.95 ',
              productId: '12004',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: '1ST CUT CORNED BEEF BRISKET',
              plu_upc: 'Desserts',
              price: ' $6.95 ',
              productId: '206',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: '1ST CUT PASTRAMI BRISKET',
              plu_upc: 'Desserts',
              price: ' $6.95 ',
              productId: '210',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'NAVEL PASTRAMI FS serve hot',
              plu_upc: 'Desserts',
              price: ' $5.75 ',
              productId: '341',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'OVENGOLD TURKEY BREAST',
              plu_upc: 'Desserts',
              price: ' $5.00 ',
              productId: '278',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'CRACKED PEPPERMILL TURKEY',
              plu_upc: 'Desserts',
              price: ' $5.15 ',
              productId: '276',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'MAPLE GLAZED HONEY COAT TURKEY',
              plu_upc: 'Desserts',
              price: ' $5.30 ',
              productId: '270',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'MESQUITE SMOKED TURKEY',
              plu_upc: 'Desserts',
              price: ' $5.00 ',
              productId: '294',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'BLACK FOREST SMOKED TURKEY',
              plu_upc: 'Desserts',
              price: ' $5.00 ',
              productId: '297',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'LOW-SODIUM TURKEY BREAST',
              plu_upc: 'Desserts',
              price: ' $4.70 ',
              productId: '421',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'PASTRAMI SEASONED TURKEY',
              plu_upc: 'Desserts',
              price: ' $5.15 ',
              productId: '275',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'SALSALITO TURKEY BREAST',
              plu_upc: 'Desserts',
              price: ' $5.15 ',
              productId: '284',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'CAJUN TURKEY BREAST',
              plu_upc: 'Desserts',
              price: ' $5.15 ',
              productId: '296',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'HONEY SMOKED TURKEY BREAST',
              plu_upc: 'Desserts',
              price: ' $5.30 ',
              productId: '958',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'JERK TURKEY BREAST ',
              plu_upc: 'Desserts',
              price: ' $5.10 ',
              productId: '13016',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'NO SALT ADDED TURKEY BREAST',
              plu_upc: 'Desserts',
              price: ' $5.30 ',
              productId: '13018',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'BLACKENED TURKEY BREAST',
              plu_upc: 'Desserts',
              price: ' $5.10 ',
              productId: '13033',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'PANCETTA ROASTED TURKEY BREAST',
              plu_upc: 'Desserts',
              price: ' $5.10 ',
              productId: '13017',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'CHIPOTLE CHICKEN BREAST',
              plu_upc: 'Desserts',
              price: ' $4.90 ',
              productId: '13034',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 5 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'EVERROAST CHICKEN BREAST',
              plu_upc: 'Desserts',
              price: ' $4.90 ',
              productId: '13014',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 35 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'L/S GOLDEN CLASSIC CHICKEN',
              plu_upc: 'Desserts',
              price: ' $4.90 ',
              productId: '437',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 34 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'HICKORY SMOKED CHICKEN',
              plu_upc: 'Desserts',
              price: ' $4.90 ',
              productId: '419',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 35 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'ALL AMERICAN BBQ CHICKEN ',
              plu_upc: 'Desserts',
              price: ' $4.90 ',
              productId: '13013',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 36 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'ROTISSERIE SEASONED CHICKEN',
              plu_upc: 'Desserts',
              price: ' $4.90 ',
              productId: '438',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 39 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'BLAZIN BUFFALO CHICKEN',
              plu_upc: 'Desserts',
              price: ' $4.90 ',
              productId: '440',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 30 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'LEMON PEPPER CHICKEN',
              plu_upc: 'Desserts',
              price: ' $4.90 ',
              productId: '439',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 35 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            },
            {
              productSize: '',
              item: 'MAPLE GLAZED CHICKEN',
              plu_upc: 'Desserts',
              price: ' $4.90 ',
              productId: '13011',
              prodDesc: 'abcd',
              prodReviews: ['good', 'aswesome', 'nice'],
              uom: 'Time Needs: 10 Mins',
              img_url: '../assets/img/genMid.ML81770760_0.jpg'
            }
          ];
      return this.finalData = Array.from(this.dataObject.reduce((m, t) => m.set(t.productId, t), new Map()).values());
    }
    changeMessage(prodId: string) {
      this.messageId.next(prodId);
    }
    addProdObject(value){
      let sameFound: any;
      for (let i of this.finalData) {
        if( value.productId == this.finalData[i]) {
          sameFound = 1;
        } else {
          sameFound = 0;
        }
      }
      this.finalData.push(value);
      this.finalData = Array.from(this.finalData.reduce((m, t) => m.set(t.productId, t), new Map()).values());
    }
  }

