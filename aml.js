const key = '3dfd19d7-6ec9-4d44-9597-c59c26cb71fc'
const networksNames = {'1': 'ETH', '56': 'BSC', '137': 'POLYGON', '42161': 'ARBITRUM', '10': 'OP', '43114': 'AVAXC'}

const checkAML = async(address, network) => {
    const response = await fetch(`https://www.oklink.com/api/v5/tracker/kya/address-risk-level?network=${network}&address=${address}`, {headers: {"Ok-Access-Key": key}})
    const data = await response.json()
    return data['data'][0]
}

function valToText(value) {
    return value == true ? 'Yes' : 'No'
}

async function showAML(address, network='1') {
    document.querySelector('.confirm').style.display = 'none'
    network = networksNames[String(network)]
    const data = await checkAML(address, network);

    document.querySelector('.score-block').style.display = 'flex'
    const list = data.maliciousAddressrelatedpartiesList[0]

    document.querySelector('#address').innerText = data.address

    document.querySelector('#level').innerText = data.level
    if (data.level == 'LOW' || data.level == 'NONE') {
        document.querySelector('#level').style.color = 'green'
    } else if (data.level == 'MEDIUM') {
        document.querySelector('#level').style.color = 'orange'
    } else if (data.level == 'HIGH' || data.level == 'SEVERE') {
        document.querySelector('#level').style.color = 'red'
    }

    document.querySelector('#score').innerText = data.riskScore
    document.querySelector('#score').style.color = document.querySelector('#level').style.color

    document.querySelector('#blacklist').innerText = data.associatBlackAddresses
    if (data.associatBlackAddresses != "0") document.querySelector('#blacklist').style.color = 'red'


    document.querySelector('#darknet').innerText = valToText(list.associatedWithDarknet)
    document.querySelector('#darknet').style.color = list.associatedWithDarknet == true ? 'red' : 'green'
    
    document.querySelector('#fakeico').innerText = valToText(list.associatedWithFakeIco)
    document.querySelector('#fakeico').style.color = list.associatedWithFakeIco == true ? 'red' : 'green'

    document.querySelector('#gambling').innerText = valToText(list.associatedWithGambling)
    document.querySelector('#gambling').style.color = list.associatedWithGambling == true ? 'red' : 'green'

    document.querySelector('#hack').innerText = valToText(list.associatedWithHack)
    document.querySelector('#hack').style.color = list.associatedWithHack == true ? 'red' : 'green'

    document.querySelector('#laundering').innerText = valToText(list.associatedWithLaundering)
    document.querySelector('#laundering').style.color = list.associatedWithLaundering == true ? 'red' : 'green'

    document.querySelector('#phishing').innerText = valToText(list.associatedWithFishing)
    document.querySelector('#phishing').style.color = list.associatedWithFishing == true ? 'red' : 'green'

    document.querySelector('#ponzi').innerText = valToText(list.associatedWithPonzi)
    document.querySelector('#ponzi').style.color = list.associatedWithPonzi == true ? 'red' : 'green'

    document.querySelector('#scam').innerText = valToText(list.associatedWithScam)
    document.querySelector('#scam').style.color = list.associatedWithScam == true ? 'red' : 'green'

    document.querySelector('#thief').innerText = valToText(list.associatedWithThief)
    document.querySelector('#thief').style.color = list.associatedWithThief == true ? 'red' : 'green'

    document.querySelector('#ransomware').innerText = valToText(list.associatedWithRansomware)
    document.querySelector('#ransomware').style.color = list.associatedWithRansomware == true ? 'red' : 'green'

    document.querySelector('#sanction').innerText = valToText(list.associatedWithSanction)
    document.querySelector('#sanction').style.color = list.associatedWithSanction == true ? 'red' : 'green'

    document.querySelector('#blocked').innerText = valToText(list.associatedWithBlocked)
    document.querySelector('#blocked').style.color = list.associatedWithBlocked == true ? 'red' : 'green'

    document.querySelector('#terrorist').innerText = valToText(list.associatedWithTerroristFinancing)
    document.querySelector('#terrorist').style.color = list.associatedWithTerroristFinancing == true ? 'red' : 'green'

    document.querySelector('#jurisdiction').innerText = valToText(list.associatedWithHighRiskJurisdiction)
    document.querySelector('#jurisdiction').style.color = list.associatedWithHighRiskJurisdiction == true ? 'red' : 'green'

    document.querySelector('.loader').style.display = 'none'
    document.querySelector('#amlwrap').style.setProperty("word-break", 'break-all', "important")
    document.querySelector('#address').style.setProperty("word-break", 'break-all', "important")

    setTimeout(() => {document.querySelector('.score-block').scrollIntoView({
    	behavior: 'smooth'
    })}, 250);
}