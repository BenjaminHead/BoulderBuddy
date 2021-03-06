import { CloudFunction, EventContext } from '../cloud-functions';
/** Handle events on a Cloud Pub/Sub topic. */
export declare function topic(topic: string): TopicBuilder;
/** Builder used to create Cloud Functions for Google Pub/Sub topics. */
export declare class TopicBuilder {
    private triggerResource;
    /** Handle a Pub/Sub message that was published to a Cloud Pub/Sub topic */
    onPublish(handler: (message: Message, context: EventContext) => PromiseLike<any> | any): CloudFunction<Message>;
}
/**
 * A Pub/Sub message.
 *
 * This class has an additional .json helper which will correctly deserialize any
 * message that was a JSON object when published with the JS SDK. .json will throw
 * if the message is not a base64 encoded JSON string.
 */
export declare class Message {
    readonly data: string;
    readonly attributes: {
        [key: string]: string;
    };
    private _json;
    constructor(data: any);
    readonly json: any;
    toJSON(): any;
}
