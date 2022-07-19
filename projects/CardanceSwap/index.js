const axios = require('axios')

async function tvl(){
    const ammLocked = (await axios.get("https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1w9qzpelu9hn45pefc0xr4ac4kdxeswq7pndul2vuj59u8tqaxdznu", {
        headers:{
            project_id: "mainnetTV9qV3mfZXbE6e44TVGMe1UoRlLrpSQt"
        }
    })).data.amount.find(token=>token.unit==="lovelace").quantity
    return {
        "cardano": ammLocked/1e6
    }
}

module.exports={
    timetravel: false,
    cardano:{
        tvl
    }
}
