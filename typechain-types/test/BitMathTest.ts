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

export interface BitMathTestInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getGasCostOfLeastSignificantBit"
      | "getGasCostOfMostSignificantBit"
      | "leastSignificantBit"
      | "mostSignificantBit"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getGasCostOfLeastSignificantBit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfMostSignificantBit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "leastSignificantBit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mostSignificantBit",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getGasCostOfLeastSignificantBit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfMostSignificantBit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "leastSignificantBit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mostSignificantBit",
    data: BytesLike
  ): Result;
}

export interface BitMathTest extends BaseContract {
  connect(runner?: ContractRunner | null): BitMathTest;
  waitForDeployment(): Promise<this>;

  interface: BitMathTestInterface;

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

  getGasCostOfLeastSignificantBit: TypedContractMethod<
    [x: BigNumberish],
    [bigint],
    "view"
  >;

  getGasCostOfMostSignificantBit: TypedContractMethod<
    [x: BigNumberish],
    [bigint],
    "view"
  >;

  leastSignificantBit: TypedContractMethod<[x: BigNumberish], [bigint], "view">;

  mostSignificantBit: TypedContractMethod<[x: BigNumberish], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getGasCostOfLeastSignificantBit"
  ): TypedContractMethod<[x: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getGasCostOfMostSignificantBit"
  ): TypedContractMethod<[x: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "leastSignificantBit"
  ): TypedContractMethod<[x: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "mostSignificantBit"
  ): TypedContractMethod<[x: BigNumberish], [bigint], "view">;

  filters: {};
}
