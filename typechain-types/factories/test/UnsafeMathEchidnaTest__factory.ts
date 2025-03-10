/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  UnsafeMathEchidnaTest,
  UnsafeMathEchidnaTestInterface,
} from "../../test/UnsafeMathEchidnaTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "d",
        type: "uint256",
      },
    ],
    name: "checkDivRoundingUp",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060b48061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80632724da4e14602d575b600080fd5b604d60048036036040811015604157600080fd5b5080359060200135604f565b005b60008111605b57600080fd5b600060658383609c565b90506000828481607157fe5b0482039050828481607e57fe5b06608d578015608957fe5b6096565b80600114609657fe5b50505050565b80820491061515019056fea164736f6c6343000706000a";

type UnsafeMathEchidnaTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnsafeMathEchidnaTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UnsafeMathEchidnaTest__factory extends ContractFactory {
  constructor(...args: UnsafeMathEchidnaTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      UnsafeMathEchidnaTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): UnsafeMathEchidnaTest__factory {
    return super.connect(runner) as UnsafeMathEchidnaTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnsafeMathEchidnaTestInterface {
    return new Interface(_abi) as UnsafeMathEchidnaTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UnsafeMathEchidnaTest {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as UnsafeMathEchidnaTest;
  }
}
