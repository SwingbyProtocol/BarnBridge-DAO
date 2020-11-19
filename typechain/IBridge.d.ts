/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IBridgeInterface extends ethers.utils.Interface {
  functions: {
    "cancelTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
    "executeTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
    "queueTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
    "queuedTransactions(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queueTransaction",
    values: [string, BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queuedTransactions",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queueTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queuedTransactions",
    data: BytesLike
  ): Result;

  events: {};
}

export class IBridge extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IBridgeInterface;

  functions: {
    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "executeTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "queueTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    queuedTransactions(
      txHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "queuedTransactions(bytes32)"(
      txHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  cancelTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelTransaction(address,uint256,string,bytes,uint256)"(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  executeTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "executeTransaction(address,uint256,string,bytes,uint256)"(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  queueTransaction(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "queueTransaction(address,uint256,string,bytes,uint256)"(
    target: string,
    value: BigNumberish,
    signature: string,
    data: BytesLike,
    eta: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  queuedTransactions(
    txHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "queuedTransactions(bytes32)"(
    txHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "executeTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "queueTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    queuedTransactions(
      txHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "queuedTransactions(bytes32)"(
      txHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "executeTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "queueTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    queuedTransactions(
      txHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "queuedTransactions(bytes32)"(
      txHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    executeTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "executeTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    queueTransaction(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "queueTransaction(address,uint256,string,bytes,uint256)"(
      target: string,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      eta: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    queuedTransactions(
      txHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "queuedTransactions(bytes32)"(
      txHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}