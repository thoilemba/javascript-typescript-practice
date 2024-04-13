# var, let and const
In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have some key differences in terms of scope, hoisting, and reassignment.

1. **Scope:**
    - **var:** Variables declared with `var` are function-scoped. This means they are only visible within the function in which they are declared. If declared outside any function, they become global variables.
    - **let and const:** Variables declared with `let` and `const` are block-scoped. They are confined to the block, statement, or expression where they are declared.
2. **Hoisting:**
    - **var:** Variables declared with `var` are hoisted to the top of their scope during the compilation phase. This means you can use the variable before it's declared, but its value will be `undefined`.
    - **let and const:** Variables declared with `let` and `const` are also hoisted, but unlike `var`, they are not initialized (i.e., they are in the "temporal dead zone" and accessing them before the declaration will result in a `ReferenceError`).
3. **Redeclare and Reassignment:**
    - **var:** You can reassign and redeclare variables declared with `var`.
    - **let:** You can reassign variables declared with `let`, but you cannot redeclare them in the same scope.
    - **const:** Variables declared with `const` cannot be redeclared and reassigned. They must be assigned a value when declared, and this value cannot be changed.


References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const