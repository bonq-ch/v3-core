/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { TestERC20, TestERC20Interface } from "../../test/TestERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToMint",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106d23803806106d28339818101604052602081101561003357600080fd5b505161003f3382610045565b506100c8565b6001600160a01b0382166000908152602081905260409020548101818110156100a8576040805162461bcd60e51b815260206004820152601060248201526f6f766572666c6f772062616c616e636560801b604482015290519081900360640190fd5b6001600160a01b0390921660009081526020819052604090209190915550565b6105fb806100d76000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806370a082311161005057806370a082311461011b578063a9059cbb14610153578063dd62ed3e1461017f57610072565b8063095ea7b31461007757806323b872dd146100b757806340c10f19146100ed575b600080fd5b6100a36004803603604081101561008d57600080fd5b506001600160a01b0381351690602001356101ad565b604080519115158252519081900360200190f35b6100a3600480360360608110156100cd57600080fd5b506001600160a01b03813581169160208101359091169060400135610213565b6101196004803603604081101561010357600080fd5b506001600160a01b0381351690602001356103f3565b005b6101416004803603602081101561013157600080fd5b50356001600160a01b0316610483565b60408051918252519081900360200190f35b6100a36004803603604081101561016957600080fd5b506001600160a01b038135169060200135610495565b6101416004803603604081101561019557600080fd5b506001600160a01b03813581169160200135166105d1565b3360008181526001602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b6001600160a01b03831660009081526001602090815260408083203384529091528120548281101561028c576040805162461bcd60e51b815260206004820152601660248201527f616c6c6f77616e636520696e73756666696369656e7400000000000000000000604482015290519081900360640190fd5b6001600160a01b0380861660009081526001602090815260408083203384528252808320878603905592871682528190522054808401811115610316576040805162461bcd60e51b815260206004820152601a60248201527f6f766572666c6f772062616c616e636520726563697069656e74000000000000604482015290519081900360640190fd5b6001600160a01b0380861660009081526020819052604080822084880190559188168152205484811015610391576040805162461bcd60e51b815260206004820152601860248201527f756e646572666c6f772062616c616e63652073656e6465720000000000000000604482015290519081900360640190fd5b6001600160a01b0380881660008181526020818152604091829020898603905581518981529151938a16937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35060019695505050505050565b6001600160a01b038216600090815260208190526040902054810181811015610463576040805162461bcd60e51b815260206004820152601060248201527f6f766572666c6f772062616c616e636500000000000000000000000000000000604482015290519081900360640190fd5b6001600160a01b0390921660009081526020819052604090209190915550565b60006020819052908152604090205481565b33600090815260208190526040812054828110156104fa576040805162461bcd60e51b815260206004820152601460248201527f696e73756666696369656e742062616c616e6365000000000000000000000000604482015290519081900360640190fd5b3360009081526020819052604080822085840390556001600160a01b0386168252902054808401811115610575576040805162461bcd60e51b815260206004820152601a60248201527f726563697069656e742062616c616e6365206f766572666c6f77000000000000604482015290519081900360640190fd5b6001600160a01b0385166000818152602081815260409182902084880190558151878152915133927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92908290030190a3506001949350505050565b60016020908152600092835260408084209091529082529020548156fea164736f6c6343000706000a";

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    amountToMint: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(amountToMint, overrides || {});
  }
  override deploy(
    amountToMint: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(amountToMint, overrides || {}) as Promise<
      TestERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestERC20__factory {
    return super.connect(runner) as TestERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new Interface(_abi) as TestERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): TestERC20 {
    return new Contract(address, _abi, runner) as unknown as TestERC20;
  }
}
