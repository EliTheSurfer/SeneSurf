/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeVirageComponent } from './le-virage.component';

describe('LeVirageComponent', () => {
  let component: LeVirageComponent;
  let fixture: ComponentFixture<LeVirageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeVirageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeVirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
