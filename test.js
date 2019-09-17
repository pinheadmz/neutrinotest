'use strict';

const assert = require('assert');
const bcoin = require('bcoin');
const bcurl = require('bcurl');
const network = bcoin.Network.get(process.env.BCOIN_NETWORK);
const {NodeClient} = require('bclient');

const bitcoind = bcurl.client({
  port: 18443,
  password: 'x'
});

const bc = new NodeClient({
  port: network.rpcPort,
  apiKey: process.env.BCOIN_API_KEY
});

(async () => {
  const info = await bc.getInfo();
  const height = info.chain.height;

  for (let h = 0; h <= height; h++) {
    const block = await bc.getBlock(h);
    const hash = block.hash;

    const filter1 = await bitcoind.execute('', 'getblockfilter', [hash]);
    const filter2 = await bc.execute('getblockfilter', [hash, 'qwdqwdqwd']);
    assert.strictEqual(filter1.filter, filter2.filter);

    console.log(`filter match for height ${h}: ${filter1.filter}`);

    assert.strictEqual(filter1.header, filter2.header);

    console.log(`filter header match for height ${h}: ${filter1.header}`);
  }
})();
