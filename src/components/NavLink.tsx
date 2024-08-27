'use client'

import { changePage } from '@/redux/slices/pageSlice';
import { useRouter } from 'next/navigation';
import React, { MouseEventHandler } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../../redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
type Props = {
    href: string;
    style?: object ;
    className?:string;
    children: React.ReactNode;
}

export default function NavLink(props: Props) {
  const router = useRouter()
  const dispatch =  useDispatch()
    const handleClick : MouseEventHandler = e => {
        e.preventDefault()
        console.log("first")
        window.history.replaceState({name:props.href}, '', props.href);
        dispatch(changePage(props.href))


    }

  return (
    <>
        <a onClick={handleClick} {...props} >{props.children}</a>
    </>
  )
}
