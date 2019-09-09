'use strict';

const assert = require('assert');
const bcoin = require('bcoin');
const network = bcoin.Network.get(process.env.BCOIN_NETWORK);
const {NodeClient} = require('bclient');

const btcd = new NodeClient({
  port: 18334,
  username: 'x',
  password: 'x',
  ssl: true,
  strictSSL: false
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

    const filter1 = await btcd.execute('getcfilter', [hash, 0]);
    const filter2 = await bc.execute('getblockfilter', [hash, 0]);
    assert.strictEqual(filter1, filter2.filter);

    console.log(`filter match for height ${h}: ${filter1}`);

    const filterH1 = await btcd.execute('getcfilterheader', [hash, 0]);
    // const filterH2 = await bc.execute('getcfilterheader', [hash, 0]);
    assert.strictEqual(filterH1, filter2.header);

    console.log(`filter header match for height ${h}: ${filterH1}`);
  }
})();
