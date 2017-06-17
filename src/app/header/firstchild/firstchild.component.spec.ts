/**
 * Created by Xavi on 6/11/2017.
 */
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { FirstChildComponent } from './firstchild.component'

describe('header', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({             
            declarations: [FirstChildComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });

    it('works', () => {
       let fixture = TestBed.createComponent(FirstChildComponent); 
       expect(1).toBe(1);
    });
});