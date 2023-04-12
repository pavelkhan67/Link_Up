import React from 'react';

const Blogs = () => {
    return (
        <div className='my-container flex flex-col gap-5 mb-5 lg:mb-0'>
            <div className="card w-full bg-violet-50 shadow-lg p-5 text-left lg:pe-40">
                <h2 className="card-title pb-2">1. When should you use context API?</h2>
                <p>Benefits of using Context API: <br />
                    It's scalable. Context API can be used for any size of web application. <br />
                    It's less complex than Redux. The workflow is much simpler than Redux. <br />
                    It has a lower implementation cost. <br />
                    There's no need to pass data to the children at each level. <br />
                    It's easy to maintain and very reusable.</p>
                <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels.</p>
            </div>
            <div className="card w-full bg-violet-50 shadow-lg p-5 text-left lg:pe-40">
                <h2 className="card-title pb-2">2. What is a custom hook?</h2>
                <p>Hooks are reusable functions.
                    When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
                    Custom Hooks start with "use".</p>
                <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature.</p>
            </div>
            <div className="card w-full bg-violet-50 shadow-lg p-5 text-left lg:pe-40">
                <h2 className="card-title pb-2">3. What is useRef?</h2>
                <p>The useRef Hook allows you to persist values between renders.
                    It can be used to store a mutable value that does not cause a re-render when updated.
                    It can be used to access a DOM element directly. </p>
                <p>
                    There are only three possibilities when we can use Refs in our component: <br />
                    Managing focus, text selection, or media playback. <br />
                    Integrating with third-party DOM libraries. <br />
                    Triggering imperative animations.
                </p>
            </div>
            <div className="card w-full bg-violet-50 shadow-lg p-5 text-left lg:pe-40">
                <h2 className="card-title pb-2">4. What is useMemo?</h2>
                <p>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
                <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)</p>
            </div>
        </div>
    );
};

export default Blogs;