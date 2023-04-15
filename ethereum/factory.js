import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
        JSON.parse(CampaignFactory.interface),
        "0xAf906277266D5D6eB0bCb20296A5E4603921621d"
    ) // This is the address of the deployed contract


export default instance;