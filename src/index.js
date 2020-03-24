
class Bilibili {

	static init() {
		var table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF';
		var tr = {};
		for(let i=0;i<58;i++) {
			tr[table[i]] = i;
		}
		return {
			table: table,
			tr: tr,
			s: [11, 10, 3, 8, 4, 6],
			xor: 177451812,
			add: 8728348608
		};
	}

	static av2BV(aid) {
		var X = Bilibili.init();
		var aid = (aid^X.xor)+X.add;
		var r = ['B','V','1',' ',' ','4',' ','1',' ','7',' ',' '];
		for(let i=0;i<6;i++) {
			r[X.s[i]] = X.table[parseInt(aid/(58**i))%58];
		}
		return r.join('');
	}

	static BV2av(bid) {
		var X = Bilibili.init();
		var aid = 0;
		for(let i=0;i<6;i++) {
			aid += X.tr[bid[X.s[i]]]*58**i;
		}
		return (aid-X.add)^X.xor
	}

}

export default Bilibili;
