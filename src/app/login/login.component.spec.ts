import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, HomeComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(' should have valid form ', () => {
    component.userLogin.get('username').setValue('fairouz');
    component.userLogin.get('password').setValue('fairouz05');
    expect(component.userLogin.valid).toBe(true);
  });
  it('should have invalid form ', () => {
    component.userLogin.reset();
    expect(component.userLogin.valid).toBe(false);
  });
  it('should have valid username and password', () => {
    component.userLogin.get('username').setValue('fairouz');
    component.userLogin.get('password').setValue('fairouz05');
    expect(component.userLogin.get('username').valid).toBe(true);
    expect(component.userLogin.get('password').valid).toBe(true);
  });
  it('should simulat button click', () => {
    spyOn(component, 'login');
    component.userLogin.get('username').setValue('fairouz');
    component.userLogin.get('password').setValue('fairouz05');
    fixture.detectChanges();
    const btnDg = fixture.debugElement.query(By.css('#btn')).nativeElement;
    btnDg.click();
    expect(component.login).toHaveBeenCalledTimes(1);
  });
  it(' should test if the form is invald', () => {
    component.userLogin.reset();
    expect(component.userLogin.valid).toBe(false);
  });
  it('should test if the button is disabled', () => {
    component.userLogin.reset();
    fixture.detectChanges();
    const loginbtn = fixture.debugElement.nativeElement.querySelector('#btn');
    expect(loginbtn.disabled).toBe(true);
  });
  it('should navigate to home page', () => {
    component.userLogin.get('username').setValue('fairouz');
    component.userLogin.get('password').setValue('fairouz05');
  });
});
