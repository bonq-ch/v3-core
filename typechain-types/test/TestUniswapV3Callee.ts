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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface TestUniswapV3CalleeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "flash"
      | "mint"
      | "swap0ForExact1"
      | "swap1ForExact0"
      | "swapExact0For1"
      | "swapExact1For0"
      | "swapToHigherSqrtPrice"
      | "swapToLowerSqrtPrice"
      | "uniswapV3FlashCallback"
      | "uniswapV3MintCallback"
      | "uniswapV3SwapCallback"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "FlashCallback" | "MintCallback" | "SwapCallback"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "flash",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap0ForExact1",
    values: [AddressLike, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap1ForExact0",
    values: [AddressLike, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExact0For1",
    values: [AddressLike, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExact1For0",
    values: [AddressLike, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToHigherSqrtPrice",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToLowerSqrtPrice",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3FlashCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3MintCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swap0ForExact1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swap1ForExact0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExact0For1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExact1For0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapToHigherSqrtPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapToLowerSqrtPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3FlashCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3MintCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;
}

export namespace FlashCallbackEvent {
  export type InputTuple = [fee0: BigNumberish, fee1: BigNumberish];
  export type OutputTuple = [fee0: bigint, fee1: bigint];
  export interface OutputObject {
    fee0: bigint;
    fee1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintCallbackEvent {
  export type InputTuple = [
    amount0Owed: BigNumberish,
    amount1Owed: BigNumberish
  ];
  export type OutputTuple = [amount0Owed: bigint, amount1Owed: bigint];
  export interface OutputObject {
    amount0Owed: bigint;
    amount1Owed: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SwapCallbackEvent {
  export type InputTuple = [
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish
  ];
  export type OutputTuple = [amount0Delta: bigint, amount1Delta: bigint];
  export interface OutputObject {
    amount0Delta: bigint;
    amount1Delta: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TestUniswapV3Callee extends BaseContract {
  connect(runner?: ContractRunner | null): TestUniswapV3Callee;
  waitForDeployment(): Promise<this>;

  interface: TestUniswapV3CalleeInterface;

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

  flash: TypedContractMethod<
    [
      pool: AddressLike,
      recipient: AddressLike,
      amount0: BigNumberish,
      amount1: BigNumberish,
      pay0: BigNumberish,
      pay1: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  mint: TypedContractMethod<
    [
      pool: AddressLike,
      recipient: AddressLike,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  swap0ForExact1: TypedContractMethod<
    [
      pool: AddressLike,
      amount1Out: BigNumberish,
      recipient: AddressLike,
      sqrtPriceLimitX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  swap1ForExact0: TypedContractMethod<
    [
      pool: AddressLike,
      amount0Out: BigNumberish,
      recipient: AddressLike,
      sqrtPriceLimitX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  swapExact0For1: TypedContractMethod<
    [
      pool: AddressLike,
      amount0In: BigNumberish,
      recipient: AddressLike,
      sqrtPriceLimitX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  swapExact1For0: TypedContractMethod<
    [
      pool: AddressLike,
      amount1In: BigNumberish,
      recipient: AddressLike,
      sqrtPriceLimitX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  swapToHigherSqrtPrice: TypedContractMethod<
    [pool: AddressLike, sqrtPriceX96: BigNumberish, recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  swapToLowerSqrtPrice: TypedContractMethod<
    [pool: AddressLike, sqrtPriceX96: BigNumberish, recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  uniswapV3FlashCallback: TypedContractMethod<
    [fee0: BigNumberish, fee1: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  uniswapV3MintCallback: TypedContractMethod<
    [amount0Owed: BigNumberish, amount1Owed: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  uniswapV3SwapCallback: TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "flash"
  ): TypedContractMethod<
    [
      pool: AddressLike,
      recipient: AddressLike,
      amount0: BigNumberish,
      amount1: BigNumberish,
      pay0: BigNumberish,
      pay1: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [
      pool: AddressLike,
      recipient: AddressLike,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swap0ForExact1"
  ): TypedContractMethod<
    [
      pool: AddressLike,
      amount1Out: BigNumberish,
      recipient: AddressLike,
      sqrtPriceLimitX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swap1ForExact0"
  ): TypedContractMethod<
    [
      pool: AddressLike,
      amount0Out: BigNumberish,
      recipient: AddressLike,
      sqrtPriceLimitX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExact0For1"
  ): TypedContractMethod<
    [
      pool: AddressLike,
      amount0In: BigNumberish,
      recipient: AddressLike,
      sqrtPriceLimitX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExact1For0"
  ): TypedContractMethod<
    [
      pool: AddressLike,
      amount1In: BigNumberish,
      recipient: AddressLike,
      sqrtPriceLimitX96: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapToHigherSqrtPrice"
  ): TypedContractMethod<
    [pool: AddressLike, sqrtPriceX96: BigNumberish, recipient: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapToLowerSqrtPrice"
  ): TypedContractMethod<
    [pool: AddressLike, sqrtPriceX96: BigNumberish, recipient: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "uniswapV3FlashCallback"
  ): TypedContractMethod<
    [fee0: BigNumberish, fee1: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "uniswapV3MintCallback"
  ): TypedContractMethod<
    [amount0Owed: BigNumberish, amount1Owed: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "uniswapV3SwapCallback"
  ): TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "FlashCallback"
  ): TypedContractEvent<
    FlashCallbackEvent.InputTuple,
    FlashCallbackEvent.OutputTuple,
    FlashCallbackEvent.OutputObject
  >;
  getEvent(
    key: "MintCallback"
  ): TypedContractEvent<
    MintCallbackEvent.InputTuple,
    MintCallbackEvent.OutputTuple,
    MintCallbackEvent.OutputObject
  >;
  getEvent(
    key: "SwapCallback"
  ): TypedContractEvent<
    SwapCallbackEvent.InputTuple,
    SwapCallbackEvent.OutputTuple,
    SwapCallbackEvent.OutputObject
  >;

  filters: {
    "FlashCallback(uint256,uint256)": TypedContractEvent<
      FlashCallbackEvent.InputTuple,
      FlashCallbackEvent.OutputTuple,
      FlashCallbackEvent.OutputObject
    >;
    FlashCallback: TypedContractEvent<
      FlashCallbackEvent.InputTuple,
      FlashCallbackEvent.OutputTuple,
      FlashCallbackEvent.OutputObject
    >;

    "MintCallback(uint256,uint256)": TypedContractEvent<
      MintCallbackEvent.InputTuple,
      MintCallbackEvent.OutputTuple,
      MintCallbackEvent.OutputObject
    >;
    MintCallback: TypedContractEvent<
      MintCallbackEvent.InputTuple,
      MintCallbackEvent.OutputTuple,
      MintCallbackEvent.OutputObject
    >;

    "SwapCallback(int256,int256)": TypedContractEvent<
      SwapCallbackEvent.InputTuple,
      SwapCallbackEvent.OutputTuple,
      SwapCallbackEvent.OutputObject
    >;
    SwapCallback: TypedContractEvent<
      SwapCallbackEvent.InputTuple,
      SwapCallbackEvent.OutputTuple,
      SwapCallbackEvent.OutputObject
    >;
  };
}
