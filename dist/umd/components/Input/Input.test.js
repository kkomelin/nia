(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@testing-library/react", "react", "./Input"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@testing-library/react"), require("react"), require("./Input"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.react, global.Input);
    global.undefined = mod.exports;
  }
})(this, function (_react, _react2, _Input) {
  "use strict";

  var _react3 = _interopRequireDefault(_react2);

  var _Input2 = _interopRequireDefault(_Input);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Input', () => {
    afterEach(_react.cleanup);
    it('displays the input', () => {
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Input2.default, null));
      expect(container.firstChild).toContainHTML('<input');
    });
    it('renders a placeholder', () => {
      const placeholder = 'A placeholder';
      const {
        getByPlaceholderText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Input2.default, {
        placeholder: placeholder
      }));
      const inputNode = getByPlaceholderText(placeholder);
      expect(inputNode).toBeInTheDocument();
    });
    it('has tabindex attribute', () => {
      const tabindex = 2;
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Input2.default, {
        tabIndex: tabindex
      }));
      expect(container.firstChild).toHaveAttribute('tabindex', `${tabindex}`);
    });
    it('renders a placeholder', () => {
      const placeholder = 'A placeholder';
      const {
        getByPlaceholderText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Input2.default, {
        placeholder: placeholder
      }));
      const inputNode = getByPlaceholderText(placeholder);
      expect(inputNode).toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=Input.test.js.map