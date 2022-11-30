import test from 'ava';
import onetoten from './index.js';

test('does the test suit fail?', t => {
	t.pass();
});

test('does the lib fail?', t => {
	try {
		onetoten();
		t.pass();
	} catch (e) {
		t.fail();
	}
});
