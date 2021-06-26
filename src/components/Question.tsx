import { ReactNode } from "react";
import cx from 'classnames';

import '../style/question.css'

type QuestoesProps = {
    content: string;
    author: {
        name: string,
        avatar: string;
    };

    children?: ReactNode;
    isAnswered?: boolean;
    isHighlighted?: boolean
}

export function Questoes({
    content,
    author,
    isAnswered = false,
    isHighlighted = false,
    children,
}: QuestoesProps) {
    return (
        // Esse é um metodo para fazer a marcação visualViewport, ou utilizar o pacote classNames que facilita essa visualização
        // <div className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted ? 'highlighted' : ''}`}>
        <div className={cx('question', { answered: isAnswered },
            { highlighted: isHighlighted && !isAnswered })}>
            <p>{content}</p>
            <footer>
                <div className="user-info-question">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </div>
    )
}