# 📁 Front-End Development Masterclass:  React Hooks

This master documentation serves as your comprehensive reference guide for internal component memory allocation, synthetic interactive bindings, and client-side form controls.

---

## 📁 Phase 3 React Hooks / Week-3

A React Hook is a special JavaScript function that lets you "hook into" React features like state management and lifecycle methods directly inside functional components.

*   **Types of React Hooks**
		
*   **1. State Hooks**
    *   useState
    *   useReducer
*   **2. Context Hooks**
    *   useContext
*   **3. Ref Hooks**
    *   useImperativeHandle
    *   useRef
*   **4. Effect Hooks**
    *   useEffect
    *   useInsertionEffect
    *   useLayoutEffect
*   **5. Performance Hooks**
    *   useCallback
    *   useDeferredValue
    *   useMemo
    *   useTransition
*   **6. Utility & Store Hooks**
    *   useDebugValue
    *   useId
    *   useSyncExternalStore
*   **7. Custom Hooks**

---

### Day 1: State Hooks
		
* **1. useState:** useState is used to store and update data that can change during a component's lifetime. When the state changes, React re-renders the component.

*   **Purpose:** To store, track, and update data values that change during a component's operational lifetime.

*   **Syntax Structure:**
    ```jsx
    // File: 01_useState.jsx
    import { useState } from 'react';

    const Counter = () => {
      const [count, setCount] = useState(0);
      return (
        <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      );
    };
    export default Counter;
    ```							

*   **Key Behavior:** Updating the state via the setter function triggers a scheduled component re-render to reflect updates on screen.

* **2. useReducer:** useReducer is useful when state management involves multiple related values or complicated state transitions.

*   **Purpose:** To manage complex component state transitions using a deterministic state reducer callback machine.

*   **Syntax Structure:**
    ```jsx
    // File: 02_useReducer.jsx
    import { useReducer } from 'react';

    const cartReducer = (state, action) => {
      switch (action.type) {
       case 'add': return { count: state.count + 1 };
       case 'remove': return { count: Math.max(0, state.count - 1) };
       default: return state;
      }
    };

    const ShoppingCart = () => {
      const [state, dispatch] = useReducer(cartReducer, { count: 0 });

      return (
       <div>
         <p>Items in cart: {state.count}</p>
         <button onClick={() => dispatch({ type: 'add' })}>+</button>
         <button onClick={() => dispatch({ type: 'remove' })}>-</button>
       </div>
      );
    };

    export default ShoppingCart;
    ```

*   **Key Behavior:** Dispatches descriptive action objects to a central calculation reducer function to compute the next deterministic state.

---

### Day 2: Context Hooks

* **1. useContext:** useContext provides a way to pass data deeply through the component tree without having to pass props down manually at every single level.

*   **Purpose:** To consume values supplied from distant upstream provider contexts without intermediary component structural prop dependency coupling.

*   **Syntax Structure:**
    ```jsx
    // File: 03_useContext.jsx
    import { createContext, useContext } from 'react';

    const ThemeContext = createContext('light');

    const ThemeButton = () => {
      const theme = useContext(ThemeContext);
      return <button className={theme}>Styled by Context</button>;
    };

    const App = () => {
      return (
        <ThemeContext.Provider value="dark">
          <ThemeButton />
        </ThemeContext.Provider>
      );
    };

    export default App;
    ```

*   **Key Behavior:** Automatically triggers a re-render for all consumer sub-components whenever the parent context provider value shifts.

---

### Day 3: Ref Hooks

* **1. useImperativeHandle:** useImperativeHandle customizes the instance value that is exposed to parent components when using a ref. Must be used alongside forwardRef.

*   **Purpose:** Restricts parent authority over inner child nodes, preventing total raw DOM exposure by providing custom proxy method bindings.

*   **Syntax Structure:**
    ```jsx
    // File: 04_useImperativeHandle.jsx
    import { useRef, useImperativeHandle, forwardRef } from 'react';

    const CustomInput = forwardRef((props, ref) => {
      const inputRef = useRef();

      useImperativeHandle(ref, () => ({
        focusAndSelect: () => {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }));

      return <input ref={inputRef} type="text" />;
    });

    export default CustomInput;
    ```

*   **Key Behavior:** Modifies the assigned parent ref object container imperatively, executing exclusively inside child components wrapped in forwardRef closures.

* **2. useRef:** useRef returns a mutable object whose .current property persists across renders. It can be used to directly access DOM nodes or store values that do not trigger re-renders.

*   **Purpose:** Interacting cleanly with browser visual target nodes or tracking metric records without initiating interface updates.

*   **Syntax Structure:**
    ```jsx
    // File: 05_useRef.jsx
    import { useRef } from 'react';

    const FocusInput = () => {
      const inputEl = useRef(null);

      const onButtonClick = () => {
        inputEl.current.focus();
      };

      return (
        <div>
          <input ref={inputEl} type="text" />
          <button onClick={onButtonClick}>Focus Input</button>
        </div>
      );
    };

    export default FocusInput;
    ```

*   **Key Behavior:** Holds values safely across multiple component render cycles without scheduling or causing UI layout re-render phases.

---

### Day 4: Effect Hooks

* **1. useEffect:** useEffect synchronizes a component with an external system. It executes after the component renders and handles side effects like data fetching, subscriptions, and DOM updates.

*   **Purpose:** Handling imperative orchestration tasks and environmental structural integrations outside the pure UI generation flow pipeline.

*   **Syntax Structure:**
    ```jsx
    // File: 06_useEffect.jsx
    import { useState, useEffect } from 'react';

    const WindowSize = () => {
      const [width, setWidth] = useState(window.innerWidth);

      useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      return <p>Window width: {width}px</p>;
    };

    export default WindowSize;
    ```

*   **Key Behavior:** Delays running the layout callback until the initial layout paint steps finish, executing cleanup functions before repeating.

* **2. useInsertionEffect:** useInsertionEffect allows CSS-in-JS libraries to inject global script styles into the DOM before any layout effects read or run.

*   **Purpose:** Appending custom style sheets programmatically ahead of system geometric computation cycles to optimize graphic loads.

*   **Syntax Structure:**
    ```jsx
    // File: 07_useInsertionEffect.jsx
    import { useInsertionEffect } from 'react';

    const DynamicStyleComponent = () => {
      useInsertionEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `.dynamic-box { background: papayawhip; }`;
        document.head.appendChild(style);
        
        return () => document.head.removeChild(style);
      }, []);

      return <div className="dynamic-box">Injected Style Box</div>;
    };

    export default DynamicStyleComponent;
    ```

*   **Key Behavior:** Fires ahead of layout calculations, ensuring the target element style attributes are configured in place prior to measurement tasks.

* **3. useLayoutEffect:** useLayoutEffect fires synchronously after all DOM mutations but before the browser paints the screen. Use it to measure layouts before the user sees them.

*   **Purpose:** Executing boundary calculations and visual checks immediately prior to user view layers receiving updates to prevent page stuttering.

*   **Syntax Structure:**
    ```jsx
    // File: 08_useLayoutEffect.jsx
    import { useState, useLayoutEffect, useRef } from 'react';

    const LayoutMeasurer = () => {
      const [height, setHeight] = useState(0);
      const textRef = useRef();

      useLayoutEffect(() => {
        setHeight(textRef.current.getBoundingClientRect().height);
      }, []);

      return (
        <div>
          <p ref={textRef}>Measuring this specific element block.</p>
          <p>The text block height above is {height}px</p>
        </div>
      );
    };

    export default LayoutMeasurer;
    ```

*   **Key Behavior:** Pauses paint routines synchronously to perform calculations, ensuring layout changes map out instantly on user view layers.
### Day 5: Performance Hooks

* **1. useCallback:** useCallback caches a function definition between re-renders to prevent unnecessary child component updates that rely on reference equality.

*   **Purpose:** Securing structural callback memory allocations to shield child targets against redundant updates during parent re-renders.

*   **Syntax Structure:**
    ```jsx
    // File: 09_useCallback.jsx
    import { useState, useCallback } from 'react';

    const ButtonList = () => {
      const [count, setCount] = useState(0);

      const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
      }, []);

      return <ChildButton onClick={handleClick} count={count} />;
    };

    const ChildButton = React.memo(({ onClick, count }) => (
      <button onClick={onClick}>Count: {count}</button>
    ));

    export default ButtonList;
    ```

*   **Key Behavior:** Retains the exact functional memory address until specified input dependency values change.

* **2. useDeferredValue:** useDeferredValue lets you defer updating a non-urgent part of the UI, allowing critical UI interactions (like input typing) to stay smooth.

*   **Purpose:** Delaying high-overhead list tracking sweeps or operations so interface responsiveness remains clean during active cycles.

*   **Syntax Structure:**
    ```jsx
    // File: 10_useDeferredValue.jsx
    import { useState, useDeferredValue } from 'react';

    const SearchList = () => {
      const [query, setQuery] = useState('');
      const deferredQuery = useDeferredValue(query);

      return (
        <div>
          <input value={query} onChange={e => setQuery(e.target.value)} />
          <SlowList text={deferredQuery} />
        </div>
      );
    };

      export default SearchList;
    ```

*   **Key Behavior:** Updates secondary calculations separately after high-priority input typing cycles finish updating.

* **3. useMemo:** useMemo caches the calculated result of a complex, expensive computation between re-renders, recalculating only when dependencies update.

*   **Purpose:** Saving computed results of intensive computational loops to bypass redundant processing sweeps during visual shifts.

*   **Syntax Structure:**
    ```jsx
    // File: 11_useMemo.jsx
    import { useState, useMemo } from 'react';

    const Calculation = ({ numbers }) => {
      const [filter, setFilter] = useState('');

      const total = useMemo(() => {
        return numbers.reduce((acc, current) => acc + current, 0);
      }, [numbers]);

      return <div>Total Sum: {total}</div>;
    };

    export default Calculation;
    ```

*   **Key Behavior:** Returns stored query structures directly, updating internally only when tracked list keys update values.

* **4. useTransition:** useTransition lets you update component state without blocking the main UI thread by marking updates as non-blocking transitions.

*   **Purpose:** Degrading execution priority updates on heavy layout re-allocations so vital navigational interactions are prioritized.

*   **Syntax Structure:**
    ```jsx
    // File: 12_useTransition.jsx
    import { useState, useTransition } from 'react';

    const TabContainer = () => {
      const [isPending, startTransition] = useTransition();
      const [tab, setTab] = useState('about');

      const selectTab = (nextTab) => {
        startTransition(() => {
          setTab(nextTab);
        });
      };

      return (
        <div>
          <button onClick={() => selectTab('posts')}>Posts</button>
          {isPending && <p>Loading next view items...</p>}
          <p>Current view context: {tab}</p>
        </div>
      );
    };

    export default TabContainer;
    ```

*   **Key Behavior:** Runs heavy data operations asynchronously in the background, exposing an active tracking boolean status label.

---

### Day 6: Utility & Store Hooks

* **1. useDebugValue:** useDebugValue lets you assign custom diagnostic labels to your custom hooks inside the React Developer Tools extension.

*   **Purpose:** Publishing custom diagnostic telemetry and logging strings into local component inspection panes.

*   **Syntax Structure:**
    ```jsx
    // File: 13_useDebugValue.jsx
    import { useState, useDebugValue } from 'react';

    export function useOnlineStatus() {
      const [isOnline, setIsOnline] = useState(true);

      useDebugValue(isOnline ? 'Online Status Active' : 'Offline State');

      return isOnline;
    }
    ```

*   **Key Behavior:** Injects inspector text metadata labels directly inside global system debugger inspection logs.

* **2. useId:** useId generates unique ID strings that are stable across both server-side generation renders and client-side application hydration loops.

*   **Purpose:** Assuring automated target binding parameters align smoothly across multi-platform client-server pipelines without compilation errors.

*   **Syntax Structure:**
    ```jsx
    // File: 14_useId.jsx
    import { useId } from 'react';

    const FormField = () => {
      const id = useId();

      return (
        <div>
          <label htmlFor={id + '-email'}>Email Address:</label>
          <input id={id + '-email'} type="email" />
        </div>
      );
    };

    export default FormField;
    ```

*   **Key Behavior:** Assigns stable string tokens unique to each instance location across rendering loops.

* **3. useSyncExternalStore:** useSyncExternalStore lets you subscribe functional components to third-party, external global data stores while remaining concurrent-read safe.

*   **Purpose:** Establishing precise sync links with non-React state stores to safely navigate multi-threaded interface checks.

*   **Syntax Structure:**
    ```jsx
    // File: 15_useSyncExternalStore.jsx
    import { useSyncExternalStore } from 'react';

    const networkStore = {
      subscribe(listener) {
        window.addEventListener('online', listener);
        window.addEventListener('offline', listener);
        return () => {
          window.removeEventListener('online', listener);
          window.removeEventListener('offline', listener);
        };
      },
      getSnapshot() {
        return navigator.onLine;
      }
    };

    const NetworkStatus = () => {
      const isOnline = useSyncExternalStore(networkStore.subscribe, networkStore.getSnapshot);
      return <h1>Status: {isOnline ? 'Connected' : 'Disconnected'}</h1>;
    };

    export default NetworkStatus;
    ```

*   **Key Behavior:** Sets up explicit store updates, pausing rendering loops instantly if external parameters shift midway through.

---

### Day 7: Custom Hook

* **1. Custom Hook Creation:** Custom Hooks isolate reusable component state management flow patterns into plain JavaScript functions that follow the 'use' naming rule constraint.

*   **Purpose:** Consolidating repetitive code architectures and functional lifecycles into dedicated reusable utilities.

*   **Syntax Structure:**
    ```jsx
    // File: 16_customHookFetchData.jsx
    import { useState, useEffect } from 'react';

    export function useFetchData(url) {
      const [data, setData] = useState(null);

      useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, [url]);

      return data;
    }
    ```

*   **Key Behavior:** Isolates internal hook chains, generating unique state storage registers for each calling component.
