import { Button, Typography } from '@mui/material';
import React from 'react'
import { useLoaderData } from "react-router-dom";
import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counterSlice';
export async function loader() {
    await new Promise((r) => setTimeout(r, 0));
    return "I came from the About.tsx loader function!";
}

export function Component() {
    let data = useLoaderData() as string;

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <>
            <h1>{count}</h1>
            <Button variant="contained" onClick={() => dispatch(increment())}>Increment</Button> <br /><br />
            <Button variant="contained" onClick={() => dispatch(decrement())}>Decrement</Button>
        </>
    )
}

Component.displayName = "AboutPage";