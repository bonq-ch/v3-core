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

export interface TickMathEchidnaTestInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "checkGetSqrtRatioAtTickInvariants"
      | "checkGetTickAtSqrtRatioInvariants"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkGetSqrtRatioAtTickInvariants",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkGetTickAtSqrtRatioInvariants",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkGetSqrtRatioAtTickInvariants",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkGetTickAtSqrtRatioInvariants",
    data: BytesLike
  ): Result;
}

export interface TickMathEchidnaTest extends BaseContract {
  connect(runner?: ContractRunner | null): TickMathEchidnaTest;
  waitForDeployment(): Promise<this>;

  interface: TickMathEchidnaTestInterface;

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

  checkGetSqrtRatioAtTickInvariants: TypedContractMethod<
    [tick: BigNumberish],
    [void],
    "view"
  >;

  checkGetTickAtSqrtRatioInvariants: TypedContractMethod<
    [ratio: BigNumberish],
    [void],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "checkGetSqrtRatioAtTickInvariants"
  ): TypedContractMethod<[tick: BigNumberish], [void], "view">;
  getFunction(
    nameOrSignature: "checkGetTickAtSqrtRatioInvariants"
  ): TypedContractMethod<[ratio: BigNumberish], [void], "view">;

  filters: {};
}
