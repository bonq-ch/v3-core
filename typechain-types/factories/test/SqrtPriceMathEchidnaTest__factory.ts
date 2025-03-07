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
  SqrtPriceMathEchidnaTest,
  SqrtPriceMathEchidnaTestInterface,
} from "../../test/SqrtPriceMathEchidnaTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getAmount0DeltaEquivalency",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    name: "getAmount0DeltaInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
      {
        internalType: "int128",
        name: "liquidity",
        type: "int128",
      },
    ],
    name: "getAmount0DeltaSignedInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    name: "getAmount1DeltaInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
      {
        internalType: "int128",
        name: "liquidity",
        type: "int128",
      },
    ],
    name: "getAmount1DeltaSignedInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtLower",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtCurrent",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtUpper",
        type: "uint160",
      },
      {
        internalType: "int128",
        name: "liquidity",
        type: "int128",
      },
    ],
    name: "getInRangeMintInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
    ],
    name: "getNextSqrtPriceFromAmount0RoundingUpInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPX96",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
    ],
    name: "getNextSqrtPriceFromAmount1RoundingDownInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getNextSqrtPriceFromInputInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getNextSqrtPriceFromOutputInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtA",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtB",
        type: "uint160",
      },
      {
        internalType: "int128",
        name: "liquidity",
        type: "int128",
      },
    ],
    name: "getOutOfRangeMintInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "z",
        type: "uint256",
      },
    ],
    name: "mulDivRoundingUpInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610fdc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638e13a4b911610081578063b712c47c1161005b578063b712c47c14610305578063c8569d881461033e578063f157fb501461037e576100d4565b80638e13a4b914610242578063b29f199e14610289578063b46e6714146102c2576100d4565b806339933d51116100b257806339933d51146101a15780633d729147146101e05780636e6238d714610209576100d4565b80631faf4a39146100d957806321e14f8b1461011e5780633001e65e14610161575b600080fd5b61011c600480360360808110156100ef57600080fd5b506001600160a01b03813516906001600160801b03602082013516906040810135906060013515156103c1565b005b61011c6004803603608081101561013457600080fd5b506001600160a01b03813516906001600160801b0360208201351690604081013590606001351515610447565b61011c6004803603606081101561017757600080fd5b5080356001600160a01b0390811691602081013590911690604001356001600160801b03166104e6565b61011c600480360360808110156101b757600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135600f0b610573565b61011c600480360360608110156101f657600080fd5b508035906020810135906040013561062f565b61011c6004803603606081101561021f57600080fd5b506001600160a01b03813581169160208101359091169060400135600f0b6106a1565b61011c6004803603608081101561025857600080fd5b506001600160a01b0381358116916020810135909116906001600160801b0360408201351690606001351515610749565b61011c6004803603606081101561029f57600080fd5b506001600160a01b03813581169160208101359091169060400135600f0b610845565b61011c600480360360808110156102d857600080fd5b506001600160a01b03813516906001600160801b036020820135169060408101359060600135151561087d565b61011c6004803603606081101561031b57600080fd5b506001600160a01b03813581169160208101359091169060400135600f0b6108f7565b61011c6004803603606081101561035457600080fd5b5080356001600160a01b0390811691602081013590911690604001356001600160801b031661098e565b61011c6004803603608081101561039457600080fd5b506001600160a01b03813516906001600160801b03602082013516906040810135906060013515156109fd565b60006103cf85858585610a8a565b9050811561040e57846001600160a01b0316816001600160a01b031611156103f357fe5b6104008186866001610ae6565b83101561040957fe5b610440565b846001600160a01b0316816001600160a01b0316101561042a57fe5b6104378582866001610b9a565b83101561044057fe5b5050505050565b6000846001600160a01b03161161045d57600080fd5b6000836001600160801b03161161047357600080fd5b600061048185858585610c05565b905081156104aa57846001600160a01b0316816001600160a01b031610156104a557fe5b6104c6565b846001600160a01b0316816001600160a01b031611156104c657fe5b8261044057806001600160a01b0316856001600160a01b03161461044057fe5b6000836001600160a01b031611801561050857506000826001600160a01b0316115b61051157600080fd5b60006105208385846000610ae6565b905061052f8484846000610ae6565b811461053757fe5b60006105468486856001610ae6565b90506105558585856001610ae6565b811461055d57fe5b8082111561056757fe5b60028282031061044057fe5b6000846001600160a01b03161161058957600080fd5b816001600160a01b0316846001600160a01b0316106105a757600080fd5b826001600160a01b0316846001600160a01b0316111580156105db5750816001600160a01b0316836001600160a01b031611155b6105e457600080fd5b600081600f0b136105f457600080fd5b6000610601848484610ce6565b90506000610610868685610d2d565b905060008213806106215750600081135b61062757fe5b505050505050565b6000811161063c57600080fd5b6000610649848484610d5c565b90506000610658858585610e0b565b90508181101561066457fe5b60028282031061067057fe5b8181036001141561068f576000838061068557fe5b8587091161040957fe5b828061069757fe5b8486091561044057fe5b6000836001600160a01b03161180156106c357506000826001600160a01b0316115b6106cc57600080fd5b60006106d9848484610d2d565b9050600082600f0b12156106f25760008113156106f257fe5b600082600f0b131561072f57826001600160a01b0316846001600160a01b0316141561072557801561072057fe5b61072f565b6000811361072f57fe5b81600f0b6000141561074357801561074357fe5b50505050565b826001600160a01b0316846001600160a01b0316101561076857600080fd5b6000846001600160a01b031611801561078a57506000836001600160a01b0316115b61079357600080fd5b826001600160a01b0316846001600160a01b03168486026001600160a01b0316816107ba57fe5b046001600160a01b0316146107ce57600080fd5b6fffffffffffffffffffffffffffffffff60601b606083901b166001600160a01b03848603811690808716908616026000846108145761080f848484610d5c565b61081f565b61081f848484610e0b565b9050600061082f888a8989610ae6565b905080821461083a57fe5b505050505050505050565b6000836001600160a01b031611801561086757506000826001600160a01b0316115b61087057600080fd5b60006106d9838584610ce6565b6000846001600160a01b03161161089357600080fd5b6000836001600160801b0316116108a957600080fd5b60006108b785858585610e45565b905081156108db57846001600160a01b0316816001600160a01b031611156104a557fe5b846001600160a01b0316816001600160a01b031610156104c657fe5b6000836001600160a01b031611801561091957506000826001600160a01b0316115b61092257600080fd5b600081600f0b1361093257600080fd5b600061093f848484610ce6565b9050600061094e858585610d2d565b9050836001600160a01b0316856001600160a01b0316141561097a57811561097257fe5b801561040957fe5b6000821361098457fe5b6000811361044057fe5b6000836001600160a01b03161180156109b057506000826001600160a01b0316115b6109b957600080fd5b60006109c88484846000610b9a565b90506109d78385846000610b9a565b81146109df57fe5b60006109ee8585856001610b9a565b90506105558486856001610b9a565b6000610a0b85858585610f31565b90508115610a4557846001600160a01b0316816001600160a01b03161115610a2f57fe5b610a3c8186866000610b9a565b83111561040957fe5b6000816001600160a01b031611610a5857fe5b846001600160a01b0316816001600160a01b03161015610a7457fe5b610a818582866000610ae6565b83111561044057fe5b600080856001600160a01b031611610aa157600080fd5b6000846001600160801b031611610ab757600080fd5b81610ace57610ac98585856001610c05565b610adb565b610adb8585856001610e45565b90505b949350505050565b6000836001600160a01b0316856001600160a01b03161115610b06579293925b6fffffffffffffffffffffffffffffffff60601b606084901b166001600160a01b038686038116908716610b3957600080fd5b83610b6957866001600160a01b0316610b5c8383896001600160a01b0316610d5c565b81610b6357fe5b04610b8f565b610b8f610b808383896001600160a01b0316610e0b565b886001600160a01b0316610f7d565b979650505050505050565b6000836001600160a01b0316856001600160a01b03161115610bba579293925b81610be257610ac9836001600160801b03168686036001600160a01b0316600160601b610d5c565b610adb836001600160801b03168686036001600160a01b0316600160601b610e0b565b60008115610c785760006001600160a01b03841115610c3b57610c3684600160601b876001600160801b0316610d5c565b610c53565b6001600160801b038516606085901b81610c5157fe5b045b9050610c70610c6b6001600160a01b03881683610f88565b610f9e565b915050610ade565b60006001600160a01b03841115610ca657610ca184600160601b876001600160801b0316610e0b565b610cbd565b610cbd606085901b6001600160801b038716610f7d565b905080866001600160a01b031611610cd457600080fd5b6001600160a01b038616039050610ade565b60008082600f0b12610d0c57610d07610d028585856001610ae6565b610fb9565b610d23565b610d1f610d028585856000036000610ae6565b6000035b90505b9392505050565b60008082600f0b12610d4957610d07610d028585856001610b9a565b610d1f610d028585856000036000610b9a565b6000808060001985870986860292508281109083900303905080610d925760008411610d8757600080fd5b508290049050610d26565b808411610d9e57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000610e18848484610d5c565b905060008280610e2457fe5b8486091115610d26576000198110610e3b57600080fd5b6001019392505050565b600082610e53575083610ade565b6fffffffffffffffffffffffffffffffff60601b606085901b168215610eea576001600160a01b03861684810290858281610e8a57fe5b041415610ebb57818101828110610eb957610eaf83896001600160a01b031683610e0b565b9350505050610ade565b505b610ee182610edc878a6001600160a01b03168681610ed557fe5b0490610f88565b610f7d565b92505050610ade565b6001600160a01b03861684810290858281610f0157fe5b04148015610f0e57508082115b610f1757600080fd5b808203610eaf610c6b846001600160a01b038b1684610e0b565b600080856001600160a01b031611610f4857600080fd5b6000846001600160801b031611610f5e57600080fd5b81610f7057610ac98585856000610e45565b610adb8585856000610c05565b808204910615150190565b80820182811015610f9857600080fd5b92915050565b806001600160a01b0381168114610fb457600080fd5b919050565b6000600160ff1b8210610fcb57600080fd5b509056fea164736f6c6343000706000a";

type SqrtPriceMathEchidnaTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SqrtPriceMathEchidnaTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SqrtPriceMathEchidnaTest__factory extends ContractFactory {
  constructor(...args: SqrtPriceMathEchidnaTestConstructorParams) {
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
      SqrtPriceMathEchidnaTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): SqrtPriceMathEchidnaTest__factory {
    return super.connect(runner) as SqrtPriceMathEchidnaTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SqrtPriceMathEchidnaTestInterface {
    return new Interface(_abi) as SqrtPriceMathEchidnaTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SqrtPriceMathEchidnaTest {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as SqrtPriceMathEchidnaTest;
  }
}
