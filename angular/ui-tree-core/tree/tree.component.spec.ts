import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TreeCoreComponent } from "./tree.component";

describe("TreeCoreComponent", () => {
  let component: TreeCoreComponent;
  let fixture: ComponentFixture<TreeCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeCoreComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
