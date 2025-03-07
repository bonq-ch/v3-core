/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface SwapMathTestInterface extends Interface {
  getFunction(
    nameOrSignature: "computeSwapStep" | "getGasCostOfComputeSwapStep"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "computeSwapStep",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfComputeSwapStep",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeSwapStep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfComputeSwapStep",
    data: BytesLike
  ): Result;
}

export interface SwapMathTest extends BaseContract {
  connect(runner?: ContractRunner | null): SwapMathTest;
  waitForDeployment(): Promise<this>;

  interface: SwapMathTestInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  computeSwapStep: TypedContractMethod<
    [
      sqrtP: BigNumberish,
      sqrtPTarget: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish
    ],
    [
      [bigint, bigint, bigint, bigint] & {
        sqrtQ: bigint;
        amountIn: bigint;
        amountOut: bigint;
        feeAmount: bigint;
      }
    ],
    "view"
  >;

  getGasCostOfComputeSwapStep: TypedContractMethod<
    [
      sqrtP: BigNumberish,
      sqrtPTarget: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish
    ],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "computeSwapStep"
  ): TypedContractMethod<
    [
      sqrtP: BigNumberish,
      sqrtPTarget: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish
    ],
    [
      [bigint, bigint, bigint, bigint] & {
        sqrtQ: bigint;
        amountIn: bigint;
        amountOut: bigint;
        feeAmount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getGasCostOfComputeSwapStep"
  ): TypedContractMethod<
    [
      sqrtP: BigNumberish,
      sqrtPTarget: BigNumberish,
      liquidity: BigNumberish,
      amountRemaining: BigNumberish,
      feePips: BigNumberish
    ],
    [bigint],
    "view"
  >;

  filters: {};
}
