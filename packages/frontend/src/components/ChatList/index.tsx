import {MessageInfo} from '@/api/story';
import {CharacterInfo} from '@/api/character';
import SelfMessage from './SelfMessage';
import TextContent from './TextContent';
import TargetMessage from './TargetMessage';
import ImageContent from './ImageContent';
import EventMessage from './EventMessage';
import InfoMessage from './InfoMessage';
import ReplyMessage from './ReplyMessage';
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
    characters: CharacterInfo[];
    messages: MessageInfo[];
}

export default function ChatList({characters, messages}: Props) {
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
        return null;
    };

    return (
        <div className="chat-list">
            {messages.map(renderMessage)}
        </div>
    );
}
