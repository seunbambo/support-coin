import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xfC95fA650e2b847eca81869aD7390c8CBF829f52"
);

export default instance;
