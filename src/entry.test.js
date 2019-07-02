/*global describe, it, expect*/
import getBaseName from './Utilities/getBaseName';

describe('Utilities/getBaseName', () => {
    it('should find the right base name on Stable ', () => {
        expect(getBaseName('/ruledev/foo/bar/baz')).toEqual('/ruledev');
        expect(getBaseName('/ruledev')).toEqual('/ruledev');
    });

    it('should find the right base name on Beta ', () => {
        expect(getBaseName('/beta/ruledev/foo/bar/baz')).toEqual('/beta/ruledev');
        expect(getBaseName('/beta/ruledev/fff/bar/baz')).toEqual('/beta/ruledev');
    });
});
