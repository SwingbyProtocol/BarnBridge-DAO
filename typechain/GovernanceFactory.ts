/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Governance } from "./Governance";

export class GovernanceFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Governance> {
    return super.deploy(overrides || {}) as Promise<Governance>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Governance {
    return super.attach(address) as Governance;
  }
  connect(signer: Signer): GovernanceFactory {
    return super.connect(signer) as GovernanceFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Governance {
    return new Contract(address, _abi, signerOrProvider) as Governance;
  }
}

const _abi = [
  {
    inputs: [],
    name: "ACTIVE",
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
    inputs: [],
    name: "GRACE_PERIOD",
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
    inputs: [],
    name: "MINIMUM_FOR_VOTES_THRESHOLD",
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
    inputs: [],
    name: "QUEUE",
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
    inputs: [],
    name: "WARM_UP",
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
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "cancelVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "support",
        type: "bool",
      },
    ],
    name: "castVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "barnAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "govAddr",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastProposalId",
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
        name: "",
        type: "address",
      },
    ],
    name: "latestProposalIds",
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
    inputs: [],
    name: "proposalMaxOperations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "createTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quorum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "againstVotes",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "canceled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
    ],
    name: "propose",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "queue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "startVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "state",
    outputs: [
      {
        internalType: "enum Governance.ProposalState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613e99806100206000396000f3fe6080604052600436106101145760003560e01c8063490145c8116100a0578063c1a287e211610064578063c1a287e2146103bc578063c90bd047146103e7578063ddf0b00914610412578063f2b065371461043b578063fe0d94c11461047857610114565b8063490145c8146102d557806374cb3041146103125780637bdbe4d01461033d578063b17ac1e114610368578063bacbe2da1461039357610114565b80631e9d5fad116100e75780631e9d5fad146101f25780633e4f49e61461021d5780633f2205241461025a57806340e58ee514610283578063485cc955146102ac57610114565b8063013cf08b1461011957806315373e3d1461016157806317977c611461018a5780631a3d203d146101c7575b600080fd5b34801561012557600080fd5b50610140600480360381019061013b9190612b28565b610494565b6040516101589c9b9a99989796959493929190613a45565b60405180910390f35b34801561016d57600080fd5b5061018860048036038101906101839190612b7a565b61065e565b005b34801561019657600080fd5b506101b160048036038101906101ac9190612981565b61069e565b6040516101be9190613a2a565b60405180910390f35b3480156101d357600080fd5b506101dc6106b6565b6040516101e99190613a2a565b60405180910390f35b3480156101fe57600080fd5b506102076106bd565b6040516102149190613a2a565b60405180910390f35b34801561022957600080fd5b50610244600480360381019061023f9190612b28565b6106c4565b604051610251919061370f565b60405180910390f35b34801561026657600080fd5b50610281600480360381019061027c9190612b28565b6108ac565b005b34801561028f57600080fd5b506102aa60048036038101906102a59190612b28565b6108b8565b005b3480156102b857600080fd5b506102d360048036038101906102ce91906129aa565b610bde565b005b3480156102e157600080fd5b506102fc60048036038101906102f791906129e6565b610cd5565b6040516103099190613a2a565b60405180910390f35b34801561031e57600080fd5b5061032761126a565b6040516103349190613a2a565b60405180910390f35b34801561034957600080fd5b50610352611270565b60405161035f9190613a2a565b60405180910390f35b34801561037457600080fd5b5061037d611279565b60405161038a9190613a2a565b60405180910390f35b34801561039f57600080fd5b506103ba60048036038101906103b59190612b28565b61127e565b005b3480156103c857600080fd5b506103d161128b565b6040516103de9190613a2a565b60405180910390f35b3480156103f357600080fd5b506103fc611292565b6040516104099190613a2a565b60405180910390f35b34801561041e57600080fd5b5061043960048036038101906104349190612b28565b611299565b005b34801561044757600080fd5b50610462600480360381019061045d9190612aff565b611679565b60405161046f91906136f4565b60405180910390f35b610492600480360381019061048d9190612b28565b611699565b005b60026020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561056c5780601f106105415761010080835404028352916020019161056c565b820191906000526020600020905b81548152906001019060200180831161054f57829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561060a5780601f106105df5761010080835404028352916020019161060a565b820191906000526020600020905b8154815290600101906020018083116105ed57829003601f168201915b50505050509080600801549080600901549080600a01549080600b01549080600c01549080600d01549080600e0160009054906101000a900460ff169080600e0160019054906101000a900460ff1690508c565b6001600981111561066b57fe5b610674836106c4565b600981111561067f57fe5b141561068f5761068e82611918565b5b61069a33838361199d565b5050565b60036020528060005260406000206000915090505481565b6202a30081565b6202a30081565b600081600154101580156106d85750600082115b610717576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070e9061376a565b60405180910390fd5b600060026000848152602001908152602001600020905080600e0160009054906101000a900460ff168061076557506202a300808260080154010142118015610764575060008160090154145b5b156107745760039150506108a7565b6202a300816008015401421161078e5760009150506108a7565b6202a300816008015401421180156107aa575060008160090154145b156107b95760019150506108a7565b6202a30081600901540142116107d35760029150506108a7565b603c81600d015482600c0154010281600c0154111580610800575080600a015481600d015482600c015401105b1561080f5760049150506108a7565b600081600b015414156108265760059150506108a7565b80600b015442101561083c5760069150506108a7565b6202a30081600b015401421115801561086a57506000151581600e0160019054906101000a900460ff161515145b156108795760079150506108a7565b6001151581600e0160019054906101000a900460ff16151514156108a15760099150506108a7565b60089150505b919050565b6108b581611918565b50565b60006108c3826106c4565b90506009808111156108d157fe5b8160098111156108dd57fe5b141561091e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109159061372a565b60405180910390fd5b6008600981111561092b57fe5b81600981111561093757fe5b1415610978576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096f906138ca565b60405180910390fd5b600060026000848152602001908152602001600020905061099883611c25565b6109d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ce9061392a565b60405180910390fd5b600181600e0160006101000a81548160ff02191690831515021790555060005b8160040180549050811015610bd857610bcb826004018281548110610a1857fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836005018381548110610a5257fe5b9060005260206000200154846006018481548110610a6c57fe5b906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b0a5780601f10610adf57610100808354040283529160200191610b0a565b820191906000526020600020905b815481529060010190602001808311610aed57829003601f168201915b5050505050856007018581548110610b1e57fe5b906000526020600020018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bbc5780601f10610b9157610100808354040283529160200191610bbc565b820191906000526020600020905b815481529060010190602001808311610b9f57829003601f168201915b505050505086600b0154611d26565b80806001019150506109f7565b50505050565b60001515600560149054906101000a900460ff16151514610c34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2b9061388a565b60405180910390fd5b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600560146101000a81548160ff0219169083151502179055505050565b60006064600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632082b4d16040518163ffffffff1660e01b815260040160206040518083038186803b158015610d4157600080fd5b505afa158015610d55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d799190612b51565b81610d8057fe5b04600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cbf8eda933600142036040518363ffffffff1660e01b8152600401610de19291906135e0565b60206040518083038186803b158015610df957600080fd5b505afa158015610e0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e319190612b51565b1015610e72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e69906137ea565b60405180910390fd5b85518751148015610e84575084518751145b8015610e91575083518751145b610ed0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec7906139ca565b60405180910390fd5b600087511415610f15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0c9061390a565b60405180910390fd5b610f1d611270565b87511115610f60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f579061394a565b60405180910390fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811461106f576000610fb7826106c4565b905060026009811115610fc657fe5b816009811115610fd257fe5b1415611013576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100a9061398a565b60405180910390fd5b6000600981111561102057fe5b81600981111561102c57fe5b141561106d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110649061384a565b60405180910390fd5b505b6000600180540190506000600260008381526020019081526020016000209050818160000181905550338160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550858160020190805190602001906110f39291906122f6565b508481600301908051906020019061110c9291906122f6565b5089816004019080519060200190611125929190612376565b508881600501908051906020019061113e929190612400565b508781600601908051906020019061115792919061244d565b50868160070190805190602001906111709291906124ad565b506001420381600801819055508160018190555081600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166371ef7663336202a3006040518363ffffffff1660e01b81526004016112289291906135e0565b600060405180830381600087803b15801561124257600080fd5b505af1158015611256573d6000803e3d6000fd5b505050508193505050509695505050505050565b60015481565b6000600a905090565b603c81565b6112883382611d8c565b50565b6202a30081565b6202a30081565b600560098111156112a657fe5b6112af826106c4565b60098111156112ba57fe5b146112fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f19061374a565b60405180910390fd5b60006002600083815260200190815260200160002090506000151581600e0160009054906101000a900460ff16151514611369576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113609061382a565b60405180910390fd5b60006202a3008083600901540101905060005b826004018054905081101561166a5760008084600401838154811061139d57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168560050184815481106113d757fe5b90600052602060002001548660060185815481106113f157fe5b9060005260206000200187600701868154811061140a57fe5b9060005260206000200187604051602001611429959493929190613693565b60405160208183030381529060405280519060200120815260200190815260200160002060009054906101000a900460ff161561149b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114929061380a565b60405180910390fd5b61165c8360040182815481106114ad57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168460050183815481106114e757fe5b906000526020600020015485600601848154811061150157fe5b906000526020600020018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561159f5780601f106115745761010080835404028352916020019161159f565b820191906000526020600020905b81548152906001019060200180831161158257829003601f168201915b50505050508660070185815481106115b357fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116515780601f1061162657610100808354040283529160200191611651565b820191906000526020600020905b81548152906001019060200180831161163457829003601f168201915b505050505086611fe3565b50808060010191505061137c565b508082600b0181905550505050565b60006020528060005260406000206000915054906101000a900460ff1681565b600660098111156116a657fe5b6116af826106c4565b60098111156116ba57fe5b146116fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116f19061378a565b60405180910390fd5b6000600260008381526020019081526020016000209050600181600e0160016101000a81548160ff02191690831515021790555060005b81600401805490508110156119135761190582600401828154811061175257fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683600501838154811061178c57fe5b90600052602060002001548460060184815481106117a657fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118445780601f1061181957610100808354040283529160200191611844565b820191906000526020600020905b81548152906001019060200180831161182757829003601f168201915b505050505085600701858154811061185857fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118f65780601f106118cb576101008083540402835291602001916118f6565b820191906000526020600020905b8154815290600101906020018083116118d957829003601f168201915b505050505086600b015461204f565b508080600101915050611731565b505050565b6001600981111561192557fe5b61192e826106c4565b600981111561193957fe5b14611979576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611970906138ea565b60405180910390fd5b60006002600083815260200190815260200160002090504281600901819055505050565b600260098111156119aa57fe5b6119b3836106c4565b60098111156119be57fe5b146119fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119f5906139ea565b60405180910390fd5b6000600260008481526020019081526020016000209050600081600f0160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060000160009054906101000a900460ff168015611a8d57508215158160020160009054906101000a900460ff16151514155b611acc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ac3906139aa565b60405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cbf8eda98785600901546040518363ffffffff1660e01b8152600401611b2f929190613609565b60206040518083038186803b158015611b4757600080fd5b505afa158015611b5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b7f9190612b51565b90508160000160009054906101000a900460ff1615611ba357611ba28686611d8c565b5b8315611bc457611bb783600c015482612249565b83600c0181905550611bdb565b611bd283600d015482612249565b83600d01819055505b60018260000160006101000a81548160ff021916908315150217905550808260010181905550838260020160006101000a81548160ff021916908315150217905550505050505050565b6000806002600084815260200190815260200160002090508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611d0c57508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15611d1b576001915050611d21565b60009150505b919050565b60008585858585604051602001611d41959493929190613632565b604051602081830303815290604052805190602001209050600080600083815260200190815260200160002060006101000a81548160ff021916908315150217905550505050505050565b60026009811115611d9957fe5b611da2826106c4565b6009811115611dad57fe5b14611ded576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611de4906139ea565b60405180910390fd5b6000600260008381526020019081526020016000209050600081600f0160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cbf8eda98685600901546040518363ffffffff1660e01b8152600401611eac929190613609565b60206040518083038186803b158015611ec457600080fd5b505afa158015611ed8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611efc9190612b51565b90508160000160009054906101000a900460ff16611f4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f46906138aa565b60405180910390fd5b8160020160009054906101000a900460ff1615611f8157611f7483600c01548261229e565b83600c0181905550611f98565b611f8f83600d01548261229e565b83600d01819055505b60008260000160006101000a81548160ff0219169083151502179055506000826001018190555060008260020160006101000a81548160ff0219169083151502179055505050505050565b6000808686868686604051602001611fff959493929190613632565b604051602081830303815290604052805190602001209050600160008083815260200190815260200160002060006101000a81548160ff0219169083151502179055508091505095945050505050565b60606000868686868660405160200161206c959493929190613632565b6040516020818303038152906040528051906020012090508261208d6122ee565b10156120ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120c5906137ca565b60405180910390fd5b6202a30083016120dc6122ee565b111561211d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612114906137aa565b60405180910390fd5b600080600083815260200190815260200160002060006101000a81548160ff021916908315150217905550606060008651141561215c57849050612188565b8580519060200120856040516020016121769291906135a1565b60405160208183030381529060405290505b600060608973ffffffffffffffffffffffffffffffffffffffff1689846040516121b291906135c9565b60006040518083038185875af1925050503d80600081146121ef576040519150601f19603f3d011682016040523d82523d6000602084013e6121f4565b606091505b509150915081612239576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122309061396a565b60405180910390fd5b8094505050505095945050505050565b600080828401905083811015612294576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161228b9061386a565b60405180910390fd5b8091505092915050565b6000828211156122e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122da90613a0a565b60405180910390fd5b818303905092915050565b600042905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061233757805160ff1916838001178555612365565b82800160010185558215612365579182015b82811115612364578251825591602001919060010190612349565b5b509050612372919061250d565b5090565b8280548282559060005260206000209081019282156123ef579160200282015b828111156123ee5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190612396565b5b5090506123fc919061250d565b5090565b82805482825590600052602060002090810192821561243c579160200282015b8281111561243b578251825591602001919060010190612420565b5b509050612449919061250d565b5090565b82805482825590600052602060002090810192821561249c579160200282015b8281111561249b57825182908051906020019061248b9291906122f6565b509160200191906001019061246d565b5b5090506124a9919061252a565b5090565b8280548282559060005260206000209081019282156124fc579160200282015b828111156124fb5782518290805190602001906124eb92919061254e565b50916020019190600101906124cd565b5b50905061250991906125ce565b5090565b5b8082111561252657600081600090555060010161250e565b5090565b5b8082111561254a576000818161254191906125f2565b5060010161252b565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061258f57805160ff19168380011785556125bd565b828001600101855582156125bd579182015b828111156125bc5782518255916020019190600101906125a1565b5b5090506125ca919061250d565b5090565b5b808211156125ee57600081816125e5919061263a565b506001016125cf565b5090565b50805460018160011615610100020316600290046000825580601f106126185750612637565b601f016020900490600052602060002090810190612636919061250d565b5b50565b50805460018160011615610100020316600290046000825580601f10612660575061267f565b601f01602090049060005260206000209081019061267e919061250d565b5b50565b60008135905061269181613e07565b92915050565b600082601f8301126126a857600080fd5b81356126bb6126b682613b3e565b613b0d565b915081818352602084019350602081019050838560208402820111156126e057600080fd5b60005b8381101561271057816126f68882612682565b8452602084019350602083019250506001810190506126e3565b5050505092915050565b600082601f83011261272b57600080fd5b813561273e61273982613b6a565b613b0d565b9150818183526020840193506020810190508360005b83811015612784578135860161276a88826128af565b845260208401935060208301925050600181019050612754565b5050505092915050565b600082601f83011261279f57600080fd5b81356127b26127ad82613b96565b613b0d565b9150818183526020840193506020810190508360005b838110156127f857813586016127de8882612903565b8452602084019350602083019250506001810190506127c8565b5050505092915050565b600082601f83011261281357600080fd5b813561282661282182613bc2565b613b0d565b9150818183526020840193506020810190508385602084028201111561284b57600080fd5b60005b8381101561287b57816128618882612957565b84526020840193506020830192505060018101905061284e565b5050505092915050565b60008135905061289481613e1e565b92915050565b6000813590506128a981613e35565b92915050565b600082601f8301126128c057600080fd5b81356128d36128ce82613bee565b613b0d565b915080825260208301602083018583830111156128ef57600080fd5b6128fa838284613d94565b50505092915050565b600082601f83011261291457600080fd5b813561292761292282613c1e565b613b0d565b9150808252602083016020830185838301111561294357600080fd5b61294e838284613d94565b50505092915050565b60008135905061296681613e4c565b92915050565b60008151905061297b81613e4c565b92915050565b60006020828403121561299357600080fd5b60006129a184828501612682565b91505092915050565b600080604083850312156129bd57600080fd5b60006129cb85828601612682565b92505060206129dc85828601612682565b9150509250929050565b60008060008060008060c087890312156129ff57600080fd5b600087013567ffffffffffffffff811115612a1957600080fd5b612a2589828a01612697565b965050602087013567ffffffffffffffff811115612a4257600080fd5b612a4e89828a01612802565b955050604087013567ffffffffffffffff811115612a6b57600080fd5b612a7789828a0161278e565b945050606087013567ffffffffffffffff811115612a9457600080fd5b612aa089828a0161271a565b935050608087013567ffffffffffffffff811115612abd57600080fd5b612ac989828a01612903565b92505060a087013567ffffffffffffffff811115612ae657600080fd5b612af289828a01612903565b9150509295509295509295565b600060208284031215612b1157600080fd5b6000612b1f8482850161289a565b91505092915050565b600060208284031215612b3a57600080fd5b6000612b4884828501612957565b91505092915050565b600060208284031215612b6357600080fd5b6000612b718482850161296c565b91505092915050565b60008060408385031215612b8d57600080fd5b6000612b9b85828601612957565b9250506020612bac85828601612885565b9150509250929050565b612bbf81613d4c565b82525050565b612bce81613cbb565b82525050565b612bdd81613ccd565b82525050565b612bf4612bef82613ce3565b613dd6565b82525050565b6000612c0582613c78565b612c0f8185613c8e565b9350612c1f818560208601613da3565b612c2881613de2565b840191505092915050565b6000612c3e82613c78565b612c488185613c9f565b9350612c58818560208601613da3565b80840191505092915050565b600081546001811660008114612c815760018114612ca757612ceb565b607f6002830416612c928187613c8e565b955060ff198316865260208601935050612ceb565b60028204612cb58187613c8e565b9550612cc085613c4e565b60005b82811015612ce257815481890152600182019150602081019050612cc3565b80880195505050505b505092915050565b612cfc81613d5e565b82525050565b6000612d0d82613c83565b612d178185613caa565b9350612d27818560208601613da3565b612d3081613de2565b840191505092915050565b600081546001811660008114612d585760018114612d7e57612dc2565b607f6002830416612d698187613caa565b955060ff198316865260208601935050612dc2565b60028204612d8c8187613caa565b9550612d9785613c63565b60005b82811015612db957815481890152600182019150602081019050612d9a565b80880195505050505b505092915050565b6000612dd7601f83613caa565b91507f43616e6e6f742063616e63656c2065786563757465642070726f706f73616c006000830152602082019050919050565b6000612e17602e83613caa565b91507f50726f706f73616c2063616e206f6e6c7920626520717565756564206966206960008301527f74206973207375636365656465640000000000000000000000000000000000006020830152604082019050919050565b6000612e7d601383613caa565b91507f696e76616c69642070726f706f73616c206964000000000000000000000000006000830152602082019050919050565b6000612ebd602d83613caa565b91507f50726f706f73616c2063616e206f6e6c7920626520657865637574656420696660008301527f20697420697320717565756564000000000000000000000000000000000000006020830152604082019050919050565b6000612f23603383613caa565b91507f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260008301527f616e73616374696f6e206973207374616c652e000000000000000000000000006020830152604082019050919050565b6000612f89604583613caa565b91507f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260008301527f616e73616374696f6e206861736e2774207375727061737365642074696d652060208301527f6c6f636b2e0000000000000000000000000000000000000000000000000000006040830152606082019050919050565b6000613015601983613caa565b91507f55736572206d757374206f776e206174206c65617374203125000000000000006000830152602082019050919050565b6000613055602583613caa565b91507f70726f706f73616c20616374696f6e20616c726561647920717565756564206160008301527f74206574610000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006130bb602083613caa565b91507f43616e6e6f7420717565756520612063616e63656c65642070726f706f73616c6000830152602082019050919050565b60006130fb604083613caa565b91507f4f6e65206c6976652070726f706f73616c207065722070726f706f7365722c2060008301527f666f756e6420616e20616c7265616479207761726d75702070726f706f73616c6020830152604082019050919050565b6000613161601183613caa565b91507f6164646974696f6e206f766572666c6f770000000000000000000000000000006000830152602082019050919050565b60006131a1601d83613caa565b91507f436f6e747261637420616c726561647920696e697469616c697a65642e0000006000830152602082019050919050565b60006131e1601e83613caa565b91507f43616e6e6f742063616e63656c206966206e6f7420766f7465642079657400006000830152602082019050919050565b6000613221601e83613caa565b91507f43616e6e6f742063616e63656c20657870697265642070726f706f73616c00006000830152602082019050919050565b6000613261602f83613caa565b91507f50726f706f73616c206e6565647320746f20626520696e2052656479466f724160008301527f637469766174696f6e20737461746500000000000000000000000000000000006020830152604082019050919050565b60006132c7601483613caa565b91507f4d7573742070726f7669646520616374696f6e730000000000000000000000006000830152602082019050919050565b6000613307602f83613caa565b91507f4f6e6c79207468652070726f706f73616c2063726561746f722063616e20636160008301527f6e63656c20612070726f706f73616c00000000000000000000000000000000006020830152604082019050919050565b600061336d601a83613caa565b91507f546f6f206d616e7920616374696f6e73206f6e206120766f74650000000000006000830152602082019050919050565b60006133ad603d83613caa565b91507f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260008301527f616e73616374696f6e20657865637574696f6e2072657665727465642e0000006020830152604082019050919050565b6000613413604083613caa565b91507f4f6e65206c6976652070726f706f73616c207065722070726f706f7365722c2060008301527f666f756e6420616e20616c7265616479206163746976652070726f706f73616c6020830152604082019050919050565b6000613479601983613caa565b91507f416c726561647920766f7465642074686973206f7074696f6e000000000000006000830152602082019050919050565b60006134b9602c83613caa565b91507f50726f706f73616c2066756e6374696f6e20696e666f726d6174696f6e20617260008301527f697479206d69736d6174636800000000000000000000000000000000000000006020830152604082019050919050565b600061351f601083613caa565b91507f566f74696e6720697320636c6f736564000000000000000000000000000000006000830152602082019050919050565b600061355f601583613caa565b91507f7375627472616374696f6e20756e646572666c6f7700000000000000000000006000830152602082019050919050565b61359b81613d42565b82525050565b60006135ad8285612be3565b6004820191506135bd8284612c33565b91508190509392505050565b60006135d58284612c33565b915081905092915050565b60006040820190506135f56000830185612bb6565b6136026020830184613592565b9392505050565b600060408201905061361e6000830185612bc5565b61362b6020830184613592565b9392505050565b600060a0820190506136476000830188612bc5565b6136546020830187613592565b81810360408301526136668186612d02565b9050818103606083015261367a8185612bfa565b90506136896080830184613592565b9695505050505050565b600060a0820190506136a86000830188612bc5565b6136b56020830187613592565b81810360408301526136c78186612d3b565b905081810360608301526136db8185612c64565b90506136ea6080830184613592565b9695505050505050565b60006020820190506137096000830184612bd4565b92915050565b60006020820190506137246000830184612cf3565b92915050565b6000602082019050818103600083015261374381612dca565b9050919050565b6000602082019050818103600083015261376381612e0a565b9050919050565b6000602082019050818103600083015261378381612e70565b9050919050565b600060208201905081810360008301526137a381612eb0565b9050919050565b600060208201905081810360008301526137c381612f16565b9050919050565b600060208201905081810360008301526137e381612f7c565b9050919050565b6000602082019050818103600083015261380381613008565b9050919050565b6000602082019050818103600083015261382381613048565b9050919050565b60006020820190508181036000830152613843816130ae565b9050919050565b60006020820190508181036000830152613863816130ee565b9050919050565b6000602082019050818103600083015261388381613154565b9050919050565b600060208201905081810360008301526138a381613194565b9050919050565b600060208201905081810360008301526138c3816131d4565b9050919050565b600060208201905081810360008301526138e381613214565b9050919050565b6000602082019050818103600083015261390381613254565b9050919050565b60006020820190508181036000830152613923816132ba565b9050919050565b60006020820190508181036000830152613943816132fa565b9050919050565b6000602082019050818103600083015261396381613360565b9050919050565b60006020820190508181036000830152613983816133a0565b9050919050565b600060208201905081810360008301526139a381613406565b9050919050565b600060208201905081810360008301526139c38161346c565b9050919050565b600060208201905081810360008301526139e3816134ac565b9050919050565b60006020820190508181036000830152613a0381613512565b9050919050565b60006020820190508181036000830152613a2381613552565b9050919050565b6000602082019050613a3f6000830184613592565b92915050565b600061018082019050613a5b600083018f613592565b613a68602083018e612bc5565b8181036040830152613a7a818d612d02565b90508181036060830152613a8e818c612d02565b9050613a9d608083018b613592565b613aaa60a083018a613592565b613ab760c0830189613592565b613ac460e0830188613592565b613ad2610100830187613592565b613ae0610120830186613592565b613aee610140830185612bd4565b613afc610160830184612bd4565b9d9c50505050505050505050505050565b6000604051905081810181811067ffffffffffffffff82111715613b3457613b33613de0565b5b8060405250919050565b600067ffffffffffffffff821115613b5957613b58613de0565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613b8557613b84613de0565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613bb157613bb0613de0565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613bdd57613bdc613de0565b5b602082029050602081019050919050565b600067ffffffffffffffff821115613c0957613c08613de0565b5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff821115613c3957613c38613de0565b5b601f19601f8301169050602081019050919050565b60008190508160005260206000209050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000613cc682613d22565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000819050613d1d82613df3565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000613d5782613d70565b9050919050565b6000613d6982613d0f565b9050919050565b6000613d7b82613d82565b9050919050565b6000613d8d82613d22565b9050919050565b82818337600083830152505050565b60005b83811015613dc1578082015181840152602081019050613da6565b83811115613dd0576000848401525b50505050565b6000819050919050565bfe5b6000601f19601f8301169050919050565b600a8110613e0457613e03613de0565b5b50565b613e1081613cbb565b8114613e1b57600080fd5b50565b613e2781613ccd565b8114613e3257600080fd5b50565b613e3e81613cd9565b8114613e4957600080fd5b50565b613e5581613d42565b8114613e6057600080fd5b5056fea2646970667358221220eea3f75df4f1643b3a7da66ba486ec7e653a0f71101eb54fbad668dc82bdcfcb64736f6c63430007030033";
