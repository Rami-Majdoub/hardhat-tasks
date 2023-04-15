// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";
import path from "path";

import { useEnvironment } from "./helpers";

describe("Integration tests examples", function () {
  describe("Task ", function () {
    useEnvironment("hardhat-project");

    it("Should print a mnemonic phrase", async function () {
      await this.hre.run("mnemonic");
    });

    it("Should print a account infos", async function () {
      await this.hre.run("account-info", {
        mnemonic: "script horror palace pear bottom rigid style seat extra vital illegal trial",
        count: 2
      });
    });

    it("Should print hardhat account infos", async function () {
      await this.hre.run("hardhat-account-infos");
    });

  });
  
});