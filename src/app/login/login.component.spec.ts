import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { by } from 'protractor';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule]
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
  it(' should test if the form is invald', () => {
    component.userLogin.reset();
    expect(component.userLogin.valid).toBe(false);
  });
  it('should test if the button is disabled', () => {
    component.userLogin.reset();
    fixture.detectChanges();
    const loginbtn = fixture.debugElement.nativeElement.querySelector(
      '.login-btn'
    );
    expect(loginbtn.disabled).toBe(true);
  });
});
