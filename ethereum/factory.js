import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x5E13B14cb97b37E6689567732aEdA525E0cd0acb"
);

export default instance;
