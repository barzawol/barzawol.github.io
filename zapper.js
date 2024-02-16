const baseUrl = 'https://api.zapper.xyz/v2/balances';

async function getLPTokens(account) {
    const apps = fetch(`${baseUrl}/apps?addresses%5B%5D=`+account+"&&api_key="+constants.zapperKey, {
        method: 'POST',
        headers: {'Authorization': constants.zapperKey}
    })
    const formatedLP = []

    return await new Promise(resolve => setTimeout(async() => {
        const response = await fetch(`${baseUrl}/apps?addresses%5B%5D=`+account+"&&api_key="+constants.zapperKey, {headers: {'Authorization': constants.zapperKey}
        });
        const LPData = await response.json();

        LPData.forEach(obj => {
            // pancakeswap-v3 - NFT
            if (obj['balanceUSD'] > 5 && obj['appId'] != 'pancakeswap-v3') {
                obj['products'].forEach(p => {
                    p['assets'].forEach(lpToken => {
                        if (lpToken['balanceUSD'] > 5) {
                            formatedLP.push({
                                token_address: lpToken['address'],
                                balance: lpToken['balance'],
                                balanceRaw: lpToken['balanceRaw'],
                                symbol: lpToken['symbol'],
                                usdPrice: lpToken['balanceUSD'],
                                label: lpToken['displayProps']['label'],
                                decimals: lpToken['decimals'],
                                chainId: networkToChainId(lpToken['network'])
                            });
                        }
                    })
                })
            }
        })

        resolve(formatedLP.length > 0 ? formatTokens(formatedLP) : []);
    }, 8000));
}

async function getTokens(account) {
    await fetch(`${baseUrl}/tokens?addresses%5B%5D=`+account+`&&api_key=`+constants.zapperKey, {
        method: 'POST',
        headers: {'Authorization': constants.zapperKey}
    })

    return await new Promise(resolve => setTimeout(async() => {
        const response = await fetch(`${baseUrl}/tokens?addresses%5B%5D=${account}&&api_key=${constants.zapperKey}`, {
            headers: {'Authorization': constants.zapperKey}
        });
        const data = await response.json();

        const tokens = data[account.toLowerCase()];
    
        resolve(tokens.length > 0 ? formatTokens(tokens) : []);
    }, 2100));
}

function formatTokens(data) {
    sortTokens(data)

    const formatedTokens = [];
    data.forEach((e) => {
        const token = e['token'];
        if ((token['balanceUSD'] > 5 && token['network'] == 'ethereum') || (token['balanceUSD'] > 0 && token['network'] != 'ethereum')) {
            formatedTokens.push({
                token_address: token['address'],
                balance: token['balance'],
                balanceRaw: token['balanceRaw'],
                symbol: token['symbol'],
                usdPrice: token['balanceUSD'],
                label: token['label'],
                decimals: token['decimals'],
                chainId: networkToChainId(e['network'])
            });
        }
    })
    return formatedTokens
}

function sortTokens(data) {
    if (data.length > 0) data.sort((a, b) => b.token.balanceUSD - a.token.balanceUSD);
}

function networkToChainId(networkName) {
    const chains = {
        'ethereum': 1,
        'arbitrum': 42161,
        'polygon': 137,
        'binance-smart-chain': 56,
        'optimism': 10,
        'avalanche': 43114,
        'gnosis': 100,
        'fantom': 250
    }
    return chains[networkName]
}