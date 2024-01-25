interface Props {
    titulo: string
}

export function Titulo({ titulo }: Props) {
    return (
        <span style={{ fontSize: '23px' }}><strong style={{ color: 'red' }}>|</strong>{' '}{titulo}</span>
    )   
}
