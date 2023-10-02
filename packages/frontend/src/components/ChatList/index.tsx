import {useEffect, useRef} from 'react';
import {MessageCreatePayload, MessageInfo} from '@/api/story';
import {useAllCharacters} from '@/atoms/character';
import SelfMessage from './SelfMessage';
import TextContent from './TextContent';
import TargetMessage from './TargetMessage';
import ImageContent from './ImageContent';
import EventMessage from './EventMessage';
import InfoMessage from './InfoMessage';
import ReplyMessage from './ReplyMessage';
import SendingContent from './SendingContent';
import Split from './Split';
import './index.less';

function renderMessageContent(type: 'text' | 'image', side: 'self' | 'target', content: string) {
    if (type === 'image') {
        return <ImageContent src={content} />;
    }
    else {
        return <TextContent side={side} content={content} />;
    }
}

interface Props {
    messages: MessageInfo[];
    sending: MessageCreatePayload | null;
}

export default function ChatList({messages, sending}: Props) {
    const characters = useAllCharacters();
    const root = useRef<HTMLDivElement>(null);
    useEffect(
        () => {
            if (root.current && sending) {
                root.current.scrollTo({top: root.current.scrollHeight, behavior: 'smooth'});
            }
        },
        [sending]
    );
    const renderMessage = (message: MessageInfo) => {
        if (message.side === 'self') {
            return (
                <SelfMessage key={message.id}>
                    {renderMessageContent(message.type, message.side, message.content)}
                </SelfMessage>
            );
        }
        if (message.side === 'target') {
            const character = characters.find(c => c.id === message.target);

            if (!character) {
                throw new Error(`Character ${message.target} not found`);
            }

            return (
                <TargetMessage key={message.id} character={character}>
                    {renderMessageContent(message.type, message.side, message.content)}
                </TargetMessage>
            );
        }
        if (message.type === 'event') {
            return <EventMessage key={message.id} content={message.content} />;
        }
        if (message.type === 'info') {
            return <InfoMessage key={message.id} content={message.content} />;
        }
        if (message.type === 'reply') {
            return <ReplyMessage key={message.id} content={message.content} />;
        }
        if (message.type === 'split') {
            return <Split />;
        }
        return null;
    };
    const renderSendingMessage = (message: MessageCreatePayload) => {
        if (message.side === 'target') {
            const character = characters.find(c => c.id === message.target);

            if (!character) {
                throw new Error(`Character ${message.target} not found`);
            }

            return (
                <TargetMessage character={character}>
                    <SendingContent side="target" />
                </TargetMessage>
            );
        }

        return (
            <SelfMessage>
                <SendingContent side="self" />
            </SelfMessage>
        );
    };

    return (
        <div ref={root} className="chat-list">
            {messages.map(renderMessage)}
            {sending && renderSendingMessage(sending)}
        </div>
    );
}
