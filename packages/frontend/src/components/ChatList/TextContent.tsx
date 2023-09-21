import './TextContent.less';

interface Props {
    side: 'self' | 'target';
    content: string;
}

export default function TextContent({side, content}: Props) {
    const lines = content.split('\n');
    const renderLine = (line: string, index: number) => (
        <p key={index} className={`chat-message-content-text chat-message-content-text-${side}`}>
            {line}
        </p>
    );

    return (
        <>
            {lines.map(renderLine)}
        </>
    );
}
