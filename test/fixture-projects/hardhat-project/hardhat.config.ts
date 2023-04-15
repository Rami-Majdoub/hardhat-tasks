// We load the plugin here.
import { HardhatUserConfig } from "hardhat/types";

import "../../../src/index";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  defaultNetwork: "hardhat",
  networks: {
    hardhat:{
      accounts: {
        mnemonic: "boring divert awesome glass spoon abuse siege write model sorry panel win",
        count: 3
      }
    }
  }
};

export default config;
