# CHANGELOG

<!-- timeline -->
## 2.3.1 - June 22, 2017
<br>
* More fast
    * Parse object + 21%
    * Parse array + 137%
* Build
    * Make UMD modules
    * Build via rollup
    * Import action as module `rmk/${action}`
    * `dist/toCamelCase.js`
    * `dist/rmk.min.js`
* Ways of using
    * ```js
        import rmk from 'rmk';
        rmk.toSnakeCase()(data);
       ```
    * ```js
        import toSnakeCase from 'rmk/toSnakeCase';
        toSnakeCase()(data);
       ```

    * ```js
        import rmk from 'rmk';
        import toSnakeCase from 'rmk/toSnakeCase';
        rmk(toSnakeCase())(data);
      ```
    * ```html
        <script src="rmk/toSnakeCase.js"></script>
      ```
    * ```html
        <script src="rmk/dist/rmk.min.js"></script>
      ```
<!-- /timeline -->

<!-- timeline -->
## 2.2.1 - May 18, 2017
<br>
* Actions
    * Add each action for parse fields of objects
    * Add dependency each action to other actions.
* Flow
    * Review parse algorithm. Parse from 0 level to deep.
    * More fast: object + 11%, array of object +33%
<!-- /timeline -->

<!-- timeline -->
## 2.1.0 - May 18, 2017
<br>
* Actions
    * Deprecate `pick` action
    ```js
      rmk.pick(config)(data)
      rmk.shortcuts.pick(config)(data)
    ```
    * Deprecate `recursive` action 
    ```js 
        rmk.action.recursive([
            rmk.(update|rename|toSnakeCase|toCamelCase|clear)(data),
            ...actions(data)
        ], deep = 8)(data)` 
    ```
    * Refactor and greatly increase perfomance ~ +10%

* Shortcuts
   * Deprecate use shortcuts actions as:
    ```js
      rmk.shortcuts.(update|rename|toSnakeCase|toCamelCase|clear)(data)
    ```
   * Add support use shortcuts as single action:
   ```js 
       rmk.(update|rename|toSnakeCase|toCamelCase|clear)(data)
   ```
   * Add support shortcut as recursive action:
    ```js 
        rmk.recursive.(update|rename|toSnakeCase|toCamelCase|clear)(data)
    ```
* Recursive flow
  * Add support recursive flow: 
  ```js
    rmk.recursive(
      rmk.(update|rename|toSnakeCase|toCamelCase|clear)(data),
      ...actions(data)
    )
  ```
  * Remove deep limit. Use a recursive flow with care.

* Single flow
    * Add support parse deep array [[[...]]]
 
* Docs
    * Update docs
    * Add config specific for all actions
<!-- /timeline -->
