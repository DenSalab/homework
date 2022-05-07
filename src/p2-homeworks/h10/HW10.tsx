import React, {useEffect, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {

    let isLoading = useSelector<AppStoreType>(store => store.loading.isLoading);
    let dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC(true));

        setTimeout(() => {
            dispatch(loadingAC(false));
            console.log('loading is complete!');
        }, 5000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {isLoading
                ? (
                    <div>
                        <SuperButton disabled style={{backgroundColor: 'lightgrey'}}>wait...</SuperButton>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
