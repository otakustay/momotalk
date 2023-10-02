interface MessageBase {
    parent: number | null;
}

export interface TargetMessageInfo extends MessageBase {
    target: number;
    side: 'target';
    type: 'text' | 'image';
    content: string;
}

export interface SelfMessageInfo extends MessageBase {
    side: 'self';
    type: 'text' | 'image';
    content: string;
}

export interface SystemMessageInfo extends MessageBase {
    side: 'system';
    type: 'reply' | 'event' | 'info' | 'split';
    content: string;
}

export type MessageCreatePayload = TargetMessageInfo | SelfMessageInfo | SystemMessageInfo;

export type MessageInfo = MessageCreatePayload & {id: number};

export interface Story {
    id: number;
    messages: MessageInfo[];
    createdAt: string;
    updatedAt: string;
}

const messages: MessageInfo[] = [
    {id: 1, parent: null, side: 'system', type: 'info', content: '已讀'},
    {
        id: 2,
        parent: 1,
        side: 'target',
        target: 10004,
        type: 'text',
        content: '老師。雖然有點突然，但我想和你談談',
    },
    {
        id: 3,
        parent: 2,
        side: 'target',
        target: 10004,
        type: 'text',
        content: '我工作結束後雖然是深夜，但能稍微見個面嗎？',
    },
    {
        id: 4,
        parent: 3,
        side: 'self',
        type: 'text',
        content: '當然，如果是陽奈的請求',
    },
    {
        id: 5,
        parent: 4,
        side: 'target',
        target: 10004,
        type: 'text',
        content: '這麼晚真是抱歉，那麼地點是……',
    },
    {
        id: 6,
        parent: 5,
        side: 'system',
        type: 'event',
        content: '前往陽奈的羈絆劇情',
    },
    {
        id: 7,
        parent: 6,
        side: 'target',
        target: 10004,
        type: 'text',
        content: '是不是因為我的關係，睡眠時間變少了？\n我不想給你添麻煩',
    },
    {
        id: 8,
        parent: 7,
        side: 'system',
        type: 'reply',
        content: '我願意為陽奈做任何事',
    },
    {
        id: 9,
        parent: 8,
        side: 'target',
        target: 10004,
        type: 'text',
        content: '……嗯，謝謝',
    },
    {
        id: 10,
        parent: 9,
        side: 'target',
        target: 10004,
        type: 'text',
        content: '晚安，老師',
    },
];

function wait(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export default {
    findById: async (id: number): Promise<Story> => {
        // TODO: 仅测试用
        return {
            id,
            messages,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
    },
    sendMessage: async (id: number, message: MessageCreatePayload): Promise<MessageInfo> => {
        await wait(1000);
        messages.push({id: messages[messages.length - 1].id + 1, ...message});
        return messages[messages.length - 1];
    },
};
