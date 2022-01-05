import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

type PeopleType = {
    _id: number
    name: string
    age: number
}
type initialStateType = PeopleType[]

let initialState: initialStateType

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up', sort: 'name'})

    expect(newState[0].name).toBe('Александр');
    expect(newState[1].name).toBe('Виктор');
    expect(newState[2].name).toBe('Дмитрий');
    expect(newState[3].name).toBe('Ирина');
    expect(newState[4].name).toBe('Коля');
    expect(newState[5].name).toBe('Кот');
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down', sort: 'name'})

    expect(newState[0].name).toBe('Кот');
    expect(newState[1].name).toBe('Коля');
    expect(newState[2].name).toBe('Ирина');
    expect(newState[3].name).toBe('Дмитрий');
    expect(newState[4].name).toBe('Виктор');
    expect(newState[5].name).toBe('Александр');
})
test('sort age up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up', sort: 'age'})

    expect(newState[0].name).toBe('Кот');
    expect(newState[1].name).toBe('Коля');
    expect(newState[2].name).toBe('Дмитрий');
    expect(newState[3].name).toBe('Виктор');
    expect(newState[4].name).toBe('Ирина');
    expect(newState[5].name).toBe('Александр');
})
test('sort age down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down', sort: 'age'})

    expect(newState[0].name).toBe('Александр');
    expect(newState[1].name).toBe('Ирина');
    expect(newState[2].name).toBe('Виктор');
    expect(newState[3].name).toBe('Дмитрий');
    expect(newState[4].name).toBe('Коля');
    expect(newState[5].name).toBe('Кот');
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    expect(newState.length).toBe(4);
    expect(newState.sort()[0].name).toBe('Александр');
    expect(newState.sort()[1].name).toBe('Виктор');
    expect(newState.sort()[2].name).toBe('Дмитрий');
    expect(newState.sort()[3].name).toBe('Ирина');
})
