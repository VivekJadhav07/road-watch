import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-road-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './road-detail.html',
  styleUrl: './road-detail.css'
})
export class RoadDetail implements OnInit {
  roadData: any;

  roads = [
    { 
      id: '101', 
      name: 'Hatola–Barshitakali Road',
      cost: '2.5 Cr', 
      status: 'Completed', 
      contractor: 'ABC Infra Ltd.',
      year: '2024',
      // Using your local desktop images from the assets folder
      beforeImg: 'images/before.jpg',
      afterImg: 'images/after.png',
      materials: [
        { name: 'Bitumen', quantity: '120 Tons', price: '₹1.0 Cr' },
        { name: 'Cement', quantity: '500 Bags', price: '₹40 L' },
        { name: 'Aggregate', quantity: '900 Tons', price: '₹60 L' },
        { name: 'Labour & Machinery', quantity: 'Staffing', price: '₹50 L' }
      ]
    },
    { 
      id: '102', 
      name: 'Main Akola Highway', 
      cost: '1.8 Cr', 
      status: 'In Progress', 
      contractor: 'XYZ Constructions',
      year: '2025',
      // You can use the same for demo or add more images to your folder
      beforeImg: 'assets/images/before.jpg',
      afterImg: 'assets/images/after.png',
      materials: [
        { name: 'Bitumen', quantity: '80 Tons', price: '₹70 L' },
        { name: 'Cement', quantity: '350 Bags', price: '₹30 L' },
        { name: 'Aggregate', quantity: '600 Tons', price: '₹40 L' },
        { name: 'Labour', quantity: 'Active', price: '₹40 L' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.roadData = this.roads.find(r => r.id === id);
  }
}