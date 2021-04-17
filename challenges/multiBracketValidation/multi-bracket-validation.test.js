'use strict';

const multiBraketValidation = require('./multi-bracket-validation.js');
describe('Multi Bracket Validation',()=>{
    it('The brackets in the string should be balanced',()=>{
        expect(multiBraketValidation('{}')).toBe(true);
        expect(multiBraketValidation('{}(){}')).toBe(true);
        expect(multiBraketValidation('()[[Extra Characters]]')).toBe(true);
        expect(multiBraketValidation('(){}[[]]')).toBe(true);
        expect(multiBraketValidation('{}{Code}[Fellows](())')).toBe(true);
    });

    it('The brackets in the string should Not be balanced',()=>{
        expect(multiBraketValidation('[({}]')).toBe(false);
        expect(multiBraketValidation('(](')).toBe(false);
        expect(multiBraketValidation('{(})')).toBe(false);
    });
});