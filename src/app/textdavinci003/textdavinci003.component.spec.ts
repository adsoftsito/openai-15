import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Textdavinci003Component } from './textdavinci003.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('Textdavinci003Component', () => {
  let component: Textdavinci003Component;
  let fixture: ComponentFixture<Textdavinci003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ Textdavinci003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Textdavinci003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
