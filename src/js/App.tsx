import { hot } from 'react-hot-loader/root'
import React from 'react'
import '../css/main.scss'

type AnyFunction<T extends any[] = any[], R = void> = (...args: T) => R
interface Foobar {
  Fun1: AnyFunction<[id: string, age: number], number>
}
function Comp({ Fun1 }: Foobar) {
  return <div>{Fun1('123', 4)}</div>
}
function App() {
  const fun1: Foobar['Fun1'] = (id, number) => +id + number
  console.log(123)
  return (
    <>
      <div>Hello</div>
      <Comp Fun1={fun1} />
    </>
  )
}

export default hot(App)
