import MessageDialogOutline from './MessageDialogOutline';

interface Props {
    side: 'self' | 'target';
    content: string;
}

export default function TextContent({side, content}: Props) {
    const lines = content.split('\n');
    const renderLine = (line: string, index: number) => (
        <MessageDialogOutline key={index} side={side}>
            {line}
        </MessageDialogOutline>
    );

    return (
        <>
            {lines.map(renderLine)}
        </>
    );
}
