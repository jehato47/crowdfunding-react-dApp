import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
        JSON.parse(CampaignFactory.interface),
        "0xe57f221887397A1286F263dD21C6a681f529dFB3"
    ) // This is the address of the deployed contract


export default instance;