(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['recursive/rmkArray'] = factory());
}(this, (function () { 'use strict';

/** @namespace rmkArray */

// import clear from './clear';
// import toSnakeCase from './toSnakeCase';
// import toCamelCase from './toCamelCase';
// import update from './update';
// import rename from './rename';
// import each from './each';

var rmkArrayActions = {};

var parseEntity = function parseEntity(entity, deep, config) {
  // isArray
  if (entity && entity.constructor === Array && (config.isRecursive || !config.isRecursive && deep == 0)) {
    // copy array
    entity = entity.slice(0);

    for (var j = 0, maxActions = config.actions.length; j < maxActions; j++) {
      //parse by action. copy object in utils eachKeys
      entity = config.actions[j](entity);
    }

    // deep parse array in deep
    if (config.isRecursive || !config.isRecursive && deep == 0) {
      var entitySize = entity.length;
      for (var i = 0; i < entitySize; i++) {
        entity[i] = parseEntity(entity[i], deep + 1, config);
      }
    }
  }
  return entity;
};

var rmkArrayParse = function rmkArrayParse(config) {
  return function (origin) {
    return parseEntity(origin, 0, config);
  };
};

var rmkArrayRecursiveActions = {};

Object.keys(rmkArrayActions).forEach(function (action) {

  rmkArrayRecursiveActions[action] = function (config) {
    return rmkArrayParse({
      actions: [rmkArrayActions[action](config)],
      isRecursive: true
    });
  };
});

var recursive = Object.assign(function () {
  for (var _len = arguments.length, actions = Array(_len), _key = 0; _key < _len; _key++) {
    actions[_key] = arguments[_key];
  }

  return rmkArrayParse({ actions: actions, isRecursive: true });
}, rmkArrayRecursiveActions);

return recursive;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm1rQXJyYXkuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwiLi4vc3JjL3V0aWxzL3BhcnNlLmpzIiwiLi4vc3JjL3JlY3Vyc2l2ZS9ybWtBcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQG5hbWVzcGFjZSBybWtBcnJheSAqL1xuXG4vLyBpbXBvcnQgY2xlYXIgZnJvbSAnLi9jbGVhcic7XG4vLyBpbXBvcnQgdG9TbmFrZUNhc2UgZnJvbSAnLi90b1NuYWtlQ2FzZSc7XG4vLyBpbXBvcnQgdG9DYW1lbENhc2UgZnJvbSAnLi90b0NhbWVsQ2FzZSc7XG4vLyBpbXBvcnQgdXBkYXRlIGZyb20gJy4vdXBkYXRlJztcbi8vIGltcG9ydCByZW5hbWUgZnJvbSAnLi9yZW5hbWUnO1xuLy8gaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoJztcblxuZXhwb3J0IGRlZmF1bHQge307XG4iLCJjb25zdCBwYXJzZUVudGl0eSA9IChlbnRpdHksIGRlZXAsIGNvbmZpZykgPT4ge1xuICAvLyBpc0FycmF5XG4gIGlmIChcbiAgICBlbnRpdHkgJiZcbiAgICBlbnRpdHkuY29uc3RydWN0b3IgPT09IEFycmF5ICYmXG4gICAgKGNvbmZpZy5pc1JlY3Vyc2l2ZSB8fCAoIWNvbmZpZy5pc1JlY3Vyc2l2ZSAmJiBkZWVwID09IDApKVxuICApIHtcbiAgICAvLyBjb3B5IGFycmF5XG4gICAgZW50aXR5ID0gZW50aXR5LnNsaWNlKDApO1xuXG4gICAgZm9yIChsZXQgaiA9IDAsIG1heEFjdGlvbnMgPSBjb25maWcuYWN0aW9ucy5sZW5ndGg7IGogPCBtYXhBY3Rpb25zOyBqKyspIHtcbiAgICAgIC8vcGFyc2UgYnkgYWN0aW9uLiBjb3B5IG9iamVjdCBpbiB1dGlscyBlYWNoS2V5c1xuICAgICAgZW50aXR5ID0gY29uZmlnLmFjdGlvbnNbal0oZW50aXR5KTtcbiAgICB9XG5cbiAgICAvLyBkZWVwIHBhcnNlIGFycmF5IGluIGRlZXBcbiAgICBpZiAoY29uZmlnLmlzUmVjdXJzaXZlIHx8ICghY29uZmlnLmlzUmVjdXJzaXZlICYmIGRlZXAgPT0gMCkpIHtcbiAgICAgIGxldCBlbnRpdHlTaXplID0gZW50aXR5Lmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXR5U2l6ZTsgaSsrKSB7XG4gICAgICAgIGVudGl0eVtpXSA9IHBhcnNlRW50aXR5KGVudGl0eVtpXSwgZGVlcCArIDEsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBlbnRpdHk7XG59O1xuXG5jb25zdCBybWtBcnJheVBhcnNlID0gY29uZmlnID0+IG9yaWdpbiA9PiBwYXJzZUVudGl0eShvcmlnaW4sIDAsIGNvbmZpZyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJta0FycmF5UGFyc2U7XG4iLCJpbXBvcnQgcm1rQXJyYXlBY3Rpb25zIGZyb20gJy4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgcm1rQXJyYXlQYXJzZSBmcm9tICcuLy4uL3V0aWxzL3BhcnNlJztcblxuY29uc3Qgcm1rQXJyYXlSZWN1cnNpdmVBY3Rpb25zID0ge307XG5cbk9iamVjdC5rZXlzKHJta0FycmF5QWN0aW9ucykuZm9yRWFjaChhY3Rpb24gPT4ge1xuXG4gIHJta0FycmF5UmVjdXJzaXZlQWN0aW9uc1thY3Rpb25dID0gY29uZmlnID0+XG4gICAgcm1rQXJyYXlQYXJzZSh7XG4gICAgICBhY3Rpb25zOiBbcm1rQXJyYXlBY3Rpb25zW2FjdGlvbl0oY29uZmlnKV0sXG4gICAgICBpc1JlY3Vyc2l2ZTogdHJ1ZSxcbiAgICB9KTtcbn0pO1xuXG5jb25zdCByZWN1cnNpdmUgPSBPYmplY3QuYXNzaWduKFxuICAoLi4uYWN0aW9ucykgPT4gcm1rQXJyYXlQYXJzZSh7IGFjdGlvbnMsIGlzUmVjdXJzaXZlOiB0cnVlIH0pLFxuICBybWtBcnJheVJlY3Vyc2l2ZUFjdGlvbnNcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHJlY3Vyc2l2ZTtcbiJdLCJuYW1lcyI6WyJwYXJzZUVudGl0eSIsImVudGl0eSIsImRlZXAiLCJjb25maWciLCJjb25zdHJ1Y3RvciIsIkFycmF5IiwiaXNSZWN1cnNpdmUiLCJzbGljZSIsImoiLCJtYXhBY3Rpb25zIiwiYWN0aW9ucyIsImxlbmd0aCIsImVudGl0eVNpemUiLCJpIiwicm1rQXJyYXlQYXJzZSIsIm9yaWdpbiIsInJta0FycmF5UmVjdXJzaXZlQWN0aW9ucyIsIk9iamVjdCIsImtleXMiLCJybWtBcnJheUFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwicmVjdXJzaXZlIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0Esc0JBQWUsRUFBZjs7QUNUQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRCxFQUFTQyxJQUFULEVBQWVDLE1BQWYsRUFBMEI7O01BRzFDRixVQUNBQSxPQUFPRyxXQUFQLEtBQXVCQyxLQUR2QixLQUVDRixPQUFPRyxXQUFQLElBQXVCLENBQUNILE9BQU9HLFdBQVIsSUFBdUJKLFFBQVEsQ0FGdkQsQ0FERixFQUlFOzthQUVTRCxPQUFPTSxLQUFQLENBQWEsQ0FBYixDQUFUOztTQUVLLElBQUlDLElBQUksQ0FBUixFQUFXQyxhQUFhTixPQUFPTyxPQUFQLENBQWVDLE1BQTVDLEVBQW9ESCxJQUFJQyxVQUF4RCxFQUFvRUQsR0FBcEUsRUFBeUU7O2VBRTlETCxPQUFPTyxPQUFQLENBQWVGLENBQWYsRUFBa0JQLE1BQWxCLENBQVQ7Ozs7UUFJRUUsT0FBT0csV0FBUCxJQUF1QixDQUFDSCxPQUFPRyxXQUFSLElBQXVCSixRQUFRLENBQTFELEVBQThEO1VBQ3hEVSxhQUFhWCxPQUFPVSxNQUF4QjtXQUNLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsVUFBcEIsRUFBZ0NDLEdBQWhDLEVBQXFDO2VBQzVCQSxDQUFQLElBQVliLFlBQVlDLE9BQU9ZLENBQVAsQ0FBWixFQUF1QlgsT0FBTyxDQUE5QixFQUFpQ0MsTUFBakMsQ0FBWjs7OztTQUlDRixNQUFQO0NBdkJGOztBQTBCQSxJQUFNYSxnQkFBZ0IsU0FBaEJBLGFBQWdCO1NBQVU7V0FBVWQsWUFBWWUsTUFBWixFQUFvQixDQUFwQixFQUF1QlosTUFBdkIsQ0FBVjtHQUFWO0NBQXRCOztBQ3ZCQSxJQUFNYSwyQkFBMkIsRUFBakM7O0FBRUFDLE9BQU9DLElBQVAsQ0FBWUMsZUFBWixFQUE2QkMsT0FBN0IsQ0FBcUMsa0JBQVU7OzJCQUVwQkMsTUFBekIsSUFBbUM7V0FDakNQLGNBQWM7ZUFDSCxDQUFDSyxnQkFBZ0JFLE1BQWhCLEVBQXdCbEIsTUFBeEIsQ0FBRCxDQURHO21CQUVDO0tBRmYsQ0FEaUM7R0FBbkM7Q0FGRjs7QUFTQSxJQUFNbUIsWUFBWUwsT0FBT00sTUFBUCxDQUNoQjtvQ0FBSWIsT0FBSjtXQUFBOzs7U0FBZ0JJLGNBQWMsRUFBRUosZ0JBQUYsRUFBV0osYUFBYSxJQUF4QixFQUFkLENBQWhCO0NBRGdCLEVBRWhCVSx3QkFGZ0IsQ0FBbEI7Ozs7Ozs7OyJ9
