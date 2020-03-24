import expect from 'expect'

import Bilibili from 'src/index'

describe('av to BV', () => {
	it('av170001', () => {
		expect(Bilibili.av2BV(170001)).toEqual('BV17x411w7KC');
	});
	it('av455017605', () => {
		expect(Bilibili.av2BV(455017605)).toEqual('BV1Q541167Qg');
	});
	it('av882584971', () => {
		expect(Bilibili.av2BV(882584971)).toEqual('BV1mK4y1C7Bz');
	});
})

describe('BV to av', () => {
	it('BV17x411w7KC', () => {
		expect(Bilibili.BV2av('BV17x411w7KC')).toEqual('170001');
	});
	it('BV1Q541167Qg', () => {
		expect(Bilibili.BV2av('BV1Q541167Qg')).toEqual('455017605');
	});
	it('BV1mK4y1C7Bz', () => {
		expect(Bilibili.BV2av('BV1mK4y1C7Bz')).toEqual('882584971')
	});
});
