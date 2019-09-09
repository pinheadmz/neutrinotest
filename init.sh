export BCOIN_NETWORK=regtest
export BCOIN_HTTP_HOST=0.0.0.0
export BCOIN_WALLET_HTTP_HOST=0.0.0.0
export BCOIN_NODE_HOST=0.0.0.0
export BCOIN_LOG_LEVEL=debug
export BCOIN_WORKERS=true
export BCOIN_LISTEN=true
export BCOIN_MEMORY=false
export BCOIN_INDEX_TX=true
export BCOIN_INDEX_ADDRESS=true
export BCOIN_INDEX_FILTERS=true
export BCOIN_API_KEY=apiapiapiapikey!
export BCOIN_WALLET_API_KEY=apiapiapiapikey!
export BCOIN_PREFIX=$PWD/_bcoin
export BCOIN_BIP157=true
alias BD="$PWD/node_modules/bcoin/bin/bcoin --daemon"
alias BL="tail -F $PWD/_bcoin/regtest/debug.log"
alias KB="killall bcoin; killall btcd"
alias RR="rm -rf $PWD/_bcoin; rm -rf $PWD/_btcd"
alias NT="node txmess.js"
alias BTCD="btcd --regtest --datadir=$PWD/_btcd --logdir=$PWD/_btcd --rpccert=$PWD/_btcd/rpc.cert --rpckey=$PWD/_btcd/rpc.key  --rpcuser=x --rpcpass=x > /dev/null &"
alias CONNECT="bcoin-cli rpc addnode 127.0.0.1:18444 add"
export BTCCTL="btcctl --configfile=$PWD/btcctl.conf --rpccert=$PWD/_btcd/rpc.cert"
