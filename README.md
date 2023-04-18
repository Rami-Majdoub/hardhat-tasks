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
| count | no | number of accounts to print (default: 5)|
| initial-index | no | first account index (default: 0) |
| path | no | path (default: "m/44'/60'/0'/0/") |

#### example

command

```bash
npx hardhat account-info --mnemonic "spawn bright vicious wise library plunge exhibit vivid surprise stable cube seed" --count 2
```

output

```sh
Mnemonic: spawn bright vicious wise library plunge exhibit vivid surprise stable cube seed

Path: m/44'/60'/0'/0/0
Address: 0x73f65db440ad0f09B7e63ef5d0c6e5D3E466320d
PrivateKey: 0x434025c1d5826adba900998d2f8b96d7482d59edaefe2ebc4980879e3eebaf8f
PublicKey: 0x045101f74acf4fefa4579a71388be7f1220d03e5e0d90a35d8eb2961c60b534960107e33ab9081bb424d679c6c58070c8657f24caae031184a87bdfc7ab31f487b

Path: m/44'/60'/0'/0/1
Address: 0xd3711B07d77895062672Dfd26e82c8d16DB25aFF
PrivateKey: 0x56ca50b9bd9bddf0b5297107b3ab645f3c45b3223dcf26acc0090f2848752a9c
PublicKey: 0x0478abbc64bbf3d183d8a72eb1dcc4de5c7387606cdd50d5f9dd9e002d8d0b436545c3e3a6e955fc7967734a7fe6358709d5e68ea84edd315de84ac749f2e97925
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
Mnemonic: test test test test test test test test test test test junk

Path: m/44'/60'/0'/0/0
Address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
PrivateKey: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
PublicKey: 0x048318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed753547f11ca8696646f2f3acb08e31016afac23e630c5d11f59f61fef57b0d2aa5

Path: m/44'/60'/0'/0/1
Address: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
PrivateKey: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
PublicKey: 0x04ba5734d8f7091719471e7f7ed6b9df170dc70cc661ca05e688601ad984f068b0d67351e5f06073092499336ab0839ef8a521afd334e53807205fa2f08eec74f4
```
