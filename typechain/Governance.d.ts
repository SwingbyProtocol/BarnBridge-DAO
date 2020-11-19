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

interface GovernanceInterface extends ethers.utils.Interface {
  functions: {
    "ACTIVE()": FunctionFragment;
    "GRACE_PERIOD()": FunctionFragment;
    "MINIMUM_FOR_VOTES_THRESHOLD()": FunctionFragment;
    "QUEUE()": FunctionFragment;
    "WARM_UP()": FunctionFragment;
    "cancel(uint256)": FunctionFragment;
    "cancelVote(uint256)": FunctionFragment;
    "castVote(uint256,bool)": FunctionFragment;
    "execute(uint256)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "lastProposalId()": FunctionFragment;
    "latestProposalIds(address)": FunctionFragment;
    "proposalMaxOperations()": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "propose(address[],uint256[],string[],bytes[],string,string)": FunctionFragment;
    "queue(uint256)": FunctionFragment;
    "queuedTransactions(bytes32)": FunctionFragment;
    "startVote(uint256)": FunctionFragment;
    "state(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ACTIVE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "GRACE_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_FOR_VOTES_THRESHOLD",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "QUEUE", values?: undefined): string;
  encodeFunctionData(functionFragment: "WARM_UP", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelVote",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastProposalId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestProposalIds",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalMaxOperations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [string[], BigNumberish[], string[], BytesLike[], string, string]
  ): string;
  encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "queuedTransactions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "startVote",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "ACTIVE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GRACE_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_FOR_VOTES_THRESHOLD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "QUEUE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WARM_UP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastProposalId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestProposalIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalMaxOperations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queuedTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;

  events: {};
}

export class Governance extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GovernanceInterface;

  functions: {
    ACTIVE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "ACTIVE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    GRACE_PERIOD(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "GRACE_PERIOD()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MINIMUM_FOR_VOTES_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MINIMUM_FOR_VOTES_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    QUEUE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "QUEUE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    WARM_UP(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "WARM_UP()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancel(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    cancelVote(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelVote(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "castVote(uint256,bool)"(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    execute(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "execute(uint256)"(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    initialize(
      barnAddr: string,
      govAddr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address)"(
      barnAddr: string,
      govAddr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lastProposalId(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lastProposalId()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "latestProposalIds(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    proposalMaxOperations(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "proposalMaxOperations()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      id: BigNumber;
      proposer: string;
      description: string;
      title: string;
      createTime: BigNumber;
      startTime: BigNumber;
      quorum: BigNumber;
      eta: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
      canceled: boolean;
      executed: boolean;
      0: BigNumber;
      1: string;
      2: string;
      3: string;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: BigNumber;
      10: boolean;
      11: boolean;
    }>;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      id: BigNumber;
      proposer: string;
      description: string;
      title: string;
      createTime: BigNumber;
      startTime: BigNumber;
      quorum: BigNumber;
      eta: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
      canceled: boolean;
      executed: boolean;
      0: BigNumber;
      1: string;
      2: string;
      3: string;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: BigNumber;
      10: boolean;
      11: boolean;
    }>;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      title: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "propose(address[],uint256[],string[],bytes[],string,string)"(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      title: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "queue(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    startVote(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "startVote(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "state(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;
  };

  ACTIVE(overrides?: CallOverrides): Promise<BigNumber>;

  "ACTIVE()"(overrides?: CallOverrides): Promise<BigNumber>;

  GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

  MINIMUM_FOR_VOTES_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

  "MINIMUM_FOR_VOTES_THRESHOLD()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  QUEUE(overrides?: CallOverrides): Promise<BigNumber>;

  "QUEUE()"(overrides?: CallOverrides): Promise<BigNumber>;

  WARM_UP(overrides?: CallOverrides): Promise<BigNumber>;

  "WARM_UP()"(overrides?: CallOverrides): Promise<BigNumber>;

  cancel(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancel(uint256)"(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  cancelVote(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelVote(uint256)"(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  castVote(
    proposalId: BigNumberish,
    support: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "castVote(uint256,bool)"(
    proposalId: BigNumberish,
    support: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  execute(
    proposalId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "execute(uint256)"(
    proposalId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  initialize(
    barnAddr: string,
    govAddr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address)"(
    barnAddr: string,
    govAddr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lastProposalId(overrides?: CallOverrides): Promise<BigNumber>;

  "lastProposalId()"(overrides?: CallOverrides): Promise<BigNumber>;

  latestProposalIds(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "latestProposalIds(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;

  "proposalMaxOperations()"(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    id: BigNumber;
    proposer: string;
    description: string;
    title: string;
    createTime: BigNumber;
    startTime: BigNumber;
    quorum: BigNumber;
    eta: BigNumber;
    forVotes: BigNumber;
    againstVotes: BigNumber;
    canceled: boolean;
    executed: boolean;
    0: BigNumber;
    1: string;
    2: string;
    3: string;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: BigNumber;
    8: BigNumber;
    9: BigNumber;
    10: boolean;
    11: boolean;
  }>;

  "proposals(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    id: BigNumber;
    proposer: string;
    description: string;
    title: string;
    createTime: BigNumber;
    startTime: BigNumber;
    quorum: BigNumber;
    eta: BigNumber;
    forVotes: BigNumber;
    againstVotes: BigNumber;
    canceled: boolean;
    executed: boolean;
    0: BigNumber;
    1: string;
    2: string;
    3: string;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: BigNumber;
    8: BigNumber;
    9: BigNumber;
    10: boolean;
    11: boolean;
  }>;

  propose(
    targets: string[],
    values: BigNumberish[],
    signatures: string[],
    calldatas: BytesLike[],
    description: string,
    title: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "propose(address[],uint256[],string[],bytes[],string,string)"(
    targets: string[],
    values: BigNumberish[],
    signatures: string[],
    calldatas: BytesLike[],
    description: string,
    title: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  queue(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "queue(uint256)"(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  queuedTransactions(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "queuedTransactions(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  startVote(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "startVote(uint256)"(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;

  "state(uint256)"(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    ACTIVE(overrides?: CallOverrides): Promise<BigNumber>;

    "ACTIVE()"(overrides?: CallOverrides): Promise<BigNumber>;

    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_FOR_VOTES_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    "MINIMUM_FOR_VOTES_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    QUEUE(overrides?: CallOverrides): Promise<BigNumber>;

    "QUEUE()"(overrides?: CallOverrides): Promise<BigNumber>;

    WARM_UP(overrides?: CallOverrides): Promise<BigNumber>;

    "WARM_UP()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancel(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "cancel(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelVote(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelVote(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "castVote(uint256,bool)"(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    execute(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "execute(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      barnAddr: string,
      govAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address)"(
      barnAddr: string,
      govAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    lastProposalId(overrides?: CallOverrides): Promise<BigNumber>;

    "lastProposalId()"(overrides?: CallOverrides): Promise<BigNumber>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "latestProposalIds(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;

    "proposalMaxOperations()"(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      id: BigNumber;
      proposer: string;
      description: string;
      title: string;
      createTime: BigNumber;
      startTime: BigNumber;
      quorum: BigNumber;
      eta: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
      canceled: boolean;
      executed: boolean;
      0: BigNumber;
      1: string;
      2: string;
      3: string;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: BigNumber;
      10: boolean;
      11: boolean;
    }>;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      id: BigNumber;
      proposer: string;
      description: string;
      title: string;
      createTime: BigNumber;
      startTime: BigNumber;
      quorum: BigNumber;
      eta: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
      canceled: boolean;
      executed: boolean;
      0: BigNumber;
      1: string;
      2: string;
      3: string;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
      8: BigNumber;
      9: BigNumber;
      10: boolean;
      11: boolean;
    }>;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      title: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "propose(address[],uint256[],string[],bytes[],string,string)"(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      title: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queue(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "queue(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    startVote(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "startVote(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;

    "state(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    ACTIVE(overrides?: CallOverrides): Promise<BigNumber>;

    "ACTIVE()"(overrides?: CallOverrides): Promise<BigNumber>;

    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_FOR_VOTES_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;

    "MINIMUM_FOR_VOTES_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    QUEUE(overrides?: CallOverrides): Promise<BigNumber>;

    "QUEUE()"(overrides?: CallOverrides): Promise<BigNumber>;

    WARM_UP(overrides?: CallOverrides): Promise<BigNumber>;

    "WARM_UP()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancel(proposalId: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "cancel(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    cancelVote(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelVote(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "castVote(uint256,bool)"(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    execute(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "execute(uint256)"(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    initialize(
      barnAddr: string,
      govAddr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address)"(
      barnAddr: string,
      govAddr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lastProposalId(overrides?: CallOverrides): Promise<BigNumber>;

    "lastProposalId()"(overrides?: CallOverrides): Promise<BigNumber>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "latestProposalIds(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;

    "proposalMaxOperations()"(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      title: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "propose(address[],uint256[],string[],bytes[],string,string)"(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      title: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    queue(proposalId: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "queue(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startVote(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "startVote(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "state(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ACTIVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ACTIVE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "GRACE_PERIOD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINIMUM_FOR_VOTES_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MINIMUM_FOR_VOTES_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    QUEUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "QUEUE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WARM_UP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WARM_UP()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancel(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    cancelVote(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelVote(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "castVote(uint256,bool)"(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    execute(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "execute(uint256)"(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      barnAddr: string,
      govAddr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address)"(
      barnAddr: string,
      govAddr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lastProposalId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastProposalId()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "latestProposalIds(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalMaxOperations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "proposalMaxOperations()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      title: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "propose(address[],uint256[],string[],bytes[],string,string)"(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      title: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "queue(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    queuedTransactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "queuedTransactions(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startVote(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "startVote(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "state(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
