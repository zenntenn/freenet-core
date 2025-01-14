// automatically generated by the FlatBuffers compiler, do not modify

import { BroadcastEmitted } from "../topology/broadcast-emitted";
import { BroadcastReceived } from "../topology/broadcast-received";
import { GetContract } from "../topology/get-contract";
import { PutFailure } from "../topology/put-failure";
import { PutRequest } from "../topology/put-request";
import { PutSuccess } from "../topology/put-success";
import { SubscribedToContract } from "../topology/subscribed-to-contract";
import { UpdateFailure } from "../topology/update-failure";
import { UpdateRequest } from "../topology/update-request";
import { UpdateSuccess } from "../topology/update-success";

export enum ContractChangeType {
    NONE = 0,
    PutRequest = 1,
    PutSuccess = 2,
    PutFailure = 3,
    BroadcastEmitted = 4,
    BroadcastReceived = 5,
    UpdateRequest = 6,
    UpdateSuccess = 7,
    UpdateFailure = 8,
    GetContract = 9,
    SubscribedToContract = 10,
}

export function unionToContractChangeType(
    type: ContractChangeType,
    accessor: (
        obj:
            | BroadcastEmitted
            | BroadcastReceived
            | GetContract
            | PutFailure
            | PutRequest
            | PutSuccess
            | SubscribedToContract
            | UpdateFailure
            | UpdateRequest
            | UpdateSuccess
    ) =>
        | BroadcastEmitted
        | BroadcastReceived
        | GetContract
        | PutFailure
        | PutRequest
        | PutSuccess
        | SubscribedToContract
        | UpdateFailure
        | UpdateRequest
        | UpdateSuccess
        | null
):
    | BroadcastEmitted
    | BroadcastReceived
    | GetContract
    | PutFailure
    | PutRequest
    | PutSuccess
    | SubscribedToContract
    | UpdateFailure
    | UpdateRequest
    | UpdateSuccess
    | null {
    switch (ContractChangeType[type]) {
        case "NONE":
            return null;
        case "PutRequest":
            return accessor(new PutRequest())! as PutRequest;
        case "PutSuccess":
            return accessor(new PutSuccess())! as PutSuccess;
        case "PutFailure":
            return accessor(new PutFailure())! as PutFailure;
        case "BroadcastEmitted":
            return accessor(new BroadcastEmitted())! as BroadcastEmitted;
        case "BroadcastReceived":
            return accessor(new BroadcastReceived())! as BroadcastReceived;
        case "UpdateRequest":
            return accessor(new UpdateRequest())! as UpdateRequest;
        case "UpdateSuccess":
            return accessor(new UpdateSuccess())! as UpdateSuccess;
        case "UpdateFailure":
            return accessor(new UpdateFailure())! as UpdateFailure;
        case "GetContract":
            return accessor(new GetContract())! as GetContract;
        case "SubscribedToContract":
            return accessor(
                new SubscribedToContract()
            )! as SubscribedToContract;
        default:
            return null;
    }
}

export function unionListToContractChangeType(
    type: ContractChangeType,
    accessor: (
        index: number,
        obj:
            | BroadcastEmitted
            | BroadcastReceived
            | GetContract
            | PutFailure
            | PutRequest
            | PutSuccess
            | SubscribedToContract
            | UpdateFailure
            | UpdateRequest
            | UpdateSuccess
    ) =>
        | BroadcastEmitted
        | BroadcastReceived
        | GetContract
        | PutFailure
        | PutRequest
        | PutSuccess
        | SubscribedToContract
        | UpdateFailure
        | UpdateRequest
        | UpdateSuccess
        | null,
    index: number
):
    | BroadcastEmitted
    | BroadcastReceived
    | GetContract
    | PutFailure
    | PutRequest
    | PutSuccess
    | SubscribedToContract
    | UpdateFailure
    | UpdateRequest
    | UpdateSuccess
    | null {
    switch (ContractChangeType[type]) {
        case "NONE":
            return null;
        case "PutRequest":
            return accessor(index, new PutRequest())! as PutRequest;
        case "PutSuccess":
            return accessor(index, new PutSuccess())! as PutSuccess;
        case "PutFailure":
            return accessor(index, new PutFailure())! as PutFailure;
        case "BroadcastEmitted":
            return accessor(index, new BroadcastEmitted())! as BroadcastEmitted;
        case "BroadcastReceived":
            return accessor(
                index,
                new BroadcastReceived()
            )! as BroadcastReceived;
        case "UpdateRequest":
            return accessor(index, new UpdateRequest())! as UpdateRequest;
        case "UpdateSuccess":
            return accessor(index, new UpdateSuccess())! as UpdateSuccess;
        case "UpdateFailure":
            return accessor(index, new UpdateFailure())! as UpdateFailure;
        case "GetContract":
            return accessor(index, new GetContract())! as GetContract;
        case "SubscribedToContract":
            return accessor(
                index,
                new SubscribedToContract()
            )! as SubscribedToContract;
        default:
            return null;
    }
}
