import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useEffect, useRef} from 'react'
import s from '../style/SuperRange.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const range: any = useRef(null);
    useEffect(() => {
        if (range.current) {
            range.current.style.width = `${restProps.value}%`;
        }
    }, [restProps.value]);

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.thumb}  ${s.thumbLeft} ${className ? className : ''}`

    return (
        <div className={s.container}>
            <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <div className={s.slider}>
                <div className={s.sliderTrack}/>
                <div ref={range} className={s.sliderRange}/>
            </div>
        </div>
    )
}

export default SuperRange
