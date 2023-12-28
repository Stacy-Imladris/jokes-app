import {PropsWithChildren} from 'react';
import s from './Container.module.css'

export const Container = ({children}: PropsWithChildren<{}>) => (
    <div className={s.wrapper}>
        <div className={s.content}>{children}</div>
    </div>
)
