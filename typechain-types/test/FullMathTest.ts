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

export interface FullMathTestInterface extends Interface {
  getFunction(nameOrSignature: "mulDiv" | "mulDivRoundingUp"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "mulDiv",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mulDivRoundingUp",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "mulDiv", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mulDivRoundingUp",
    data: BytesLike
  ): Result;
}

export interface FullMathTest extends BaseContract {
  connect(runner?: ContractRunner | null): FullMathTest;
  waitForDeployment(): Promise<this>;

  interface: FullMathTestInterface;

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

  mulDiv: TypedContractMethod<
    [x: BigNumberish, y: BigNumberish, z: BigNumberish],
    [bigint],
    "view"
  >;

  mulDivRoundingUp: TypedContractMethod<
    [x: BigNumberish, y: BigNumberish, z: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "mulDiv"
  ): TypedContractMethod<
    [x: BigNumberish, y: BigNumberish, z: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "mulDivRoundingUp"
  ): TypedContractMethod<
    [x: BigNumberish, y: BigNumberish, z: BigNumberish],
    [bigint],
    "view"
  >;

  filters: {};
}
