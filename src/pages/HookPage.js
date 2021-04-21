import { useState, useEffect } from 'react'
/*
  *1.函数组件命名首字母必须大写；
  *2.hook是特殊函数，必须放在函数组件里；
*/

export default function Count(props) {
    // 声明一个叫 “count” 的 state 变量，初始化为0
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${count}`;
    }, [count]) /*只有count有变化时，才去执行，减少render */

    return (<div className="hookpage">
        <h2>认识Hook</h2>
        <button onClick={() => { setCount(count + 1) }}>Add</button>
        <p>当前点击hook计数是：{count}</p>
        <p>当前时间是：{useClock().toLocaleTimeString()}</p>
    </div>)
}

//自定义hook函数，命名必须以use开头
function useClock(){
    const [date, setDate] = useState(new Date());
    // componentDidMount 和 componentDidUpdate执行时被调用
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000)
        //相当于componentWillUnmount
        return () => { clearInterval(timer) }
    }, [])
    return date;
}
