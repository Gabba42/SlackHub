import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveChatComponent } from './active-chat.component';
import { ChatService } from '../service/chat-service';

describe('ActiveChatComponent', () => {
  let component: ActiveChatComponent;
  let fixture: ComponentFixture<ActiveChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveChatComponent ],
      providers: [ChatService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create chat service', () => {
    expect(component).toBeTruthy();
  });
});
