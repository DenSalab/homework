import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('');
    const error = text ? '' : 'Required field!';

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    // spanClassName={s.testSpanError}
                />

                <SuperInputText
                    className={s.blue} // проверьте, рабоет ли смешивание классов
                    placeholder={'Укажите имя'}
                />

                {/*----------------------------------------------------*/}

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red={true} // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >some text
                </SuperCheckbox>

                <SuperCheckbox
                    checked={checked}
                    onChange={testOnChange}/>
            </div>

            <hr/>
        </div>
    )
}

export default HW4