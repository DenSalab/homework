import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)
    const [sort, setSort] = useState<'name' | 'age'>('name');

    const sortNameHandler = () => setSort('name');
    const sortAgeHandler = () => setSort('age');

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.person}>
            <span className={s.name}>{p.name}</span>
            <span className={s.age}>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up', sort}));
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down', sort}));
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}));

    return (
        <div>
            <hr/>
            <span>homeworks 8</span>
            <div>
                {finalPeople}
            </div>
            <div className={s.sort}>
                    <span className={s.sortTitle}>
                        Sort by:
                    </span>
                <div className={s.radioBox}>
                    <label><input
                        type="radio"
                        name={'sort'}
                        checked={sort === 'name'}
                        onChange={sortNameHandler}
                    />name</label>
                    <label><input
                        type="radio"
                        name={'sort'}
                        checked={sort === 'age'}
                        onChange={sortAgeHandler}
                    />age</label>
                </div>
            </div>
            <div>
                <SuperButton className={s.sortButton} onClick={sortUp}>sort up</SuperButton>
                <SuperButton className={s.sortButton} onClick={sortDown}>sort down</SuperButton>
                <SuperButton className={s.sortButton} onClick={checkAge}>check 18</SuperButton>
            </div>

            <hr/>
        </div>
    )
}

export default HW8
