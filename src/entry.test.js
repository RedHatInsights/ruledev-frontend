/*global describe, it, expect*/
import getBaseName from './Utilities/getBaseName';

describe('Utilities/getBaseName', () => {
    it('should find the right base name on Stable ', () => {
        expect(getBaseName('/staging/ruledev/foo/bar/baz')).toEqual('/staging/ruledev');
        expect(getBaseName('/staging/ruledev')).toEqual('/staging/ruledev');
    });

    it('should find the right base name on Beta ', () => {
        expect(getBaseName('/beta/staging/ruledev/foo/bar/baz')).toEqual('/beta/staging/ruledev');
        expect(getBaseName('/beta/staging/ruledev/fff/bar/baz')).toEqual('/beta/staging/ruledev');
    });
});
