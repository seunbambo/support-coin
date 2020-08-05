import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x86109F50d9ff7D95d2B883E68128A0AE60bc4aB5"
);

export default instance;
