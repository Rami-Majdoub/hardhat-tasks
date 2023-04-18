# hardhat-example-plugin

_Boilerplate code transformed into tasks_

## What

This plugin will add tasks to eliminate boilerplate code for deploy, abi, mnemonic, account-info, hardhat-account-infos ...

## Installation

A step-by-step guide on how to install the plugin

```bash
npm install @rami-majdoub/hardhat-tasks --save-dev
```

Import the plugin in your `hardhat.config.js`:

```js
require("@rami-majdoub/hardhat-tasks");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "@rami-majdoub/hardhat-tasks";
```

## Required plugins

The list of all the required Hardhat plugins

- [@nomiclabs/hardhat-ethers](https://github.com/nomiclabs/hardhat)

## Tasks

This plugin adds the following tasks to Hardhat:

### deploy

deploys a contract

#### Parameters

| name | required |  description |
| ---- | ---- | ---- |
| contract | yes | path of the contract file  |
| network | yes | the network to deploy to |
| arg0 | no | 1st constructor argument |
| arg1 | no | 2nd constructor argument |
| arg2 | no | 3rd constructor argument |
| arg3 | no | 4th constructor argument |
| arg4 | no | 5th constructor argument |

#### example

command

```bash
npx hardhat deploy --contract contracts/Lock.sol --network localhost
```

output

```sh
Deploy started
Contract contracts/Lock.sol deployed at address:  0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### abi

Prints the ABI of a contract

#### Parameters

| name | required |  description |
| ---- | ---- | ---- |
| contract | yes| path of the contract file  |
| format | no | "full" or "minimal" or "json" (default: "full") |
| save-to | no | file path (default: "") |


#### example
command

```bash
npx hardhat abi --contract contracts/Lock.sol
```

output

```json
[
  'constructor(uint256 _unlockTime) payable',
  'event Withdrawal(uint256 amount, uint256 when)',
  'function owner() view returns (address) @29000000',
  'function unlockTime() view returns (uint256) @29000000',
  'function withdraw() @29000000'
]
```

### mnemonic

Prints a new valid mnemonic to use instead of default one

#### example

command

```bash
npx hardhat mnemonic
```

output

```
spawn bright vicious wise library plunge exhibit vivid surprise stable cube seed
```

### account-info

Prints the accounts informations from a mnemonic

#### Parameters

| name | required |  description |
| ---- | ---- | ---- |
| mnemonic | yes | a valid mnemonic  |
| count | no | number of accounts to print |
| initial-index | no | first account index |
| path | no | path (default: "m/44'/60'/0'/0/") |

#### example

command

```bash
npx hardhat account-info --mnemonic "spawn bright vicious wise library plunge exhibit vivid surprise stable cube seed" --count 2
```

output

```sh
Mnemonic:  spawn bright vicious wise library plunge exhibit vivid surprise stable cube seed
Address:  0x73f65db440ad0f09B7e63ef5d0c6e5D3E466320d
privateKey:  0x434025c1d5826adba900998d2f8b96d7482d59edaefe2ebc4980879e3eebaf8f
publicKey:  0x045101f74acf4fefa4579a71388be7f1220d03e5e0d90a35d8eb2961c60b534960107e33ab9081bb424d679c6c58070c8657f24caae031184a87bdfc7ab31f487b
----------
Address:  0xd3711B07d77895062672Dfd26e82c8d16DB25aFF
privateKey:  0x56ca50b9bd9bddf0b5297107b3ab645f3c45b3223dcf26acc0090f2848752a9c
publicKey:  0x0478abbc64bbf3d183d8a72eb1dcc4de5c7387606cdd50d5f9dd9e002d8d0b436545c3e3a6e955fc7967734a7fe6358709d5e68ea84edd315de84ac749f2e97925
----------

```
### hardhat-account-infos

Prints more informations about the accounts used by hardhat

#### example

command

```bash
npx hardhat hardhat-account-infos
```

output

```sh
Mnemonic:  test test test test test test test test test test test junk
Address:  0x1e59ce931B4CFea3fe4B875411e280e173cB7A9C
privateKey:  0xdd23ca549a97cb330b011aebb674730df8b14acaee42d211ab45692699ab8ba5
publicKey:  0x04b93015e4ada498248da1ed7041e749ccb07a4489e2e33b38405f5c93d44703e9848abbd5cf93061d115748d2b4bf893daafaa15287c3b4ab6f783f1f7651d293
----------
Address:  0xc89D42189f0450C2b2c3c61f58Ec5d628176A1E7
privateKey:  0xf1aa5a7966c3863ccde3047f6a1e266cdc0c76b399e256b8fede92b1c69e4f4e
publicKey:  0x04812bef44f6e7b2a19c0b01c2dca5e54ba1935a1890ffdcb93abd0c534b209c21e4f6176823fef493f7b5afaa456f31d5293363d8f801c540ebcc061812890cba
----------
```
