### useEffect demo
In this project you can see the diffrent uses for useEffect hook in react js:
1. componentDidUpdate without a condition : no second argument 
2. componentDidUpdate with a condition : a certain state in second argument
3. componentDidMount : empty array in seconed argument 

we can also clean up our component when we need to prevent memory leaks or reset value by using the return function in useEffect
 useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

#### To run this project:
1. open project in VScode
2. run command : npm i styled-components
3. run command : npm start 

Happy experminting !
