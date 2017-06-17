import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component'

describe('header', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            declarations: [HeaderComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        // TestBed.overrideComponent({
        //     set: {
        //         providers: [ 
        //             { provide: ServerService, useClass }      
        //         ]          
        //     }
        // });
    });

    it('works', () => {
       expect(1).toBe(1);
    });
});